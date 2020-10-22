// source: vald/v1/payload/payload.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var validate_validate_pb = require('../../../validate/validate_pb.js');
goog.object.extend(proto, validate_validate_pb);
goog.exportSymbol('proto.payload.v1.Backup', null, global);
goog.exportSymbol('proto.payload.v1.Backup.Compressed', null, global);
goog.exportSymbol('proto.payload.v1.Backup.Compressed.Vector', null, global);
goog.exportSymbol('proto.payload.v1.Backup.Compressed.Vectors', null, global);
goog.exportSymbol('proto.payload.v1.Backup.GetVector', null, global);
goog.exportSymbol('proto.payload.v1.Backup.GetVector.Owner', null, global);
goog.exportSymbol('proto.payload.v1.Backup.GetVector.Request', null, global);
goog.exportSymbol('proto.payload.v1.Backup.IP', null, global);
goog.exportSymbol('proto.payload.v1.Backup.IP.Register', null, global);
goog.exportSymbol('proto.payload.v1.Backup.IP.Register.Request', null, global);
goog.exportSymbol('proto.payload.v1.Backup.IP.Remove', null, global);
goog.exportSymbol('proto.payload.v1.Backup.IP.Remove.Request', null, global);
goog.exportSymbol('proto.payload.v1.Backup.Locations', null, global);
goog.exportSymbol('proto.payload.v1.Backup.Locations.Request', null, global);
goog.exportSymbol('proto.payload.v1.Backup.Remove', null, global);
goog.exportSymbol('proto.payload.v1.Backup.Remove.Request', null, global);
goog.exportSymbol('proto.payload.v1.Backup.Remove.RequestMulti', null, global);
goog.exportSymbol('proto.payload.v1.Backup.Vector', null, global);
goog.exportSymbol('proto.payload.v1.Backup.Vectors', null, global);
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
goog.exportSymbol('proto.payload.v1.Insert.MultiRequest', null, global);
goog.exportSymbol('proto.payload.v1.Insert.Request', null, global);
goog.exportSymbol('proto.payload.v1.Meta', null, global);
goog.exportSymbol('proto.payload.v1.Meta.Key', null, global);
goog.exportSymbol('proto.payload.v1.Meta.KeyVal', null, global);
goog.exportSymbol('proto.payload.v1.Meta.KeyVals', null, global);
goog.exportSymbol('proto.payload.v1.Meta.Keys', null, global);
goog.exportSymbol('proto.payload.v1.Meta.Val', null, global);
goog.exportSymbol('proto.payload.v1.Meta.Vals', null, global);
goog.exportSymbol('proto.payload.v1.Object', null, global);
goog.exportSymbol('proto.payload.v1.Object.Blob', null, global);
goog.exportSymbol('proto.payload.v1.Object.Distance', null, global);
goog.exportSymbol('proto.payload.v1.Object.ID', null, global);
goog.exportSymbol('proto.payload.v1.Object.IDs', null, global);
goog.exportSymbol('proto.payload.v1.Object.Location', null, global);
goog.exportSymbol('proto.payload.v1.Object.Locations', null, global);
goog.exportSymbol('proto.payload.v1.Object.Vector', null, global);
goog.exportSymbol('proto.payload.v1.Object.Vectors', null, global);
goog.exportSymbol('proto.payload.v1.Remove', null, global);
goog.exportSymbol('proto.payload.v1.Remove.Config', null, global);
goog.exportSymbol('proto.payload.v1.Remove.MultiRequest', null, global);
goog.exportSymbol('proto.payload.v1.Remove.Request', null, global);
goog.exportSymbol('proto.payload.v1.Replication', null, global);
goog.exportSymbol('proto.payload.v1.Replication.Agents', null, global);
goog.exportSymbol('proto.payload.v1.Replication.Rebalance', null, global);
goog.exportSymbol('proto.payload.v1.Replication.Recovery', null, global);
goog.exportSymbol('proto.payload.v1.Search', null, global);
goog.exportSymbol('proto.payload.v1.Search.Config', null, global);
goog.exportSymbol('proto.payload.v1.Search.IDRequest', null, global);
goog.exportSymbol('proto.payload.v1.Search.MultiIDRequest', null, global);
goog.exportSymbol('proto.payload.v1.Search.MultiRequest', null, global);
goog.exportSymbol('proto.payload.v1.Search.ObjectRequest', null, global);
goog.exportSymbol('proto.payload.v1.Search.Request', null, global);
goog.exportSymbol('proto.payload.v1.Search.Response', null, global);
goog.exportSymbol('proto.payload.v1.Search.Responses', null, global);
goog.exportSymbol('proto.payload.v1.Update', null, global);
goog.exportSymbol('proto.payload.v1.Update.Config', null, global);
goog.exportSymbol('proto.payload.v1.Update.MultiRequest', null, global);
goog.exportSymbol('proto.payload.v1.Update.Request', null, global);
goog.exportSymbol('proto.payload.v1.Upsert', null, global);
goog.exportSymbol('proto.payload.v1.Upsert.Config', null, global);
goog.exportSymbol('proto.payload.v1.Upsert.MultiRequest', null, global);
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
proto.payload.v1.Meta = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payload.v1.Meta, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payload.v1.Meta.displayName = 'proto.payload.v1.Meta';
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
proto.payload.v1.Meta.Key = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payload.v1.Meta.Key, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payload.v1.Meta.Key.displayName = 'proto.payload.v1.Meta.Key';
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
proto.payload.v1.Meta.Keys = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.payload.v1.Meta.Keys.repeatedFields_, null);
};
goog.inherits(proto.payload.v1.Meta.Keys, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payload.v1.Meta.Keys.displayName = 'proto.payload.v1.Meta.Keys';
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
proto.payload.v1.Meta.Val = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payload.v1.Meta.Val, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payload.v1.Meta.Val.displayName = 'proto.payload.v1.Meta.Val';
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
proto.payload.v1.Meta.Vals = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.payload.v1.Meta.Vals.repeatedFields_, null);
};
goog.inherits(proto.payload.v1.Meta.Vals, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payload.v1.Meta.Vals.displayName = 'proto.payload.v1.Meta.Vals';
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
proto.payload.v1.Meta.KeyVal = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payload.v1.Meta.KeyVal, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payload.v1.Meta.KeyVal.displayName = 'proto.payload.v1.Meta.KeyVal';
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
proto.payload.v1.Meta.KeyVals = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.payload.v1.Meta.KeyVals.repeatedFields_, null);
};
goog.inherits(proto.payload.v1.Meta.KeyVals, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payload.v1.Meta.KeyVals.displayName = 'proto.payload.v1.Meta.KeyVals';
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
proto.payload.v1.Replication = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payload.v1.Replication, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payload.v1.Replication.displayName = 'proto.payload.v1.Replication';
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
proto.payload.v1.Replication.Recovery = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.payload.v1.Replication.Recovery.repeatedFields_, null);
};
goog.inherits(proto.payload.v1.Replication.Recovery, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payload.v1.Replication.Recovery.displayName = 'proto.payload.v1.Replication.Recovery';
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
proto.payload.v1.Replication.Rebalance = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.payload.v1.Replication.Rebalance.repeatedFields_, null);
};
goog.inherits(proto.payload.v1.Replication.Rebalance, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payload.v1.Replication.Rebalance.displayName = 'proto.payload.v1.Replication.Rebalance';
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
proto.payload.v1.Replication.Agents = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.payload.v1.Replication.Agents.repeatedFields_, null);
};
goog.inherits(proto.payload.v1.Replication.Agents, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payload.v1.Replication.Agents.displayName = 'proto.payload.v1.Replication.Agents';
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
proto.payload.v1.Backup = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payload.v1.Backup, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payload.v1.Backup.displayName = 'proto.payload.v1.Backup';
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
proto.payload.v1.Backup.GetVector = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payload.v1.Backup.GetVector, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payload.v1.Backup.GetVector.displayName = 'proto.payload.v1.Backup.GetVector';
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
proto.payload.v1.Backup.GetVector.Request = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payload.v1.Backup.GetVector.Request, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payload.v1.Backup.GetVector.Request.displayName = 'proto.payload.v1.Backup.GetVector.Request';
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
proto.payload.v1.Backup.GetVector.Owner = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payload.v1.Backup.GetVector.Owner, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payload.v1.Backup.GetVector.Owner.displayName = 'proto.payload.v1.Backup.GetVector.Owner';
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
proto.payload.v1.Backup.Locations = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payload.v1.Backup.Locations, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payload.v1.Backup.Locations.displayName = 'proto.payload.v1.Backup.Locations';
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
proto.payload.v1.Backup.Locations.Request = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payload.v1.Backup.Locations.Request, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payload.v1.Backup.Locations.Request.displayName = 'proto.payload.v1.Backup.Locations.Request';
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
proto.payload.v1.Backup.Remove = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payload.v1.Backup.Remove, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payload.v1.Backup.Remove.displayName = 'proto.payload.v1.Backup.Remove';
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
proto.payload.v1.Backup.Remove.Request = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payload.v1.Backup.Remove.Request, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payload.v1.Backup.Remove.Request.displayName = 'proto.payload.v1.Backup.Remove.Request';
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
proto.payload.v1.Backup.Remove.RequestMulti = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.payload.v1.Backup.Remove.RequestMulti.repeatedFields_, null);
};
goog.inherits(proto.payload.v1.Backup.Remove.RequestMulti, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payload.v1.Backup.Remove.RequestMulti.displayName = 'proto.payload.v1.Backup.Remove.RequestMulti';
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
proto.payload.v1.Backup.IP = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payload.v1.Backup.IP, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payload.v1.Backup.IP.displayName = 'proto.payload.v1.Backup.IP';
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
proto.payload.v1.Backup.IP.Register = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payload.v1.Backup.IP.Register, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payload.v1.Backup.IP.Register.displayName = 'proto.payload.v1.Backup.IP.Register';
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
proto.payload.v1.Backup.IP.Register.Request = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.payload.v1.Backup.IP.Register.Request.repeatedFields_, null);
};
goog.inherits(proto.payload.v1.Backup.IP.Register.Request, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payload.v1.Backup.IP.Register.Request.displayName = 'proto.payload.v1.Backup.IP.Register.Request';
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
proto.payload.v1.Backup.IP.Remove = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payload.v1.Backup.IP.Remove, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payload.v1.Backup.IP.Remove.displayName = 'proto.payload.v1.Backup.IP.Remove';
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
proto.payload.v1.Backup.IP.Remove.Request = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.payload.v1.Backup.IP.Remove.Request.repeatedFields_, null);
};
goog.inherits(proto.payload.v1.Backup.IP.Remove.Request, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payload.v1.Backup.IP.Remove.Request.displayName = 'proto.payload.v1.Backup.IP.Remove.Request';
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
proto.payload.v1.Backup.Vector = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.payload.v1.Backup.Vector.repeatedFields_, null);
};
goog.inherits(proto.payload.v1.Backup.Vector, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payload.v1.Backup.Vector.displayName = 'proto.payload.v1.Backup.Vector';
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
proto.payload.v1.Backup.Vectors = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.payload.v1.Backup.Vectors.repeatedFields_, null);
};
goog.inherits(proto.payload.v1.Backup.Vectors, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payload.v1.Backup.Vectors.displayName = 'proto.payload.v1.Backup.Vectors';
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
proto.payload.v1.Backup.Compressed = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payload.v1.Backup.Compressed, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payload.v1.Backup.Compressed.displayName = 'proto.payload.v1.Backup.Compressed';
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
proto.payload.v1.Backup.Compressed.Vector = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.payload.v1.Backup.Compressed.Vector.repeatedFields_, null);
};
goog.inherits(proto.payload.v1.Backup.Compressed.Vector, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payload.v1.Backup.Compressed.Vector.displayName = 'proto.payload.v1.Backup.Compressed.Vector';
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
proto.payload.v1.Backup.Compressed.Vectors = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.payload.v1.Backup.Compressed.Vectors.repeatedFields_, null);
};
goog.inherits(proto.payload.v1.Backup.Compressed.Vectors, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payload.v1.Backup.Compressed.Vectors.displayName = 'proto.payload.v1.Backup.Compressed.Vectors';
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
      var value = /** @type {!Array<number>} */ (reader.readPackedFloat());
      msg.setVectorList(value);
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
  f = message.getFilters();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.payload.v1.Filter.Config.serializeBinaryToWriter
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
 * optional Filter.Config filters = 6;
 * @return {?proto.payload.v1.Filter.Config}
 */
proto.payload.v1.Search.Config.prototype.getFilters = function() {
  return /** @type{?proto.payload.v1.Filter.Config} */ (
    jspb.Message.getWrapperField(this, proto.payload.v1.Filter.Config, 6));
};


/**
 * @param {?proto.payload.v1.Filter.Config|undefined} value
 * @return {!proto.payload.v1.Search.Config} returns this
*/
proto.payload.v1.Search.Config.prototype.setFilters = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.payload.v1.Search.Config} returns this
 */
