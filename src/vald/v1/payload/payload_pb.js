// source: vald/v1/payload/payload.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = (function() {
  if (this) { return this; }
  if (typeof window !== 'undefined') { return window; }
  if (typeof global !== 'undefined') { return global; }
  if (typeof self !== 'undefined') { return self; }
  return Function('return this')();
}.call(null));

var validate_validate_pb = require('../../../validate/validate_pb.js');
goog.object.extend(proto, validate_validate_pb);
var google_rpc_status_pb = require('../../../google/rpc/status_pb.js');
goog.object.extend(proto, google_rpc_status_pb);
goog.exportSymbol('proto.payload.v1.Control', null, global);
goog.exportSymbol('proto.payload.v1.Control.CreateIndexRequest', null, global);
goog.exportSymbol('proto.payload.v1.Discoverer', null, global);
goog.exportSymbol('proto.payload.v1.Discoverer.Request', null, global);
goog.exportSymbol('proto.payload.v1.Empty', null, global);
goog.exportSymbol('proto.payload.v1.Filter', null, global);
goog.exportSymbol('proto.payload.v1.Filter.Config', null, global);
goog.exportSymbol('proto.payload.v1.Filter.Target', null, global);
goog.exportSymbol('proto.payload.v1.Info', null, global);
goog.exportSymbol('proto.payload.v1.Info.CPU', null, global);
goog.exportSymbol('proto.payload.v1.Info.IPs', null, global);
goog.exportSymbol('proto.payload.v1.Info.Index', null, global);
goog.exportSymbol('proto.payload.v1.Info.Index.Count', null, global);
goog.exportSymbol('proto.payload.v1.Info.Index.UUID', null, global);
goog.exportSymbol('proto.payload.v1.Info.Index.UUID.Committed', null, global);
goog.exportSymbol('proto.payload.v1.Info.Index.UUID.Uncommitted', null, global);
goog.exportSymbol('proto.payload.v1.Info.Memory', null, global);
goog.exportSymbol('proto.payload.v1.Info.Node', null, global);
goog.exportSymbol('proto.payload.v1.Info.Nodes', null, global);
goog.exportSymbol('proto.payload.v1.Info.Pod', null, global);
goog.exportSymbol('proto.payload.v1.Info.Pods', null, global);
goog.exportSymbol('proto.payload.v1.Insert', null, global);
goog.exportSymbol('proto.payload.v1.Insert.Config', null, global);
goog.exportSymbol('proto.payload.v1.Insert.MultiObjectRequest', null, global);
goog.exportSymbol('proto.payload.v1.Insert.MultiRequest', null, global);
goog.exportSymbol('proto.payload.v1.Insert.ObjectRequest', null, global);
goog.exportSymbol('proto.payload.v1.Insert.Request', null, global);
goog.exportSymbol('proto.payload.v1.Object', null, global);
goog.exportSymbol('proto.payload.v1.Object.Blob', null, global);
goog.exportSymbol('proto.payload.v1.Object.Distance', null, global);
goog.exportSymbol('proto.payload.v1.Object.ID', null, global);
goog.exportSymbol('proto.payload.v1.Object.IDs', null, global);
goog.exportSymbol('proto.payload.v1.Object.Location', null, global);
goog.exportSymbol('proto.payload.v1.Object.Locations', null, global);
goog.exportSymbol('proto.payload.v1.Object.ReshapeVector', null, global);
goog.exportSymbol('proto.payload.v1.Object.StreamBlob', null, global);
goog.exportSymbol('proto.payload.v1.Object.StreamBlob.PayloadCase', null, global);
goog.exportSymbol('proto.payload.v1.Object.StreamDistance', null, global);
goog.exportSymbol('proto.payload.v1.Object.StreamDistance.PayloadCase', null, global);
goog.exportSymbol('proto.payload.v1.Object.StreamLocation', null, global);
goog.exportSymbol('proto.payload.v1.Object.StreamLocation.PayloadCase', null, global);
goog.exportSymbol('proto.payload.v1.Object.StreamVector', null, global);
goog.exportSymbol('proto.payload.v1.Object.StreamVector.PayloadCase', null, global);
goog.exportSymbol('proto.payload.v1.Object.Vector', null, global);
goog.exportSymbol('proto.payload.v1.Object.VectorRequest', null, global);
goog.exportSymbol('proto.payload.v1.Object.Vectors', null, global);
goog.exportSymbol('proto.payload.v1.Remove', null, global);
goog.exportSymbol('proto.payload.v1.Remove.Config', null, global);
goog.exportSymbol('proto.payload.v1.Remove.MultiRequest', null, global);
goog.exportSymbol('proto.payload.v1.Remove.Request', null, global);
goog.exportSymbol('proto.payload.v1.Search', null, global);
goog.exportSymbol('proto.payload.v1.Search.AggregationAlgorithm', null, global);
goog.exportSymbol('proto.payload.v1.Search.Config', null, global);
goog.exportSymbol('proto.payload.v1.Search.IDRequest', null, global);
goog.exportSymbol('proto.payload.v1.Search.MultiIDRequest', null, global);
goog.exportSymbol('proto.payload.v1.Search.MultiObjectRequest', null, global);
goog.exportSymbol('proto.payload.v1.Search.MultiRequest', null, global);
goog.exportSymbol('proto.payload.v1.Search.ObjectRequest', null, global);
goog.exportSymbol('proto.payload.v1.Search.Request', null, global);
goog.exportSymbol('proto.payload.v1.Search.Response', null, global);
goog.exportSymbol('proto.payload.v1.Search.Responses', null, global);
goog.exportSymbol('proto.payload.v1.Search.StreamResponse', null, global);
goog.exportSymbol('proto.payload.v1.Search.StreamResponse.PayloadCase', null, global);
goog.exportSymbol('proto.payload.v1.Update', null, global);
goog.exportSymbol('proto.payload.v1.Update.Config', null, global);
goog.exportSymbol('proto.payload.v1.Update.MultiObjectRequest', null, global);
goog.exportSymbol('proto.payload.v1.Update.MultiRequest', null, global);
goog.exportSymbol('proto.payload.v1.Update.ObjectRequest', null, global);
goog.exportSymbol('proto.payload.v1.Update.Request', null, global);
goog.exportSymbol('proto.payload.v1.Upsert', null, global);
goog.exportSymbol('proto.payload.v1.Upsert.Config', null, global);
goog.exportSymbol('proto.payload.v1.Upsert.MultiObjectRequest', null, global);
goog.exportSymbol('proto.payload.v1.Upsert.MultiRequest', null, global);
goog.exportSymbol('proto.payload.v1.Upsert.ObjectRequest', null, global);
goog.exportSymbol('proto.payload.v1.Upsert.Request', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payload.v1.Search = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payload.v1.Search, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payload.v1.Search.displayName = 'proto.payload.v1.Search';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payload.v1.Search.Request = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.payload.v1.Search.Request.repeatedFields_, null);
};
goog.inherits(proto.payload.v1.Search.Request, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payload.v1.Search.Request.displayName = 'proto.payload.v1.Search.Request';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payload.v1.Search.MultiRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.payload.v1.Search.MultiRequest.repeatedFields_, null);
};
goog.inherits(proto.payload.v1.Search.MultiRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payload.v1.Search.MultiRequest.displayName = 'proto.payload.v1.Search.MultiRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payload.v1.Search.IDRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payload.v1.Search.IDRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payload.v1.Search.IDRequest.displayName = 'proto.payload.v1.Search.IDRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payload.v1.Search.MultiIDRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.payload.v1.Search.MultiIDRequest.repeatedFields_, null);
};
goog.inherits(proto.payload.v1.Search.MultiIDRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payload.v1.Search.MultiIDRequest.displayName = 'proto.payload.v1.Search.MultiIDRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payload.v1.Search.ObjectRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payload.v1.Search.ObjectRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payload.v1.Search.ObjectRequest.displayName = 'proto.payload.v1.Search.ObjectRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payload.v1.Search.MultiObjectRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.payload.v1.Search.MultiObjectRequest.repeatedFields_, null);
};
goog.inherits(proto.payload.v1.Search.MultiObjectRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payload.v1.Search.MultiObjectRequest.displayName = 'proto.payload.v1.Search.MultiObjectRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payload.v1.Search.Config = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payload.v1.Search.Config, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payload.v1.Search.Config.displayName = 'proto.payload.v1.Search.Config';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payload.v1.Search.Response = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.payload.v1.Search.Response.repeatedFields_, null);
};
goog.inherits(proto.payload.v1.Search.Response, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payload.v1.Search.Response.displayName = 'proto.payload.v1.Search.Response';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payload.v1.Search.Responses = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.payload.v1.Search.Responses.repeatedFields_, null);
};
goog.inherits(proto.payload.v1.Search.Responses, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payload.v1.Search.Responses.displayName = 'proto.payload.v1.Search.Responses';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payload.v1.Search.StreamResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.payload.v1.Search.StreamResponse.oneofGroups_);
};
goog.inherits(proto.payload.v1.Search.StreamResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payload.v1.Search.StreamResponse.displayName = 'proto.payload.v1.Search.StreamResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payload.v1.Filter = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payload.v1.Filter, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payload.v1.Filter.displayName = 'proto.payload.v1.Filter';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payload.v1.Filter.Target = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payload.v1.Filter.Target, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payload.v1.Filter.Target.displayName = 'proto.payload.v1.Filter.Target';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payload.v1.Filter.Config = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.payload.v1.Filter.Config.repeatedFields_, null);
};
goog.inherits(proto.payload.v1.Filter.Config, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payload.v1.Filter.Config.displayName = 'proto.payload.v1.Filter.Config';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payload.v1.Insert = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payload.v1.Insert, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payload.v1.Insert.displayName = 'proto.payload.v1.Insert';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payload.v1.Insert.Request = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payload.v1.Insert.Request, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payload.v1.Insert.Request.displayName = 'proto.payload.v1.Insert.Request';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payload.v1.Insert.MultiRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.payload.v1.Insert.MultiRequest.repeatedFields_, null);
};
goog.inherits(proto.payload.v1.Insert.MultiRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payload.v1.Insert.MultiRequest.displayName = 'proto.payload.v1.Insert.MultiRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payload.v1.Insert.ObjectRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payload.v1.Insert.ObjectRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payload.v1.Insert.ObjectRequest.displayName = 'proto.payload.v1.Insert.ObjectRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payload.v1.Insert.MultiObjectRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.payload.v1.Insert.MultiObjectRequest.repeatedFields_, null);
};
goog.inherits(proto.payload.v1.Insert.MultiObjectRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payload.v1.Insert.MultiObjectRequest.displayName = 'proto.payload.v1.Insert.MultiObjectRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payload.v1.Insert.Config = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payload.v1.Insert.Config, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payload.v1.Insert.Config.displayName = 'proto.payload.v1.Insert.Config';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payload.v1.Update = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payload.v1.Update, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payload.v1.Update.displayName = 'proto.payload.v1.Update';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payload.v1.Update.Request = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payload.v1.Update.Request, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payload.v1.Update.Request.displayName = 'proto.payload.v1.Update.Request';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payload.v1.Update.MultiRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.payload.v1.Update.MultiRequest.repeatedFields_, null);
};
goog.inherits(proto.payload.v1.Update.MultiRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payload.v1.Update.MultiRequest.displayName = 'proto.payload.v1.Update.MultiRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payload.v1.Update.ObjectRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payload.v1.Update.ObjectRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payload.v1.Update.ObjectRequest.displayName = 'proto.payload.v1.Update.ObjectRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payload.v1.Update.MultiObjectRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.payload.v1.Update.MultiObjectRequest.repeatedFields_, null);
};
goog.inherits(proto.payload.v1.Update.MultiObjectRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payload.v1.Update.MultiObjectRequest.displayName = 'proto.payload.v1.Update.MultiObjectRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payload.v1.Update.Config = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payload.v1.Update.Config, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payload.v1.Update.Config.displayName = 'proto.payload.v1.Update.Config';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payload.v1.Upsert = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payload.v1.Upsert, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payload.v1.Upsert.displayName = 'proto.payload.v1.Upsert';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payload.v1.Upsert.Request = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payload.v1.Upsert.Request, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payload.v1.Upsert.Request.displayName = 'proto.payload.v1.Upsert.Request';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payload.v1.Upsert.MultiRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.payload.v1.Upsert.MultiRequest.repeatedFields_, null);
};
goog.inherits(proto.payload.v1.Upsert.MultiRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payload.v1.Upsert.MultiRequest.displayName = 'proto.payload.v1.Upsert.MultiRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payload.v1.Upsert.ObjectRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payload.v1.Upsert.ObjectRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payload.v1.Upsert.ObjectRequest.displayName = 'proto.payload.v1.Upsert.ObjectRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payload.v1.Upsert.MultiObjectRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.payload.v1.Upsert.MultiObjectRequest.repeatedFields_, null);
};
goog.inherits(proto.payload.v1.Upsert.MultiObjectRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payload.v1.Upsert.MultiObjectRequest.displayName = 'proto.payload.v1.Upsert.MultiObjectRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payload.v1.Upsert.Config = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payload.v1.Upsert.Config, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payload.v1.Upsert.Config.displayName = 'proto.payload.v1.Upsert.Config';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payload.v1.Remove = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payload.v1.Remove, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payload.v1.Remove.displayName = 'proto.payload.v1.Remove';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payload.v1.Remove.Request = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payload.v1.Remove.Request, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payload.v1.Remove.Request.displayName = 'proto.payload.v1.Remove.Request';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payload.v1.Remove.MultiRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.payload.v1.Remove.MultiRequest.repeatedFields_, null);
};
goog.inherits(proto.payload.v1.Remove.MultiRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payload.v1.Remove.MultiRequest.displayName = 'proto.payload.v1.Remove.MultiRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payload.v1.Remove.Config = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payload.v1.Remove.Config, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payload.v1.Remove.Config.displayName = 'proto.payload.v1.Remove.Config';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payload.v1.Object = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payload.v1.Object, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payload.v1.Object.displayName = 'proto.payload.v1.Object';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payload.v1.Object.VectorRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payload.v1.Object.VectorRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payload.v1.Object.VectorRequest.displayName = 'proto.payload.v1.Object.VectorRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payload.v1.Object.Distance = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payload.v1.Object.Distance, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payload.v1.Object.Distance.displayName = 'proto.payload.v1.Object.Distance';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payload.v1.Object.StreamDistance = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.payload.v1.Object.StreamDistance.oneofGroups_);
};
goog.inherits(proto.payload.v1.Object.StreamDistance, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payload.v1.Object.StreamDistance.displayName = 'proto.payload.v1.Object.StreamDistance';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payload.v1.Object.ID = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payload.v1.Object.ID, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payload.v1.Object.ID.displayName = 'proto.payload.v1.Object.ID';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payload.v1.Object.IDs = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.payload.v1.Object.IDs.repeatedFields_, null);
};
goog.inherits(proto.payload.v1.Object.IDs, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payload.v1.Object.IDs.displayName = 'proto.payload.v1.Object.IDs';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payload.v1.Object.Vector = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.payload.v1.Object.Vector.repeatedFields_, null);
};
goog.inherits(proto.payload.v1.Object.Vector, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payload.v1.Object.Vector.displayName = 'proto.payload.v1.Object.Vector';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payload.v1.Object.Vectors = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.payload.v1.Object.Vectors.repeatedFields_, null);
};
goog.inherits(proto.payload.v1.Object.Vectors, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payload.v1.Object.Vectors.displayName = 'proto.payload.v1.Object.Vectors';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payload.v1.Object.StreamVector = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.payload.v1.Object.StreamVector.oneofGroups_);
};
goog.inherits(proto.payload.v1.Object.StreamVector, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payload.v1.Object.StreamVector.displayName = 'proto.payload.v1.Object.StreamVector';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payload.v1.Object.ReshapeVector = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.payload.v1.Object.ReshapeVector.repeatedFields_, null);
};
goog.inherits(proto.payload.v1.Object.ReshapeVector, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payload.v1.Object.ReshapeVector.displayName = 'proto.payload.v1.Object.ReshapeVector';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payload.v1.Object.Blob = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payload.v1.Object.Blob, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payload.v1.Object.Blob.displayName = 'proto.payload.v1.Object.Blob';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payload.v1.Object.StreamBlob = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.payload.v1.Object.StreamBlob.oneofGroups_);
};
goog.inherits(proto.payload.v1.Object.StreamBlob, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payload.v1.Object.StreamBlob.displayName = 'proto.payload.v1.Object.StreamBlob';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payload.v1.Object.Location = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.payload.v1.Object.Location.repeatedFields_, null);
};
goog.inherits(proto.payload.v1.Object.Location, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payload.v1.Object.Location.displayName = 'proto.payload.v1.Object.Location';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payload.v1.Object.StreamLocation = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.payload.v1.Object.StreamLocation.oneofGroups_);
};
goog.inherits(proto.payload.v1.Object.StreamLocation, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payload.v1.Object.StreamLocation.displayName = 'proto.payload.v1.Object.StreamLocation';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payload.v1.Object.Locations = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.payload.v1.Object.Locations.repeatedFields_, null);
};
goog.inherits(proto.payload.v1.Object.Locations, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payload.v1.Object.Locations.displayName = 'proto.payload.v1.Object.Locations';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payload.v1.Control = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payload.v1.Control, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payload.v1.Control.displayName = 'proto.payload.v1.Control';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payload.v1.Control.CreateIndexRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payload.v1.Control.CreateIndexRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payload.v1.Control.CreateIndexRequest.displayName = 'proto.payload.v1.Control.CreateIndexRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payload.v1.Discoverer = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payload.v1.Discoverer, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payload.v1.Discoverer.displayName = 'proto.payload.v1.Discoverer';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payload.v1.Discoverer.Request = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payload.v1.Discoverer.Request, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payload.v1.Discoverer.Request.displayName = 'proto.payload.v1.Discoverer.Request';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payload.v1.Info = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payload.v1.Info, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payload.v1.Info.displayName = 'proto.payload.v1.Info';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payload.v1.Info.Index = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payload.v1.Info.Index, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payload.v1.Info.Index.displayName = 'proto.payload.v1.Info.Index';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payload.v1.Info.Index.Count = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payload.v1.Info.Index.Count, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payload.v1.Info.Index.Count.displayName = 'proto.payload.v1.Info.Index.Count';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payload.v1.Info.Index.UUID = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payload.v1.Info.Index.UUID, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payload.v1.Info.Index.UUID.displayName = 'proto.payload.v1.Info.Index.UUID';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payload.v1.Info.Index.UUID.Committed = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payload.v1.Info.Index.UUID.Committed, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payload.v1.Info.Index.UUID.Committed.displayName = 'proto.payload.v1.Info.Index.UUID.Committed';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payload.v1.Info.Index.UUID.Uncommitted = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payload.v1.Info.Index.UUID.Uncommitted, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payload.v1.Info.Index.UUID.Uncommitted.displayName = 'proto.payload.v1.Info.Index.UUID.Uncommitted';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payload.v1.Info.Pod = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payload.v1.Info.Pod, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payload.v1.Info.Pod.displayName = 'proto.payload.v1.Info.Pod';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payload.v1.Info.Node = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payload.v1.Info.Node, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payload.v1.Info.Node.displayName = 'proto.payload.v1.Info.Node';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payload.v1.Info.CPU = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payload.v1.Info.CPU, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payload.v1.Info.CPU.displayName = 'proto.payload.v1.Info.CPU';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payload.v1.Info.Memory = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payload.v1.Info.Memory, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payload.v1.Info.Memory.displayName = 'proto.payload.v1.Info.Memory';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payload.v1.Info.Pods = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.payload.v1.Info.Pods.repeatedFields_, null);
};
goog.inherits(proto.payload.v1.Info.Pods, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payload.v1.Info.Pods.displayName = 'proto.payload.v1.Info.Pods';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payload.v1.Info.Nodes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.payload.v1.Info.Nodes.repeatedFields_, null);
};
goog.inherits(proto.payload.v1.Info.Nodes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payload.v1.Info.Nodes.displayName = 'proto.payload.v1.Info.Nodes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payload.v1.Info.IPs = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.payload.v1.Info.IPs.repeatedFields_, null);
};
goog.inherits(proto.payload.v1.Info.IPs, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payload.v1.Info.IPs.displayName = 'proto.payload.v1.Info.IPs';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payload.v1.Empty = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payload.v1.Empty, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payload.v1.Empty.displayName = 'proto.payload.v1.Empty';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payload.v1.Search.prototype.toObject = function(opt_includeInstance) {
  return proto.payload.v1.Search.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payload.v1.Search} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payload.v1.Search.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payload.v1.Search}
 */
proto.payload.v1.Search.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payload.v1.Search;
  return proto.payload.v1.Search.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payload.v1.Search} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payload.v1.Search}
 */
