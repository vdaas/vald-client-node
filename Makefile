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

VALD_DIR    = vald-origin
VALD_SHA    = VALD_SHA
VALD_CLIENT_NODE_VERSION = VALD_CLIENT_NODE_VERSION
VALD_CHECKOUT_REF ?= main

PWD    := $(eval PWD := $(shell pwd))$(PWD)

PROTO_ROOT  = $(VALD_DIR)/apis/proto
NODE_VERSION := $(eval NODE_VERSION := $(shell cat NODE_VERSION))$(NODE_VERSION)
NODE_ROOT   = src
NPM_BIN = $(shell npm prefix)

BUF_CONFIGS = \
	$(PROTO_ROOT)/buf.yaml \
	$(PROTO_ROOT)/buf.lock

SHADOW_ROOT = vald
SHADOW_PROTO_ROOT = $(SHADOW_ROOT)/$(SHADOW_ROOT)

TEST_DATASET_PATH = tests/wordvecs1000.json

PROTOS = \
	v1/agent/core/agent.proto \
	v1/vald/filter.proto \
	v1/vald/insert.proto \
	v1/vald/object.proto \
	v1/vald/index.proto  \
	v1/vald/remove.proto \
	v1/vald/search.proto \
	v1/vald/update.proto \
	v1/vald/upsert.proto \
	v1/payload/payload.proto
PROTOS     := $(PROTOS:%=$(PROTO_ROOT)/%)
SHADOWS     = $(PROTOS:$(PROTO_ROOT)/%.proto=$(SHADOW_PROTO_ROOT)/%.proto)
NODESOURCES = $(PROTOS:$(PROTO_ROOT)/%.proto=$(NODE_ROOT)/$(SHADOW_ROOT)/%_grpc_pb.js)
NODE_IDXDIR = $(dir $(NODESOURCES))
NODE_IDXJS = $(NODE_IDXDIR:%=%index.js)
NODE_IDXDTS = $(NODE_IDXDIR:%=%index.d.ts)

PROTO_PATHS = \
	$(PWD) \
	$(PWD)/$(VALD_DIR) \
	$(PWD)/$(PROTO_ROOT)

BUF_GEN_PATH = $(NPM_BIN)/node_modules/@bufbuild/buf/bin/buf

MAKELISTS   = Makefile

red    = /bin/echo -e "\x1b[31m\#\# $1\x1b[0m"
green  = /bin/echo -e "\x1b[32m\#\# $1\x1b[0m"
yellow = /bin/echo -e "\x1b[33m\#\# $1\x1b[0m"
blue   = /bin/echo -e "\x1b[34m\#\# $1\x1b[0m"
pink   = /bin/echo -e "\x1b[35m\#\# $1\x1b[0m"
cyan   = /bin/echo -e "\x1b[36m\#\# $1\x1b[0m"

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
	rm -rf index.js index.d.ts
	rm -rf $(NODE_ROOT)
	rm -rf $(VALD_DIR)
	rm -rf $(SHADOW_ROOT)
	rm -rf node_modules

.PHONY: proto
## build proto
proto: \
	$(NODESOURCES) \
	$(NODE_IDXJS) \
	$(NODE_IDXDTS) \
	index.js \
	index.d.ts

$(PROTOS): $(VALD_DIR)
$(SHADOWS): $(PROTOS)
$(SHADOW_PROTO_ROOT)/%.proto: $(PROTO_ROOT)/%.proto
	mkdir -p $(dir $@)
	cp $< $@
	sed -i -e 's:^import "v1:import "$(SHADOW_ROOT)/v1:' $@

$(NODE_ROOT):
	mkdir -p $@

$(NODE_IDXDIR): \
	$(NODESOURCES)
$(NODE_IDXJS): \
	$(NODE_IDXDIR) \
	$(NODESOURCES)
$(NODE_IDXDTS): \
	$(NODE_IDXDIR) \
	$(NODESOURCES)
$(NODE_ROOT)/$(SHADOW_ROOT)/%/index.js: $(NODE_ROOT)/$(SHADOW_ROOT)/%
	rm -rf $@
	for v in $(filter $</%.js,$(NODESOURCES)); \
	    do \
	    name=`echo "$$v" | \
		sed -e "s:$</::" | \
		sed -e "s:_grpc_pb.js::"`; \
	    echo "module.exports.$${name} = require(\"./$${name}_pb\");" >> $@; \
	    if [ ! "$${name}" = "payload" ]; then \
		echo "module.exports.$${name}_grpc = require(\"./$${name}_pb.grpc-client\");" >> $@; \
		fi; \
	    done
$(NODE_ROOT)/$(SHADOW_ROOT)/%/index.d.ts: $(NODE_ROOT)/$(SHADOW_ROOT)/%
	rm -rf $@
	ss=""; \
	for v in $(filter $</%.js,$(NODESOURCES)); \
	    do \
	    name=`echo "$$v" | \
		sed -e "s:$</::" | \
		sed -e "s:_grpc_pb.js::"`; \
	    echo "import $${name} = require(\"./$${name}_pb\");" >> $@; \
	    if [ ! "$${name}" = "payload" ]; then \
		echo "import $${name}_grpc = require(\"./$${name}_pb.grpc-client\");" >> $@; \
	    fi; \
	    ss="$$ss $$name"; \
	    done; \
	echo "declare const _default: {" >> $@; \
	for s in $$ss; \
	    do \
	    echo "    $$s: typeof $$s," >> $@; \
	    if [ ! "$${s}" = "payload" ]; then \
		echo "    $${s}_grpc: typeof $${s}_grpc," >> $@; \
	    fi; \
	    done
	echo "};" >> $@
	echo "export = _default;" >> $@