proto.payload.v1.Search.Config.prototype.clearFilters = function() {
  return this.setFilters(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.payload.v1.Search.Config.prototype.hasFilters = function() {
  return jspb.Message.getField(this, 6) != null;
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
    targetsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
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
      var value = /** @type {string} */ (reader.readString());
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
    writer.writeRepeatedString(
      1,
      f
    );
  }
};


/**
 * repeated string targets = 1;
 * @return {!Array<string>}
 */
proto.payload.v1.Filter.Config.prototype.getTargetsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.payload.v1.Filter.Config} returns this
 */
proto.payload.v1.Filter.Config.prototype.setTargetsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.payload.v1.Filter.Config} returns this
 */
proto.payload.v1.Filter.Config.prototype.addTargets = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
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
    skipStrictExistCheck: jspb.Message.getBooleanFieldWithDefault(msg, 1, false)
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
proto.payload.v1.Meta.prototype.toObject = function(opt_includeInstance) {
  return proto.payload.v1.Meta.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payload.v1.Meta} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payload.v1.Meta.toObject = function(includeInstance, msg) {
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
 * @return {!proto.payload.v1.Meta}
 */
proto.payload.v1.Meta.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payload.v1.Meta;
  return proto.payload.v1.Meta.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payload.v1.Meta} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payload.v1.Meta}
 */