proto.payload.v1.Search.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payload.v1.Search.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payload.v1.Search.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payload.v1.Search} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payload.v1.Search.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};


/**
 * @enum {number}
 */
proto.payload.v1.Search.AggregationAlgorithm = {
  UNKNOWN: 0,
  CONCURRENTQUEUE: 1,
  SORTSLICE: 2,
  SORTPOOLSLICE: 3,
  PAIRINGHEAP: 4
};


/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.payload.v1.Search.Request.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payload.v1.Search.Request.prototype.toObject = function(opt_includeInstance) {
  return proto.payload.v1.Search.Request.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payload.v1.Search.Request} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payload.v1.Search.Request.toObject = function(includeInstance, msg) {
  var f, obj = {
    vectorList: (f = jspb.Message.getRepeatedFloatingPointField(msg, 1)) == null ? undefined : f,
    config: (f = msg.getConfig()) && proto.payload.v1.Search.Config.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payload.v1.Search.Request}
 */
proto.payload.v1.Search.Request.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payload.v1.Search.Request;
  return proto.payload.v1.Search.Request.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payload.v1.Search.Request} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payload.v1.Search.Request}
 */
proto.payload.v1.Search.Request.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedFloat() : [reader.readFloat()]);
      for (var i = 0; i < values.length; i++) {
        msg.addVector(values[i]);
      }
      break;
    case 2:
      var value = new proto.payload.v1.Search.Config;
      reader.readMessage(value,proto.payload.v1.Search.Config.deserializeBinaryFromReader);
      msg.setConfig(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payload.v1.Search.Request.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payload.v1.Search.Request.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payload.v1.Search.Request} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payload.v1.Search.Request.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVectorList();
  if (f.length > 0) {
    writer.writePackedFloat(
      1,
      f
    );
  }
  f = message.getConfig();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.payload.v1.Search.Config.serializeBinaryToWriter
    );
  }
};


/**
 * repeated float vector = 1;
 * @return {!Array<number>}
 */
proto.payload.v1.Search.Request.prototype.getVectorList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedFloatingPointField(this, 1));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.payload.v1.Search.Request} returns this
 */
proto.payload.v1.Search.Request.prototype.setVectorList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.payload.v1.Search.Request} returns this
 */
proto.payload.v1.Search.Request.prototype.addVector = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.payload.v1.Search.Request} returns this
 */
proto.payload.v1.Search.Request.prototype.clearVectorList = function() {
  return this.setVectorList([]);
};


/**
 * optional Config config = 2;
 * @return {?proto.payload.v1.Search.Config}
 */
proto.payload.v1.Search.Request.prototype.getConfig = function() {
  return /** @type{?proto.payload.v1.Search.Config} */ (
    jspb.Message.getWrapperField(this, proto.payload.v1.Search.Config, 2));
};


/**
 * @param {?proto.payload.v1.Search.Config|undefined} value
 * @return {!proto.payload.v1.Search.Request} returns this
*/
proto.payload.v1.Search.Request.prototype.setConfig = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.payload.v1.Search.Request} returns this
 */
proto.payload.v1.Search.Request.prototype.clearConfig = function() {
  return this.setConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.payload.v1.Search.Request.prototype.hasConfig = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.payload.v1.Search.MultiRequest.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payload.v1.Search.MultiRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.payload.v1.Search.MultiRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payload.v1.Search.MultiRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payload.v1.Search.MultiRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    requestsList: jspb.Message.toObjectList(msg.getRequestsList(),
    proto.payload.v1.Search.Request.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payload.v1.Search.MultiRequest}
 */
proto.payload.v1.Search.MultiRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payload.v1.Search.MultiRequest;
  return proto.payload.v1.Search.MultiRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payload.v1.Search.MultiRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payload.v1.Search.MultiRequest}
 */
proto.payload.v1.Search.MultiRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.payload.v1.Search.Request;
      reader.readMessage(value,proto.payload.v1.Search.Request.deserializeBinaryFromReader);
      msg.addRequests(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payload.v1.Search.MultiRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payload.v1.Search.MultiRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payload.v1.Search.MultiRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payload.v1.Search.MultiRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRequestsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.payload.v1.Search.Request.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Request requests = 1;
 * @return {!Array<!proto.payload.v1.Search.Request>}
 */
proto.payload.v1.Search.MultiRequest.prototype.getRequestsList = function() {
  return /** @type{!Array<!proto.payload.v1.Search.Request>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.payload.v1.Search.Request, 1));
};


/**
 * @param {!Array<!proto.payload.v1.Search.Request>} value
 * @return {!proto.payload.v1.Search.MultiRequest} returns this
*/
proto.payload.v1.Search.MultiRequest.prototype.setRequestsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.payload.v1.Search.Request=} opt_value
 * @param {number=} opt_index
 * @return {!proto.payload.v1.Search.Request}
 */
proto.payload.v1.Search.MultiRequest.prototype.addRequests = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.payload.v1.Search.Request, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.payload.v1.Search.MultiRequest} returns this
 */
proto.payload.v1.Search.MultiRequest.prototype.clearRequestsList = function() {
  return this.setRequestsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payload.v1.Search.IDRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.payload.v1.Search.IDRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payload.v1.Search.IDRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payload.v1.Search.IDRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    config: (f = msg.getConfig()) && proto.payload.v1.Search.Config.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payload.v1.Search.IDRequest}
 */
proto.payload.v1.Search.IDRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payload.v1.Search.IDRequest;
  return proto.payload.v1.Search.IDRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payload.v1.Search.IDRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payload.v1.Search.IDRequest}
 */
proto.payload.v1.Search.IDRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = new proto.payload.v1.Search.Config;
      reader.readMessage(value,proto.payload.v1.Search.Config.deserializeBinaryFromReader);
      msg.setConfig(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payload.v1.Search.IDRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payload.v1.Search.IDRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payload.v1.Search.IDRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payload.v1.Search.IDRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getConfig();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.payload.v1.Search.Config.serializeBinaryToWriter
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.payload.v1.Search.IDRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.payload.v1.Search.IDRequest} returns this
 */
proto.payload.v1.Search.IDRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Config config = 2;
 * @return {?proto.payload.v1.Search.Config}
 */
proto.payload.v1.Search.IDRequest.prototype.getConfig = function() {
  return /** @type{?proto.payload.v1.Search.Config} */ (
    jspb.Message.getWrapperField(this, proto.payload.v1.Search.Config, 2));
};


/**
 * @param {?proto.payload.v1.Search.Config|undefined} value
 * @return {!proto.payload.v1.Search.IDRequest} returns this
*/
proto.payload.v1.Search.IDRequest.prototype.setConfig = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.payload.v1.Search.IDRequest} returns this
 */
proto.payload.v1.Search.IDRequest.prototype.clearConfig = function() {
  return this.setConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.payload.v1.Search.IDRequest.prototype.hasConfig = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.payload.v1.Search.MultiIDRequest.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payload.v1.Search.MultiIDRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.payload.v1.Search.MultiIDRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payload.v1.Search.MultiIDRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payload.v1.Search.MultiIDRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    requestsList: jspb.Message.toObjectList(msg.getRequestsList(),
    proto.payload.v1.Search.IDRequest.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payload.v1.Search.MultiIDRequest}
 */
proto.payload.v1.Search.MultiIDRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payload.v1.Search.MultiIDRequest;
  return proto.payload.v1.Search.MultiIDRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payload.v1.Search.MultiIDRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payload.v1.Search.MultiIDRequest}
 */
proto.payload.v1.Search.MultiIDRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.payload.v1.Search.IDRequest;
      reader.readMessage(value,proto.payload.v1.Search.IDRequest.deserializeBinaryFromReader);
      msg.addRequests(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payload.v1.Search.MultiIDRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payload.v1.Search.MultiIDRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payload.v1.Search.MultiIDRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payload.v1.Search.MultiIDRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRequestsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.payload.v1.Search.IDRequest.serializeBinaryToWriter
    );
  }
};


/**
 * repeated IDRequest requests = 1;
 * @return {!Array<!proto.payload.v1.Search.IDRequest>}
 */
proto.payload.v1.Search.MultiIDRequest.prototype.getRequestsList = function() {
  return /** @type{!Array<!proto.payload.v1.Search.IDRequest>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.payload.v1.Search.IDRequest, 1));
};


/**
 * @param {!Array<!proto.payload.v1.Search.IDRequest>} value
 * @return {!proto.payload.v1.Search.MultiIDRequest} returns this
*/
proto.payload.v1.Search.MultiIDRequest.prototype.setRequestsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.payload.v1.Search.IDRequest=} opt_value
 * @param {number=} opt_index
 * @return {!proto.payload.v1.Search.IDRequest}
 */
proto.payload.v1.Search.MultiIDRequest.prototype.addRequests = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.payload.v1.Search.IDRequest, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.payload.v1.Search.MultiIDRequest} returns this
 */
proto.payload.v1.Search.MultiIDRequest.prototype.clearRequestsList = function() {
  return this.setRequestsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payload.v1.Search.ObjectRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.payload.v1.Search.ObjectRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payload.v1.Search.ObjectRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payload.v1.Search.ObjectRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    object: msg.getObject_asB64(),
    config: (f = msg.getConfig()) && proto.payload.v1.Search.Config.toObject(includeInstance, f),
    vectorizer: (f = msg.getVectorizer()) && proto.payload.v1.Filter.Target.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payload.v1.Search.ObjectRequest}
 */
proto.payload.v1.Search.ObjectRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payload.v1.Search.ObjectRequest;
  return proto.payload.v1.Search.ObjectRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payload.v1.Search.ObjectRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payload.v1.Search.ObjectRequest}
 */
proto.payload.v1.Search.ObjectRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setObject(value);
      break;
    case 2:
      var value = new proto.payload.v1.Search.Config;
      reader.readMessage(value,proto.payload.v1.Search.Config.deserializeBinaryFromReader);
      msg.setConfig(value);
      break;
    case 3:
      var value = new proto.payload.v1.Filter.Target;
      reader.readMessage(value,proto.payload.v1.Filter.Target.deserializeBinaryFromReader);
      msg.setVectorizer(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payload.v1.Search.ObjectRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payload.v1.Search.ObjectRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payload.v1.Search.ObjectRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payload.v1.Search.ObjectRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getObject_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getConfig();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.payload.v1.Search.Config.serializeBinaryToWriter
    );
  }
  f = message.getVectorizer();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.payload.v1.Filter.Target.serializeBinaryToWriter
    );
  }
};


/**
 * optional bytes object = 1;
 * @return {!(string|Uint8Array)}
 */
proto.payload.v1.Search.ObjectRequest.prototype.getObject = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes object = 1;
 * This is a type-conversion wrapper around `getObject()`
 * @return {string}
 */
proto.payload.v1.Search.ObjectRequest.prototype.getObject_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getObject()));
};


/**
 * optional bytes object = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getObject()`
 * @return {!Uint8Array}
 */
proto.payload.v1.Search.ObjectRequest.prototype.getObject_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getObject()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.payload.v1.Search.ObjectRequest} returns this
 */
proto.payload.v1.Search.ObjectRequest.prototype.setObject = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional Config config = 2;
 * @return {?proto.payload.v1.Search.Config}
 */
proto.payload.v1.Search.ObjectRequest.prototype.getConfig = function() {
  return /** @type{?proto.payload.v1.Search.Config} */ (
    jspb.Message.getWrapperField(this, proto.payload.v1.Search.Config, 2));
};


/**
 * @param {?proto.payload.v1.Search.Config|undefined} value
 * @return {!proto.payload.v1.Search.ObjectRequest} returns this
*/
proto.payload.v1.Search.ObjectRequest.prototype.setConfig = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.payload.v1.Search.ObjectRequest} returns this
 */
proto.payload.v1.Search.ObjectRequest.prototype.clearConfig = function() {
  return this.setConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.payload.v1.Search.ObjectRequest.prototype.hasConfig = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Filter.Target vectorizer = 3;
 * @return {?proto.payload.v1.Filter.Target}
 */
proto.payload.v1.Search.ObjectRequest.prototype.getVectorizer = function() {
  return /** @type{?proto.payload.v1.Filter.Target} */ (
    jspb.Message.getWrapperField(this, proto.payload.v1.Filter.Target, 3));
};


/**
 * @param {?proto.payload.v1.Filter.Target|undefined} value
 * @return {!proto.payload.v1.Search.ObjectRequest} returns this
*/
proto.payload.v1.Search.ObjectRequest.prototype.setVectorizer = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.payload.v1.Search.ObjectRequest} returns this
 */
proto.payload.v1.Search.ObjectRequest.prototype.clearVectorizer = function() {
  return this.setVectorizer(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.payload.v1.Search.ObjectRequest.prototype.hasVectorizer = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.payload.v1.Search.MultiObjectRequest.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payload.v1.Search.MultiObjectRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.payload.v1.Search.MultiObjectRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payload.v1.Search.MultiObjectRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payload.v1.Search.MultiObjectRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    requestsList: jspb.Message.toObjectList(msg.getRequestsList(),
    proto.payload.v1.Search.ObjectRequest.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payload.v1.Search.MultiObjectRequest}
 */
proto.payload.v1.Search.MultiObjectRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payload.v1.Search.MultiObjectRequest;
  return proto.payload.v1.Search.MultiObjectRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payload.v1.Search.MultiObjectRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payload.v1.Search.MultiObjectRequest}
 */
proto.payload.v1.Search.MultiObjectRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.payload.v1.Search.ObjectRequest;
      reader.readMessage(value,proto.payload.v1.Search.ObjectRequest.deserializeBinaryFromReader);
      msg.addRequests(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payload.v1.Search.MultiObjectRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payload.v1.Search.MultiObjectRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payload.v1.Search.MultiObjectRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payload.v1.Search.MultiObjectRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRequestsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.payload.v1.Search.ObjectRequest.serializeBinaryToWriter
    );
  }
};


/**
 * repeated ObjectRequest requests = 1;
 * @return {!Array<!proto.payload.v1.Search.ObjectRequest>}
 */
proto.payload.v1.Search.MultiObjectRequest.prototype.getRequestsList = function() {
  return /** @type{!Array<!proto.payload.v1.Search.ObjectRequest>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.payload.v1.Search.ObjectRequest, 1));
};


/**
 * @param {!Array<!proto.payload.v1.Search.ObjectRequest>} value
 * @return {!proto.payload.v1.Search.MultiObjectRequest} returns this
*/
proto.payload.v1.Search.MultiObjectRequest.prototype.setRequestsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.payload.v1.Search.ObjectRequest=} opt_value
 * @param {number=} opt_index
 * @return {!proto.payload.v1.Search.ObjectRequest}
 */
proto.payload.v1.Search.MultiObjectRequest.prototype.addRequests = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.payload.v1.Search.ObjectRequest, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.payload.v1.Search.MultiObjectRequest} returns this
 */
proto.payload.v1.Search.MultiObjectRequest.prototype.clearRequestsList = function() {
  return this.setRequestsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payload.v1.Search.Config.prototype.toObject = function(opt_includeInstance) {
  return proto.payload.v1.Search.Config.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payload.v1.Search.Config} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payload.v1.Search.Config.toObject = function(includeInstance, msg) {
  var f, obj = {
    requestId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    num: jspb.Message.getFieldWithDefault(msg, 2, 0),
    radius: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
    epsilon: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0),
    timeout: jspb.Message.getFieldWithDefault(msg, 5, 0),
    ingressFilters: (f = msg.getIngressFilters()) && proto.payload.v1.Filter.Config.toObject(includeInstance, f),
    egressFilters: (f = msg.getEgressFilters()) && proto.payload.v1.Filter.Config.toObject(includeInstance, f),
    minNum: jspb.Message.getFieldWithDefault(msg, 8, 0),
    aggregationAlgorithm: jspb.Message.getFieldWithDefault(msg, 9, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payload.v1.Search.Config}
 */
proto.payload.v1.Search.Config.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payload.v1.Search.Config;
  return proto.payload.v1.Search.Config.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payload.v1.Search.Config} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payload.v1.Search.Config}
 */
proto.payload.v1.Search.Config.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRequestId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setNum(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setRadius(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setEpsilon(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTimeout(value);
      break;
    case 6:
      var value = new proto.payload.v1.Filter.Config;
      reader.readMessage(value,proto.payload.v1.Filter.Config.deserializeBinaryFromReader);
      msg.setIngressFilters(value);
      break;
    case 7:
      var value = new proto.payload.v1.Filter.Config;
      reader.readMessage(value,proto.payload.v1.Filter.Config.deserializeBinaryFromReader);
      msg.setEgressFilters(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setMinNum(value);
      break;
    case 9:
      var value = /** @type {!proto.payload.v1.Search.AggregationAlgorithm} */ (reader.readEnum());
      msg.setAggregationAlgorithm(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payload.v1.Search.Config.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payload.v1.Search.Config.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payload.v1.Search.Config} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payload.v1.Search.Config.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRequestId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getNum();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getRadius();
  if (f !== 0.0) {
    writer.writeFloat(
      3,
      f
    );
  }
  f = message.getEpsilon();
  if (f !== 0.0) {
    writer.writeFloat(
      4,
      f
    );
  }
  f = message.getTimeout();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = message.getIngressFilters();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.payload.v1.Filter.Config.serializeBinaryToWriter
    );
  }
  f = message.getEgressFilters();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.payload.v1.Filter.Config.serializeBinaryToWriter
    );
  }
  f = message.getMinNum();
  if (f !== 0) {
    writer.writeUint32(
      8,
      f
    );
  }
  f = message.getAggregationAlgorithm();
  if (f !== 0.0) {
    writer.writeEnum(
      9,
      f
    );
  }
};


/**
 * optional string request_id = 1;
 * @return {string}
 */
proto.payload.v1.Search.Config.prototype.getRequestId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.payload.v1.Search.Config} returns this
 */
proto.payload.v1.Search.Config.prototype.setRequestId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint32 num = 2;
 * @return {number}
 */
proto.payload.v1.Search.Config.prototype.getNum = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.payload.v1.Search.Config} returns this
 */
proto.payload.v1.Search.Config.prototype.setNum = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional float radius = 3;
 * @return {number}
 */
proto.payload.v1.Search.Config.prototype.getRadius = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.payload.v1.Search.Config} returns this
 */
proto.payload.v1.Search.Config.prototype.setRadius = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional float epsilon = 4;
 * @return {number}
 */
proto.payload.v1.Search.Config.prototype.getEpsilon = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.payload.v1.Search.Config} returns this
 */
proto.payload.v1.Search.Config.prototype.setEpsilon = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
};


/**
 * optional int64 timeout = 5;
 * @return {number}
 */
proto.payload.v1.Search.Config.prototype.getTimeout = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.payload.v1.Search.Config} returns this
 */
proto.payload.v1.Search.Config.prototype.setTimeout = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional Filter.Config ingress_filters = 6;
 * @return {?proto.payload.v1.Filter.Config}
 */
proto.payload.v1.Search.Config.prototype.getIngressFilters = function() {
  return /** @type{?proto.payload.v1.Filter.Config} */ (
    jspb.Message.getWrapperField(this, proto.payload.v1.Filter.Config, 6));
};


/**
 * @param {?proto.payload.v1.Filter.Config|undefined} value
 * @return {!proto.payload.v1.Search.Config} returns this
*/
proto.payload.v1.Search.Config.prototype.setIngressFilters = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.payload.v1.Search.Config} returns this
 */