index.js: $(NODE_IDXJS)
	rm -rf $@
	for i in $$(find $(NODE_ROOT)/$(SHADOW_ROOT) -type f -name "index.js"); \
	    do \
	    d=`echo $$i | \
		sed -e "s:/index.js::"`; \
	    s=`echo $$d | \
		sed -e "s:$(NODE_ROOT)/$(SHADOW_ROOT)/::" | \
		sed -e "s:/:_:g"`; \
	    echo "module.exports.$$s = require(\"./$$d\");" >> $@; \
	    done

index.d.ts: $(NODE_IDXDTS)
	rm -rf $@
	ss=""; \
	for i in $$(find $(NODE_ROOT)/$(SHADOW_ROOT) -type f -name "index.js"); \
	    do \
	    d=`echo $$i | \
		sed -e "s:/index.js::"`; \
	    s=`echo $$d | \
		sed -e "s:$(NODE_ROOT)/$(SHADOW_ROOT)/::" | \
		sed -e "s:/:_:g"`; \
	    echo "import $$s = require(\"./$$d\");" >> $@; \
	    ss="$$ss $$s"; \
	    done; \
	echo "declare const _default: {" >> $@; \
	for s in $$ss; \
	    do \
	    echo "    $$s: typeof $$s," >> $@; \
	    done
	echo "};" >> $@
	echo "export = _default;" >> $@

$(NODESOURCES): \
	$(BUF_GEN_PATH) \
	$(NODE_ROOT) \
	$(SHADOWS)
$(NODE_ROOT)/$(SHADOW_ROOT)/%_grpc_pb.js: $(SHADOW_PROTO_ROOT)/%.proto
	@$(call green, "generating node files...")
	cp -f $(BUF_CONFIGS) $(SHADOW_ROOT)
	$(BUF_GEN_PATH) generate --include-imports

$(VALD_DIR):
	git clone https://$(VALDREPO) $(VALD_DIR)

.PHONY: vald/checkout
## checkout vald repository
vald/checkout: $(VALD_DIR)
	cd $(VALD_DIR) && git checkout $(VALD_CHECKOUT_REF)

.PHONY: vald/origin/sha/print
## print origin VALD_SHA value
vald/origin/sha/print: $(VALD_DIR)
	@cd $(VALD_DIR) && git rev-parse HEAD | tr -d '\n'

.PHONY: vald/sha/print
## print VALD_SHA value
vald/sha/print:
	@cat $(VALD_SHA)

.PHONY: vald/sha/update
## update VALD_SHA value
vald/sha/update: $(VALD_DIR)
	(cd $(VALD_DIR); git rev-parse HEAD | tr -d '\n' > ../$(VALD_SHA))

.PHONY: vald/client/version/print
## print VALD_CLIENT_NODE_VERSION value
vald/client/version/print:
	@cat $(VALD_CLIENT_NODE_VERSION)

.PHONY: vald/client/version/update
## update VALD_CLIENT_NODE_VERSION value
vald/client/version/update: $(VALD_DIR)
	(vald_version=`cat $(VALD_DIR)/versions/VALD_VERSION | sed -e 's/^v//'`; \
	    echo "VALD_VERSION: $${vald_version}"; \
	    echo "$${vald_version}" > VALD_CLIENT_NODE_VERSION)
	sed -i -e "s/\"version\": \".*\",\$$/\"version\": \"`cat VALD_CLIENT_NODE_VERSION`\",/" package.json

.PHONY: test
## Execute test for CI environment
test: $(TEST_DATASET_PATH)
	npm run test

	# verify example codes
	npm pack
	npm install -g ts-node
	(version=$(shell $(MAKE) -s vald/client/version/print); \
		echo "vald-client-node version: $${version}"; \
		cd example-ts && npm install ../vald-client-node-$${version}.tgz -s -f; \
		DIM=300 ts-node example.ts; \
		cd ../example && npm install ../vald-client-node-$${version}.tgz -s -f; \
		DIM=300 node example.js)

$(TEST_DATASET_PATH):
	curl -L https://raw.githubusercontent.com/rinx/word2vecjson/master/data/wordvecs1000.json -o $(TEST_DATASET_PATH)

.PHONY: ci/deps/install
## install deps for CI environment
ci/deps/install:
	npm install

.PHONY: ci/deps/update
## update deps for CI environment
ci/deps/update: sync/k3d/mk
	npm update

.PHONY: ci/package/prepare
## prepare for publich
ci/package/prepare: \
	ci/deps/install

.PHONY: ci/package/publish
## publich packages
ci/package/publish:
	npm publish

.PHONY: proto/deps/install
## install proto deps
proto/deps/install: \
	$(BUF_GEN_PATH)

$(BUF_GEN_PATH):
	npm install --save-dev @bufbuild/buf @bufbuild/protobuf

.PHONY: version/node
## Print Node version
version/node:
	@echo $(NODE_VERSION)

K3D_MAKEFILE_URL=https://raw.githubusercontent.com/vdaas/vald/main/Makefile.d/k3d.mk
K3D_MAKEFILE=Makefile.d/k3d.mk

Makefile.d:
	mkdir -p Makefile.d

sync/k3d/mk: Makefile.d
	rm -rf $(K3D_MAKEFILE)
	curl -fsSLo $(K3D_MAKEFILE) $(K3D_MAKEFILE_URL)

include $(K3D_MAKEFILE)