proto.payload.v1.Meta.deserializeBinaryFromReader = function(msg, reader) {
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
proto.payload.v1.Meta.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payload.v1.Meta.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payload.v1.Meta} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payload.v1.Meta.serializeBinaryToWriter = function(message, writer) {
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
proto.payload.v1.Meta.Key.prototype.toObject = function(opt_includeInstance) {
  return proto.payload.v1.Meta.Key.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payload.v1.Meta.Key} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payload.v1.Meta.Key.toObject = function(includeInstance, msg) {
  var f, obj = {
    key: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.payload.v1.Meta.Key}
 */
proto.payload.v1.Meta.Key.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payload.v1.Meta.Key;
  return proto.payload.v1.Meta.Key.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payload.v1.Meta.Key} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payload.v1.Meta.Key}
 */
proto.payload.v1.Meta.Key.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setKey(value);
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
proto.payload.v1.Meta.Key.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payload.v1.Meta.Key.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payload.v1.Meta.Key} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payload.v1.Meta.Key.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKey();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string key = 1;
 * @return {string}
 */
proto.payload.v1.Meta.Key.prototype.getKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.payload.v1.Meta.Key} returns this
 */
proto.payload.v1.Meta.Key.prototype.setKey = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.payload.v1.Meta.Keys.repeatedFields_ = [1];



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
proto.payload.v1.Meta.Keys.prototype.toObject = function(opt_includeInstance) {
  return proto.payload.v1.Meta.Keys.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payload.v1.Meta.Keys} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payload.v1.Meta.Keys.toObject = function(includeInstance, msg) {
  var f, obj = {
    keysList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
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
 * @return {!proto.payload.v1.Meta.Keys}
 */
proto.payload.v1.Meta.Keys.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payload.v1.Meta.Keys;
  return proto.payload.v1.Meta.Keys.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payload.v1.Meta.Keys} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payload.v1.Meta.Keys}
 */
proto.payload.v1.Meta.Keys.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addKeys(value);
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
proto.payload.v1.Meta.Keys.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payload.v1.Meta.Keys.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payload.v1.Meta.Keys} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payload.v1.Meta.Keys.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKeysList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
};


/**
 * repeated string keys = 1;
 * @return {!Array<string>}
 */
proto.payload.v1.Meta.Keys.prototype.getKeysList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.payload.v1.Meta.Keys} returns this
 */
proto.payload.v1.Meta.Keys.prototype.setKeysList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.payload.v1.Meta.Keys} returns this
 */
proto.payload.v1.Meta.Keys.prototype.addKeys = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.payload.v1.Meta.Keys} returns this
 */
proto.payload.v1.Meta.Keys.prototype.clearKeysList = function() {
  return this.setKeysList([]);
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
proto.payload.v1.Meta.Val.prototype.toObject = function(opt_includeInstance) {
  return proto.payload.v1.Meta.Val.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payload.v1.Meta.Val} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payload.v1.Meta.Val.toObject = function(includeInstance, msg) {
  var f, obj = {
    val: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.payload.v1.Meta.Val}
 */
proto.payload.v1.Meta.Val.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payload.v1.Meta.Val;
  return proto.payload.v1.Meta.Val.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payload.v1.Meta.Val} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payload.v1.Meta.Val}
 */
proto.payload.v1.Meta.Val.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setVal(value);
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
proto.payload.v1.Meta.Val.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payload.v1.Meta.Val.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payload.v1.Meta.Val} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payload.v1.Meta.Val.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVal();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string val = 1;
 * @return {string}
 */
proto.payload.v1.Meta.Val.prototype.getVal = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.payload.v1.Meta.Val} returns this
 */
proto.payload.v1.Meta.Val.prototype.setVal = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.payload.v1.Meta.Vals.repeatedFields_ = [1];



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
proto.payload.v1.Meta.Vals.prototype.toObject = function(opt_includeInstance) {
  return proto.payload.v1.Meta.Vals.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payload.v1.Meta.Vals} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payload.v1.Meta.Vals.toObject = function(includeInstance, msg) {
  var f, obj = {
    valsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
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
 * @return {!proto.payload.v1.Meta.Vals}
 */
proto.payload.v1.Meta.Vals.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payload.v1.Meta.Vals;
  return proto.payload.v1.Meta.Vals.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payload.v1.Meta.Vals} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payload.v1.Meta.Vals}
 */
proto.payload.v1.Meta.Vals.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addVals(value);
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
proto.payload.v1.Meta.Vals.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payload.v1.Meta.Vals.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payload.v1.Meta.Vals} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payload.v1.Meta.Vals.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
};


/**
 * repeated string vals = 1;
 * @return {!Array<string>}
 */
proto.payload.v1.Meta.Vals.prototype.getValsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.payload.v1.Meta.Vals} returns this
 */
proto.payload.v1.Meta.Vals.prototype.setValsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.payload.v1.Meta.Vals} returns this
 */
proto.payload.v1.Meta.Vals.prototype.addVals = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.payload.v1.Meta.Vals} returns this
 */
proto.payload.v1.Meta.Vals.prototype.clearValsList = function() {
  return this.setValsList([]);
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
proto.payload.v1.Meta.KeyVal.prototype.toObject = function(opt_includeInstance) {
  return proto.payload.v1.Meta.KeyVal.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payload.v1.Meta.KeyVal} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payload.v1.Meta.KeyVal.toObject = function(includeInstance, msg) {
  var f, obj = {
    key: jspb.Message.getFieldWithDefault(msg, 1, ""),
    val: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.payload.v1.Meta.KeyVal}
 */
proto.payload.v1.Meta.KeyVal.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payload.v1.Meta.KeyVal;
  return proto.payload.v1.Meta.KeyVal.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payload.v1.Meta.KeyVal} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payload.v1.Meta.KeyVal}
 */
proto.payload.v1.Meta.KeyVal.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setKey(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setVal(value);
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
proto.payload.v1.Meta.KeyVal.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payload.v1.Meta.KeyVal.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payload.v1.Meta.KeyVal} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payload.v1.Meta.KeyVal.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKey();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getVal();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string key = 1;
 * @return {string}
 */
proto.payload.v1.Meta.KeyVal.prototype.getKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.payload.v1.Meta.KeyVal} returns this
 */
proto.payload.v1.Meta.KeyVal.prototype.setKey = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string val = 2;
 * @return {string}
 */
proto.payload.v1.Meta.KeyVal.prototype.getVal = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.payload.v1.Meta.KeyVal} returns this
 */
proto.payload.v1.Meta.KeyVal.prototype.setVal = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.payload.v1.Meta.KeyVals.repeatedFields_ = [1];



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
proto.payload.v1.Meta.KeyVals.prototype.toObject = function(opt_includeInstance) {
  return proto.payload.v1.Meta.KeyVals.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payload.v1.Meta.KeyVals} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payload.v1.Meta.KeyVals.toObject = function(includeInstance, msg) {
  var f, obj = {
    kvsList: jspb.Message.toObjectList(msg.getKvsList(),
    proto.payload.v1.Meta.KeyVal.toObject, includeInstance)
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
 * @return {!proto.payload.v1.Meta.KeyVals}
 */
proto.payload.v1.Meta.KeyVals.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payload.v1.Meta.KeyVals;
  return proto.payload.v1.Meta.KeyVals.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payload.v1.Meta.KeyVals} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payload.v1.Meta.KeyVals}
 */
proto.payload.v1.Meta.KeyVals.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.payload.v1.Meta.KeyVal;
      reader.readMessage(value,proto.payload.v1.Meta.KeyVal.deserializeBinaryFromReader);
      msg.addKvs(value);
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
proto.payload.v1.Meta.KeyVals.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payload.v1.Meta.KeyVals.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payload.v1.Meta.KeyVals} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payload.v1.Meta.KeyVals.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKvsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.payload.v1.Meta.KeyVal.serializeBinaryToWriter
    );
  }
};