proto.payload.v1.Search.Config.prototype.clearIngressFilters = function() {
  return this.setIngressFilters(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.payload.v1.Search.Config.prototype.hasIngressFilters = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional Filter.Config egress_filters = 7;
 * @return {?proto.payload.v1.Filter.Config}
 */
proto.payload.v1.Search.Config.prototype.getEgressFilters = function() {
  return /** @type{?proto.payload.v1.Filter.Config} */ (
    jspb.Message.getWrapperField(this, proto.payload.v1.Filter.Config, 7));
};


/**
 * @param {?proto.payload.v1.Filter.Config|undefined} value
 * @return {!proto.payload.v1.Search.Config} returns this
*/
proto.payload.v1.Search.Config.prototype.setEgressFilters = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.payload.v1.Search.Config} returns this
 */
proto.payload.v1.Search.Config.prototype.clearEgressFilters = function() {
  return this.setEgressFilters(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.payload.v1.Search.Config.prototype.hasEgressFilters = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional uint32 min_num = 8;
 * @return {number}
 */
proto.payload.v1.Search.Config.prototype.getMinNum = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.payload.v1.Search.Config} returns this
 */
proto.payload.v1.Search.Config.prototype.setMinNum = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional AggregationAlgorithm aggregation_algorithm = 9;
 * @return {!proto.payload.v1.Search.AggregationAlgorithm}
 */
proto.payload.v1.Search.Config.prototype.getAggregationAlgorithm = function() {
  return /** @type {!proto.payload.v1.Search.AggregationAlgorithm} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {!proto.payload.v1.Search.AggregationAlgorithm} value
 * @return {!proto.payload.v1.Search.Config} returns this
 */
proto.payload.v1.Search.Config.prototype.setAggregationAlgorithm = function(value) {
  return jspb.Message.setProto3EnumField(this, 9, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.payload.v1.Search.Response.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payload.v1.Search.Response.prototype.toObject = function(opt_includeInstance) {
  return proto.payload.v1.Search.Response.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payload.v1.Search.Response} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payload.v1.Search.Response.toObject = function(includeInstance, msg) {
  var f, obj = {
    requestId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    resultsList: jspb.Message.toObjectList(msg.getResultsList(),
    proto.payload.v1.Object.Distance.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payload.v1.Search.Response}
 */
proto.payload.v1.Search.Response.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payload.v1.Search.Response;
  return proto.payload.v1.Search.Response.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payload.v1.Search.Response} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payload.v1.Search.Response}
 */
proto.payload.v1.Search.Response.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRequestId(value);
      break;
    case 2:
      var value = new proto.payload.v1.Object.Distance;
      reader.readMessage(value,proto.payload.v1.Object.Distance.deserializeBinaryFromReader);
      msg.addResults(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payload.v1.Search.Response.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payload.v1.Search.Response.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payload.v1.Search.Response} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payload.v1.Search.Response.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRequestId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getResultsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.payload.v1.Object.Distance.serializeBinaryToWriter
    );
  }
};


/**
 * optional string request_id = 1;
 * @return {string}
 */
proto.payload.v1.Search.Response.prototype.getRequestId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.payload.v1.Search.Response} returns this
 */
proto.payload.v1.Search.Response.prototype.setRequestId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated Object.Distance results = 2;
 * @return {!Array<!proto.payload.v1.Object.Distance>}
 */
proto.payload.v1.Search.Response.prototype.getResultsList = function() {
  return /** @type{!Array<!proto.payload.v1.Object.Distance>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.payload.v1.Object.Distance, 2));
};


/**
 * @param {!Array<!proto.payload.v1.Object.Distance>} value
 * @return {!proto.payload.v1.Search.Response} returns this
*/
proto.payload.v1.Search.Response.prototype.setResultsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.payload.v1.Object.Distance=} opt_value
 * @param {number=} opt_index
 * @return {!proto.payload.v1.Object.Distance}
 */
proto.payload.v1.Search.Response.prototype.addResults = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.payload.v1.Object.Distance, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.payload.v1.Search.Response} returns this
 */
proto.payload.v1.Search.Response.prototype.clearResultsList = function() {
  return this.setResultsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.payload.v1.Search.Responses.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payload.v1.Search.Responses.prototype.toObject = function(opt_includeInstance) {
  return proto.payload.v1.Search.Responses.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payload.v1.Search.Responses} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payload.v1.Search.Responses.toObject = function(includeInstance, msg) {
  var f, obj = {
    responsesList: jspb.Message.toObjectList(msg.getResponsesList(),
    proto.payload.v1.Search.Response.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payload.v1.Search.Responses}
 */
proto.payload.v1.Search.Responses.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payload.v1.Search.Responses;
  return proto.payload.v1.Search.Responses.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payload.v1.Search.Responses} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payload.v1.Search.Responses}
 */
proto.payload.v1.Search.Responses.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.payload.v1.Search.Response;
      reader.readMessage(value,proto.payload.v1.Search.Response.deserializeBinaryFromReader);
      msg.addResponses(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payload.v1.Search.Responses.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payload.v1.Search.Responses.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payload.v1.Search.Responses} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payload.v1.Search.Responses.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResponsesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.payload.v1.Search.Response.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Response responses = 1;
 * @return {!Array<!proto.payload.v1.Search.Response>}
 */
proto.payload.v1.Search.Responses.prototype.getResponsesList = function() {
  return /** @type{!Array<!proto.payload.v1.Search.Response>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.payload.v1.Search.Response, 1));
};


/**
 * @param {!Array<!proto.payload.v1.Search.Response>} value
 * @return {!proto.payload.v1.Search.Responses} returns this
*/
proto.payload.v1.Search.Responses.prototype.setResponsesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.payload.v1.Search.Response=} opt_value
 * @param {number=} opt_index
 * @return {!proto.payload.v1.Search.Response}
 */
proto.payload.v1.Search.Responses.prototype.addResponses = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.payload.v1.Search.Response, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.payload.v1.Search.Responses} returns this
 */
proto.payload.v1.Search.Responses.prototype.clearResponsesList = function() {
  return this.setResponsesList([]);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.payload.v1.Search.StreamResponse.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.payload.v1.Search.StreamResponse.PayloadCase = {
  PAYLOAD_NOT_SET: 0,
  RESPONSE: 1,
  STATUS: 2
};

/**
 * @return {proto.payload.v1.Search.StreamResponse.PayloadCase}
 */
proto.payload.v1.Search.StreamResponse.prototype.getPayloadCase = function() {
  return /** @type {proto.payload.v1.Search.StreamResponse.PayloadCase} */(jspb.Message.computeOneofCase(this, proto.payload.v1.Search.StreamResponse.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payload.v1.Search.StreamResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.payload.v1.Search.StreamResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payload.v1.Search.StreamResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payload.v1.Search.StreamResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    response: (f = msg.getResponse()) && proto.payload.v1.Search.Response.toObject(includeInstance, f),
    status: (f = msg.getStatus()) && google_rpc_status_pb.Status.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payload.v1.Search.StreamResponse}
 */
proto.payload.v1.Search.StreamResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payload.v1.Search.StreamResponse;
  return proto.payload.v1.Search.StreamResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payload.v1.Search.StreamResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payload.v1.Search.StreamResponse}
 */
proto.payload.v1.Search.StreamResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.payload.v1.Search.Response;
      reader.readMessage(value,proto.payload.v1.Search.Response.deserializeBinaryFromReader);
      msg.setResponse(value);
      break;
    case 2:
      var value = new google_rpc_status_pb.Status;
      reader.readMessage(value,google_rpc_status_pb.Status.deserializeBinaryFromReader);
      msg.setStatus(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payload.v1.Search.StreamResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payload.v1.Search.StreamResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payload.v1.Search.StreamResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payload.v1.Search.StreamResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResponse();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.payload.v1.Search.Response.serializeBinaryToWriter
    );
  }
  f = message.getStatus();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_rpc_status_pb.Status.serializeBinaryToWriter
    );
  }
};


/**
 * optional Response response = 1;
 * @return {?proto.payload.v1.Search.Response}
 */
proto.payload.v1.Search.StreamResponse.prototype.getResponse = function() {
  return /** @type{?proto.payload.v1.Search.Response} */ (
    jspb.Message.getWrapperField(this, proto.payload.v1.Search.Response, 1));
};


/**
 * @param {?proto.payload.v1.Search.Response|undefined} value
 * @return {!proto.payload.v1.Search.StreamResponse} returns this
*/
proto.payload.v1.Search.StreamResponse.prototype.setResponse = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.payload.v1.Search.StreamResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.payload.v1.Search.StreamResponse} returns this
 */
proto.payload.v1.Search.StreamResponse.prototype.clearResponse = function() {
  return this.setResponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.payload.v1.Search.StreamResponse.prototype.hasResponse = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.rpc.Status status = 2;
 * @return {?proto.google.rpc.Status}
 */
proto.payload.v1.Search.StreamResponse.prototype.getStatus = function() {
  return /** @type{?proto.google.rpc.Status} */ (
    jspb.Message.getWrapperField(this, google_rpc_status_pb.Status, 2));
};


/**
 * @param {?proto.google.rpc.Status|undefined} value
 * @return {!proto.payload.v1.Search.StreamResponse} returns this
*/
proto.payload.v1.Search.StreamResponse.prototype.setStatus = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.payload.v1.Search.StreamResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.payload.v1.Search.StreamResponse} returns this
 */
proto.payload.v1.Search.StreamResponse.prototype.clearStatus = function() {
  return this.setStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.payload.v1.Search.StreamResponse.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payload.v1.Filter.prototype.toObject = function(opt_includeInstance) {
  return proto.payload.v1.Filter.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payload.v1.Filter} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payload.v1.Filter.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payload.v1.Filter}
 */
proto.payload.v1.Filter.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payload.v1.Filter;
  return proto.payload.v1.Filter.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payload.v1.Filter} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payload.v1.Filter}
 */
proto.payload.v1.Filter.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payload.v1.Filter.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payload.v1.Filter.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payload.v1.Filter} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payload.v1.Filter.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payload.v1.Filter.Target.prototype.toObject = function(opt_includeInstance) {
  return proto.payload.v1.Filter.Target.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payload.v1.Filter.Target} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payload.v1.Filter.Target.toObject = function(includeInstance, msg) {
  var f, obj = {
    host: jspb.Message.getFieldWithDefault(msg, 1, ""),
    port: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payload.v1.Filter.Target}
 */
proto.payload.v1.Filter.Target.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payload.v1.Filter.Target;
  return proto.payload.v1.Filter.Target.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payload.v1.Filter.Target} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payload.v1.Filter.Target}
 */
proto.payload.v1.Filter.Target.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setHost(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPort(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payload.v1.Filter.Target.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payload.v1.Filter.Target.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payload.v1.Filter.Target} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payload.v1.Filter.Target.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHost();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPort();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
};


/**
 * optional string host = 1;
 * @return {string}
 */
proto.payload.v1.Filter.Target.prototype.getHost = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.payload.v1.Filter.Target} returns this
 */
proto.payload.v1.Filter.Target.prototype.setHost = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint32 port = 2;
 * @return {number}
 */
proto.payload.v1.Filter.Target.prototype.getPort = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.payload.v1.Filter.Target} returns this
 */
proto.payload.v1.Filter.Target.prototype.setPort = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.payload.v1.Filter.Config.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payload.v1.Filter.Config.prototype.toObject = function(opt_includeInstance) {
  return proto.payload.v1.Filter.Config.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payload.v1.Filter.Config} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payload.v1.Filter.Config.toObject = function(includeInstance, msg) {
  var f, obj = {
    targetsList: jspb.Message.toObjectList(msg.getTargetsList(),
    proto.payload.v1.Filter.Target.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payload.v1.Filter.Config}
 */
proto.payload.v1.Filter.Config.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payload.v1.Filter.Config;
  return proto.payload.v1.Filter.Config.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payload.v1.Filter.Config} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payload.v1.Filter.Config}
 */
proto.payload.v1.Filter.Config.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.payload.v1.Filter.Target;
      reader.readMessage(value,proto.payload.v1.Filter.Target.deserializeBinaryFromReader);
      msg.addTargets(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payload.v1.Filter.Config.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payload.v1.Filter.Config.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payload.v1.Filter.Config} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payload.v1.Filter.Config.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTargetsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.payload.v1.Filter.Target.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Target targets = 1;
 * @return {!Array<!proto.payload.v1.Filter.Target>}
 */
proto.payload.v1.Filter.Config.prototype.getTargetsList = function() {
  return /** @type{!Array<!proto.payload.v1.Filter.Target>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.payload.v1.Filter.Target, 1));
};


/**
 * @param {!Array<!proto.payload.v1.Filter.Target>} value
 * @return {!proto.payload.v1.Filter.Config} returns this
*/
proto.payload.v1.Filter.Config.prototype.setTargetsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.payload.v1.Filter.Target=} opt_value
 * @param {number=} opt_index
 * @return {!proto.payload.v1.Filter.Target}
 */
proto.payload.v1.Filter.Config.prototype.addTargets = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.payload.v1.Filter.Target, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.payload.v1.Filter.Config} returns this
 */
proto.payload.v1.Filter.Config.prototype.clearTargetsList = function() {
  return this.setTargetsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payload.v1.Insert.prototype.toObject = function(opt_includeInstance) {
  return proto.payload.v1.Insert.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payload.v1.Insert} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payload.v1.Insert.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payload.v1.Insert}
 */
proto.payload.v1.Insert.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payload.v1.Insert;
  return proto.payload.v1.Insert.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payload.v1.Insert} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payload.v1.Insert}
 */
proto.payload.v1.Insert.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payload.v1.Insert.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payload.v1.Insert.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payload.v1.Insert} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payload.v1.Insert.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payload.v1.Insert.Request.prototype.toObject = function(opt_includeInstance) {
  return proto.payload.v1.Insert.Request.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payload.v1.Insert.Request} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payload.v1.Insert.Request.toObject = function(includeInstance, msg) {
  var f, obj = {
    vector: (f = msg.getVector()) && proto.payload.v1.Object.Vector.toObject(includeInstance, f),
    config: (f = msg.getConfig()) && proto.payload.v1.Insert.Config.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payload.v1.Insert.Request}
 */
proto.payload.v1.Insert.Request.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payload.v1.Insert.Request;
  return proto.payload.v1.Insert.Request.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payload.v1.Insert.Request} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payload.v1.Insert.Request}
 */
proto.payload.v1.Insert.Request.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.payload.v1.Object.Vector;
      reader.readMessage(value,proto.payload.v1.Object.Vector.deserializeBinaryFromReader);
      msg.setVector(value);
      break;
    case 2:
      var value = new proto.payload.v1.Insert.Config;
      reader.readMessage(value,proto.payload.v1.Insert.Config.deserializeBinaryFromReader);
      msg.setConfig(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payload.v1.Insert.Request.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payload.v1.Insert.Request.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payload.v1.Insert.Request} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payload.v1.Insert.Request.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVector();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.payload.v1.Object.Vector.serializeBinaryToWriter
    );
  }
  f = message.getConfig();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.payload.v1.Insert.Config.serializeBinaryToWriter
    );
  }
};


/**
 * optional Object.Vector vector = 1;
 * @return {?proto.payload.v1.Object.Vector}
 */
proto.payload.v1.Insert.Request.prototype.getVector = function() {
  return /** @type{?proto.payload.v1.Object.Vector} */ (
    jspb.Message.getWrapperField(this, proto.payload.v1.Object.Vector, 1));
};


/**
 * @param {?proto.payload.v1.Object.Vector|undefined} value
 * @return {!proto.payload.v1.Insert.Request} returns this
*/
proto.payload.v1.Insert.Request.prototype.setVector = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.payload.v1.Insert.Request} returns this
 */
proto.payload.v1.Insert.Request.prototype.clearVector = function() {
  return this.setVector(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.payload.v1.Insert.Request.prototype.hasVector = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Config config = 2;
 * @return {?proto.payload.v1.Insert.Config}
 */
proto.payload.v1.Insert.Request.prototype.getConfig = function() {
  return /** @type{?proto.payload.v1.Insert.Config} */ (
    jspb.Message.getWrapperField(this, proto.payload.v1.Insert.Config, 2));
};


/**
 * @param {?proto.payload.v1.Insert.Config|undefined} value
 * @return {!proto.payload.v1.Insert.Request} returns this
*/
proto.payload.v1.Insert.Request.prototype.setConfig = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.payload.v1.Insert.Request} returns this
 */
proto.payload.v1.Insert.Request.prototype.clearConfig = function() {
  return this.setConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.payload.v1.Insert.Request.prototype.hasConfig = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.payload.v1.Insert.MultiRequest.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payload.v1.Insert.MultiRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.payload.v1.Insert.MultiRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payload.v1.Insert.MultiRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payload.v1.Insert.MultiRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    requestsList: jspb.Message.toObjectList(msg.getRequestsList(),
    proto.payload.v1.Insert.Request.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payload.v1.Insert.MultiRequest}
 */
proto.payload.v1.Insert.MultiRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payload.v1.Insert.MultiRequest;
  return proto.payload.v1.Insert.MultiRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payload.v1.Insert.MultiRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payload.v1.Insert.MultiRequest}
 */
proto.payload.v1.Insert.MultiRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.payload.v1.Insert.Request;
      reader.readMessage(value,proto.payload.v1.Insert.Request.deserializeBinaryFromReader);
      msg.addRequests(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payload.v1.Insert.MultiRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payload.v1.Insert.MultiRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payload.v1.Insert.MultiRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payload.v1.Insert.MultiRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRequestsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.payload.v1.Insert.Request.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Request requests = 1;
 * @return {!Array<!proto.payload.v1.Insert.Request>}
 */
proto.payload.v1.Insert.MultiRequest.prototype.getRequestsList = function() {
  return /** @type{!Array<!proto.payload.v1.Insert.Request>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.payload.v1.Insert.Request, 1));
};


/**
 * @param {!Array<!proto.payload.v1.Insert.Request>} value
 * @return {!proto.payload.v1.Insert.MultiRequest} returns this
*/
proto.payload.v1.Insert.MultiRequest.prototype.setRequestsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.payload.v1.Insert.Request=} opt_value
 * @param {number=} opt_index
 * @return {!proto.payload.v1.Insert.Request}
 */
proto.payload.v1.Insert.MultiRequest.prototype.addRequests = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.payload.v1.Insert.Request, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.payload.v1.Insert.MultiRequest} returns this
 */
proto.payload.v1.Insert.MultiRequest.prototype.clearRequestsList = function() {
  return this.setRequestsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payload.v1.Insert.ObjectRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.payload.v1.Insert.ObjectRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payload.v1.Insert.ObjectRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payload.v1.Insert.ObjectRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    object: (f = msg.getObject()) && proto.payload.v1.Object.Blob.toObject(includeInstance, f),
    config: (f = msg.getConfig()) && proto.payload.v1.Insert.Config.toObject(includeInstance, f),
    vectorizer: (f = msg.getVectorizer()) && proto.payload.v1.Filter.Target.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payload.v1.Insert.ObjectRequest}
 */
proto.payload.v1.Insert.ObjectRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payload.v1.Insert.ObjectRequest;
  return proto.payload.v1.Insert.ObjectRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payload.v1.Insert.ObjectRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payload.v1.Insert.ObjectRequest}
 */
proto.payload.v1.Insert.ObjectRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.payload.v1.Object.Blob;
      reader.readMessage(value,proto.payload.v1.Object.Blob.deserializeBinaryFromReader);
      msg.setObject(value);
      break;
    case 2:
      var value = new proto.payload.v1.Insert.Config;
      reader.readMessage(value,proto.payload.v1.Insert.Config.deserializeBinaryFromReader);
      msg.setConfig(value);
      break;
    case 3:
      var value = new proto.payload.v1.Filter.Target;
      reader.readMessage(value,proto.payload.v1.Filter.Target.deserializeBinaryFromReader);
      msg.setVectorizer(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payload.v1.Insert.ObjectRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payload.v1.Insert.ObjectRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payload.v1.Insert.ObjectRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payload.v1.Insert.ObjectRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getObject();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.payload.v1.Object.Blob.serializeBinaryToWriter
    );
  }
  f = message.getConfig();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.payload.v1.Insert.Config.serializeBinaryToWriter
    );
  }
  f = message.getVectorizer();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.payload.v1.Filter.Target.serializeBinaryToWriter
    );
  }
};


/**
 * optional Object.Blob object = 1;
 * @return {?proto.payload.v1.Object.Blob}
 */
proto.payload.v1.Insert.ObjectRequest.prototype.getObject = function() {
  return /** @type{?proto.payload.v1.Object.Blob} */ (
    jspb.Message.getWrapperField(this, proto.payload.v1.Object.Blob, 1));
};


/**
 * @param {?proto.payload.v1.Object.Blob|undefined} value
 * @return {!proto.payload.v1.Insert.ObjectRequest} returns this
*/
proto.payload.v1.Insert.ObjectRequest.prototype.setObject = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.payload.v1.Insert.ObjectRequest} returns this
 */
