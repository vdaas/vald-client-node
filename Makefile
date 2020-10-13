#
# Copyright (C) 2019-2020 Vdaas.org Vald team ( kpango, rinx, kmrmt )
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#    https://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
#

REPO       ?= vdaas
NAME        = vald
VALDREPO    = github.com/$(REPO)/$(NAME)
LANGUAGE    = node
PKGNAME     = $(NAME)-client-$(LANGUAGE)
PKGREPO     = github.com/$(REPO)/$(PKGNAME)

VALD_DIR    = vald
VALD_SHA    = VALD_SHA
VALD_CLIENT_NODE_VERSION = VALD_CLIENT_NODE_VERSION

PWD    := $(eval PWD := $(shell pwd))$(PWD)
GOPATH := $(eval GOPATH := $(shell go env GOPATH))$(GOPATH)

PROTO_ROOT  = $(VALD_DIR)/apis/proto
NODE_ROOT   = src

PROTOS = \
	gateway/vald/vald.proto \
	agent/core/agent.proto \
	payload/payload.proto \
	v1/agent/core/agent.proto \
	v1/gateway/vald/vald.proto \
	v1/vald/filter.proto \
	v1/vald/insert.proto \
	v1/vald/object.proto \
	v1/vald/remove.proto \
	v1/vald/search.proto \
	v1/vald/update.proto \
	v1/vald/upsert.proto \
	v1/payload/payload.proto

PROTOS     := $(PROTOS:%=$(PROTO_ROOT)/%)
NODESOURCES = $(PROTOS:$(PROTO_ROOT)/%.proto=$(NODE_ROOT)/%_grpc_pb.js)

PROTO_PATHS = \
	$(PWD) \
	$(PWD)/$(VALD_DIR) \
	$(GOPATH)/src \
	$(GOPATH)/src/github.com/googleapis/googleapis

PROTOC_GEN_TS_PATH = ./node_modules/ts-protoc-gen/bin/protoc-gen-ts
GRPC_TOOLS_PROTOC_PLUGIN_PATH = ./node_modules/grpc-tools/bin/protoc_plugin.js

MAKELISTS   = Makefile

red    = /bin/echo -e "\x1b[31m\#\# $1\x1b[0m"
green  = /bin/echo -e "\x1b[32m\#\# $1\x1b[0m"
yellow = /bin/echo -e "\x1b[33m\#\# $1\x1b[0m"
blue   = /bin/echo -e "\x1b[34m\#\# $1\x1b[0m"
pink   = /bin/echo -e "\x1b[35m\#\# $1\x1b[0m"
cyan   = /bin/echo -e "\x1b[36m\#\# $1\x1b[0m"

define go-get
	GO111MODULE=on go get -u $1
endef

define go-get-no-mod
	GO111MODULE=off go get -u $1
endef

define mkdir
	mkdir -p $1
endef

.PHONY: all
## execute clean and proto
all: clean proto

.PHONY: help
## print all available commands
help:
	@awk '/^[a-zA-Z_0-9%:\\\/-]+:/ { \
	  helpMessage = match(lastLine, /^## (.*)/); \
	  if (helpMessage) { \
	    helpCommand = $$1; \
	    helpMessage = substr(lastLine, RSTART + 3, RLENGTH); \
      gsub("\\\\", "", helpCommand); \
      gsub(":+$$", "", helpCommand); \
	    printf "  \x1b[32;01m%-35s\x1b[0m %s\n", helpCommand, helpMessage; \
	  } \
	} \
	{ lastLine = $$0 }' $(MAKELISTS) | sort -u
	@printf "\n"

.PHONY: clean
## clean
clean:
	rm -rf $(NODE_ROOT)
	rm -rf $(VALD_DIR)
	rm -rf node_modules

.PHONY: proto
## build proto
proto: $(NODESOURCES)

$(NODE_ROOT):
	$(call mkdir, $@)
	$(call rm, -rf, $@/*)

$(NODESOURCES): vald proto/deps $(NODE_ROOT) $(PROTOC_GEN_TS_PATH) $(GRPC_TOOLS_PROTOC_PLUGIN_PATH)
	@$(call green, "generating node files...")
	protoc \
		$(PROTO_PATHS:%=-I %) \
		--plugin=protoc-gen-ts=$(PROTOC_GEN_TS_PATH) \
		--plugin=protoc-gen-grpc=$(GRPC_TOOLS_PROTOC_PLUGIN_PATH) \
		--js_out="import_style=commonjs,binary:${NODE_ROOT}" \
		--ts_out="service=grpc-node:${NODE_ROOT}" \
		--grpc_out="${NODE_ROOT}" \
		$(patsubst $(NODE_ROOT)/%_grpc_pb.js,$(PROTO_ROOT)/%.proto,$@)

$(VALD_DIR):
	git clone --depth 1 https://$(VALDREPO) $(VALD_DIR)

.PHONY: vald/sha/print
## print VALD_SHA value
vald/sha/print:
	@cat $(VALD_SHA)

.PHONY: vald/sha/update
## update VALD_SHA value
vald/sha/update: vald
	(cd vald; git rev-parse HEAD > ../$(VALD_SHA))

.PHONY: vald/client/node/version/print
## print VALD_CLIENT_NODE_VERSION value
vald/client/node/version/print:
	@cat $(VALD_CLIENT_NODE_VERSION)

.PHONY: vald/client/node/version/update
## update VALD_CLIENT_NODE_VERSION value
vald/client/node/version/update: vald
	(vald_version=`cat vald/versions/VALD_VERSION | sed -e 's/^v//'`; \
	    echo "VALD_VERSION: $${vald_version}"; \
	    echo "$${vald_version}" > VALD_CLIENT_NODE_VERSION)
	sed -i -e "s/\"version\": \".*\",\$$/\"version\": \"`cat VALD_CLIENT_NODE_VERSION`\",/" package.json

.PHONY: npm/deps
npm/deps: \
	$(PROTOC_GEN_TS_PATH) \
	$(GRPC_TOOLS_PROTOC_PLUGIN_PATH)

$(PROTOC_GEN_TS_PATH):
	npm install --save-dev ts-protoc-gen

$(GRPC_TOOLS_PROTOC_PLUGIN_PATH):
	npm install --save-dev grpc-tools

.PHONY: proto/deps
## install proto deps
proto/deps: \
	$(GOPATH)/src/github.com/googleapis/googleapis \
	$(GOPATH)/src/github.com/envoyproxy/protoc-gen-validate

$(GOPATH)/src/github.com/googleapis/googleapis:
	git clone \
		--depth 1 \
		https://github.com/googleapis/googleapis \
		$(GOPATH)/src/github.com/googleapis/googleapis

$(GOPATH)/src/github.com/envoyproxy/protoc-gen-validate:
	git clone \
		--depth 1 \
		https://github.com/envoyproxy/protoc-gen-validate \
		$(GOPATH)/src/github.com/envoyproxy/protoc-gen-validate