/**
 * repeated KeyVal kvs = 1;
 * @return {!Array<!proto.payload.v1.Meta.KeyVal>}
 */
proto.payload.v1.Meta.KeyVals.prototype.getKvsList = function() {
  return /** @type{!Array<!proto.payload.v1.Meta.KeyVal>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.payload.v1.Meta.KeyVal, 1));
};


/**
 * @param {!Array<!proto.payload.v1.Meta.KeyVal>} value
 * @return {!proto.payload.v1.Meta.KeyVals} returns this
*/
proto.payload.v1.Meta.KeyVals.prototype.setKvsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.payload.v1.Meta.KeyVal=} opt_value
 * @param {number=} opt_index
 * @return {!proto.payload.v1.Meta.KeyVal}
 */
proto.payload.v1.Meta.KeyVals.prototype.addKvs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.payload.v1.Meta.KeyVal, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.payload.v1.Meta.KeyVals} returns this
 */
proto.payload.v1.Meta.KeyVals.prototype.clearKvsList = function() {
  return this.setKvsList([]);
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
      var value = /** @type {!Array<number>} */ (reader.readPackedFloat());
      msg.setVectorList(value);
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
proto.payload.v1.Replication.prototype.toObject = function(opt_includeInstance) {
  return proto.payload.v1.Replication.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payload.v1.Replication} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payload.v1.Replication.toObject = function(includeInstance, msg) {
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
 * @return {!proto.payload.v1.Replication}
 */
proto.payload.v1.Replication.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payload.v1.Replication;
  return proto.payload.v1.Replication.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payload.v1.Replication} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payload.v1.Replication}
 */
proto.payload.v1.Replication.deserializeBinaryFromReader = function(msg, reader) {
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
proto.payload.v1.Replication.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payload.v1.Replication.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payload.v1.Replication} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payload.v1.Replication.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.payload.v1.Replication.Recovery.repeatedFields_ = [1];



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
proto.payload.v1.Replication.Recovery.prototype.toObject = function(opt_includeInstance) {
  return proto.payload.v1.Replication.Recovery.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payload.v1.Replication.Recovery} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payload.v1.Replication.Recovery.toObject = function(includeInstance, msg) {
  var f, obj = {
    deletedAgentsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
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
 * @return {!proto.payload.v1.Replication.Recovery}
 */
proto.payload.v1.Replication.Recovery.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payload.v1.Replication.Recovery;
  return proto.payload.v1.Replication.Recovery.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payload.v1.Replication.Recovery} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payload.v1.Replication.Recovery}
 */
proto.payload.v1.Replication.Recovery.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addDeletedAgents(value);
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
proto.payload.v1.Replication.Recovery.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payload.v1.Replication.Recovery.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payload.v1.Replication.Recovery} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payload.v1.Replication.Recovery.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDeletedAgentsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
};


/**
 * repeated string deleted_agents = 1;
 * @return {!Array<string>}
 */
proto.payload.v1.Replication.Recovery.prototype.getDeletedAgentsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.payload.v1.Replication.Recovery} returns this
 */
proto.payload.v1.Replication.Recovery.prototype.setDeletedAgentsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.payload.v1.Replication.Recovery} returns this
 */
proto.payload.v1.Replication.Recovery.prototype.addDeletedAgents = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.payload.v1.Replication.Recovery} returns this
 */
proto.payload.v1.Replication.Recovery.prototype.clearDeletedAgentsList = function() {
  return this.setDeletedAgentsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.payload.v1.Replication.Rebalance.repeatedFields_ = [1,2];



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
proto.payload.v1.Replication.Rebalance.prototype.toObject = function(opt_includeInstance) {
  return proto.payload.v1.Replication.Rebalance.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payload.v1.Replication.Rebalance} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payload.v1.Replication.Rebalance.toObject = function(includeInstance, msg) {
  var f, obj = {
    highUsageAgentsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
    lowUsageAgentsList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f
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
 * @return {!proto.payload.v1.Replication.Rebalance}
 */
proto.payload.v1.Replication.Rebalance.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payload.v1.Replication.Rebalance;
  return proto.payload.v1.Replication.Rebalance.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payload.v1.Replication.Rebalance} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payload.v1.Replication.Rebalance}
 */
proto.payload.v1.Replication.Rebalance.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addHighUsageAgents(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addLowUsageAgents(value);
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
proto.payload.v1.Replication.Rebalance.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payload.v1.Replication.Rebalance.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payload.v1.Replication.Rebalance} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payload.v1.Replication.Rebalance.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHighUsageAgentsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
  f = message.getLowUsageAgentsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
};


/**
 * repeated string high_usage_agents = 1;
 * @return {!Array<string>}
 */
proto.payload.v1.Replication.Rebalance.prototype.getHighUsageAgentsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.payload.v1.Replication.Rebalance} returns this
 */
proto.payload.v1.Replication.Rebalance.prototype.setHighUsageAgentsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.payload.v1.Replication.Rebalance} returns this
 */
proto.payload.v1.Replication.Rebalance.prototype.addHighUsageAgents = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.payload.v1.Replication.Rebalance} returns this
 */
proto.payload.v1.Replication.Rebalance.prototype.clearHighUsageAgentsList = function() {
  return this.setHighUsageAgentsList([]);
};


/**
 * repeated string low_usage_agents = 2;
 * @return {!Array<string>}
 */
proto.payload.v1.Replication.Rebalance.prototype.getLowUsageAgentsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.payload.v1.Replication.Rebalance} returns this
 */
proto.payload.v1.Replication.Rebalance.prototype.setLowUsageAgentsList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.payload.v1.Replication.Rebalance} returns this
 */
proto.payload.v1.Replication.Rebalance.prototype.addLowUsageAgents = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.payload.v1.Replication.Rebalance} returns this
 */
proto.payload.v1.Replication.Rebalance.prototype.clearLowUsageAgentsList = function() {
  return this.setLowUsageAgentsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.payload.v1.Replication.Agents.repeatedFields_ = [1,2,3];



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
proto.payload.v1.Replication.Agents.prototype.toObject = function(opt_includeInstance) {
  return proto.payload.v1.Replication.Agents.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payload.v1.Replication.Agents} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payload.v1.Replication.Agents.toObject = function(includeInstance, msg) {
  var f, obj = {
    agentsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
    removedAgentsList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
    replicatingAgentList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f
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
 * @return {!proto.payload.v1.Replication.Agents}
 */
proto.payload.v1.Replication.Agents.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payload.v1.Replication.Agents;
  return proto.payload.v1.Replication.Agents.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payload.v1.Replication.Agents} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payload.v1.Replication.Agents}
 */
proto.payload.v1.Replication.Agents.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addAgents(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addRemovedAgents(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addReplicatingAgent(value);
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
proto.payload.v1.Replication.Agents.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payload.v1.Replication.Agents.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payload.v1.Replication.Agents} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payload.v1.Replication.Agents.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAgentsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
  f = message.getRemovedAgentsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
  f = message.getReplicatingAgentList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
};


/**
 * repeated string agents = 1;
 * @return {!Array<string>}
 */
proto.payload.v1.Replication.Agents.prototype.getAgentsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.payload.v1.Replication.Agents} returns this
 */
proto.payload.v1.Replication.Agents.prototype.setAgentsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.payload.v1.Replication.Agents} returns this
 */