proto.payload.v1.Insert.ObjectRequest.prototype.clearObject = function() {
  return this.setObject(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.payload.v1.Insert.ObjectRequest.prototype.hasObject = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Config config = 2;
 * @return {?proto.payload.v1.Insert.Config}
 */
proto.payload.v1.Insert.ObjectRequest.prototype.getConfig = function() {
  return /** @type{?proto.payload.v1.Insert.Config} */ (
    jspb.Message.getWrapperField(this, proto.payload.v1.Insert.Config, 2));
};


/**
 * @param {?proto.payload.v1.Insert.Config|undefined} value
 * @return {!proto.payload.v1.Insert.ObjectRequest} returns this
*/
proto.payload.v1.Insert.ObjectRequest.prototype.setConfig = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.payload.v1.Insert.ObjectRequest} returns this
 */
proto.payload.v1.Insert.ObjectRequest.prototype.clearConfig = function() {
  return this.setConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.payload.v1.Insert.ObjectRequest.prototype.hasConfig = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Filter.Target vectorizer = 3;
 * @return {?proto.payload.v1.Filter.Target}
 */
proto.payload.v1.Insert.ObjectRequest.prototype.getVectorizer = function() {
  return /** @type{?proto.payload.v1.Filter.Target} */ (
    jspb.Message.getWrapperField(this, proto.payload.v1.Filter.Target, 3));
};


/**
 * @param {?proto.payload.v1.Filter.Target|undefined} value
 * @return {!proto.payload.v1.Insert.ObjectRequest} returns this
*/
proto.payload.v1.Insert.ObjectRequest.prototype.setVectorizer = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.payload.v1.Insert.ObjectRequest} returns this
 */
proto.payload.v1.Insert.ObjectRequest.prototype.clearVectorizer = function() {
  return this.setVectorizer(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.payload.v1.Insert.ObjectRequest.prototype.hasVectorizer = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.payload.v1.Insert.MultiObjectRequest.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payload.v1.Insert.MultiObjectRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.payload.v1.Insert.MultiObjectRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payload.v1.Insert.MultiObjectRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payload.v1.Insert.MultiObjectRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    requestsList: jspb.Message.toObjectList(msg.getRequestsList(),
    proto.payload.v1.Insert.ObjectRequest.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payload.v1.Insert.MultiObjectRequest}
 */
proto.payload.v1.Insert.MultiObjectRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payload.v1.Insert.MultiObjectRequest;
  return proto.payload.v1.Insert.MultiObjectRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payload.v1.Insert.MultiObjectRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payload.v1.Insert.MultiObjectRequest}
 */
proto.payload.v1.Insert.MultiObjectRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.payload.v1.Insert.ObjectRequest;
      reader.readMessage(value,proto.payload.v1.Insert.ObjectRequest.deserializeBinaryFromReader);
      msg.addRequests(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payload.v1.Insert.MultiObjectRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payload.v1.Insert.MultiObjectRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payload.v1.Insert.MultiObjectRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payload.v1.Insert.MultiObjectRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRequestsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.payload.v1.Insert.ObjectRequest.serializeBinaryToWriter
    );
  }
};


/**
 * repeated ObjectRequest requests = 1;
 * @return {!Array<!proto.payload.v1.Insert.ObjectRequest>}
 */
proto.payload.v1.Insert.MultiObjectRequest.prototype.getRequestsList = function() {
  return /** @type{!Array<!proto.payload.v1.Insert.ObjectRequest>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.payload.v1.Insert.ObjectRequest, 1));
};


/**
 * @param {!Array<!proto.payload.v1.Insert.ObjectRequest>} value
 * @return {!proto.payload.v1.Insert.MultiObjectRequest} returns this
*/
proto.payload.v1.Insert.MultiObjectRequest.prototype.setRequestsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.payload.v1.Insert.ObjectRequest=} opt_value
 * @param {number=} opt_index
 * @return {!proto.payload.v1.Insert.ObjectRequest}
 */
proto.payload.v1.Insert.MultiObjectRequest.prototype.addRequests = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.payload.v1.Insert.ObjectRequest, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.payload.v1.Insert.MultiObjectRequest} returns this
 */
proto.payload.v1.Insert.MultiObjectRequest.prototype.clearRequestsList = function() {
  return this.setRequestsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payload.v1.Insert.Config.prototype.toObject = function(opt_includeInstance) {
  return proto.payload.v1.Insert.Config.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payload.v1.Insert.Config} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payload.v1.Insert.Config.toObject = function(includeInstance, msg) {
  var f, obj = {
    skipStrictExistCheck: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    filters: (f = msg.getFilters()) && proto.payload.v1.Filter.Config.toObject(includeInstance, f),
    timestamp: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payload.v1.Insert.Config}
 */
proto.payload.v1.Insert.Config.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payload.v1.Insert.Config;
  return proto.payload.v1.Insert.Config.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payload.v1.Insert.Config} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payload.v1.Insert.Config}
 */
proto.payload.v1.Insert.Config.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSkipStrictExistCheck(value);
      break;
    case 2:
      var value = new proto.payload.v1.Filter.Config;
      reader.readMessage(value,proto.payload.v1.Filter.Config.deserializeBinaryFromReader);
      msg.setFilters(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTimestamp(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payload.v1.Insert.Config.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payload.v1.Insert.Config.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payload.v1.Insert.Config} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payload.v1.Insert.Config.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSkipStrictExistCheck();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getFilters();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.payload.v1.Filter.Config.serializeBinaryToWriter
    );
  }
  f = message.getTimestamp();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
};


/**
 * optional bool skip_strict_exist_check = 1;
 * @return {boolean}
 */
proto.payload.v1.Insert.Config.prototype.getSkipStrictExistCheck = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.payload.v1.Insert.Config} returns this
 */
proto.payload.v1.Insert.Config.prototype.setSkipStrictExistCheck = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional Filter.Config filters = 2;
 * @return {?proto.payload.v1.Filter.Config}
 */
proto.payload.v1.Insert.Config.prototype.getFilters = function() {
  return /** @type{?proto.payload.v1.Filter.Config} */ (
    jspb.Message.getWrapperField(this, proto.payload.v1.Filter.Config, 2));
};


/**
 * @param {?proto.payload.v1.Filter.Config|undefined} value
 * @return {!proto.payload.v1.Insert.Config} returns this
*/
proto.payload.v1.Insert.Config.prototype.setFilters = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.payload.v1.Insert.Config} returns this
 */
proto.payload.v1.Insert.Config.prototype.clearFilters = function() {
  return this.setFilters(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.payload.v1.Insert.Config.prototype.hasFilters = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int64 timestamp = 3;
 * @return {number}
 */
proto.payload.v1.Insert.Config.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.payload.v1.Insert.Config} returns this
 */
proto.payload.v1.Insert.Config.prototype.setTimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payload.v1.Update.prototype.toObject = function(opt_includeInstance) {
  return proto.payload.v1.Update.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payload.v1.Update} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payload.v1.Update.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payload.v1.Update}
 */
proto.payload.v1.Update.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payload.v1.Update;
  return proto.payload.v1.Update.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payload.v1.Update} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payload.v1.Update}
 */
proto.payload.v1.Update.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payload.v1.Update.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payload.v1.Update.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payload.v1.Update} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payload.v1.Update.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payload.v1.Update.Request.prototype.toObject = function(opt_includeInstance) {
  return proto.payload.v1.Update.Request.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payload.v1.Update.Request} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payload.v1.Update.Request.toObject = function(includeInstance, msg) {
  var f, obj = {
    vector: (f = msg.getVector()) && proto.payload.v1.Object.Vector.toObject(includeInstance, f),
    config: (f = msg.getConfig()) && proto.payload.v1.Update.Config.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payload.v1.Update.Request}
 */
proto.payload.v1.Update.Request.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payload.v1.Update.Request;
  return proto.payload.v1.Update.Request.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payload.v1.Update.Request} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payload.v1.Update.Request}
 */
proto.payload.v1.Update.Request.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.payload.v1.Object.Vector;
      reader.readMessage(value,proto.payload.v1.Object.Vector.deserializeBinaryFromReader);
      msg.setVector(value);
      break;
    case 2:
      var value = new proto.payload.v1.Update.Config;
      reader.readMessage(value,proto.payload.v1.Update.Config.deserializeBinaryFromReader);
      msg.setConfig(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payload.v1.Update.Request.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payload.v1.Update.Request.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payload.v1.Update.Request} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payload.v1.Update.Request.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVector();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.payload.v1.Object.Vector.serializeBinaryToWriter
    );
  }
  f = message.getConfig();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.payload.v1.Update.Config.serializeBinaryToWriter
    );
  }
};


/**
 * optional Object.Vector vector = 1;
 * @return {?proto.payload.v1.Object.Vector}
 */
proto.payload.v1.Update.Request.prototype.getVector = function() {
  return /** @type{?proto.payload.v1.Object.Vector} */ (
    jspb.Message.getWrapperField(this, proto.payload.v1.Object.Vector, 1));
};


/**
 * @param {?proto.payload.v1.Object.Vector|undefined} value
 * @return {!proto.payload.v1.Update.Request} returns this
*/
proto.payload.v1.Update.Request.prototype.setVector = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.payload.v1.Update.Request} returns this
 */
proto.payload.v1.Update.Request.prototype.clearVector = function() {
  return this.setVector(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.payload.v1.Update.Request.prototype.hasVector = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Config config = 2;
 * @return {?proto.payload.v1.Update.Config}
 */
proto.payload.v1.Update.Request.prototype.getConfig = function() {
  return /** @type{?proto.payload.v1.Update.Config} */ (
    jspb.Message.getWrapperField(this, proto.payload.v1.Update.Config, 2));
};


/**
 * @param {?proto.payload.v1.Update.Config|undefined} value
 * @return {!proto.payload.v1.Update.Request} returns this
*/
proto.payload.v1.Update.Request.prototype.setConfig = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.payload.v1.Update.Request} returns this
 */
proto.payload.v1.Update.Request.prototype.clearConfig = function() {
  return this.setConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.payload.v1.Update.Request.prototype.hasConfig = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.payload.v1.Update.MultiRequest.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payload.v1.Update.MultiRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.payload.v1.Update.MultiRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payload.v1.Update.MultiRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payload.v1.Update.MultiRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    requestsList: jspb.Message.toObjectList(msg.getRequestsList(),
    proto.payload.v1.Update.Request.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payload.v1.Update.MultiRequest}
 */
proto.payload.v1.Update.MultiRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payload.v1.Update.MultiRequest;
  return proto.payload.v1.Update.MultiRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payload.v1.Update.MultiRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payload.v1.Update.MultiRequest}
 */
proto.payload.v1.Update.MultiRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.payload.v1.Update.Request;
      reader.readMessage(value,proto.payload.v1.Update.Request.deserializeBinaryFromReader);
      msg.addRequests(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payload.v1.Update.MultiRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payload.v1.Update.MultiRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payload.v1.Update.MultiRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payload.v1.Update.MultiRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRequestsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.payload.v1.Update.Request.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Request requests = 1;
 * @return {!Array<!proto.payload.v1.Update.Request>}
 */
proto.payload.v1.Update.MultiRequest.prototype.getRequestsList = function() {
  return /** @type{!Array<!proto.payload.v1.Update.Request>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.payload.v1.Update.Request, 1));
};


/**
 * @param {!Array<!proto.payload.v1.Update.Request>} value
 * @return {!proto.payload.v1.Update.MultiRequest} returns this
*/
proto.payload.v1.Update.MultiRequest.prototype.setRequestsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.payload.v1.Update.Request=} opt_value
 * @param {number=} opt_index
 * @return {!proto.payload.v1.Update.Request}
 */
proto.payload.v1.Update.MultiRequest.prototype.addRequests = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.payload.v1.Update.Request, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.payload.v1.Update.MultiRequest} returns this
 */
proto.payload.v1.Update.MultiRequest.prototype.clearRequestsList = function() {
  return this.setRequestsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payload.v1.Update.ObjectRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.payload.v1.Update.ObjectRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payload.v1.Update.ObjectRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payload.v1.Update.ObjectRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    object: (f = msg.getObject()) && proto.payload.v1.Object.Blob.toObject(includeInstance, f),
    config: (f = msg.getConfig()) && proto.payload.v1.Update.Config.toObject(includeInstance, f),
    vectorizer: (f = msg.getVectorizer()) && proto.payload.v1.Filter.Target.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payload.v1.Update.ObjectRequest}
 */
proto.payload.v1.Update.ObjectRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payload.v1.Update.ObjectRequest;
  return proto.payload.v1.Update.ObjectRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payload.v1.Update.ObjectRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payload.v1.Update.ObjectRequest}
 */
proto.payload.v1.Update.ObjectRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.payload.v1.Object.Blob;
      reader.readMessage(value,proto.payload.v1.Object.Blob.deserializeBinaryFromReader);
      msg.setObject(value);
      break;
    case 2:
      var value = new proto.payload.v1.Update.Config;
      reader.readMessage(value,proto.payload.v1.Update.Config.deserializeBinaryFromReader);
      msg.setConfig(value);
      break;
    case 3:
      var value = new proto.payload.v1.Filter.Target;
      reader.readMessage(value,proto.payload.v1.Filter.Target.deserializeBinaryFromReader);
      msg.setVectorizer(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payload.v1.Update.ObjectRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payload.v1.Update.ObjectRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payload.v1.Update.ObjectRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payload.v1.Update.ObjectRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getObject();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.payload.v1.Object.Blob.serializeBinaryToWriter
    );
  }
  f = message.getConfig();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.payload.v1.Update.Config.serializeBinaryToWriter
    );
  }
  f = message.getVectorizer();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.payload.v1.Filter.Target.serializeBinaryToWriter
    );
  }
};


/**
 * optional Object.Blob object = 1;
 * @return {?proto.payload.v1.Object.Blob}
 */
proto.payload.v1.Update.ObjectRequest.prototype.getObject = function() {
  return /** @type{?proto.payload.v1.Object.Blob} */ (
    jspb.Message.getWrapperField(this, proto.payload.v1.Object.Blob, 1));
};


/**
 * @param {?proto.payload.v1.Object.Blob|undefined} value
 * @return {!proto.payload.v1.Update.ObjectRequest} returns this
*/
proto.payload.v1.Update.ObjectRequest.prototype.setObject = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.payload.v1.Update.ObjectRequest} returns this
 */
proto.payload.v1.Update.ObjectRequest.prototype.clearObject = function() {
  return this.setObject(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.payload.v1.Update.ObjectRequest.prototype.hasObject = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Config config = 2;
 * @return {?proto.payload.v1.Update.Config}
 */
proto.payload.v1.Update.ObjectRequest.prototype.getConfig = function() {
  return /** @type{?proto.payload.v1.Update.Config} */ (
    jspb.Message.getWrapperField(this, proto.payload.v1.Update.Config, 2));
};


/**
 * @param {?proto.payload.v1.Update.Config|undefined} value
 * @return {!proto.payload.v1.Update.ObjectRequest} returns this
*/
proto.payload.v1.Update.ObjectRequest.prototype.setConfig = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.payload.v1.Update.ObjectRequest} returns this
 */
proto.payload.v1.Update.ObjectRequest.prototype.clearConfig = function() {
  return this.setConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.payload.v1.Update.ObjectRequest.prototype.hasConfig = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Filter.Target vectorizer = 3;
 * @return {?proto.payload.v1.Filter.Target}
 */
proto.payload.v1.Update.ObjectRequest.prototype.getVectorizer = function() {
  return /** @type{?proto.payload.v1.Filter.Target} */ (
    jspb.Message.getWrapperField(this, proto.payload.v1.Filter.Target, 3));
};


/**
 * @param {?proto.payload.v1.Filter.Target|undefined} value
 * @return {!proto.payload.v1.Update.ObjectRequest} returns this
*/
proto.payload.v1.Update.ObjectRequest.prototype.setVectorizer = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.payload.v1.Update.ObjectRequest} returns this
 */
proto.payload.v1.Update.ObjectRequest.prototype.clearVectorizer = function() {
  return this.setVectorizer(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.payload.v1.Update.ObjectRequest.prototype.hasVectorizer = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.payload.v1.Update.MultiObjectRequest.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payload.v1.Update.MultiObjectRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.payload.v1.Update.MultiObjectRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payload.v1.Update.MultiObjectRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payload.v1.Update.MultiObjectRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    requestsList: jspb.Message.toObjectList(msg.getRequestsList(),
    proto.payload.v1.Update.ObjectRequest.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payload.v1.Update.MultiObjectRequest}
 */
proto.payload.v1.Update.MultiObjectRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payload.v1.Update.MultiObjectRequest;
  return proto.payload.v1.Update.MultiObjectRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payload.v1.Update.MultiObjectRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payload.v1.Update.MultiObjectRequest}
 */
proto.payload.v1.Update.MultiObjectRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.payload.v1.Update.ObjectRequest;
      reader.readMessage(value,proto.payload.v1.Update.ObjectRequest.deserializeBinaryFromReader);
      msg.addRequests(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payload.v1.Update.MultiObjectRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payload.v1.Update.MultiObjectRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payload.v1.Update.MultiObjectRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payload.v1.Update.MultiObjectRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRequestsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.payload.v1.Update.ObjectRequest.serializeBinaryToWriter
    );
  }
};


/**
 * repeated ObjectRequest requests = 1;
 * @return {!Array<!proto.payload.v1.Update.ObjectRequest>}
 */
proto.payload.v1.Update.MultiObjectRequest.prototype.getRequestsList = function() {
  return /** @type{!Array<!proto.payload.v1.Update.ObjectRequest>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.payload.v1.Update.ObjectRequest, 1));
};


/**
 * @param {!Array<!proto.payload.v1.Update.ObjectRequest>} value
 * @return {!proto.payload.v1.Update.MultiObjectRequest} returns this
*/
proto.payload.v1.Update.MultiObjectRequest.prototype.setRequestsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.payload.v1.Update.ObjectRequest=} opt_value
 * @param {number=} opt_index
 * @return {!proto.payload.v1.Update.ObjectRequest}
 */
proto.payload.v1.Update.MultiObjectRequest.prototype.addRequests = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.payload.v1.Update.ObjectRequest, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.payload.v1.Update.MultiObjectRequest} returns this
 */
proto.payload.v1.Update.MultiObjectRequest.prototype.clearRequestsList = function() {
  return this.setRequestsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payload.v1.Update.Config.prototype.toObject = function(opt_includeInstance) {
  return proto.payload.v1.Update.Config.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payload.v1.Update.Config} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payload.v1.Update.Config.toObject = function(includeInstance, msg) {
  var f, obj = {
    skipStrictExistCheck: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    filters: (f = msg.getFilters()) && proto.payload.v1.Filter.Config.toObject(includeInstance, f),
    timestamp: jspb.Message.getFieldWithDefault(msg, 3, 0),
    disableBalancedUpdate: jspb.Message.getBooleanFieldWithDefault(msg, 4, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payload.v1.Update.Config}
 */
proto.payload.v1.Update.Config.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payload.v1.Update.Config;
  return proto.payload.v1.Update.Config.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payload.v1.Update.Config} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payload.v1.Update.Config}
 */
proto.payload.v1.Update.Config.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSkipStrictExistCheck(value);
      break;
    case 2:
      var value = new proto.payload.v1.Filter.Config;
      reader.readMessage(value,proto.payload.v1.Filter.Config.deserializeBinaryFromReader);
      msg.setFilters(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTimestamp(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDisableBalancedUpdate(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payload.v1.Update.Config.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payload.v1.Update.Config.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payload.v1.Update.Config} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payload.v1.Update.Config.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSkipStrictExistCheck();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getFilters();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.payload.v1.Filter.Config.serializeBinaryToWriter
    );
  }
  f = message.getTimestamp();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getDisableBalancedUpdate();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
};


/**
 * optional bool skip_strict_exist_check = 1;
 * @return {boolean}
 */
proto.payload.v1.Update.Config.prototype.getSkipStrictExistCheck = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.payload.v1.Update.Config} returns this
 */
proto.payload.v1.Update.Config.prototype.setSkipStrictExistCheck = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional Filter.Config filters = 2;
 * @return {?proto.payload.v1.Filter.Config}
 */
proto.payload.v1.Update.Config.prototype.getFilters = function() {
  return /** @type{?proto.payload.v1.Filter.Config} */ (
    jspb.Message.getWrapperField(this, proto.payload.v1.Filter.Config, 2));
};


/**
 * @param {?proto.payload.v1.Filter.Config|undefined} value
 * @return {!proto.payload.v1.Update.Config} returns this
*/
proto.payload.v1.Update.Config.prototype.setFilters = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.payload.v1.Update.Config} returns this
 */
proto.payload.v1.Update.Config.prototype.clearFilters = function() {
  return this.setFilters(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.payload.v1.Update.Config.prototype.hasFilters = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int64 timestamp = 3;
 * @return {number}
 */
proto.payload.v1.Update.Config.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.payload.v1.Update.Config} returns this
 */
proto.payload.v1.Update.Config.prototype.setTimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional bool disable_balanced_update = 4;
 * @return {boolean}
 */
proto.payload.v1.Update.Config.prototype.getDisableBalancedUpdate = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.payload.v1.Update.Config} returns this
 */
proto.payload.v1.Update.Config.prototype.setDisableBalancedUpdate = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payload.v1.Upsert.prototype.toObject = function(opt_includeInstance) {
  return proto.payload.v1.Upsert.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payload.v1.Upsert} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payload.v1.Upsert.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payload.v1.Upsert}
 */
proto.payload.v1.Upsert.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payload.v1.Upsert;
  return proto.payload.v1.Upsert.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payload.v1.Upsert} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payload.v1.Upsert}
 */
