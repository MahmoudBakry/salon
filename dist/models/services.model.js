"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

var _bcryptjs = require("bcryptjs");

var _bcryptjs2 = _interopRequireDefault(_bcryptjs);

var _mongooseAutoIncrement = require("mongoose-auto-increment");

var _mongooseAutoIncrement2 = _interopRequireDefault(_mongooseAutoIncrement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ServiceSchema = new _mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    nameEn: {
        type: String,
        trim: true
    },
    description: {
        type: String
    }

});

ServiceSchema.set('toJSON', {
    transform: function transform(doc, ret, options) {
        ret.id = ret._id;

        delete ret._id;
        delete ret.__v;
    }
});

_mongooseAutoIncrement2.default.initialize(_mongoose2.default.connection);
ServiceSchema.plugin(_mongooseAutoIncrement2.default.plugin, {
    model: 'service',
    startAt: 1
});

exports.default = _mongoose2.default.model("service", ServiceSchema);
//# sourceMappingURL=services.model.js.map