proto.payload.v1.Replication.Agents.prototype.addAgents = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.payload.v1.Replication.Agents} returns this
 */
proto.payload.v1.Replication.Agents.prototype.clearAgentsList = function() {
  return this.setAgentsList([]);
};


/**
 * repeated string removed_agents = 2;
 * @return {!Array<string>}
 */
proto.payload.v1.Replication.Agents.prototype.getRemovedAgentsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.payload.v1.Replication.Agents} returns this
 */
proto.payload.v1.Replication.Agents.prototype.setRemovedAgentsList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.payload.v1.Replication.Agents} returns this
 */
proto.payload.v1.Replication.Agents.prototype.addRemovedAgents = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.payload.v1.Replication.Agents} returns this
 */
proto.payload.v1.Replication.Agents.prototype.clearRemovedAgentsList = function() {
  return this.setRemovedAgentsList([]);
};


/**
 * repeated string replicating_agent = 3;
 * @return {!Array<string>}
 */
proto.payload.v1.Replication.Agents.prototype.getReplicatingAgentList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.payload.v1.Replication.Agents} returns this
 */
proto.payload.v1.Replication.Agents.prototype.setReplicatingAgentList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.payload.v1.Replication.Agents} returns this
 */
proto.payload.v1.Replication.Agents.prototype.addReplicatingAgent = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.payload.v1.Replication.Agents} returns this
 */
proto.payload.v1.Replication.Agents.prototype.clearReplicatingAgentList = function() {
  return this.setReplicatingAgentList([]);
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
proto.payload.v1.Backup.prototype.toObject = function(opt_includeInstance) {
  return proto.payload.v1.Backup.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payload.v1.Backup} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payload.v1.Backup.toObject = function(includeInstance, msg) {
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
 * @return {!proto.payload.v1.Backup}
 */
proto.payload.v1.Backup.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payload.v1.Backup;
  return proto.payload.v1.Backup.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payload.v1.Backup} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payload.v1.Backup}
 */
proto.payload.v1.Backup.deserializeBinaryFromReader = function(msg, reader) {
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
proto.payload.v1.Backup.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payload.v1.Backup.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payload.v1.Backup} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payload.v1.Backup.serializeBinaryToWriter = function(message, writer) {
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
proto.payload.v1.Backup.GetVector.prototype.toObject = function(opt_includeInstance) {
  return proto.payload.v1.Backup.GetVector.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payload.v1.Backup.GetVector} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payload.v1.Backup.GetVector.toObject = function(includeInstance, msg) {
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
 * @return {!proto.payload.v1.Backup.GetVector}
 */
proto.payload.v1.Backup.GetVector.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payload.v1.Backup.GetVector;
  return proto.payload.v1.Backup.GetVector.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payload.v1.Backup.GetVector} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payload.v1.Backup.GetVector}
 */
proto.payload.v1.Backup.GetVector.deserializeBinaryFromReader = function(msg, reader) {
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
proto.payload.v1.Backup.GetVector.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payload.v1.Backup.GetVector.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payload.v1.Backup.GetVector} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payload.v1.Backup.GetVector.serializeBinaryToWriter = function(message, writer) {
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
proto.payload.v1.Backup.GetVector.Request.prototype.toObject = function(opt_includeInstance) {
  return proto.payload.v1.Backup.GetVector.Request.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payload.v1.Backup.GetVector.Request} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payload.v1.Backup.GetVector.Request.toObject = function(includeInstance, msg) {
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
 * @return {!proto.payload.v1.Backup.GetVector.Request}
 */
proto.payload.v1.Backup.GetVector.Request.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payload.v1.Backup.GetVector.Request;
  return proto.payload.v1.Backup.GetVector.Request.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payload.v1.Backup.GetVector.Request} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payload.v1.Backup.GetVector.Request}
 */
proto.payload.v1.Backup.GetVector.Request.deserializeBinaryFromReader = function(msg, reader) {
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
proto.payload.v1.Backup.GetVector.Request.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payload.v1.Backup.GetVector.Request.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payload.v1.Backup.GetVector.Request} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payload.v1.Backup.GetVector.Request.serializeBinaryToWriter = function(message, writer) {
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
proto.payload.v1.Backup.GetVector.Request.prototype.getUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.payload.v1.Backup.GetVector.Request} returns this
 */
proto.payload.v1.Backup.GetVector.Request.prototype.setUuid = function(value) {
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
proto.payload.v1.Backup.GetVector.Owner.prototype.toObject = function(opt_includeInstance) {
  return proto.payload.v1.Backup.GetVector.Owner.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payload.v1.Backup.GetVector.Owner} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payload.v1.Backup.GetVector.Owner.toObject = function(includeInstance, msg) {
  var f, obj = {
    ip: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.payload.v1.Backup.GetVector.Owner}
 */
proto.payload.v1.Backup.GetVector.Owner.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payload.v1.Backup.GetVector.Owner;
  return proto.payload.v1.Backup.GetVector.Owner.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payload.v1.Backup.GetVector.Owner} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payload.v1.Backup.GetVector.Owner}
 */
proto.payload.v1.Backup.GetVector.Owner.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setIp(value);
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
proto.payload.v1.Backup.GetVector.Owner.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payload.v1.Backup.GetVector.Owner.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payload.v1.Backup.GetVector.Owner} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payload.v1.Backup.GetVector.Owner.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIp();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string ip = 1;
 * @return {string}
 */
proto.payload.v1.Backup.GetVector.Owner.prototype.getIp = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.payload.v1.Backup.GetVector.Owner} returns this
 */
proto.payload.v1.Backup.GetVector.Owner.prototype.setIp = function(value) {
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
proto.payload.v1.Backup.Locations.prototype.toObject = function(opt_includeInstance) {
  return proto.payload.v1.Backup.Locations.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payload.v1.Backup.Locations} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payload.v1.Backup.Locations.toObject = function(includeInstance, msg) {
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
 * @return {!proto.payload.v1.Backup.Locations}
 */
proto.payload.v1.Backup.Locations.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payload.v1.Backup.Locations;
  return proto.payload.v1.Backup.Locations.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payload.v1.Backup.Locations} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payload.v1.Backup.Locations}
 */
proto.payload.v1.Backup.Locations.deserializeBinaryFromReader = function(msg, reader) {
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
proto.payload.v1.Backup.Locations.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payload.v1.Backup.Locations.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payload.v1.Backup.Locations} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payload.v1.Backup.Locations.serializeBinaryToWriter = function(message, writer) {
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
proto.payload.v1.Backup.Locations.Request.prototype.toObject = function(opt_includeInstance) {
  return proto.payload.v1.Backup.Locations.Request.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payload.v1.Backup.Locations.Request} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payload.v1.Backup.Locations.Request.toObject = function(includeInstance, msg) {
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
 * @return {!proto.payload.v1.Backup.Locations.Request}
 */
proto.payload.v1.Backup.Locations.Request.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payload.v1.Backup.Locations.Request;
  return proto.payload.v1.Backup.Locations.Request.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payload.v1.Backup.Locations.Request} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payload.v1.Backup.Locations.Request}
 */
proto.payload.v1.Backup.Locations.Request.deserializeBinaryFromReader = function(msg, reader) {
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
proto.payload.v1.Backup.Locations.Request.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payload.v1.Backup.Locations.Request.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payload.v1.Backup.Locations.Request} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payload.v1.Backup.Locations.Request.serializeBinaryToWriter = function(message, writer) {
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
proto.payload.v1.Backup.Locations.Request.prototype.getUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.payload.v1.Backup.Locations.Request} returns this
 */