proto.payload.v1.Upsert.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payload.v1.Upsert.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payload.v1.Upsert.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payload.v1.Upsert} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payload.v1.Upsert.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payload.v1.Upsert.Request.prototype.toObject = function(opt_includeInstance) {
  return proto.payload.v1.Upsert.Request.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payload.v1.Upsert.Request} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payload.v1.Upsert.Request.toObject = function(includeInstance, msg) {
  var f, obj = {
    vector: (f = msg.getVector()) && proto.payload.v1.Object.Vector.toObject(includeInstance, f),
    config: (f = msg.getConfig()) && proto.payload.v1.Upsert.Config.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payload.v1.Upsert.Request}
 */
proto.payload.v1.Upsert.Request.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payload.v1.Upsert.Request;
  return proto.payload.v1.Upsert.Request.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payload.v1.Upsert.Request} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payload.v1.Upsert.Request}
 */
proto.payload.v1.Upsert.Request.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.payload.v1.Object.Vector;
      reader.readMessage(value,proto.payload.v1.Object.Vector.deserializeBinaryFromReader);
      msg.setVector(value);
      break;
    case 2:
      var value = new proto.payload.v1.Upsert.Config;
      reader.readMessage(value,proto.payload.v1.Upsert.Config.deserializeBinaryFromReader);
      msg.setConfig(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payload.v1.Upsert.Request.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payload.v1.Upsert.Request.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payload.v1.Upsert.Request} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payload.v1.Upsert.Request.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVector();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.payload.v1.Object.Vector.serializeBinaryToWriter
    );
  }
  f = message.getConfig();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.payload.v1.Upsert.Config.serializeBinaryToWriter
    );
  }
};


/**
 * optional Object.Vector vector = 1;
 * @return {?proto.payload.v1.Object.Vector}
 */
proto.payload.v1.Upsert.Request.prototype.getVector = function() {
  return /** @type{?proto.payload.v1.Object.Vector} */ (
    jspb.Message.getWrapperField(this, proto.payload.v1.Object.Vector, 1));
};


/**
 * @param {?proto.payload.v1.Object.Vector|undefined} value
 * @return {!proto.payload.v1.Upsert.Request} returns this
*/
proto.payload.v1.Upsert.Request.prototype.setVector = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.payload.v1.Upsert.Request} returns this
 */
proto.payload.v1.Upsert.Request.prototype.clearVector = function() {
  return this.setVector(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.payload.v1.Upsert.Request.prototype.hasVector = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Config config = 2;
 * @return {?proto.payload.v1.Upsert.Config}
 */
proto.payload.v1.Upsert.Request.prototype.getConfig = function() {
  return /** @type{?proto.payload.v1.Upsert.Config} */ (
    jspb.Message.getWrapperField(this, proto.payload.v1.Upsert.Config, 2));
};


/**
 * @param {?proto.payload.v1.Upsert.Config|undefined} value
 * @return {!proto.payload.v1.Upsert.Request} returns this
*/
proto.payload.v1.Upsert.Request.prototype.setConfig = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.payload.v1.Upsert.Request} returns this
 */
proto.payload.v1.Upsert.Request.prototype.clearConfig = function() {
  return this.setConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.payload.v1.Upsert.Request.prototype.hasConfig = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.payload.v1.Upsert.MultiRequest.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payload.v1.Upsert.MultiRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.payload.v1.Upsert.MultiRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payload.v1.Upsert.MultiRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payload.v1.Upsert.MultiRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    requestsList: jspb.Message.toObjectList(msg.getRequestsList(),
    proto.payload.v1.Upsert.Request.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payload.v1.Upsert.MultiRequest}
 */
proto.payload.v1.Upsert.MultiRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payload.v1.Upsert.MultiRequest;
  return proto.payload.v1.Upsert.MultiRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payload.v1.Upsert.MultiRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payload.v1.Upsert.MultiRequest}
 */
proto.payload.v1.Upsert.MultiRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.payload.v1.Upsert.Request;
      reader.readMessage(value,proto.payload.v1.Upsert.Request.deserializeBinaryFromReader);
      msg.addRequests(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payload.v1.Upsert.MultiRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payload.v1.Upsert.MultiRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payload.v1.Upsert.MultiRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payload.v1.Upsert.MultiRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRequestsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.payload.v1.Upsert.Request.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Request requests = 1;
 * @return {!Array<!proto.payload.v1.Upsert.Request>}
 */
proto.payload.v1.Upsert.MultiRequest.prototype.getRequestsList = function() {
  return /** @type{!Array<!proto.payload.v1.Upsert.Request>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.payload.v1.Upsert.Request, 1));
};


/**
 * @param {!Array<!proto.payload.v1.Upsert.Request>} value
 * @return {!proto.payload.v1.Upsert.MultiRequest} returns this
*/
proto.payload.v1.Upsert.MultiRequest.prototype.setRequestsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.payload.v1.Upsert.Request=} opt_value
 * @param {number=} opt_index
 * @return {!proto.payload.v1.Upsert.Request}
 */
proto.payload.v1.Upsert.MultiRequest.prototype.addRequests = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.payload.v1.Upsert.Request, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.payload.v1.Upsert.MultiRequest} returns this
 */
proto.payload.v1.Upsert.MultiRequest.prototype.clearRequestsList = function() {
  return this.setRequestsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payload.v1.Upsert.ObjectRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.payload.v1.Upsert.ObjectRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payload.v1.Upsert.ObjectRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payload.v1.Upsert.ObjectRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    object: (f = msg.getObject()) && proto.payload.v1.Object.Blob.toObject(includeInstance, f),
    config: (f = msg.getConfig()) && proto.payload.v1.Upsert.Config.toObject(includeInstance, f),
    vectorizer: (f = msg.getVectorizer()) && proto.payload.v1.Filter.Target.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payload.v1.Upsert.ObjectRequest}
 */
proto.payload.v1.Upsert.ObjectRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payload.v1.Upsert.ObjectRequest;
  return proto.payload.v1.Upsert.ObjectRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payload.v1.Upsert.ObjectRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payload.v1.Upsert.ObjectRequest}
 */
proto.payload.v1.Upsert.ObjectRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.payload.v1.Object.Blob;
      reader.readMessage(value,proto.payload.v1.Object.Blob.deserializeBinaryFromReader);
      msg.setObject(value);
      break;
    case 2:
      var value = new proto.payload.v1.Upsert.Config;
      reader.readMessage(value,proto.payload.v1.Upsert.Config.deserializeBinaryFromReader);
      msg.setConfig(value);
      break;
    case 3:
      var value = new proto.payload.v1.Filter.Target;
      reader.readMessage(value,proto.payload.v1.Filter.Target.deserializeBinaryFromReader);
      msg.setVectorizer(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payload.v1.Upsert.ObjectRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payload.v1.Upsert.ObjectRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payload.v1.Upsert.ObjectRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payload.v1.Upsert.ObjectRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getObject();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.payload.v1.Object.Blob.serializeBinaryToWriter
    );
  }
  f = message.getConfig();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.payload.v1.Upsert.Config.serializeBinaryToWriter
    );
  }
  f = message.getVectorizer();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.payload.v1.Filter.Target.serializeBinaryToWriter
    );
  }
};


/**
 * optional Object.Blob object = 1;
 * @return {?proto.payload.v1.Object.Blob}
 */
proto.payload.v1.Upsert.ObjectRequest.prototype.getObject = function() {
  return /** @type{?proto.payload.v1.Object.Blob} */ (
    jspb.Message.getWrapperField(this, proto.payload.v1.Object.Blob, 1));
};


/**
 * @param {?proto.payload.v1.Object.Blob|undefined} value
 * @return {!proto.payload.v1.Upsert.ObjectRequest} returns this
*/
proto.payload.v1.Upsert.ObjectRequest.prototype.setObject = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.payload.v1.Upsert.ObjectRequest} returns this
 */
proto.payload.v1.Upsert.ObjectRequest.prototype.clearObject = function() {
  return this.setObject(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.payload.v1.Upsert.ObjectRequest.prototype.hasObject = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Config config = 2;
 * @return {?proto.payload.v1.Upsert.Config}
 */
proto.payload.v1.Upsert.ObjectRequest.prototype.getConfig = function() {
  return /** @type{?proto.payload.v1.Upsert.Config} */ (
    jspb.Message.getWrapperField(this, proto.payload.v1.Upsert.Config, 2));
};


/**
 * @param {?proto.payload.v1.Upsert.Config|undefined} value
 * @return {!proto.payload.v1.Upsert.ObjectRequest} returns this
*/
proto.payload.v1.Upsert.ObjectRequest.prototype.setConfig = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.payload.v1.Upsert.ObjectRequest} returns this
 */
proto.payload.v1.Upsert.ObjectRequest.prototype.clearConfig = function() {
  return this.setConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.payload.v1.Upsert.ObjectRequest.prototype.hasConfig = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Filter.Target vectorizer = 3;
 * @return {?proto.payload.v1.Filter.Target}
 */
proto.payload.v1.Upsert.ObjectRequest.prototype.getVectorizer = function() {
  return /** @type{?proto.payload.v1.Filter.Target} */ (
    jspb.Message.getWrapperField(this, proto.payload.v1.Filter.Target, 3));
};


/**
 * @param {?proto.payload.v1.Filter.Target|undefined} value
 * @return {!proto.payload.v1.Upsert.ObjectRequest} returns this
*/
proto.payload.v1.Upsert.ObjectRequest.prototype.setVectorizer = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.payload.v1.Upsert.ObjectRequest} returns this
 */
proto.payload.v1.Upsert.ObjectRequest.prototype.clearVectorizer = function() {
  return this.setVectorizer(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.payload.v1.Upsert.ObjectRequest.prototype.hasVectorizer = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.payload.v1.Upsert.MultiObjectRequest.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payload.v1.Upsert.MultiObjectRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.payload.v1.Upsert.MultiObjectRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payload.v1.Upsert.MultiObjectRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payload.v1.Upsert.MultiObjectRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    requestsList: jspb.Message.toObjectList(msg.getRequestsList(),
    proto.payload.v1.Upsert.ObjectRequest.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payload.v1.Upsert.MultiObjectRequest}
 */
proto.payload.v1.Upsert.MultiObjectRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payload.v1.Upsert.MultiObjectRequest;
  return proto.payload.v1.Upsert.MultiObjectRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payload.v1.Upsert.MultiObjectRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payload.v1.Upsert.MultiObjectRequest}
 */
proto.payload.v1.Upsert.MultiObjectRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.payload.v1.Upsert.ObjectRequest;
      reader.readMessage(value,proto.payload.v1.Upsert.ObjectRequest.deserializeBinaryFromReader);
      msg.addRequests(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payload.v1.Upsert.MultiObjectRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payload.v1.Upsert.MultiObjectRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payload.v1.Upsert.MultiObjectRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payload.v1.Upsert.MultiObjectRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRequestsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.payload.v1.Upsert.ObjectRequest.serializeBinaryToWriter
    );
  }
};


/**
 * repeated ObjectRequest requests = 1;
 * @return {!Array<!proto.payload.v1.Upsert.ObjectRequest>}
 */
proto.payload.v1.Upsert.MultiObjectRequest.prototype.getRequestsList = function() {
  return /** @type{!Array<!proto.payload.v1.Upsert.ObjectRequest>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.payload.v1.Upsert.ObjectRequest, 1));
};


/**
 * @param {!Array<!proto.payload.v1.Upsert.ObjectRequest>} value
 * @return {!proto.payload.v1.Upsert.MultiObjectRequest} returns this
*/
proto.payload.v1.Upsert.MultiObjectRequest.prototype.setRequestsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.payload.v1.Upsert.ObjectRequest=} opt_value
 * @param {number=} opt_index
 * @return {!proto.payload.v1.Upsert.ObjectRequest}
 */
proto.payload.v1.Upsert.MultiObjectRequest.prototype.addRequests = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.payload.v1.Upsert.ObjectRequest, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.payload.v1.Upsert.MultiObjectRequest} returns this
 */
proto.payload.v1.Upsert.MultiObjectRequest.prototype.clearRequestsList = function() {
  return this.setRequestsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payload.v1.Upsert.Config.prototype.toObject = function(opt_includeInstance) {
  return proto.payload.v1.Upsert.Config.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payload.v1.Upsert.Config} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payload.v1.Upsert.Config.toObject = function(includeInstance, msg) {
  var f, obj = {
    skipStrictExistCheck: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    filters: (f = msg.getFilters()) && proto.payload.v1.Filter.Config.toObject(includeInstance, f),
    timestamp: jspb.Message.getFieldWithDefault(msg, 3, 0),
    disableBalancedUpdate: jspb.Message.getBooleanFieldWithDefault(msg, 4, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payload.v1.Upsert.Config}
 */
proto.payload.v1.Upsert.Config.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payload.v1.Upsert.Config;
  return proto.payload.v1.Upsert.Config.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payload.v1.Upsert.Config} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payload.v1.Upsert.Config}
 */
proto.payload.v1.Upsert.Config.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSkipStrictExistCheck(value);
      break;
    case 2:
      var value = new proto.payload.v1.Filter.Config;
      reader.readMessage(value,proto.payload.v1.Filter.Config.deserializeBinaryFromReader);
      msg.setFilters(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTimestamp(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDisableBalancedUpdate(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payload.v1.Upsert.Config.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payload.v1.Upsert.Config.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payload.v1.Upsert.Config} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payload.v1.Upsert.Config.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSkipStrictExistCheck();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getFilters();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.payload.v1.Filter.Config.serializeBinaryToWriter
    );
  }
  f = message.getTimestamp();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getDisableBalancedUpdate();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
};


/**
 * optional bool skip_strict_exist_check = 1;
 * @return {boolean}
 */
proto.payload.v1.Upsert.Config.prototype.getSkipStrictExistCheck = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.payload.v1.Upsert.Config} returns this
 */
proto.payload.v1.Upsert.Config.prototype.setSkipStrictExistCheck = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional Filter.Config filters = 2;
 * @return {?proto.payload.v1.Filter.Config}
 */
proto.payload.v1.Upsert.Config.prototype.getFilters = function() {
  return /** @type{?proto.payload.v1.Filter.Config} */ (
    jspb.Message.getWrapperField(this, proto.payload.v1.Filter.Config, 2));
};


/**
 * @param {?proto.payload.v1.Filter.Config|undefined} value
 * @return {!proto.payload.v1.Upsert.Config} returns this
*/
proto.payload.v1.Upsert.Config.prototype.setFilters = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.payload.v1.Upsert.Config} returns this
 */
proto.payload.v1.Upsert.Config.prototype.clearFilters = function() {
  return this.setFilters(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.payload.v1.Upsert.Config.prototype.hasFilters = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int64 timestamp = 3;
 * @return {number}
 */
proto.payload.v1.Upsert.Config.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.payload.v1.Upsert.Config} returns this
 */
proto.payload.v1.Upsert.Config.prototype.setTimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional bool disable_balanced_update = 4;
 * @return {boolean}
 */
proto.payload.v1.Upsert.Config.prototype.getDisableBalancedUpdate = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.payload.v1.Upsert.Config} returns this
 */
proto.payload.v1.Upsert.Config.prototype.setDisableBalancedUpdate = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payload.v1.Remove.prototype.toObject = function(opt_includeInstance) {
  return proto.payload.v1.Remove.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payload.v1.Remove} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payload.v1.Remove.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payload.v1.Remove}
 */
proto.payload.v1.Remove.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payload.v1.Remove;
  return proto.payload.v1.Remove.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payload.v1.Remove} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payload.v1.Remove}
 */
proto.payload.v1.Remove.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payload.v1.Remove.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payload.v1.Remove.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payload.v1.Remove} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payload.v1.Remove.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payload.v1.Remove.Request.prototype.toObject = function(opt_includeInstance) {
  return proto.payload.v1.Remove.Request.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payload.v1.Remove.Request} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payload.v1.Remove.Request.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: (f = msg.getId()) && proto.payload.v1.Object.ID.toObject(includeInstance, f),
    config: (f = msg.getConfig()) && proto.payload.v1.Remove.Config.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payload.v1.Remove.Request}
 */
proto.payload.v1.Remove.Request.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payload.v1.Remove.Request;
  return proto.payload.v1.Remove.Request.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payload.v1.Remove.Request} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payload.v1.Remove.Request}
 */
proto.payload.v1.Remove.Request.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.payload.v1.Object.ID;
      reader.readMessage(value,proto.payload.v1.Object.ID.deserializeBinaryFromReader);
      msg.setId(value);
      break;
    case 2:
      var value = new proto.payload.v1.Remove.Config;
      reader.readMessage(value,proto.payload.v1.Remove.Config.deserializeBinaryFromReader);
      msg.setConfig(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payload.v1.Remove.Request.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payload.v1.Remove.Request.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payload.v1.Remove.Request} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payload.v1.Remove.Request.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.payload.v1.Object.ID.serializeBinaryToWriter
    );
  }
  f = message.getConfig();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.payload.v1.Remove.Config.serializeBinaryToWriter
    );
  }
};


/**
 * optional Object.ID id = 1;
 * @return {?proto.payload.v1.Object.ID}
 */
proto.payload.v1.Remove.Request.prototype.getId = function() {
  return /** @type{?proto.payload.v1.Object.ID} */ (
    jspb.Message.getWrapperField(this, proto.payload.v1.Object.ID, 1));
};


/**
 * @param {?proto.payload.v1.Object.ID|undefined} value
 * @return {!proto.payload.v1.Remove.Request} returns this
*/
proto.payload.v1.Remove.Request.prototype.setId = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.payload.v1.Remove.Request} returns this
 */
proto.payload.v1.Remove.Request.prototype.clearId = function() {
  return this.setId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.payload.v1.Remove.Request.prototype.hasId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Config config = 2;
 * @return {?proto.payload.v1.Remove.Config}
 */
proto.payload.v1.Remove.Request.prototype.getConfig = function() {
  return /** @type{?proto.payload.v1.Remove.Config} */ (
    jspb.Message.getWrapperField(this, proto.payload.v1.Remove.Config, 2));
};


/**
 * @param {?proto.payload.v1.Remove.Config|undefined} value
 * @return {!proto.payload.v1.Remove.Request} returns this
*/
proto.payload.v1.Remove.Request.prototype.setConfig = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.payload.v1.Remove.Request} returns this
 */
proto.payload.v1.Remove.Request.prototype.clearConfig = function() {
  return this.setConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.payload.v1.Remove.Request.prototype.hasConfig = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.payload.v1.Remove.MultiRequest.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payload.v1.Remove.MultiRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.payload.v1.Remove.MultiRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payload.v1.Remove.MultiRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payload.v1.Remove.MultiRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    requestsList: jspb.Message.toObjectList(msg.getRequestsList(),
    proto.payload.v1.Remove.Request.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payload.v1.Remove.MultiRequest}
 */
proto.payload.v1.Remove.MultiRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payload.v1.Remove.MultiRequest;
  return proto.payload.v1.Remove.MultiRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payload.v1.Remove.MultiRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payload.v1.Remove.MultiRequest}
 */
proto.payload.v1.Remove.MultiRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.payload.v1.Remove.Request;
      reader.readMessage(value,proto.payload.v1.Remove.Request.deserializeBinaryFromReader);
      msg.addRequests(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payload.v1.Remove.MultiRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payload.v1.Remove.MultiRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payload.v1.Remove.MultiRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payload.v1.Remove.MultiRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRequestsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.payload.v1.Remove.Request.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Request requests = 1;
 * @return {!Array<!proto.payload.v1.Remove.Request>}
 */
proto.payload.v1.Remove.MultiRequest.prototype.getRequestsList = function() {
  return /** @type{!Array<!proto.payload.v1.Remove.Request>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.payload.v1.Remove.Request, 1));
};


/**
 * @param {!Array<!proto.payload.v1.Remove.Request>} value
 * @return {!proto.payload.v1.Remove.MultiRequest} returns this
*/
proto.payload.v1.Remove.MultiRequest.prototype.setRequestsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.payload.v1.Remove.Request=} opt_value
 * @param {number=} opt_index
 * @return {!proto.payload.v1.Remove.Request}
 */
proto.payload.v1.Remove.MultiRequest.prototype.addRequests = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.payload.v1.Remove.Request, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.payload.v1.Remove.MultiRequest} returns this
 */
proto.payload.v1.Remove.MultiRequest.prototype.clearRequestsList = function() {
  return this.setRequestsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payload.v1.Remove.Config.prototype.toObject = function(opt_includeInstance) {
  return proto.payload.v1.Remove.Config.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payload.v1.Remove.Config} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payload.v1.Remove.Config.toObject = function(includeInstance, msg) {
  var f, obj = {
    skipStrictExistCheck: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    timestamp: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payload.v1.Remove.Config}
 */
proto.payload.v1.Remove.Config.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payload.v1.Remove.Config;
  return proto.payload.v1.Remove.Config.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payload.v1.Remove.Config} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payload.v1.Remove.Config}
 */
proto.payload.v1.Remove.Config.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSkipStrictExistCheck(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTimestamp(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payload.v1.Remove.Config.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payload.v1.Remove.Config.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payload.v1.Remove.Config} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payload.v1.Remove.Config.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSkipStrictExistCheck();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getTimestamp();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
};


/**
 * optional bool skip_strict_exist_check = 1;
 * @return {boolean}
 */
proto.payload.v1.Remove.Config.prototype.getSkipStrictExistCheck = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.payload.v1.Remove.Config} returns this
 */
proto.payload.v1.Remove.Config.prototype.setSkipStrictExistCheck = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional int64 timestamp = 3;
 * @return {number}
 */
proto.payload.v1.Remove.Config.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.payload.v1.Remove.Config} returns this
 */
proto.payload.v1.Remove.Config.prototype.setTimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payload.v1.Object.prototype.toObject = function(opt_includeInstance) {
  return proto.payload.v1.Object.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payload.v1.Object} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payload.v1.Object.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payload.v1.Object}
 */
proto.payload.v1.Object.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payload.v1.Object;
  return proto.payload.v1.Object.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payload.v1.Object} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payload.v1.Object}
 */
proto.payload.v1.Object.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payload.v1.Object.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payload.v1.Object.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payload.v1.Object} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payload.v1.Object.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payload.v1.Object.VectorRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.payload.v1.Object.VectorRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payload.v1.Object.VectorRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payload.v1.Object.VectorRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: (f = msg.getId()) && proto.payload.v1.Object.ID.toObject(includeInstance, f),
    filters: (f = msg.getFilters()) && proto.payload.v1.Filter.Config.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payload.v1.Object.VectorRequest}
 */
proto.payload.v1.Object.VectorRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payload.v1.Object.VectorRequest;
  return proto.payload.v1.Object.VectorRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payload.v1.Object.VectorRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payload.v1.Object.VectorRequest}
 */
proto.payload.v1.Object.VectorRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.payload.v1.Object.ID;
      reader.readMessage(value,proto.payload.v1.Object.ID.deserializeBinaryFromReader);
      msg.setId(value);
      break;
    case 2:
      var value = new proto.payload.v1.Filter.Config;
      reader.readMessage(value,proto.payload.v1.Filter.Config.deserializeBinaryFromReader);
      msg.setFilters(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payload.v1.Object.VectorRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payload.v1.Object.VectorRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payload.v1.Object.VectorRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payload.v1.Object.VectorRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.payload.v1.Object.ID.serializeBinaryToWriter
    );
  }
  f = message.getFilters();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.payload.v1.Filter.Config.serializeBinaryToWriter
    );
  }
};


/**
 * optional ID id = 1;
 * @return {?proto.payload.v1.Object.ID}
 */
proto.payload.v1.Object.VectorRequest.prototype.getId = function() {
  return /** @type{?proto.payload.v1.Object.ID} */ (
    jspb.Message.getWrapperField(this, proto.payload.v1.Object.ID, 1));
};


/**
 * @param {?proto.payload.v1.Object.ID|undefined} value
 * @return {!proto.payload.v1.Object.VectorRequest} returns this
*/
proto.payload.v1.Object.VectorRequest.prototype.setId = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.payload.v1.Object.VectorRequest} returns this
 */
proto.payload.v1.Object.VectorRequest.prototype.clearId = function() {
  return this.setId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.payload.v1.Object.VectorRequest.prototype.hasId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Filter.Config filters = 2;
 * @return {?proto.payload.v1.Filter.Config}
 */
proto.payload.v1.Object.VectorRequest.prototype.getFilters = function() {
  return /** @type{?proto.payload.v1.Filter.Config} */ (
    jspb.Message.getWrapperField(this, proto.payload.v1.Filter.Config, 2));
};


/**
 * @param {?proto.payload.v1.Filter.Config|undefined} value
 * @return {!proto.payload.v1.Object.VectorRequest} returns this
*/
proto.payload.v1.Object.VectorRequest.prototype.setFilters = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.payload.v1.Object.VectorRequest} returns this
 */
proto.payload.v1.Object.VectorRequest.prototype.clearFilters = function() {
  return this.setFilters(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.payload.v1.Object.VectorRequest.prototype.hasFilters = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payload.v1.Object.Distance.prototype.toObject = function(opt_includeInstance) {
  return proto.payload.v1.Object.Distance.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payload.v1.Object.Distance} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payload.v1.Object.Distance.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    distance: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payload.v1.Object.Distance}
 */
proto.payload.v1.Object.Distance.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payload.v1.Object.Distance;
  return proto.payload.v1.Object.Distance.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payload.v1.Object.Distance} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payload.v1.Object.Distance}
 */
proto.payload.v1.Object.Distance.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setDistance(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payload.v1.Object.Distance.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payload.v1.Object.Distance.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payload.v1.Object.Distance} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payload.v1.Object.Distance.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDistance();
  if (f !== 0.0) {
    writer.writeFloat(
      2,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.payload.v1.Object.Distance.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.payload.v1.Object.Distance} returns this
 */
proto.payload.v1.Object.Distance.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional float distance = 2;
 * @return {number}
 */
proto.payload.v1.Object.Distance.prototype.getDistance = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.payload.v1.Object.Distance} returns this
 */
proto.payload.v1.Object.Distance.prototype.setDistance = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.payload.v1.Object.StreamDistance.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.payload.v1.Object.StreamDistance.PayloadCase = {
  PAYLOAD_NOT_SET: 0,
  DISTANCE: 1,
  STATUS: 2
};

/**
 * @return {proto.payload.v1.Object.StreamDistance.PayloadCase}
 */
proto.payload.v1.Object.StreamDistance.prototype.getPayloadCase = function() {
  return /** @type {proto.payload.v1.Object.StreamDistance.PayloadCase} */(jspb.Message.computeOneofCase(this, proto.payload.v1.Object.StreamDistance.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payload.v1.Object.StreamDistance.prototype.toObject = function(opt_includeInstance) {
  return proto.payload.v1.Object.StreamDistance.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payload.v1.Object.StreamDistance} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payload.v1.Object.StreamDistance.toObject = function(includeInstance, msg) {
  var f, obj = {
    distance: (f = msg.getDistance()) && proto.payload.v1.Object.Distance.toObject(includeInstance, f),
    status: (f = msg.getStatus()) && google_rpc_status_pb.Status.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payload.v1.Object.StreamDistance}
 */
proto.payload.v1.Object.StreamDistance.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payload.v1.Object.StreamDistance;
  return proto.payload.v1.Object.StreamDistance.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payload.v1.Object.StreamDistance} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payload.v1.Object.StreamDistance}
 */
proto.payload.v1.Object.StreamDistance.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.payload.v1.Object.Distance;
      reader.readMessage(value,proto.payload.v1.Object.Distance.deserializeBinaryFromReader);
      msg.setDistance(value);
      break;
    case 2:
      var value = new google_rpc_status_pb.Status;
      reader.readMessage(value,google_rpc_status_pb.Status.deserializeBinaryFromReader);
      msg.setStatus(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payload.v1.Object.StreamDistance.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payload.v1.Object.StreamDistance.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payload.v1.Object.StreamDistance} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payload.v1.Object.StreamDistance.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDistance();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.payload.v1.Object.Distance.serializeBinaryToWriter
    );
  }
  f = message.getStatus();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_rpc_status_pb.Status.serializeBinaryToWriter
    );
  }
};


/**
 * optional Distance distance = 1;
 * @return {?proto.payload.v1.Object.Distance}
 */
proto.payload.v1.Object.StreamDistance.prototype.getDistance = function() {
  return /** @type{?proto.payload.v1.Object.Distance} */ (
    jspb.Message.getWrapperField(this, proto.payload.v1.Object.Distance, 1));
};


/**
 * @param {?proto.payload.v1.Object.Distance|undefined} value
 * @return {!proto.payload.v1.Object.StreamDistance} returns this
*/
proto.payload.v1.Object.StreamDistance.prototype.setDistance = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.payload.v1.Object.StreamDistance.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.payload.v1.Object.StreamDistance} returns this
 */
proto.payload.v1.Object.StreamDistance.prototype.clearDistance = function() {
  return this.setDistance(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.payload.v1.Object.StreamDistance.prototype.hasDistance = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.rpc.Status status = 2;
 * @return {?proto.google.rpc.Status}
 */
proto.payload.v1.Object.StreamDistance.prototype.getStatus = function() {
  return /** @type{?proto.google.rpc.Status} */ (
    jspb.Message.getWrapperField(this, google_rpc_status_pb.Status, 2));
};


/**
 * @param {?proto.google.rpc.Status|undefined} value
 * @return {!proto.payload.v1.Object.StreamDistance} returns this
*/
proto.payload.v1.Object.StreamDistance.prototype.setStatus = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.payload.v1.Object.StreamDistance.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.payload.v1.Object.StreamDistance} returns this
 */
proto.payload.v1.Object.StreamDistance.prototype.clearStatus = function() {
  return this.setStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.payload.v1.Object.StreamDistance.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payload.v1.Object.ID.prototype.toObject = function(opt_includeInstance) {
  return proto.payload.v1.Object.ID.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payload.v1.Object.ID} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payload.v1.Object.ID.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payload.v1.Object.ID}
 */
proto.payload.v1.Object.ID.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payload.v1.Object.ID;
  return proto.payload.v1.Object.ID.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payload.v1.Object.ID} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payload.v1.Object.ID}
 */
proto.payload.v1.Object.ID.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payload.v1.Object.ID.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payload.v1.Object.ID.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payload.v1.Object.ID} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payload.v1.Object.ID.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.payload.v1.Object.ID.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.payload.v1.Object.ID} returns this
 */
proto.payload.v1.Object.ID.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.payload.v1.Object.IDs.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payload.v1.Object.IDs.prototype.toObject = function(opt_includeInstance) {
  return proto.payload.v1.Object.IDs.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payload.v1.Object.IDs} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payload.v1.Object.IDs.toObject = function(includeInstance, msg) {
  var f, obj = {
    idsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payload.v1.Object.IDs}
 */
proto.payload.v1.Object.IDs.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payload.v1.Object.IDs;
  return proto.payload.v1.Object.IDs.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payload.v1.Object.IDs} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payload.v1.Object.IDs}
 */
proto.payload.v1.Object.IDs.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addIds(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payload.v1.Object.IDs.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payload.v1.Object.IDs.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payload.v1.Object.IDs} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payload.v1.Object.IDs.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIdsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
};


/**
 * repeated string ids = 1;
 * @return {!Array<string>}
 */
proto.payload.v1.Object.IDs.prototype.getIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.payload.v1.Object.IDs} returns this
 */
proto.payload.v1.Object.IDs.prototype.setIdsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.payload.v1.Object.IDs} returns this
 */
proto.payload.v1.Object.IDs.prototype.addIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.payload.v1.Object.IDs} returns this
 */
proto.payload.v1.Object.IDs.prototype.clearIdsList = function() {
  return this.setIdsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.payload.v1.Object.Vector.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payload.v1.Object.Vector.prototype.toObject = function(opt_includeInstance) {
  return proto.payload.v1.Object.Vector.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payload.v1.Object.Vector} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payload.v1.Object.Vector.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    vectorList: (f = jspb.Message.getRepeatedFloatingPointField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payload.v1.Object.Vector}
 */
proto.payload.v1.Object.Vector.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payload.v1.Object.Vector;
  return proto.payload.v1.Object.Vector.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payload.v1.Object.Vector} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payload.v1.Object.Vector}
 */
proto.payload.v1.Object.Vector.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedFloat() : [reader.readFloat()]);
      for (var i = 0; i < values.length; i++) {
        msg.addVector(values[i]);
      }
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payload.v1.Object.Vector.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payload.v1.Object.Vector.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payload.v1.Object.Vector} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payload.v1.Object.Vector.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getVectorList();
  if (f.length > 0) {
    writer.writePackedFloat(
      2,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.payload.v1.Object.Vector.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.payload.v1.Object.Vector} returns this
 */
proto.payload.v1.Object.Vector.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated float vector = 2;
 * @return {!Array<number>}
 */
proto.payload.v1.Object.Vector.prototype.getVectorList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedFloatingPointField(this, 2));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.payload.v1.Object.Vector} returns this
 */
proto.payload.v1.Object.Vector.prototype.setVectorList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.payload.v1.Object.Vector} returns this
 */
proto.payload.v1.Object.Vector.prototype.addVector = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.payload.v1.Object.Vector} returns this
 */
proto.payload.v1.Object.Vector.prototype.clearVectorList = function() {
  return this.setVectorList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.payload.v1.Object.Vectors.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payload.v1.Object.Vectors.prototype.toObject = function(opt_includeInstance) {
  return proto.payload.v1.Object.Vectors.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payload.v1.Object.Vectors} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payload.v1.Object.Vectors.toObject = function(includeInstance, msg) {
  var f, obj = {
    vectorsList: jspb.Message.toObjectList(msg.getVectorsList(),
    proto.payload.v1.Object.Vector.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payload.v1.Object.Vectors}
 */
proto.payload.v1.Object.Vectors.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payload.v1.Object.Vectors;
  return proto.payload.v1.Object.Vectors.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payload.v1.Object.Vectors} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payload.v1.Object.Vectors}
 */
proto.payload.v1.Object.Vectors.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.payload.v1.Object.Vector;
      reader.readMessage(value,proto.payload.v1.Object.Vector.deserializeBinaryFromReader);
      msg.addVectors(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payload.v1.Object.Vectors.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payload.v1.Object.Vectors.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payload.v1.Object.Vectors} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payload.v1.Object.Vectors.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVectorsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.payload.v1.Object.Vector.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Vector vectors = 1;
 * @return {!Array<!proto.payload.v1.Object.Vector>}
 */
proto.payload.v1.Object.Vectors.prototype.getVectorsList = function() {
  return /** @type{!Array<!proto.payload.v1.Object.Vector>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.payload.v1.Object.Vector, 1));
};


/**
 * @param {!Array<!proto.payload.v1.Object.Vector>} value
 * @return {!proto.payload.v1.Object.Vectors} returns this
*/
proto.payload.v1.Object.Vectors.prototype.setVectorsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.payload.v1.Object.Vector=} opt_value
 * @param {number=} opt_index
 * @return {!proto.payload.v1.Object.Vector}
 */
proto.payload.v1.Object.Vectors.prototype.addVectors = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.payload.v1.Object.Vector, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.payload.v1.Object.Vectors} returns this
 */
proto.payload.v1.Object.Vectors.prototype.clearVectorsList = function() {
  return this.setVectorsList([]);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.payload.v1.Object.StreamVector.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.payload.v1.Object.StreamVector.PayloadCase = {
  PAYLOAD_NOT_SET: 0,
  VECTOR: 1,
  STATUS: 2
};

/**
 * @return {proto.payload.v1.Object.StreamVector.PayloadCase}
 */
proto.payload.v1.Object.StreamVector.prototype.getPayloadCase = function() {
  return /** @type {proto.payload.v1.Object.StreamVector.PayloadCase} */(jspb.Message.computeOneofCase(this, proto.payload.v1.Object.StreamVector.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payload.v1.Object.StreamVector.prototype.toObject = function(opt_includeInstance) {
  return proto.payload.v1.Object.StreamVector.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payload.v1.Object.StreamVector} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payload.v1.Object.StreamVector.toObject = function(includeInstance, msg) {
  var f, obj = {
    vector: (f = msg.getVector()) && proto.payload.v1.Object.Vector.toObject(includeInstance, f),
    status: (f = msg.getStatus()) && google_rpc_status_pb.Status.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payload.v1.Object.StreamVector}
 */
proto.payload.v1.Object.StreamVector.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payload.v1.Object.StreamVector;
  return proto.payload.v1.Object.StreamVector.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payload.v1.Object.StreamVector} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payload.v1.Object.StreamVector}
 */
proto.payload.v1.Object.StreamVector.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.payload.v1.Object.Vector;
      reader.readMessage(value,proto.payload.v1.Object.Vector.deserializeBinaryFromReader);
      msg.setVector(value);
      break;
    case 2:
      var value = new google_rpc_status_pb.Status;
      reader.readMessage(value,google_rpc_status_pb.Status.deserializeBinaryFromReader);
      msg.setStatus(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payload.v1.Object.StreamVector.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payload.v1.Object.StreamVector.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payload.v1.Object.StreamVector} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payload.v1.Object.StreamVector.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVector();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.payload.v1.Object.Vector.serializeBinaryToWriter
    );
  }
  f = message.getStatus();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_rpc_status_pb.Status.serializeBinaryToWriter
    );
  }
};


/**
 * optional Vector vector = 1;
 * @return {?proto.payload.v1.Object.Vector}
 */
proto.payload.v1.Object.StreamVector.prototype.getVector = function() {
  return /** @type{?proto.payload.v1.Object.Vector} */ (
    jspb.Message.getWrapperField(this, proto.payload.v1.Object.Vector, 1));
};


/**
 * @param {?proto.payload.v1.Object.Vector|undefined} value
 * @return {!proto.payload.v1.Object.StreamVector} returns this
*/
proto.payload.v1.Object.StreamVector.prototype.setVector = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.payload.v1.Object.StreamVector.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.payload.v1.Object.StreamVector} returns this
 */
proto.payload.v1.Object.StreamVector.prototype.clearVector = function() {
  return this.setVector(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.payload.v1.Object.StreamVector.prototype.hasVector = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.rpc.Status status = 2;
 * @return {?proto.google.rpc.Status}
 */
proto.payload.v1.Object.StreamVector.prototype.getStatus = function() {
  return /** @type{?proto.google.rpc.Status} */ (
    jspb.Message.getWrapperField(this, google_rpc_status_pb.Status, 2));
};


/**
 * @param {?proto.google.rpc.Status|undefined} value
 * @return {!proto.payload.v1.Object.StreamVector} returns this
*/
proto.payload.v1.Object.StreamVector.prototype.setStatus = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.payload.v1.Object.StreamVector.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.payload.v1.Object.StreamVector} returns this
 */
proto.payload.v1.Object.StreamVector.prototype.clearStatus = function() {
  return this.setStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.payload.v1.Object.StreamVector.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.payload.v1.Object.ReshapeVector.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payload.v1.Object.ReshapeVector.prototype.toObject = function(opt_includeInstance) {
  return proto.payload.v1.Object.ReshapeVector.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payload.v1.Object.ReshapeVector} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payload.v1.Object.ReshapeVector.toObject = function(includeInstance, msg) {
  var f, obj = {
    object: msg.getObject_asB64(),
    shapeList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payload.v1.Object.ReshapeVector}
 */
proto.payload.v1.Object.ReshapeVector.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payload.v1.Object.ReshapeVector;
  return proto.payload.v1.Object.ReshapeVector.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payload.v1.Object.ReshapeVector} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payload.v1.Object.ReshapeVector}
 */
proto.payload.v1.Object.ReshapeVector.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setObject(value);
      break;
    case 2:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedInt32() : [reader.readInt32()]);
      for (var i = 0; i < values.length; i++) {
        msg.addShape(values[i]);
      }
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payload.v1.Object.ReshapeVector.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payload.v1.Object.ReshapeVector.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payload.v1.Object.ReshapeVector} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payload.v1.Object.ReshapeVector.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getObject_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getShapeList();
  if (f.length > 0) {
    writer.writePackedInt32(
      2,
      f
    );
  }
};


/**
 * optional bytes object = 1;
 * @return {!(string|Uint8Array)}
 */
proto.payload.v1.Object.ReshapeVector.prototype.getObject = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes object = 1;
 * This is a type-conversion wrapper around `getObject()`
 * @return {string}
 */
proto.payload.v1.Object.ReshapeVector.prototype.getObject_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getObject()));
};


/**
 * optional bytes object = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getObject()`
 * @return {!Uint8Array}
 */
proto.payload.v1.Object.ReshapeVector.prototype.getObject_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getObject()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.payload.v1.Object.ReshapeVector} returns this
 */
proto.payload.v1.Object.ReshapeVector.prototype.setObject = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * repeated int32 shape = 2;
 * @return {!Array<number>}
 */
proto.payload.v1.Object.ReshapeVector.prototype.getShapeList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.payload.v1.Object.ReshapeVector} returns this
 */
proto.payload.v1.Object.ReshapeVector.prototype.setShapeList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.payload.v1.Object.ReshapeVector} returns this
 */
proto.payload.v1.Object.ReshapeVector.prototype.addShape = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.payload.v1.Object.ReshapeVector} returns this
 */