proto.payload.v1.Backup.Locations.Request.prototype.setUuid = function(value) {
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
proto.payload.v1.Backup.Remove.prototype.toObject = function(opt_includeInstance) {
  return proto.payload.v1.Backup.Remove.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payload.v1.Backup.Remove} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payload.v1.Backup.Remove.toObject = function(includeInstance, msg) {
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
 * @return {!proto.payload.v1.Backup.Remove}
 */
proto.payload.v1.Backup.Remove.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payload.v1.Backup.Remove;
  return proto.payload.v1.Backup.Remove.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payload.v1.Backup.Remove} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payload.v1.Backup.Remove}
 */
proto.payload.v1.Backup.Remove.deserializeBinaryFromReader = function(msg, reader) {
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
proto.payload.v1.Backup.Remove.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payload.v1.Backup.Remove.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payload.v1.Backup.Remove} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payload.v1.Backup.Remove.serializeBinaryToWriter = function(message, writer) {
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
proto.payload.v1.Backup.Remove.Request.prototype.toObject = function(opt_includeInstance) {
  return proto.payload.v1.Backup.Remove.Request.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payload.v1.Backup.Remove.Request} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payload.v1.Backup.Remove.Request.toObject = function(includeInstance, msg) {
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
 * @return {!proto.payload.v1.Backup.Remove.Request}
 */
proto.payload.v1.Backup.Remove.Request.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payload.v1.Backup.Remove.Request;
  return proto.payload.v1.Backup.Remove.Request.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payload.v1.Backup.Remove.Request} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payload.v1.Backup.Remove.Request}
 */
proto.payload.v1.Backup.Remove.Request.deserializeBinaryFromReader = function(msg, reader) {
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
proto.payload.v1.Backup.Remove.Request.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payload.v1.Backup.Remove.Request.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payload.v1.Backup.Remove.Request} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payload.v1.Backup.Remove.Request.serializeBinaryToWriter = function(message, writer) {
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
proto.payload.v1.Backup.Remove.Request.prototype.getUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.payload.v1.Backup.Remove.Request} returns this
 */
proto.payload.v1.Backup.Remove.Request.prototype.setUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.payload.v1.Backup.Remove.RequestMulti.repeatedFields_ = [1];



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
proto.payload.v1.Backup.Remove.RequestMulti.prototype.toObject = function(opt_includeInstance) {
  return proto.payload.v1.Backup.Remove.RequestMulti.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payload.v1.Backup.Remove.RequestMulti} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payload.v1.Backup.Remove.RequestMulti.toObject = function(includeInstance, msg) {
  var f, obj = {
    uuidsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
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
 * @return {!proto.payload.v1.Backup.Remove.RequestMulti}
 */
proto.payload.v1.Backup.Remove.RequestMulti.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payload.v1.Backup.Remove.RequestMulti;
  return proto.payload.v1.Backup.Remove.RequestMulti.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payload.v1.Backup.Remove.RequestMulti} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payload.v1.Backup.Remove.RequestMulti}
 */
proto.payload.v1.Backup.Remove.RequestMulti.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addUuids(value);
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
proto.payload.v1.Backup.Remove.RequestMulti.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payload.v1.Backup.Remove.RequestMulti.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payload.v1.Backup.Remove.RequestMulti} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payload.v1.Backup.Remove.RequestMulti.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUuidsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
};


/**
 * repeated string uuids = 1;
 * @return {!Array<string>}
 */
proto.payload.v1.Backup.Remove.RequestMulti.prototype.getUuidsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.payload.v1.Backup.Remove.RequestMulti} returns this
 */
proto.payload.v1.Backup.Remove.RequestMulti.prototype.setUuidsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.payload.v1.Backup.Remove.RequestMulti} returns this
 */
proto.payload.v1.Backup.Remove.RequestMulti.prototype.addUuids = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.payload.v1.Backup.Remove.RequestMulti} returns this
 */
proto.payload.v1.Backup.Remove.RequestMulti.prototype.clearUuidsList = function() {
  return this.setUuidsList([]);
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
proto.payload.v1.Backup.IP.prototype.toObject = function(opt_includeInstance) {
  return proto.payload.v1.Backup.IP.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payload.v1.Backup.IP} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payload.v1.Backup.IP.toObject = function(includeInstance, msg) {
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
 * @return {!proto.payload.v1.Backup.IP}
 */
proto.payload.v1.Backup.IP.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payload.v1.Backup.IP;
  return proto.payload.v1.Backup.IP.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payload.v1.Backup.IP} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payload.v1.Backup.IP}
 */
proto.payload.v1.Backup.IP.deserializeBinaryFromReader = function(msg, reader) {
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
proto.payload.v1.Backup.IP.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payload.v1.Backup.IP.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payload.v1.Backup.IP} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payload.v1.Backup.IP.serializeBinaryToWriter = function(message, writer) {
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
proto.payload.v1.Backup.IP.Register.prototype.toObject = function(opt_includeInstance) {
  return proto.payload.v1.Backup.IP.Register.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payload.v1.Backup.IP.Register} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payload.v1.Backup.IP.Register.toObject = function(includeInstance, msg) {
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
 * @return {!proto.payload.v1.Backup.IP.Register}
 */
proto.payload.v1.Backup.IP.Register.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payload.v1.Backup.IP.Register;
  return proto.payload.v1.Backup.IP.Register.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payload.v1.Backup.IP.Register} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payload.v1.Backup.IP.Register}
 */
proto.payload.v1.Backup.IP.Register.deserializeBinaryFromReader = function(msg, reader) {
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
proto.payload.v1.Backup.IP.Register.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payload.v1.Backup.IP.Register.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payload.v1.Backup.IP.Register} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payload.v1.Backup.IP.Register.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.payload.v1.Backup.IP.Register.Request.repeatedFields_ = [2];



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
proto.payload.v1.Backup.IP.Register.Request.prototype.toObject = function(opt_includeInstance) {
  return proto.payload.v1.Backup.IP.Register.Request.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payload.v1.Backup.IP.Register.Request} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payload.v1.Backup.IP.Register.Request.toObject = function(includeInstance, msg) {
  var f, obj = {
    uuid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    ipsList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f
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
 * @return {!proto.payload.v1.Backup.IP.Register.Request}
 */
proto.payload.v1.Backup.IP.Register.Request.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payload.v1.Backup.IP.Register.Request;
  return proto.payload.v1.Backup.IP.Register.Request.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payload.v1.Backup.IP.Register.Request} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payload.v1.Backup.IP.Register.Request}
 */
proto.payload.v1.Backup.IP.Register.Request.deserializeBinaryFromReader = function(msg, reader) {
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
    case 2:
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
proto.payload.v1.Backup.IP.Register.Request.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payload.v1.Backup.IP.Register.Request.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payload.v1.Backup.IP.Register.Request} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payload.v1.Backup.IP.Register.Request.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUuid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getIpsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
};


/**
 * optional string uuid = 1;
 * @return {string}
 */
proto.payload.v1.Backup.IP.Register.Request.prototype.getUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.payload.v1.Backup.IP.Register.Request} returns this
 */
proto.payload.v1.Backup.IP.Register.Request.prototype.setUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated string ips = 2;
 * @return {!Array<string>}
 */
proto.payload.v1.Backup.IP.Register.Request.prototype.getIpsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.payload.v1.Backup.IP.Register.Request} returns this
 */
proto.payload.v1.Backup.IP.Register.Request.prototype.setIpsList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.payload.v1.Backup.IP.Register.Request} returns this
 */
proto.payload.v1.Backup.IP.Register.Request.prototype.addIps = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.payload.v1.Backup.IP.Register.Request} returns this
 */
proto.payload.v1.Backup.IP.Register.Request.prototype.clearIpsList = function() {
  return this.setIpsList([]);
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
proto.payload.v1.Backup.IP.Remove.prototype.toObject = function(opt_includeInstance) {
  return proto.payload.v1.Backup.IP.Remove.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payload.v1.Backup.IP.Remove} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payload.v1.Backup.IP.Remove.toObject = function(includeInstance, msg) {
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
 * @return {!proto.payload.v1.Backup.IP.Remove}
 */
proto.payload.v1.Backup.IP.Remove.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payload.v1.Backup.IP.Remove;
  return proto.payload.v1.Backup.IP.Remove.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payload.v1.Backup.IP.Remove} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payload.v1.Backup.IP.Remove}
 */
proto.payload.v1.Backup.IP.Remove.deserializeBinaryFromReader = function(msg, reader) {
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
proto.payload.v1.Backup.IP.Remove.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payload.v1.Backup.IP.Remove.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payload.v1.Backup.IP.Remove} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payload.v1.Backup.IP.Remove.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.payload.v1.Backup.IP.Remove.Request.repeatedFields_ = [1];



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
proto.payload.v1.Backup.IP.Remove.Request.prototype.toObject = function(opt_includeInstance) {
  return proto.payload.v1.Backup.IP.Remove.Request.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payload.v1.Backup.IP.Remove.Request} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payload.v1.Backup.IP.Remove.Request.toObject = function(includeInstance, msg) {
  var f, obj = {
    ipsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
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
 * @return {!proto.payload.v1.Backup.IP.Remove.Request}
 */
proto.payload.v1.Backup.IP.Remove.Request.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payload.v1.Backup.IP.Remove.Request;
  return proto.payload.v1.Backup.IP.Remove.Request.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payload.v1.Backup.IP.Remove.Request} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payload.v1.Backup.IP.Remove.Request}
 */
proto.payload.v1.Backup.IP.Remove.Request.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
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
proto.payload.v1.Backup.IP.Remove.Request.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payload.v1.Backup.IP.Remove.Request.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payload.v1.Backup.IP.Remove.Request} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payload.v1.Backup.IP.Remove.Request.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIpsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
};


/**
 * repeated string ips = 1;
 * @return {!Array<string>}
 */
proto.payload.v1.Backup.IP.Remove.Request.prototype.getIpsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.payload.v1.Backup.IP.Remove.Request} returns this
 */
proto.payload.v1.Backup.IP.Remove.Request.prototype.setIpsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.payload.v1.Backup.IP.Remove.Request} returns this
 */
proto.payload.v1.Backup.IP.Remove.Request.prototype.addIps = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.payload.v1.Backup.IP.Remove.Request} returns this
 */
proto.payload.v1.Backup.IP.Remove.Request.prototype.clearIpsList = function() {
  return this.setIpsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.payload.v1.Backup.Vector.repeatedFields_ = [3,4];



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
proto.payload.v1.Backup.Vector.prototype.toObject = function(opt_includeInstance) {
  return proto.payload.v1.Backup.Vector.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payload.v1.Backup.Vector} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payload.v1.Backup.Vector.toObject = function(includeInstance, msg) {
  var f, obj = {
    uuid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    vectorList: (f = jspb.Message.getRepeatedFloatingPointField(msg, 3)) == null ? undefined : f,
    ipsList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f
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
 * @return {!proto.payload.v1.Backup.Vector}
 */
proto.payload.v1.Backup.Vector.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payload.v1.Backup.Vector;
  return proto.payload.v1.Backup.Vector.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payload.v1.Backup.Vector} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payload.v1.Backup.Vector}
 */
proto.payload.v1.Backup.Vector.deserializeBinaryFromReader = function(msg, reader) {
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
    case 3:
      var value = /** @type {!Array<number>} */ (reader.readPackedFloat());
      msg.setVectorList(value);
      break;
    case 4:
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
proto.payload.v1.Backup.Vector.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payload.v1.Backup.Vector.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payload.v1.Backup.Vector} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payload.v1.Backup.Vector.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUuid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getVectorList();
  if (f.length > 0) {
    writer.writePackedFloat(
      3,
      f
    );
  }
  f = message.getIpsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      4,
      f
    );
  }
};


/**
 * optional string uuid = 1;
 * @return {string}
 */
proto.payload.v1.Backup.Vector.prototype.getUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.payload.v1.Backup.Vector} returns this
 */
proto.payload.v1.Backup.Vector.prototype.setUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated float vector = 3;
 * @return {!Array<number>}
 */
proto.payload.v1.Backup.Vector.prototype.getVectorList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedFloatingPointField(this, 3));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.payload.v1.Backup.Vector} returns this
 */
proto.payload.v1.Backup.Vector.prototype.setVectorList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.payload.v1.Backup.Vector} returns this
 */
proto.payload.v1.Backup.Vector.prototype.addVector = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.payload.v1.Backup.Vector} returns this
 */
proto.payload.v1.Backup.Vector.prototype.clearVectorList = function() {
  return this.setVectorList([]);
};


/**
 * repeated string ips = 4;
 * @return {!Array<string>}
 */
proto.payload.v1.Backup.Vector.prototype.getIpsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.payload.v1.Backup.Vector} returns this
 */
proto.payload.v1.Backup.Vector.prototype.setIpsList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.payload.v1.Backup.Vector} returns this
 */
proto.payload.v1.Backup.Vector.prototype.addIps = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.payload.v1.Backup.Vector} returns this
 */
proto.payload.v1.Backup.Vector.prototype.clearIpsList = function() {
  return this.setIpsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.payload.v1.Backup.Vectors.repeatedFields_ = [1];



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
proto.payload.v1.Backup.Vectors.prototype.toObject = function(opt_includeInstance) {
  return proto.payload.v1.Backup.Vectors.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payload.v1.Backup.Vectors} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payload.v1.Backup.Vectors.toObject = function(includeInstance, msg) {
  var f, obj = {
    vectorsList: jspb.Message.toObjectList(msg.getVectorsList(),
    proto.payload.v1.Backup.Vector.toObject, includeInstance)
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
 * @return {!proto.payload.v1.Backup.Vectors}
 */
proto.payload.v1.Backup.Vectors.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payload.v1.Backup.Vectors;
  return proto.payload.v1.Backup.Vectors.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payload.v1.Backup.Vectors} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payload.v1.Backup.Vectors}
 */
proto.payload.v1.Backup.Vectors.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.payload.v1.Backup.Vector;
      reader.readMessage(value,proto.payload.v1.Backup.Vector.deserializeBinaryFromReader);
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
proto.payload.v1.Backup.Vectors.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payload.v1.Backup.Vectors.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payload.v1.Backup.Vectors} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payload.v1.Backup.Vectors.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVectorsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.payload.v1.Backup.Vector.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Vector vectors = 1;
 * @return {!Array<!proto.payload.v1.Backup.Vector>}
 */