proto.payload.v1.Object.ReshapeVector.prototype.clearShapeList = function() {
  return this.setShapeList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payload.v1.Object.Blob.prototype.toObject = function(opt_includeInstance) {
  return proto.payload.v1.Object.Blob.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payload.v1.Object.Blob} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payload.v1.Object.Blob.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    object: msg.getObject_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payload.v1.Object.Blob}
 */
proto.payload.v1.Object.Blob.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payload.v1.Object.Blob;
  return proto.payload.v1.Object.Blob.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payload.v1.Object.Blob} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payload.v1.Object.Blob}
 */
proto.payload.v1.Object.Blob.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setObject(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payload.v1.Object.Blob.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payload.v1.Object.Blob.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payload.v1.Object.Blob} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payload.v1.Object.Blob.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getObject_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.payload.v1.Object.Blob.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.payload.v1.Object.Blob} returns this
 */
proto.payload.v1.Object.Blob.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bytes object = 2;
 * @return {!(string|Uint8Array)}
 */
proto.payload.v1.Object.Blob.prototype.getObject = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes object = 2;
 * This is a type-conversion wrapper around `getObject()`
 * @return {string}
 */
proto.payload.v1.Object.Blob.prototype.getObject_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getObject()));
};


/**
 * optional bytes object = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getObject()`
 * @return {!Uint8Array}
 */
proto.payload.v1.Object.Blob.prototype.getObject_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getObject()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.payload.v1.Object.Blob} returns this
 */
proto.payload.v1.Object.Blob.prototype.setObject = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.payload.v1.Object.StreamBlob.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.payload.v1.Object.StreamBlob.PayloadCase = {
  PAYLOAD_NOT_SET: 0,
  BLOB: 1,
  STATUS: 2
};

/**
 * @return {proto.payload.v1.Object.StreamBlob.PayloadCase}
 */
proto.payload.v1.Object.StreamBlob.prototype.getPayloadCase = function() {
  return /** @type {proto.payload.v1.Object.StreamBlob.PayloadCase} */(jspb.Message.computeOneofCase(this, proto.payload.v1.Object.StreamBlob.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payload.v1.Object.StreamBlob.prototype.toObject = function(opt_includeInstance) {
  return proto.payload.v1.Object.StreamBlob.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payload.v1.Object.StreamBlob} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payload.v1.Object.StreamBlob.toObject = function(includeInstance, msg) {
  var f, obj = {
    blob: (f = msg.getBlob()) && proto.payload.v1.Object.Blob.toObject(includeInstance, f),
    status: (f = msg.getStatus()) && google_rpc_status_pb.Status.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payload.v1.Object.StreamBlob}
 */
proto.payload.v1.Object.StreamBlob.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payload.v1.Object.StreamBlob;
  return proto.payload.v1.Object.StreamBlob.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payload.v1.Object.StreamBlob} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payload.v1.Object.StreamBlob}
 */
proto.payload.v1.Object.StreamBlob.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.payload.v1.Object.Blob;
      reader.readMessage(value,proto.payload.v1.Object.Blob.deserializeBinaryFromReader);
      msg.setBlob(value);
      break;
    case 2:
      var value = new google_rpc_status_pb.Status;
      reader.readMessage(value,google_rpc_status_pb.Status.deserializeBinaryFromReader);
      msg.setStatus(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payload.v1.Object.StreamBlob.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payload.v1.Object.StreamBlob.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payload.v1.Object.StreamBlob} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payload.v1.Object.StreamBlob.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBlob();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.payload.v1.Object.Blob.serializeBinaryToWriter
    );
  }
  f = message.getStatus();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_rpc_status_pb.Status.serializeBinaryToWriter
    );
  }
};


/**
 * optional Blob blob = 1;
 * @return {?proto.payload.v1.Object.Blob}
 */
proto.payload.v1.Object.StreamBlob.prototype.getBlob = function() {
  return /** @type{?proto.payload.v1.Object.Blob} */ (
    jspb.Message.getWrapperField(this, proto.payload.v1.Object.Blob, 1));
};


/**
 * @param {?proto.payload.v1.Object.Blob|undefined} value
 * @return {!proto.payload.v1.Object.StreamBlob} returns this
*/
proto.payload.v1.Object.StreamBlob.prototype.setBlob = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.payload.v1.Object.StreamBlob.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.payload.v1.Object.StreamBlob} returns this
 */
proto.payload.v1.Object.StreamBlob.prototype.clearBlob = function() {
  return this.setBlob(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.payload.v1.Object.StreamBlob.prototype.hasBlob = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.rpc.Status status = 2;
 * @return {?proto.google.rpc.Status}
 */
proto.payload.v1.Object.StreamBlob.prototype.getStatus = function() {
  return /** @type{?proto.google.rpc.Status} */ (
    jspb.Message.getWrapperField(this, google_rpc_status_pb.Status, 2));
};


/**
 * @param {?proto.google.rpc.Status|undefined} value
 * @return {!proto.payload.v1.Object.StreamBlob} returns this
*/
proto.payload.v1.Object.StreamBlob.prototype.setStatus = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.payload.v1.Object.StreamBlob.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.payload.v1.Object.StreamBlob} returns this
 */
proto.payload.v1.Object.StreamBlob.prototype.clearStatus = function() {
  return this.setStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.payload.v1.Object.StreamBlob.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.payload.v1.Object.Location.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payload.v1.Object.Location.prototype.toObject = function(opt_includeInstance) {
  return proto.payload.v1.Object.Location.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payload.v1.Object.Location} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payload.v1.Object.Location.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    uuid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    ipsList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payload.v1.Object.Location}
 */
proto.payload.v1.Object.Location.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payload.v1.Object.Location;
  return proto.payload.v1.Object.Location.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payload.v1.Object.Location} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payload.v1.Object.Location}
 */
proto.payload.v1.Object.Location.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUuid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addIps(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payload.v1.Object.Location.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payload.v1.Object.Location.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payload.v1.Object.Location} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payload.v1.Object.Location.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getUuid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getIpsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.payload.v1.Object.Location.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.payload.v1.Object.Location} returns this
 */
proto.payload.v1.Object.Location.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string uuid = 2;
 * @return {string}
 */
proto.payload.v1.Object.Location.prototype.getUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.payload.v1.Object.Location} returns this
 */
proto.payload.v1.Object.Location.prototype.setUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated string ips = 3;
 * @return {!Array<string>}
 */
proto.payload.v1.Object.Location.prototype.getIpsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.payload.v1.Object.Location} returns this
 */
proto.payload.v1.Object.Location.prototype.setIpsList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.payload.v1.Object.Location} returns this
 */
proto.payload.v1.Object.Location.prototype.addIps = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.payload.v1.Object.Location} returns this
 */
proto.payload.v1.Object.Location.prototype.clearIpsList = function() {
  return this.setIpsList([]);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.payload.v1.Object.StreamLocation.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.payload.v1.Object.StreamLocation.PayloadCase = {
  PAYLOAD_NOT_SET: 0,
  LOCATION: 1,
  STATUS: 2
};

/**
 * @return {proto.payload.v1.Object.StreamLocation.PayloadCase}
 */
proto.payload.v1.Object.StreamLocation.prototype.getPayloadCase = function() {
  return /** @type {proto.payload.v1.Object.StreamLocation.PayloadCase} */(jspb.Message.computeOneofCase(this, proto.payload.v1.Object.StreamLocation.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payload.v1.Object.StreamLocation.prototype.toObject = function(opt_includeInstance) {
  return proto.payload.v1.Object.StreamLocation.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payload.v1.Object.StreamLocation} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payload.v1.Object.StreamLocation.toObject = function(includeInstance, msg) {
  var f, obj = {
    location: (f = msg.getLocation()) && proto.payload.v1.Object.Location.toObject(includeInstance, f),
    status: (f = msg.getStatus()) && google_rpc_status_pb.Status.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payload.v1.Object.StreamLocation}
 */
proto.payload.v1.Object.StreamLocation.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payload.v1.Object.StreamLocation;
  return proto.payload.v1.Object.StreamLocation.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payload.v1.Object.StreamLocation} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payload.v1.Object.StreamLocation}
 */
proto.payload.v1.Object.StreamLocation.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.payload.v1.Object.Location;
      reader.readMessage(value,proto.payload.v1.Object.Location.deserializeBinaryFromReader);
      msg.setLocation(value);
      break;
    case 2:
      var value = new google_rpc_status_pb.Status;
      reader.readMessage(value,google_rpc_status_pb.Status.deserializeBinaryFromReader);
      msg.setStatus(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payload.v1.Object.StreamLocation.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payload.v1.Object.StreamLocation.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payload.v1.Object.StreamLocation} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payload.v1.Object.StreamLocation.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLocation();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.payload.v1.Object.Location.serializeBinaryToWriter
    );
  }
  f = message.getStatus();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_rpc_status_pb.Status.serializeBinaryToWriter
    );
  }
};


/**
 * optional Location location = 1;
 * @return {?proto.payload.v1.Object.Location}
 */
proto.payload.v1.Object.StreamLocation.prototype.getLocation = function() {
  return /** @type{?proto.payload.v1.Object.Location} */ (
    jspb.Message.getWrapperField(this, proto.payload.v1.Object.Location, 1));
};


/**
 * @param {?proto.payload.v1.Object.Location|undefined} value
 * @return {!proto.payload.v1.Object.StreamLocation} returns this
*/
proto.payload.v1.Object.StreamLocation.prototype.setLocation = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.payload.v1.Object.StreamLocation.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.payload.v1.Object.StreamLocation} returns this
 */
proto.payload.v1.Object.StreamLocation.prototype.clearLocation = function() {
  return this.setLocation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.payload.v1.Object.StreamLocation.prototype.hasLocation = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.rpc.Status status = 2;
 * @return {?proto.google.rpc.Status}
 */
proto.payload.v1.Object.StreamLocation.prototype.getStatus = function() {
  return /** @type{?proto.google.rpc.Status} */ (
    jspb.Message.getWrapperField(this, google_rpc_status_pb.Status, 2));
};


/**
 * @param {?proto.google.rpc.Status|undefined} value
 * @return {!proto.payload.v1.Object.StreamLocation} returns this
*/
proto.payload.v1.Object.StreamLocation.prototype.setStatus = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.payload.v1.Object.StreamLocation.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.payload.v1.Object.StreamLocation} returns this
 */
proto.payload.v1.Object.StreamLocation.prototype.clearStatus = function() {
  return this.setStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.payload.v1.Object.StreamLocation.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.payload.v1.Object.Locations.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payload.v1.Object.Locations.prototype.toObject = function(opt_includeInstance) {
  return proto.payload.v1.Object.Locations.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payload.v1.Object.Locations} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payload.v1.Object.Locations.toObject = function(includeInstance, msg) {
  var f, obj = {
    locationsList: jspb.Message.toObjectList(msg.getLocationsList(),
    proto.payload.v1.Object.Location.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payload.v1.Object.Locations}
 */
proto.payload.v1.Object.Locations.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payload.v1.Object.Locations;
  return proto.payload.v1.Object.Locations.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payload.v1.Object.Locations} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payload.v1.Object.Locations}
 */
proto.payload.v1.Object.Locations.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.payload.v1.Object.Location;
      reader.readMessage(value,proto.payload.v1.Object.Location.deserializeBinaryFromReader);
      msg.addLocations(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payload.v1.Object.Locations.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payload.v1.Object.Locations.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payload.v1.Object.Locations} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payload.v1.Object.Locations.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLocationsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.payload.v1.Object.Location.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Location locations = 1;
 * @return {!Array<!proto.payload.v1.Object.Location>}
 */
proto.payload.v1.Object.Locations.prototype.getLocationsList = function() {
  return /** @type{!Array<!proto.payload.v1.Object.Location>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.payload.v1.Object.Location, 1));
};


/**
 * @param {!Array<!proto.payload.v1.Object.Location>} value
 * @return {!proto.payload.v1.Object.Locations} returns this
*/
proto.payload.v1.Object.Locations.prototype.setLocationsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.payload.v1.Object.Location=} opt_value
 * @param {number=} opt_index
 * @return {!proto.payload.v1.Object.Location}
 */
proto.payload.v1.Object.Locations.prototype.addLocations = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.payload.v1.Object.Location, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.payload.v1.Object.Locations} returns this
 */
proto.payload.v1.Object.Locations.prototype.clearLocationsList = function() {
  return this.setLocationsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payload.v1.Control.prototype.toObject = function(opt_includeInstance) {
  return proto.payload.v1.Control.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payload.v1.Control} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payload.v1.Control.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payload.v1.Control}
 */
proto.payload.v1.Control.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payload.v1.Control;
  return proto.payload.v1.Control.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payload.v1.Control} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payload.v1.Control}
 */
proto.payload.v1.Control.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payload.v1.Control.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payload.v1.Control.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payload.v1.Control} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payload.v1.Control.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payload.v1.Control.CreateIndexRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.payload.v1.Control.CreateIndexRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payload.v1.Control.CreateIndexRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payload.v1.Control.CreateIndexRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    poolSize: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payload.v1.Control.CreateIndexRequest}
 */
proto.payload.v1.Control.CreateIndexRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payload.v1.Control.CreateIndexRequest;
  return proto.payload.v1.Control.CreateIndexRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payload.v1.Control.CreateIndexRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payload.v1.Control.CreateIndexRequest}
 */
proto.payload.v1.Control.CreateIndexRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPoolSize(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payload.v1.Control.CreateIndexRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payload.v1.Control.CreateIndexRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payload.v1.Control.CreateIndexRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payload.v1.Control.CreateIndexRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPoolSize();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
};


/**
 * optional uint32 pool_size = 1;
 * @return {number}
 */
proto.payload.v1.Control.CreateIndexRequest.prototype.getPoolSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.payload.v1.Control.CreateIndexRequest} returns this
 */
proto.payload.v1.Control.CreateIndexRequest.prototype.setPoolSize = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payload.v1.Discoverer.prototype.toObject = function(opt_includeInstance) {
  return proto.payload.v1.Discoverer.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payload.v1.Discoverer} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payload.v1.Discoverer.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payload.v1.Discoverer}
 */
proto.payload.v1.Discoverer.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payload.v1.Discoverer;
  return proto.payload.v1.Discoverer.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payload.v1.Discoverer} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payload.v1.Discoverer}
 */
proto.payload.v1.Discoverer.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payload.v1.Discoverer.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payload.v1.Discoverer.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payload.v1.Discoverer} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payload.v1.Discoverer.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payload.v1.Discoverer.Request.prototype.toObject = function(opt_includeInstance) {
  return proto.payload.v1.Discoverer.Request.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payload.v1.Discoverer.Request} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payload.v1.Discoverer.Request.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    namespace: jspb.Message.getFieldWithDefault(msg, 2, ""),
    node: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payload.v1.Discoverer.Request}
 */
proto.payload.v1.Discoverer.Request.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payload.v1.Discoverer.Request;
  return proto.payload.v1.Discoverer.Request.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payload.v1.Discoverer.Request} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payload.v1.Discoverer.Request}
 */
proto.payload.v1.Discoverer.Request.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setNamespace(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setNode(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payload.v1.Discoverer.Request.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payload.v1.Discoverer.Request.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payload.v1.Discoverer.Request} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payload.v1.Discoverer.Request.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getNamespace();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getNode();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.payload.v1.Discoverer.Request.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.payload.v1.Discoverer.Request} returns this
 */
proto.payload.v1.Discoverer.Request.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string namespace = 2;
 * @return {string}
 */
proto.payload.v1.Discoverer.Request.prototype.getNamespace = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.payload.v1.Discoverer.Request} returns this
 */
proto.payload.v1.Discoverer.Request.prototype.setNamespace = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string node = 3;
 * @return {string}
 */
proto.payload.v1.Discoverer.Request.prototype.getNode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.payload.v1.Discoverer.Request} returns this
 */
proto.payload.v1.Discoverer.Request.prototype.setNode = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payload.v1.Info.prototype.toObject = function(opt_includeInstance) {
  return proto.payload.v1.Info.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payload.v1.Info} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payload.v1.Info.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payload.v1.Info}
 */
proto.payload.v1.Info.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payload.v1.Info;
  return proto.payload.v1.Info.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payload.v1.Info} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payload.v1.Info}
 */
proto.payload.v1.Info.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payload.v1.Info.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payload.v1.Info.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payload.v1.Info} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payload.v1.Info.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payload.v1.Info.Index.prototype.toObject = function(opt_includeInstance) {
  return proto.payload.v1.Info.Index.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payload.v1.Info.Index} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payload.v1.Info.Index.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payload.v1.Info.Index}
 */
proto.payload.v1.Info.Index.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payload.v1.Info.Index;
  return proto.payload.v1.Info.Index.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payload.v1.Info.Index} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payload.v1.Info.Index}
 */
proto.payload.v1.Info.Index.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payload.v1.Info.Index.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payload.v1.Info.Index.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payload.v1.Info.Index} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payload.v1.Info.Index.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payload.v1.Info.Index.Count.prototype.toObject = function(opt_includeInstance) {
  return proto.payload.v1.Info.Index.Count.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payload.v1.Info.Index.Count} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payload.v1.Info.Index.Count.toObject = function(includeInstance, msg) {
  var f, obj = {
    stored: jspb.Message.getFieldWithDefault(msg, 1, 0),
    uncommitted: jspb.Message.getFieldWithDefault(msg, 2, 0),
    indexing: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    saving: jspb.Message.getBooleanFieldWithDefault(msg, 4, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payload.v1.Info.Index.Count}
 */
proto.payload.v1.Info.Index.Count.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payload.v1.Info.Index.Count;
  return proto.payload.v1.Info.Index.Count.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payload.v1.Info.Index.Count} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payload.v1.Info.Index.Count}
 */
proto.payload.v1.Info.Index.Count.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setStored(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setUncommitted(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIndexing(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSaving(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payload.v1.Info.Index.Count.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payload.v1.Info.Index.Count.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payload.v1.Info.Index.Count} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payload.v1.Info.Index.Count.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStored();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getUncommitted();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getIndexing();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getSaving();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
};


/**
 * optional uint32 stored = 1;
 * @return {number}
 */
proto.payload.v1.Info.Index.Count.prototype.getStored = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.payload.v1.Info.Index.Count} returns this
 */
proto.payload.v1.Info.Index.Count.prototype.setStored = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint32 uncommitted = 2;
 * @return {number}
 */
proto.payload.v1.Info.Index.Count.prototype.getUncommitted = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.payload.v1.Info.Index.Count} returns this
 */
proto.payload.v1.Info.Index.Count.prototype.setUncommitted = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional bool indexing = 3;
 * @return {boolean}
 */
proto.payload.v1.Info.Index.Count.prototype.getIndexing = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.payload.v1.Info.Index.Count} returns this
 */
proto.payload.v1.Info.Index.Count.prototype.setIndexing = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional bool saving = 4;
 * @return {boolean}
 */
proto.payload.v1.Info.Index.Count.prototype.getSaving = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.payload.v1.Info.Index.Count} returns this
 */
proto.payload.v1.Info.Index.Count.prototype.setSaving = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payload.v1.Info.Index.UUID.prototype.toObject = function(opt_includeInstance) {
  return proto.payload.v1.Info.Index.UUID.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payload.v1.Info.Index.UUID} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payload.v1.Info.Index.UUID.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payload.v1.Info.Index.UUID}
 */
proto.payload.v1.Info.Index.UUID.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payload.v1.Info.Index.UUID;
  return proto.payload.v1.Info.Index.UUID.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payload.v1.Info.Index.UUID} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payload.v1.Info.Index.UUID}
 */
proto.payload.v1.Info.Index.UUID.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payload.v1.Info.Index.UUID.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payload.v1.Info.Index.UUID.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payload.v1.Info.Index.UUID} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payload.v1.Info.Index.UUID.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payload.v1.Info.Index.UUID.Committed.prototype.toObject = function(opt_includeInstance) {
  return proto.payload.v1.Info.Index.UUID.Committed.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payload.v1.Info.Index.UUID.Committed} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payload.v1.Info.Index.UUID.Committed.toObject = function(includeInstance, msg) {
  var f, obj = {
    uuid: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payload.v1.Info.Index.UUID.Committed}
 */
proto.payload.v1.Info.Index.UUID.Committed.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payload.v1.Info.Index.UUID.Committed;
  return proto.payload.v1.Info.Index.UUID.Committed.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payload.v1.Info.Index.UUID.Committed} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payload.v1.Info.Index.UUID.Committed}
 */
proto.payload.v1.Info.Index.UUID.Committed.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUuid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payload.v1.Info.Index.UUID.Committed.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payload.v1.Info.Index.UUID.Committed.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payload.v1.Info.Index.UUID.Committed} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payload.v1.Info.Index.UUID.Committed.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUuid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string uuid = 1;
 * @return {string}
 */