proto.payload.v1.Backup.Vectors.prototype.getVectorsList = function() {
  return /** @type{!Array<!proto.payload.v1.Backup.Vector>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.payload.v1.Backup.Vector, 1));
};


/**
 * @param {!Array<!proto.payload.v1.Backup.Vector>} value
 * @return {!proto.payload.v1.Backup.Vectors} returns this
*/
proto.payload.v1.Backup.Vectors.prototype.setVectorsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.payload.v1.Backup.Vector=} opt_value
 * @param {number=} opt_index
 * @return {!proto.payload.v1.Backup.Vector}
 */
proto.payload.v1.Backup.Vectors.prototype.addVectors = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.payload.v1.Backup.Vector, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.payload.v1.Backup.Vectors} returns this
 */
proto.payload.v1.Backup.Vectors.prototype.clearVectorsList = function() {
  return this.setVectorsList([]);
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
proto.payload.v1.Backup.Compressed.prototype.toObject = function(opt_includeInstance) {
  return proto.payload.v1.Backup.Compressed.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payload.v1.Backup.Compressed} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payload.v1.Backup.Compressed.toObject = function(includeInstance, msg) {
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
 * @return {!proto.payload.v1.Backup.Compressed}
 */
proto.payload.v1.Backup.Compressed.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payload.v1.Backup.Compressed;
  return proto.payload.v1.Backup.Compressed.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payload.v1.Backup.Compressed} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payload.v1.Backup.Compressed}
 */
proto.payload.v1.Backup.Compressed.deserializeBinaryFromReader = function(msg, reader) {
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
proto.payload.v1.Backup.Compressed.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payload.v1.Backup.Compressed.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payload.v1.Backup.Compressed} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payload.v1.Backup.Compressed.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.payload.v1.Backup.Compressed.Vector.repeatedFields_ = [4];



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
proto.payload.v1.Backup.Compressed.Vector.prototype.toObject = function(opt_includeInstance) {
  return proto.payload.v1.Backup.Compressed.Vector.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payload.v1.Backup.Compressed.Vector} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payload.v1.Backup.Compressed.Vector.toObject = function(includeInstance, msg) {
  var f, obj = {
    uuid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    vector: msg.getVector_asB64(),
    ipsList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f
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
 * @return {!proto.payload.v1.Backup.Compressed.Vector}
 */
proto.payload.v1.Backup.Compressed.Vector.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payload.v1.Backup.Compressed.Vector;
  return proto.payload.v1.Backup.Compressed.Vector.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payload.v1.Backup.Compressed.Vector} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payload.v1.Backup.Compressed.Vector}
 */
proto.payload.v1.Backup.Compressed.Vector.deserializeBinaryFromReader = function(msg, reader) {
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
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setVector(value);
      break;
    case 4:
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
proto.payload.v1.Backup.Compressed.Vector.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payload.v1.Backup.Compressed.Vector.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payload.v1.Backup.Compressed.Vector} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payload.v1.Backup.Compressed.Vector.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUuid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getVector_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      3,
      f
    );
  }
  f = message.getIpsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      4,
      f
    );
  }
};


/**
 * optional string uuid = 1;
 * @return {string}
 */
proto.payload.v1.Backup.Compressed.Vector.prototype.getUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.payload.v1.Backup.Compressed.Vector} returns this
 */
proto.payload.v1.Backup.Compressed.Vector.prototype.setUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bytes vector = 3;
 * @return {!(string|Uint8Array)}
 */
proto.payload.v1.Backup.Compressed.Vector.prototype.getVector = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * optional bytes vector = 3;
 * This is a type-conversion wrapper around `getVector()`
 * @return {string}
 */
proto.payload.v1.Backup.Compressed.Vector.prototype.getVector_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getVector()));
};


/**
 * optional bytes vector = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getVector()`
 * @return {!Uint8Array}
 */
proto.payload.v1.Backup.Compressed.Vector.prototype.getVector_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getVector()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.payload.v1.Backup.Compressed.Vector} returns this
 */
proto.payload.v1.Backup.Compressed.Vector.prototype.setVector = function(value) {
  return jspb.Message.setProto3BytesField(this, 3, value);
};


/**
 * repeated string ips = 4;
 * @return {!Array<string>}
 */
proto.payload.v1.Backup.Compressed.Vector.prototype.getIpsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.payload.v1.Backup.Compressed.Vector} returns this
 */
proto.payload.v1.Backup.Compressed.Vector.prototype.setIpsList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.payload.v1.Backup.Compressed.Vector} returns this
 */
proto.payload.v1.Backup.Compressed.Vector.prototype.addIps = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.payload.v1.Backup.Compressed.Vector} returns this
 */
proto.payload.v1.Backup.Compressed.Vector.prototype.clearIpsList = function() {
  return this.setIpsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.payload.v1.Backup.Compressed.Vectors.repeatedFields_ = [1];



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
proto.payload.v1.Backup.Compressed.Vectors.prototype.toObject = function(opt_includeInstance) {
  return proto.payload.v1.Backup.Compressed.Vectors.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payload.v1.Backup.Compressed.Vectors} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payload.v1.Backup.Compressed.Vectors.toObject = function(includeInstance, msg) {
  var f, obj = {
    vectorsList: jspb.Message.toObjectList(msg.getVectorsList(),
    proto.payload.v1.Backup.Compressed.Vector.toObject, includeInstance)
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
 * @return {!proto.payload.v1.Backup.Compressed.Vectors}
 */
proto.payload.v1.Backup.Compressed.Vectors.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payload.v1.Backup.Compressed.Vectors;
  return proto.payload.v1.Backup.Compressed.Vectors.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payload.v1.Backup.Compressed.Vectors} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payload.v1.Backup.Compressed.Vectors}
 */
proto.payload.v1.Backup.Compressed.Vectors.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.payload.v1.Backup.Compressed.Vector;
      reader.readMessage(value,proto.payload.v1.Backup.Compressed.Vector.deserializeBinaryFromReader);
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
proto.payload.v1.Backup.Compressed.Vectors.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payload.v1.Backup.Compressed.Vectors.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payload.v1.Backup.Compressed.Vectors} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payload.v1.Backup.Compressed.Vectors.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVectorsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.payload.v1.Backup.Compressed.Vector.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Vector vectors = 1;
 * @return {!Array<!proto.payload.v1.Backup.Compressed.Vector>}
 */
proto.payload.v1.Backup.Compressed.Vectors.prototype.getVectorsList = function() {
  return /** @type{!Array<!proto.payload.v1.Backup.Compressed.Vector>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.payload.v1.Backup.Compressed.Vector, 1));
};


/**
 * @param {!Array<!proto.payload.v1.Backup.Compressed.Vector>} value
 * @return {!proto.payload.v1.Backup.Compressed.Vectors} returns this
*/
proto.payload.v1.Backup.Compressed.Vectors.prototype.setVectorsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.payload.v1.Backup.Compressed.Vector=} opt_value
 * @param {number=} opt_index
 * @return {!proto.payload.v1.Backup.Compressed.Vector}
 */
proto.payload.v1.Backup.Compressed.Vectors.prototype.addVectors = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.payload.v1.Backup.Compressed.Vector, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.payload.v1.Backup.Compressed.Vectors} returns this
 */
proto.payload.v1.Backup.Compressed.Vectors.prototype.clearVectorsList = function() {
  return this.setVectorsList([]);
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
    indexing: jspb.Message.getBooleanFieldWithDefault(msg, 3, false)
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