proto.payload.v1.Info.Index.UUID.Committed.prototype.getUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.payload.v1.Info.Index.UUID.Committed} returns this
 */
proto.payload.v1.Info.Index.UUID.Committed.prototype.setUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payload.v1.Info.Index.UUID.Uncommitted.prototype.toObject = function(opt_includeInstance) {
  return proto.payload.v1.Info.Index.UUID.Uncommitted.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payload.v1.Info.Index.UUID.Uncommitted} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payload.v1.Info.Index.UUID.Uncommitted.toObject = function(includeInstance, msg) {
  var f, obj = {
    uuid: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payload.v1.Info.Index.UUID.Uncommitted}
 */
proto.payload.v1.Info.Index.UUID.Uncommitted.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payload.v1.Info.Index.UUID.Uncommitted;
  return proto.payload.v1.Info.Index.UUID.Uncommitted.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payload.v1.Info.Index.UUID.Uncommitted} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payload.v1.Info.Index.UUID.Uncommitted}
 */
proto.payload.v1.Info.Index.UUID.Uncommitted.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUuid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payload.v1.Info.Index.UUID.Uncommitted.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payload.v1.Info.Index.UUID.Uncommitted.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payload.v1.Info.Index.UUID.Uncommitted} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payload.v1.Info.Index.UUID.Uncommitted.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUuid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string uuid = 1;
 * @return {string}
 */
proto.payload.v1.Info.Index.UUID.Uncommitted.prototype.getUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.payload.v1.Info.Index.UUID.Uncommitted} returns this
 */
proto.payload.v1.Info.Index.UUID.Uncommitted.prototype.setUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payload.v1.Info.Pod.prototype.toObject = function(opt_includeInstance) {
  return proto.payload.v1.Info.Pod.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payload.v1.Info.Pod} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payload.v1.Info.Pod.toObject = function(includeInstance, msg) {
  var f, obj = {
    appName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    namespace: jspb.Message.getFieldWithDefault(msg, 3, ""),
    ip: jspb.Message.getFieldWithDefault(msg, 4, ""),
    cpu: (f = msg.getCpu()) && proto.payload.v1.Info.CPU.toObject(includeInstance, f),
    memory: (f = msg.getMemory()) && proto.payload.v1.Info.Memory.toObject(includeInstance, f),
    node: (f = msg.getNode()) && proto.payload.v1.Info.Node.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payload.v1.Info.Pod}
 */
proto.payload.v1.Info.Pod.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payload.v1.Info.Pod;
  return proto.payload.v1.Info.Pod.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payload.v1.Info.Pod} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payload.v1.Info.Pod}
 */
proto.payload.v1.Info.Pod.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAppName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setNamespace(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setIp(value);
      break;
    case 5:
      var value = new proto.payload.v1.Info.CPU;
      reader.readMessage(value,proto.payload.v1.Info.CPU.deserializeBinaryFromReader);
      msg.setCpu(value);
      break;
    case 6:
      var value = new proto.payload.v1.Info.Memory;
      reader.readMessage(value,proto.payload.v1.Info.Memory.deserializeBinaryFromReader);
      msg.setMemory(value);
      break;
    case 7:
      var value = new proto.payload.v1.Info.Node;
      reader.readMessage(value,proto.payload.v1.Info.Node.deserializeBinaryFromReader);
      msg.setNode(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payload.v1.Info.Pod.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payload.v1.Info.Pod.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payload.v1.Info.Pod} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payload.v1.Info.Pod.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAppName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getNamespace();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getIp();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getCpu();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.payload.v1.Info.CPU.serializeBinaryToWriter
    );
  }
  f = message.getMemory();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.payload.v1.Info.Memory.serializeBinaryToWriter
    );
  }
  f = message.getNode();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.payload.v1.Info.Node.serializeBinaryToWriter
    );
  }
};


/**
 * optional string app_name = 1;
 * @return {string}
 */
proto.payload.v1.Info.Pod.prototype.getAppName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.payload.v1.Info.Pod} returns this
 */
proto.payload.v1.Info.Pod.prototype.setAppName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.payload.v1.Info.Pod.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.payload.v1.Info.Pod} returns this
 */
proto.payload.v1.Info.Pod.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string namespace = 3;
 * @return {string}
 */
proto.payload.v1.Info.Pod.prototype.getNamespace = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.payload.v1.Info.Pod} returns this
 */
proto.payload.v1.Info.Pod.prototype.setNamespace = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string ip = 4;
 * @return {string}
 */
proto.payload.v1.Info.Pod.prototype.getIp = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.payload.v1.Info.Pod} returns this
 */
proto.payload.v1.Info.Pod.prototype.setIp = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional CPU cpu = 5;
 * @return {?proto.payload.v1.Info.CPU}
 */
proto.payload.v1.Info.Pod.prototype.getCpu = function() {
  return /** @type{?proto.payload.v1.Info.CPU} */ (
    jspb.Message.getWrapperField(this, proto.payload.v1.Info.CPU, 5));
};


/**
 * @param {?proto.payload.v1.Info.CPU|undefined} value
 * @return {!proto.payload.v1.Info.Pod} returns this
*/
proto.payload.v1.Info.Pod.prototype.setCpu = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.payload.v1.Info.Pod} returns this
 */
proto.payload.v1.Info.Pod.prototype.clearCpu = function() {
  return this.setCpu(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.payload.v1.Info.Pod.prototype.hasCpu = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional Memory memory = 6;
 * @return {?proto.payload.v1.Info.Memory}
 */
proto.payload.v1.Info.Pod.prototype.getMemory = function() {
  return /** @type{?proto.payload.v1.Info.Memory} */ (
    jspb.Message.getWrapperField(this, proto.payload.v1.Info.Memory, 6));
};


/**
 * @param {?proto.payload.v1.Info.Memory|undefined} value
 * @return {!proto.payload.v1.Info.Pod} returns this
*/
proto.payload.v1.Info.Pod.prototype.setMemory = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.payload.v1.Info.Pod} returns this
 */
proto.payload.v1.Info.Pod.prototype.clearMemory = function() {
  return this.setMemory(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.payload.v1.Info.Pod.prototype.hasMemory = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional Node node = 7;
 * @return {?proto.payload.v1.Info.Node}
 */
proto.payload.v1.Info.Pod.prototype.getNode = function() {
  return /** @type{?proto.payload.v1.Info.Node} */ (
    jspb.Message.getWrapperField(this, proto.payload.v1.Info.Node, 7));
};


/**
 * @param {?proto.payload.v1.Info.Node|undefined} value
 * @return {!proto.payload.v1.Info.Pod} returns this
*/
proto.payload.v1.Info.Pod.prototype.setNode = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.payload.v1.Info.Pod} returns this
 */
proto.payload.v1.Info.Pod.prototype.clearNode = function() {
  return this.setNode(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.payload.v1.Info.Pod.prototype.hasNode = function() {
  return jspb.Message.getField(this, 7) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payload.v1.Info.Node.prototype.toObject = function(opt_includeInstance) {
  return proto.payload.v1.Info.Node.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payload.v1.Info.Node} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payload.v1.Info.Node.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    internalAddr: jspb.Message.getFieldWithDefault(msg, 2, ""),
    externalAddr: jspb.Message.getFieldWithDefault(msg, 3, ""),
    cpu: (f = msg.getCpu()) && proto.payload.v1.Info.CPU.toObject(includeInstance, f),
    memory: (f = msg.getMemory()) && proto.payload.v1.Info.Memory.toObject(includeInstance, f),
    pods: (f = msg.getPods()) && proto.payload.v1.Info.Pods.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payload.v1.Info.Node}
 */
proto.payload.v1.Info.Node.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payload.v1.Info.Node;
  return proto.payload.v1.Info.Node.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payload.v1.Info.Node} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payload.v1.Info.Node}
 */
proto.payload.v1.Info.Node.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setInternalAddr(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setExternalAddr(value);
      break;
    case 4:
      var value = new proto.payload.v1.Info.CPU;
      reader.readMessage(value,proto.payload.v1.Info.CPU.deserializeBinaryFromReader);
      msg.setCpu(value);
      break;
    case 5:
      var value = new proto.payload.v1.Info.Memory;
      reader.readMessage(value,proto.payload.v1.Info.Memory.deserializeBinaryFromReader);
      msg.setMemory(value);
      break;
    case 6:
      var value = new proto.payload.v1.Info.Pods;
      reader.readMessage(value,proto.payload.v1.Info.Pods.deserializeBinaryFromReader);
      msg.setPods(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payload.v1.Info.Node.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payload.v1.Info.Node.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payload.v1.Info.Node} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payload.v1.Info.Node.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getInternalAddr();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getExternalAddr();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getCpu();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.payload.v1.Info.CPU.serializeBinaryToWriter
    );
  }
  f = message.getMemory();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.payload.v1.Info.Memory.serializeBinaryToWriter
    );
  }
  f = message.getPods();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.payload.v1.Info.Pods.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.payload.v1.Info.Node.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.payload.v1.Info.Node} returns this
 */
proto.payload.v1.Info.Node.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string internal_addr = 2;
 * @return {string}
 */
proto.payload.v1.Info.Node.prototype.getInternalAddr = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.payload.v1.Info.Node} returns this
 */
proto.payload.v1.Info.Node.prototype.setInternalAddr = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string external_addr = 3;
 * @return {string}
 */
proto.payload.v1.Info.Node.prototype.getExternalAddr = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.payload.v1.Info.Node} returns this
 */
proto.payload.v1.Info.Node.prototype.setExternalAddr = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional CPU cpu = 4;
 * @return {?proto.payload.v1.Info.CPU}
 */
proto.payload.v1.Info.Node.prototype.getCpu = function() {
  return /** @type{?proto.payload.v1.Info.CPU} */ (
    jspb.Message.getWrapperField(this, proto.payload.v1.Info.CPU, 4));
};


/**
 * @param {?proto.payload.v1.Info.CPU|undefined} value
 * @return {!proto.payload.v1.Info.Node} returns this
*/
proto.payload.v1.Info.Node.prototype.setCpu = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.payload.v1.Info.Node} returns this
 */
proto.payload.v1.Info.Node.prototype.clearCpu = function() {
  return this.setCpu(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.payload.v1.Info.Node.prototype.hasCpu = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional Memory memory = 5;
 * @return {?proto.payload.v1.Info.Memory}
 */
proto.payload.v1.Info.Node.prototype.getMemory = function() {
  return /** @type{?proto.payload.v1.Info.Memory} */ (
    jspb.Message.getWrapperField(this, proto.payload.v1.Info.Memory, 5));
};


/**
 * @param {?proto.payload.v1.Info.Memory|undefined} value
 * @return {!proto.payload.v1.Info.Node} returns this
*/
proto.payload.v1.Info.Node.prototype.setMemory = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.payload.v1.Info.Node} returns this
 */
proto.payload.v1.Info.Node.prototype.clearMemory = function() {
  return this.setMemory(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.payload.v1.Info.Node.prototype.hasMemory = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional Pods Pods = 6;
 * @return {?proto.payload.v1.Info.Pods}
 */
proto.payload.v1.Info.Node.prototype.getPods = function() {
  return /** @type{?proto.payload.v1.Info.Pods} */ (
    jspb.Message.getWrapperField(this, proto.payload.v1.Info.Pods, 6));
};


/**
 * @param {?proto.payload.v1.Info.Pods|undefined} value
 * @return {!proto.payload.v1.Info.Node} returns this
*/
proto.payload.v1.Info.Node.prototype.setPods = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.payload.v1.Info.Node} returns this
 */
proto.payload.v1.Info.Node.prototype.clearPods = function() {
  return this.setPods(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.payload.v1.Info.Node.prototype.hasPods = function() {
  return jspb.Message.getField(this, 6) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payload.v1.Info.CPU.prototype.toObject = function(opt_includeInstance) {
  return proto.payload.v1.Info.CPU.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payload.v1.Info.CPU} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payload.v1.Info.CPU.toObject = function(includeInstance, msg) {
  var f, obj = {
    limit: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    request: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    usage: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payload.v1.Info.CPU}
 */
proto.payload.v1.Info.CPU.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payload.v1.Info.CPU;
  return proto.payload.v1.Info.CPU.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payload.v1.Info.CPU} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payload.v1.Info.CPU}
 */
proto.payload.v1.Info.CPU.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setLimit(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setRequest(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setUsage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payload.v1.Info.CPU.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payload.v1.Info.CPU.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payload.v1.Info.CPU} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payload.v1.Info.CPU.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLimit();
  if (f !== 0.0) {
    writer.writeDouble(
      1,
      f
    );
  }
  f = message.getRequest();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
  f = message.getUsage();
  if (f !== 0.0) {
    writer.writeDouble(
      3,
      f
    );
  }
};


/**
 * optional double limit = 1;
 * @return {number}
 */
proto.payload.v1.Info.CPU.prototype.getLimit = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.payload.v1.Info.CPU} returns this
 */
proto.payload.v1.Info.CPU.prototype.setLimit = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional double request = 2;
 * @return {number}
 */
proto.payload.v1.Info.CPU.prototype.getRequest = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.payload.v1.Info.CPU} returns this
 */
proto.payload.v1.Info.CPU.prototype.setRequest = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional double usage = 3;
 * @return {number}
 */
proto.payload.v1.Info.CPU.prototype.getUsage = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.payload.v1.Info.CPU} returns this
 */
proto.payload.v1.Info.CPU.prototype.setUsage = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payload.v1.Info.Memory.prototype.toObject = function(opt_includeInstance) {
  return proto.payload.v1.Info.Memory.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payload.v1.Info.Memory} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payload.v1.Info.Memory.toObject = function(includeInstance, msg) {
  var f, obj = {
    limit: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    request: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    usage: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payload.v1.Info.Memory}
 */
proto.payload.v1.Info.Memory.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payload.v1.Info.Memory;
  return proto.payload.v1.Info.Memory.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payload.v1.Info.Memory} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payload.v1.Info.Memory}
 */
proto.payload.v1.Info.Memory.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setLimit(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setRequest(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setUsage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payload.v1.Info.Memory.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payload.v1.Info.Memory.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payload.v1.Info.Memory} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payload.v1.Info.Memory.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLimit();
  if (f !== 0.0) {
    writer.writeDouble(
      1,
      f
    );
  }
  f = message.getRequest();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
  f = message.getUsage();
  if (f !== 0.0) {
    writer.writeDouble(
      3,
      f
    );
  }
};


/**
 * optional double limit = 1;
 * @return {number}
 */
proto.payload.v1.Info.Memory.prototype.getLimit = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.payload.v1.Info.Memory} returns this
 */
proto.payload.v1.Info.Memory.prototype.setLimit = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional double request = 2;
 * @return {number}
 */
proto.payload.v1.Info.Memory.prototype.getRequest = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.payload.v1.Info.Memory} returns this
 */
proto.payload.v1.Info.Memory.prototype.setRequest = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional double usage = 3;
 * @return {number}
 */
proto.payload.v1.Info.Memory.prototype.getUsage = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.payload.v1.Info.Memory} returns this
 */
proto.payload.v1.Info.Memory.prototype.setUsage = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.payload.v1.Info.Pods.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payload.v1.Info.Pods.prototype.toObject = function(opt_includeInstance) {
  return proto.payload.v1.Info.Pods.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payload.v1.Info.Pods} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payload.v1.Info.Pods.toObject = function(includeInstance, msg) {
  var f, obj = {
    podsList: jspb.Message.toObjectList(msg.getPodsList(),
    proto.payload.v1.Info.Pod.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payload.v1.Info.Pods}
 */
proto.payload.v1.Info.Pods.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payload.v1.Info.Pods;
  return proto.payload.v1.Info.Pods.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payload.v1.Info.Pods} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payload.v1.Info.Pods}
 */
proto.payload.v1.Info.Pods.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.payload.v1.Info.Pod;
      reader.readMessage(value,proto.payload.v1.Info.Pod.deserializeBinaryFromReader);
      msg.addPods(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payload.v1.Info.Pods.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payload.v1.Info.Pods.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payload.v1.Info.Pods} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payload.v1.Info.Pods.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPodsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.payload.v1.Info.Pod.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Pod pods = 1;
 * @return {!Array<!proto.payload.v1.Info.Pod>}
 */
proto.payload.v1.Info.Pods.prototype.getPodsList = function() {
  return /** @type{!Array<!proto.payload.v1.Info.Pod>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.payload.v1.Info.Pod, 1));
};


/**
 * @param {!Array<!proto.payload.v1.Info.Pod>} value
 * @return {!proto.payload.v1.Info.Pods} returns this
*/
proto.payload.v1.Info.Pods.prototype.setPodsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.payload.v1.Info.Pod=} opt_value
 * @param {number=} opt_index
 * @return {!proto.payload.v1.Info.Pod}
 */
proto.payload.v1.Info.Pods.prototype.addPods = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.payload.v1.Info.Pod, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.payload.v1.Info.Pods} returns this
 */
proto.payload.v1.Info.Pods.prototype.clearPodsList = function() {
  return this.setPodsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.payload.v1.Info.Nodes.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payload.v1.Info.Nodes.prototype.toObject = function(opt_includeInstance) {
  return proto.payload.v1.Info.Nodes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payload.v1.Info.Nodes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payload.v1.Info.Nodes.toObject = function(includeInstance, msg) {
  var f, obj = {
    nodesList: jspb.Message.toObjectList(msg.getNodesList(),
    proto.payload.v1.Info.Node.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payload.v1.Info.Nodes}
 */
proto.payload.v1.Info.Nodes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payload.v1.Info.Nodes;
  return proto.payload.v1.Info.Nodes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payload.v1.Info.Nodes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payload.v1.Info.Nodes}
 */
proto.payload.v1.Info.Nodes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.payload.v1.Info.Node;
      reader.readMessage(value,proto.payload.v1.Info.Node.deserializeBinaryFromReader);
      msg.addNodes(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payload.v1.Info.Nodes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payload.v1.Info.Nodes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payload.v1.Info.Nodes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payload.v1.Info.Nodes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNodesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.payload.v1.Info.Node.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Node nodes = 1;
 * @return {!Array<!proto.payload.v1.Info.Node>}
 */
proto.payload.v1.Info.Nodes.prototype.getNodesList = function() {
  return /** @type{!Array<!proto.payload.v1.Info.Node>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.payload.v1.Info.Node, 1));
};


/**
 * @param {!Array<!proto.payload.v1.Info.Node>} value
 * @return {!proto.payload.v1.Info.Nodes} returns this
*/
proto.payload.v1.Info.Nodes.prototype.setNodesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.payload.v1.Info.Node=} opt_value
 * @param {number=} opt_index
 * @return {!proto.payload.v1.Info.Node}
 */
proto.payload.v1.Info.Nodes.prototype.addNodes = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.payload.v1.Info.Node, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.payload.v1.Info.Nodes} returns this
 */
proto.payload.v1.Info.Nodes.prototype.clearNodesList = function() {
  return this.setNodesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.payload.v1.Info.IPs.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payload.v1.Info.IPs.prototype.toObject = function(opt_includeInstance) {
  return proto.payload.v1.Info.IPs.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payload.v1.Info.IPs} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payload.v1.Info.IPs.toObject = function(includeInstance, msg) {
  var f, obj = {
    ipList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payload.v1.Info.IPs}
 */
proto.payload.v1.Info.IPs.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payload.v1.Info.IPs;
  return proto.payload.v1.Info.IPs.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payload.v1.Info.IPs} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payload.v1.Info.IPs}
 */
proto.payload.v1.Info.IPs.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addIp(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payload.v1.Info.IPs.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payload.v1.Info.IPs.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payload.v1.Info.IPs} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payload.v1.Info.IPs.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIpList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
};


/**
 * repeated string ip = 1;
 * @return {!Array<string>}
 */
proto.payload.v1.Info.IPs.prototype.getIpList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.payload.v1.Info.IPs} returns this
 */
proto.payload.v1.Info.IPs.prototype.setIpList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.payload.v1.Info.IPs} returns this
 */
proto.payload.v1.Info.IPs.prototype.addIp = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.payload.v1.Info.IPs} returns this
 */
proto.payload.v1.Info.IPs.prototype.clearIpList = function() {
  return this.setIpList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payload.v1.Empty.prototype.toObject = function(opt_includeInstance) {
  return proto.payload.v1.Empty.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payload.v1.Empty} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payload.v1.Empty.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payload.v1.Empty}
 */
proto.payload.v1.Empty.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payload.v1.Empty;
  return proto.payload.v1.Empty.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payload.v1.Empty} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payload.v1.Empty}
 */
proto.payload.v1.Empty.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payload.v1.Empty.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payload.v1.Empty.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payload.v1.Empty} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payload.v1.Empty.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};


goog.object.extend(exports, proto.payload.v1);
