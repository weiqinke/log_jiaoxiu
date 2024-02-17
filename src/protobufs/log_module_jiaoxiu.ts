/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "log_module_jiaoxiu";

export interface StatisticsLogResponse {
  code: number;
  message: string;
  data: StatisticsLog[];
}

export interface StatisticsLog {
  id: number;
  url: string;
  method: string;
  status: number;
  created: string;
  st: string;
  et: string;
}

export interface StringDataResponse {
  code: number;
  message: string;
  data: string;
}

export interface UserPlacardResponse {
  code: number;
  message: string;
  data: PlacardItem[];
}

export interface PlacardItem {
  id: number;
  origin: number;
  placardid: number;
  title: string;
  type: string;
  description: string;
  status: string;
  deleted: number;
  broadcastime: string;
  created: string;
  uid: number;
}

export interface UserNoticeResponse {
  code: number;
  message: string;
  data: Notice[];
}

export interface Notice {
  id: number;
  noticeid: string;
  origin: string;
  originUid: string;
  receiver: string;
  receiverUid: string;
  title: string;
  type: string;
  description: string;
  status: string;
  extra: string;
  read: number;
  deleted: number;
  created: string;
}

export interface UserUid {
  uid: number;
}

export interface Response {
  code: number;
  message: string;
}

export interface TimeFrame {
  st: string;
  et: string;
}

export interface LoginLogs {
  code: number;
  message: string;
  data: LoginLog[];
}

export interface LoginLog {
  id: number;
  uid: number;
  name: string;
  os: string;
  client: string;
  bowser: string;
  host: string;
  country: string;
  city: string;
  created: string;
  ip: string;
  useragent: string;
  loginName: string;
  province: string;
}

function createBaseStatisticsLogResponse(): StatisticsLogResponse {
  return { code: 0, message: "", data: [] };
}

export const StatisticsLogResponse = {
  encode(message: StatisticsLogResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.code !== 0) {
      writer.uint32(8).int32(message.code);
    }
    if (message.message !== "") {
      writer.uint32(18).string(message.message);
    }
    for (const v of message.data) {
      StatisticsLog.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StatisticsLogResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStatisticsLogResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.code = reader.int32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.message = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.data.push(StatisticsLog.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): StatisticsLogResponse {
    return {
      code: isSet(object.code) ? globalThis.Number(object.code) : 0,
      message: isSet(object.message) ? globalThis.String(object.message) : "",
      data: globalThis.Array.isArray(object?.data) ? object.data.map((e: any) => StatisticsLog.fromJSON(e)) : [],
    };
  },

  toJSON(message: StatisticsLogResponse): unknown {
    const obj: any = {};
    if (message.code !== 0) {
      obj.code = Math.round(message.code);
    }
    if (message.message !== "") {
      obj.message = message.message;
    }
    if (message.data?.length) {
      obj.data = message.data.map((e) => StatisticsLog.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<StatisticsLogResponse>, I>>(base?: I): StatisticsLogResponse {
    return StatisticsLogResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<StatisticsLogResponse>, I>>(object: I): StatisticsLogResponse {
    const message = createBaseStatisticsLogResponse();
    message.code = object.code ?? 0;
    message.message = object.message ?? "";
    message.data = object.data?.map((e) => StatisticsLog.fromPartial(e)) || [];
    return message;
  },
};

function createBaseStatisticsLog(): StatisticsLog {
  return { id: 0, url: "", method: "", status: 0, created: "", st: "", et: "" };
}

export const StatisticsLog = {
  encode(message: StatisticsLog, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).int32(message.id);
    }
    if (message.url !== "") {
      writer.uint32(18).string(message.url);
    }
    if (message.method !== "") {
      writer.uint32(26).string(message.method);
    }
    if (message.status !== 0) {
      writer.uint32(32).int32(message.status);
    }
    if (message.created !== "") {
      writer.uint32(42).string(message.created);
    }
    if (message.st !== "") {
      writer.uint32(50).string(message.st);
    }
    if (message.et !== "") {
      writer.uint32(58).string(message.et);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StatisticsLog {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStatisticsLog();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.id = reader.int32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.url = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.method = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.status = reader.int32();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.created = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.st = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.et = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): StatisticsLog {
    return {
      id: isSet(object.id) ? globalThis.Number(object.id) : 0,
      url: isSet(object.url) ? globalThis.String(object.url) : "",
      method: isSet(object.method) ? globalThis.String(object.method) : "",
      status: isSet(object.status) ? globalThis.Number(object.status) : 0,
      created: isSet(object.created) ? globalThis.String(object.created) : "",
      st: isSet(object.st) ? globalThis.String(object.st) : "",
      et: isSet(object.et) ? globalThis.String(object.et) : "",
    };
  },

  toJSON(message: StatisticsLog): unknown {
    const obj: any = {};
    if (message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    if (message.url !== "") {
      obj.url = message.url;
    }
    if (message.method !== "") {
      obj.method = message.method;
    }
    if (message.status !== 0) {
      obj.status = Math.round(message.status);
    }
    if (message.created !== "") {
      obj.created = message.created;
    }
    if (message.st !== "") {
      obj.st = message.st;
    }
    if (message.et !== "") {
      obj.et = message.et;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<StatisticsLog>, I>>(base?: I): StatisticsLog {
    return StatisticsLog.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<StatisticsLog>, I>>(object: I): StatisticsLog {
    const message = createBaseStatisticsLog();
    message.id = object.id ?? 0;
    message.url = object.url ?? "";
    message.method = object.method ?? "";
    message.status = object.status ?? 0;
    message.created = object.created ?? "";
    message.st = object.st ?? "";
    message.et = object.et ?? "";
    return message;
  },
};

function createBaseStringDataResponse(): StringDataResponse {
  return { code: 0, message: "", data: "" };
}

export const StringDataResponse = {
  encode(message: StringDataResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.code !== 0) {
      writer.uint32(8).int32(message.code);
    }
    if (message.message !== "") {
      writer.uint32(18).string(message.message);
    }
    if (message.data !== "") {
      writer.uint32(26).string(message.data);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StringDataResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStringDataResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.code = reader.int32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.message = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.data = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): StringDataResponse {
    return {
      code: isSet(object.code) ? globalThis.Number(object.code) : 0,
      message: isSet(object.message) ? globalThis.String(object.message) : "",
      data: isSet(object.data) ? globalThis.String(object.data) : "",
    };
  },

  toJSON(message: StringDataResponse): unknown {
    const obj: any = {};
    if (message.code !== 0) {
      obj.code = Math.round(message.code);
    }
    if (message.message !== "") {
      obj.message = message.message;
    }
    if (message.data !== "") {
      obj.data = message.data;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<StringDataResponse>, I>>(base?: I): StringDataResponse {
    return StringDataResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<StringDataResponse>, I>>(object: I): StringDataResponse {
    const message = createBaseStringDataResponse();
    message.code = object.code ?? 0;
    message.message = object.message ?? "";
    message.data = object.data ?? "";
    return message;
  },
};

function createBaseUserPlacardResponse(): UserPlacardResponse {
  return { code: 0, message: "", data: [] };
}

export const UserPlacardResponse = {
  encode(message: UserPlacardResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.code !== 0) {
      writer.uint32(8).int32(message.code);
    }
    if (message.message !== "") {
      writer.uint32(18).string(message.message);
    }
    for (const v of message.data) {
      PlacardItem.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserPlacardResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserPlacardResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.code = reader.int32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.message = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.data.push(PlacardItem.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UserPlacardResponse {
    return {
      code: isSet(object.code) ? globalThis.Number(object.code) : 0,
      message: isSet(object.message) ? globalThis.String(object.message) : "",
      data: globalThis.Array.isArray(object?.data) ? object.data.map((e: any) => PlacardItem.fromJSON(e)) : [],
    };
  },

  toJSON(message: UserPlacardResponse): unknown {
    const obj: any = {};
    if (message.code !== 0) {
      obj.code = Math.round(message.code);
    }
    if (message.message !== "") {
      obj.message = message.message;
    }
    if (message.data?.length) {
      obj.data = message.data.map((e) => PlacardItem.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UserPlacardResponse>, I>>(base?: I): UserPlacardResponse {
    return UserPlacardResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UserPlacardResponse>, I>>(object: I): UserPlacardResponse {
    const message = createBaseUserPlacardResponse();
    message.code = object.code ?? 0;
    message.message = object.message ?? "";
    message.data = object.data?.map((e) => PlacardItem.fromPartial(e)) || [];
    return message;
  },
};

function createBasePlacardItem(): PlacardItem {
  return {
    id: 0,
    origin: 0,
    placardid: 0,
    title: "",
    type: "",
    description: "",
    status: "",
    deleted: 0,
    broadcastime: "",
    created: "",
    uid: 0,
  };
}

export const PlacardItem = {
  encode(message: PlacardItem, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).int32(message.id);
    }
    if (message.origin !== 0) {
      writer.uint32(17).double(message.origin);
    }
    if (message.placardid !== 0) {
      writer.uint32(25).double(message.placardid);
    }
    if (message.title !== "") {
      writer.uint32(34).string(message.title);
    }
    if (message.type !== "") {
      writer.uint32(42).string(message.type);
    }
    if (message.description !== "") {
      writer.uint32(50).string(message.description);
    }
    if (message.status !== "") {
      writer.uint32(58).string(message.status);
    }
    if (message.deleted !== 0) {
      writer.uint32(64).int32(message.deleted);
    }
    if (message.broadcastime !== "") {
      writer.uint32(74).string(message.broadcastime);
    }
    if (message.created !== "") {
      writer.uint32(82).string(message.created);
    }
    if (message.uid !== 0) {
      writer.uint32(89).double(message.uid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PlacardItem {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePlacardItem();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.id = reader.int32();
          continue;
        case 2:
          if (tag !== 17) {
            break;
          }

          message.origin = reader.double();
          continue;
        case 3:
          if (tag !== 25) {
            break;
          }

          message.placardid = reader.double();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.title = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.type = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.description = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.status = reader.string();
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.deleted = reader.int32();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.broadcastime = reader.string();
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.created = reader.string();
          continue;
        case 11:
          if (tag !== 89) {
            break;
          }

          message.uid = reader.double();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PlacardItem {
    return {
      id: isSet(object.id) ? globalThis.Number(object.id) : 0,
      origin: isSet(object.origin) ? globalThis.Number(object.origin) : 0,
      placardid: isSet(object.placardid) ? globalThis.Number(object.placardid) : 0,
      title: isSet(object.title) ? globalThis.String(object.title) : "",
      type: isSet(object.type) ? globalThis.String(object.type) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      status: isSet(object.status) ? globalThis.String(object.status) : "",
      deleted: isSet(object.deleted) ? globalThis.Number(object.deleted) : 0,
      broadcastime: isSet(object.broadcastime) ? globalThis.String(object.broadcastime) : "",
      created: isSet(object.created) ? globalThis.String(object.created) : "",
      uid: isSet(object.uid) ? globalThis.Number(object.uid) : 0,
    };
  },

  toJSON(message: PlacardItem): unknown {
    const obj: any = {};
    if (message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    if (message.origin !== 0) {
      obj.origin = message.origin;
    }
    if (message.placardid !== 0) {
      obj.placardid = message.placardid;
    }
    if (message.title !== "") {
      obj.title = message.title;
    }
    if (message.type !== "") {
      obj.type = message.type;
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    if (message.status !== "") {
      obj.status = message.status;
    }
    if (message.deleted !== 0) {
      obj.deleted = Math.round(message.deleted);
    }
    if (message.broadcastime !== "") {
      obj.broadcastime = message.broadcastime;
    }
    if (message.created !== "") {
      obj.created = message.created;
    }
    if (message.uid !== 0) {
      obj.uid = message.uid;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PlacardItem>, I>>(base?: I): PlacardItem {
    return PlacardItem.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PlacardItem>, I>>(object: I): PlacardItem {
    const message = createBasePlacardItem();
    message.id = object.id ?? 0;
    message.origin = object.origin ?? 0;
    message.placardid = object.placardid ?? 0;
    message.title = object.title ?? "";
    message.type = object.type ?? "";
    message.description = object.description ?? "";
    message.status = object.status ?? "";
    message.deleted = object.deleted ?? 0;
    message.broadcastime = object.broadcastime ?? "";
    message.created = object.created ?? "";
    message.uid = object.uid ?? 0;
    return message;
  },
};

function createBaseUserNoticeResponse(): UserNoticeResponse {
  return { code: 0, message: "", data: [] };
}

export const UserNoticeResponse = {
  encode(message: UserNoticeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.code !== 0) {
      writer.uint32(8).int32(message.code);
    }
    if (message.message !== "") {
      writer.uint32(18).string(message.message);
    }
    for (const v of message.data) {
      Notice.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserNoticeResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserNoticeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.code = reader.int32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.message = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.data.push(Notice.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UserNoticeResponse {
    return {
      code: isSet(object.code) ? globalThis.Number(object.code) : 0,
      message: isSet(object.message) ? globalThis.String(object.message) : "",
      data: globalThis.Array.isArray(object?.data) ? object.data.map((e: any) => Notice.fromJSON(e)) : [],
    };
  },

  toJSON(message: UserNoticeResponse): unknown {
    const obj: any = {};
    if (message.code !== 0) {
      obj.code = Math.round(message.code);
    }
    if (message.message !== "") {
      obj.message = message.message;
    }
    if (message.data?.length) {
      obj.data = message.data.map((e) => Notice.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UserNoticeResponse>, I>>(base?: I): UserNoticeResponse {
    return UserNoticeResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UserNoticeResponse>, I>>(object: I): UserNoticeResponse {
    const message = createBaseUserNoticeResponse();
    message.code = object.code ?? 0;
    message.message = object.message ?? "";
    message.data = object.data?.map((e) => Notice.fromPartial(e)) || [];
    return message;
  },
};

function createBaseNotice(): Notice {
  return {
    id: 0,
    noticeid: "",
    origin: "",
    originUid: "",
    receiver: "",
    receiverUid: "",
    title: "",
    type: "",
    description: "",
    status: "",
    extra: "",
    read: 0,
    deleted: 0,
    created: "",
  };
}

export const Notice = {
  encode(message: Notice, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).int32(message.id);
    }
    if (message.noticeid !== "") {
      writer.uint32(18).string(message.noticeid);
    }
    if (message.origin !== "") {
      writer.uint32(26).string(message.origin);
    }
    if (message.originUid !== "") {
      writer.uint32(34).string(message.originUid);
    }
    if (message.receiver !== "") {
      writer.uint32(42).string(message.receiver);
    }
    if (message.receiverUid !== "") {
      writer.uint32(50).string(message.receiverUid);
    }
    if (message.title !== "") {
      writer.uint32(58).string(message.title);
    }
    if (message.type !== "") {
      writer.uint32(66).string(message.type);
    }
    if (message.description !== "") {
      writer.uint32(74).string(message.description);
    }
    if (message.status !== "") {
      writer.uint32(82).string(message.status);
    }
    if (message.extra !== "") {
      writer.uint32(90).string(message.extra);
    }
    if (message.read !== 0) {
      writer.uint32(96).int32(message.read);
    }
    if (message.deleted !== 0) {
      writer.uint32(104).int32(message.deleted);
    }
    if (message.created !== "") {
      writer.uint32(114).string(message.created);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Notice {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNotice();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.id = reader.int32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.noticeid = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.origin = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.originUid = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.receiver = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.receiverUid = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.title = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.type = reader.string();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.description = reader.string();
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.status = reader.string();
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.extra = reader.string();
          continue;
        case 12:
          if (tag !== 96) {
            break;
          }

          message.read = reader.int32();
          continue;
        case 13:
          if (tag !== 104) {
            break;
          }

          message.deleted = reader.int32();
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.created = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Notice {
    return {
      id: isSet(object.id) ? globalThis.Number(object.id) : 0,
      noticeid: isSet(object.noticeid) ? globalThis.String(object.noticeid) : "",
      origin: isSet(object.origin) ? globalThis.String(object.origin) : "",
      originUid: isSet(object.originUid) ? globalThis.String(object.originUid) : "",
      receiver: isSet(object.receiver) ? globalThis.String(object.receiver) : "",
      receiverUid: isSet(object.receiverUid) ? globalThis.String(object.receiverUid) : "",
      title: isSet(object.title) ? globalThis.String(object.title) : "",
      type: isSet(object.type) ? globalThis.String(object.type) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      status: isSet(object.status) ? globalThis.String(object.status) : "",
      extra: isSet(object.extra) ? globalThis.String(object.extra) : "",
      read: isSet(object.read) ? globalThis.Number(object.read) : 0,
      deleted: isSet(object.deleted) ? globalThis.Number(object.deleted) : 0,
      created: isSet(object.created) ? globalThis.String(object.created) : "",
    };
  },

  toJSON(message: Notice): unknown {
    const obj: any = {};
    if (message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    if (message.noticeid !== "") {
      obj.noticeid = message.noticeid;
    }
    if (message.origin !== "") {
      obj.origin = message.origin;
    }
    if (message.originUid !== "") {
      obj.originUid = message.originUid;
    }
    if (message.receiver !== "") {
      obj.receiver = message.receiver;
    }
    if (message.receiverUid !== "") {
      obj.receiverUid = message.receiverUid;
    }
    if (message.title !== "") {
      obj.title = message.title;
    }
    if (message.type !== "") {
      obj.type = message.type;
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    if (message.status !== "") {
      obj.status = message.status;
    }
    if (message.extra !== "") {
      obj.extra = message.extra;
    }
    if (message.read !== 0) {
      obj.read = Math.round(message.read);
    }
    if (message.deleted !== 0) {
      obj.deleted = Math.round(message.deleted);
    }
    if (message.created !== "") {
      obj.created = message.created;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Notice>, I>>(base?: I): Notice {
    return Notice.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Notice>, I>>(object: I): Notice {
    const message = createBaseNotice();
    message.id = object.id ?? 0;
    message.noticeid = object.noticeid ?? "";
    message.origin = object.origin ?? "";
    message.originUid = object.originUid ?? "";
    message.receiver = object.receiver ?? "";
    message.receiverUid = object.receiverUid ?? "";
    message.title = object.title ?? "";
    message.type = object.type ?? "";
    message.description = object.description ?? "";
    message.status = object.status ?? "";
    message.extra = object.extra ?? "";
    message.read = object.read ?? 0;
    message.deleted = object.deleted ?? 0;
    message.created = object.created ?? "";
    return message;
  },
};

function createBaseUserUid(): UserUid {
  return { uid: 0 };
}

export const UserUid = {
  encode(message: UserUid, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.uid !== 0) {
      writer.uint32(9).double(message.uid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserUid {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserUid();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 9) {
            break;
          }

          message.uid = reader.double();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UserUid {
    return { uid: isSet(object.uid) ? globalThis.Number(object.uid) : 0 };
  },

  toJSON(message: UserUid): unknown {
    const obj: any = {};
    if (message.uid !== 0) {
      obj.uid = message.uid;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UserUid>, I>>(base?: I): UserUid {
    return UserUid.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UserUid>, I>>(object: I): UserUid {
    const message = createBaseUserUid();
    message.uid = object.uid ?? 0;
    return message;
  },
};

function createBaseResponse(): Response {
  return { code: 0, message: "" };
}

export const Response = {
  encode(message: Response, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.code !== 0) {
      writer.uint32(8).int32(message.code);
    }
    if (message.message !== "") {
      writer.uint32(18).string(message.message);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Response {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.code = reader.int32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.message = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Response {
    return {
      code: isSet(object.code) ? globalThis.Number(object.code) : 0,
      message: isSet(object.message) ? globalThis.String(object.message) : "",
    };
  },

  toJSON(message: Response): unknown {
    const obj: any = {};
    if (message.code !== 0) {
      obj.code = Math.round(message.code);
    }
    if (message.message !== "") {
      obj.message = message.message;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Response>, I>>(base?: I): Response {
    return Response.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Response>, I>>(object: I): Response {
    const message = createBaseResponse();
    message.code = object.code ?? 0;
    message.message = object.message ?? "";
    return message;
  },
};

function createBaseTimeFrame(): TimeFrame {
  return { st: "", et: "" };
}

export const TimeFrame = {
  encode(message: TimeFrame, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.st !== "") {
      writer.uint32(10).string(message.st);
    }
    if (message.et !== "") {
      writer.uint32(18).string(message.et);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TimeFrame {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTimeFrame();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.st = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.et = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TimeFrame {
    return {
      st: isSet(object.st) ? globalThis.String(object.st) : "",
      et: isSet(object.et) ? globalThis.String(object.et) : "",
    };
  },

  toJSON(message: TimeFrame): unknown {
    const obj: any = {};
    if (message.st !== "") {
      obj.st = message.st;
    }
    if (message.et !== "") {
      obj.et = message.et;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TimeFrame>, I>>(base?: I): TimeFrame {
    return TimeFrame.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TimeFrame>, I>>(object: I): TimeFrame {
    const message = createBaseTimeFrame();
    message.st = object.st ?? "";
    message.et = object.et ?? "";
    return message;
  },
};

function createBaseLoginLogs(): LoginLogs {
  return { code: 0, message: "", data: [] };
}

export const LoginLogs = {
  encode(message: LoginLogs, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.code !== 0) {
      writer.uint32(8).int32(message.code);
    }
    if (message.message !== "") {
      writer.uint32(18).string(message.message);
    }
    for (const v of message.data) {
      LoginLog.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LoginLogs {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLoginLogs();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.code = reader.int32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.message = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.data.push(LoginLog.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LoginLogs {
    return {
      code: isSet(object.code) ? globalThis.Number(object.code) : 0,
      message: isSet(object.message) ? globalThis.String(object.message) : "",
      data: globalThis.Array.isArray(object?.data) ? object.data.map((e: any) => LoginLog.fromJSON(e)) : [],
    };
  },

  toJSON(message: LoginLogs): unknown {
    const obj: any = {};
    if (message.code !== 0) {
      obj.code = Math.round(message.code);
    }
    if (message.message !== "") {
      obj.message = message.message;
    }
    if (message.data?.length) {
      obj.data = message.data.map((e) => LoginLog.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LoginLogs>, I>>(base?: I): LoginLogs {
    return LoginLogs.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LoginLogs>, I>>(object: I): LoginLogs {
    const message = createBaseLoginLogs();
    message.code = object.code ?? 0;
    message.message = object.message ?? "";
    message.data = object.data?.map((e) => LoginLog.fromPartial(e)) || [];
    return message;
  },
};

function createBaseLoginLog(): LoginLog {
  return {
    id: 0,
    uid: 0,
    name: "",
    os: "",
    client: "",
    bowser: "",
    host: "",
    country: "",
    city: "",
    created: "",
    ip: "",
    useragent: "",
    loginName: "",
    province: "",
  };
}

export const LoginLog = {
  encode(message: LoginLog, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).int32(message.id);
    }
    if (message.uid !== 0) {
      writer.uint32(17).double(message.uid);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.os !== "") {
      writer.uint32(34).string(message.os);
    }
    if (message.client !== "") {
      writer.uint32(42).string(message.client);
    }
    if (message.bowser !== "") {
      writer.uint32(50).string(message.bowser);
    }
    if (message.host !== "") {
      writer.uint32(58).string(message.host);
    }
    if (message.country !== "") {
      writer.uint32(66).string(message.country);
    }
    if (message.city !== "") {
      writer.uint32(74).string(message.city);
    }
    if (message.created !== "") {
      writer.uint32(82).string(message.created);
    }
    if (message.ip !== "") {
      writer.uint32(90).string(message.ip);
    }
    if (message.useragent !== "") {
      writer.uint32(98).string(message.useragent);
    }
    if (message.loginName !== "") {
      writer.uint32(106).string(message.loginName);
    }
    if (message.province !== "") {
      writer.uint32(114).string(message.province);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LoginLog {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLoginLog();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.id = reader.int32();
          continue;
        case 2:
          if (tag !== 17) {
            break;
          }

          message.uid = reader.double();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.name = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.os = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.client = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.bowser = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.host = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.country = reader.string();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.city = reader.string();
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.created = reader.string();
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.ip = reader.string();
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.useragent = reader.string();
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.loginName = reader.string();
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.province = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LoginLog {
    return {
      id: isSet(object.id) ? globalThis.Number(object.id) : 0,
      uid: isSet(object.uid) ? globalThis.Number(object.uid) : 0,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      os: isSet(object.os) ? globalThis.String(object.os) : "",
      client: isSet(object.client) ? globalThis.String(object.client) : "",
      bowser: isSet(object.bowser) ? globalThis.String(object.bowser) : "",
      host: isSet(object.host) ? globalThis.String(object.host) : "",
      country: isSet(object.country) ? globalThis.String(object.country) : "",
      city: isSet(object.city) ? globalThis.String(object.city) : "",
      created: isSet(object.created) ? globalThis.String(object.created) : "",
      ip: isSet(object.ip) ? globalThis.String(object.ip) : "",
      useragent: isSet(object.useragent) ? globalThis.String(object.useragent) : "",
      loginName: isSet(object.loginName) ? globalThis.String(object.loginName) : "",
      province: isSet(object.province) ? globalThis.String(object.province) : "",
    };
  },

  toJSON(message: LoginLog): unknown {
    const obj: any = {};
    if (message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    if (message.uid !== 0) {
      obj.uid = message.uid;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.os !== "") {
      obj.os = message.os;
    }
    if (message.client !== "") {
      obj.client = message.client;
    }
    if (message.bowser !== "") {
      obj.bowser = message.bowser;
    }
    if (message.host !== "") {
      obj.host = message.host;
    }
    if (message.country !== "") {
      obj.country = message.country;
    }
    if (message.city !== "") {
      obj.city = message.city;
    }
    if (message.created !== "") {
      obj.created = message.created;
    }
    if (message.ip !== "") {
      obj.ip = message.ip;
    }
    if (message.useragent !== "") {
      obj.useragent = message.useragent;
    }
    if (message.loginName !== "") {
      obj.loginName = message.loginName;
    }
    if (message.province !== "") {
      obj.province = message.province;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LoginLog>, I>>(base?: I): LoginLog {
    return LoginLog.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LoginLog>, I>>(object: I): LoginLog {
    const message = createBaseLoginLog();
    message.id = object.id ?? 0;
    message.uid = object.uid ?? 0;
    message.name = object.name ?? "";
    message.os = object.os ?? "";
    message.client = object.client ?? "";
    message.bowser = object.bowser ?? "";
    message.host = object.host ?? "";
    message.country = object.country ?? "";
    message.city = object.city ?? "";
    message.created = object.created ?? "";
    message.ip = object.ip ?? "";
    message.useragent = object.useragent ?? "";
    message.loginName = object.loginName ?? "";
    message.province = object.province ?? "";
    return message;
  },
};

export interface LogService {
  GetLoginLogs(request: TimeFrame): Promise<LoginLogs>;
  UpdateAllIpAddrs(request: UserUid): Promise<Response>;
  SaveLoginLog(request: LoginLog): Promise<LoginLogs>;
  Apistatistics(request: StatisticsLog): Promise<StatisticsLogResponse>;
  SaveApistatistics(request: StatisticsLog): Promise<LoginLogs>;
}

export const LogServiceServiceName = "log_module_jiaoxiu.LogService";
export class LogServiceClientImpl implements LogService {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || LogServiceServiceName;
    this.rpc = rpc;
    this.GetLoginLogs = this.GetLoginLogs.bind(this);
    this.UpdateAllIpAddrs = this.UpdateAllIpAddrs.bind(this);
    this.SaveLoginLog = this.SaveLoginLog.bind(this);
    this.Apistatistics = this.Apistatistics.bind(this);
    this.SaveApistatistics = this.SaveApistatistics.bind(this);
  }
  GetLoginLogs(request: TimeFrame): Promise<LoginLogs> {
    const data = TimeFrame.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetLoginLogs", data);
    return promise.then((data) => LoginLogs.decode(_m0.Reader.create(data)));
  }

  UpdateAllIpAddrs(request: UserUid): Promise<Response> {
    const data = UserUid.encode(request).finish();
    const promise = this.rpc.request(this.service, "UpdateAllIpAddrs", data);
    return promise.then((data) => Response.decode(_m0.Reader.create(data)));
  }

  SaveLoginLog(request: LoginLog): Promise<LoginLogs> {
    const data = LoginLog.encode(request).finish();
    const promise = this.rpc.request(this.service, "SaveLoginLog", data);
    return promise.then((data) => LoginLogs.decode(_m0.Reader.create(data)));
  }

  Apistatistics(request: StatisticsLog): Promise<StatisticsLogResponse> {
    const data = StatisticsLog.encode(request).finish();
    const promise = this.rpc.request(this.service, "Apistatistics", data);
    return promise.then((data) => StatisticsLogResponse.decode(_m0.Reader.create(data)));
  }

  SaveApistatistics(request: StatisticsLog): Promise<LoginLogs> {
    const data = StatisticsLog.encode(request).finish();
    const promise = this.rpc.request(this.service, "SaveApistatistics", data);
    return promise.then((data) => LoginLogs.decode(_m0.Reader.create(data)));
  }
}

export interface NoticeService {
  UserNotice(request: UserUid): Promise<UserNoticeResponse>;
}

export const NoticeServiceServiceName = "log_module_jiaoxiu.NoticeService";
export class NoticeServiceClientImpl implements NoticeService {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || NoticeServiceServiceName;
    this.rpc = rpc;
    this.UserNotice = this.UserNotice.bind(this);
  }
  UserNotice(request: UserUid): Promise<UserNoticeResponse> {
    const data = UserUid.encode(request).finish();
    const promise = this.rpc.request(this.service, "UserNotice", data);
    return promise.then((data) => UserNoticeResponse.decode(_m0.Reader.create(data)));
  }
}

export interface PlacardService {
  UserPlacard(request: PlacardItem): Promise<UserPlacardResponse>;
  Placard(request: PlacardItem): Promise<UserPlacardResponse>;
  FindPlacard(request: PlacardItem): Promise<UserPlacardResponse>;
  PlacardCreate(request: PlacardItem): Promise<StringDataResponse>;
  PlacardUpdate(request: PlacardItem): Promise<StringDataResponse>;
  PlacardPush(request: PlacardItem): Promise<StringDataResponse>;
  PlacardSubmit(request: PlacardItem): Promise<StringDataResponse>;
}

export const PlacardServiceServiceName = "log_module_jiaoxiu.PlacardService";
export class PlacardServiceClientImpl implements PlacardService {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || PlacardServiceServiceName;
    this.rpc = rpc;
    this.UserPlacard = this.UserPlacard.bind(this);
    this.Placard = this.Placard.bind(this);
    this.FindPlacard = this.FindPlacard.bind(this);
    this.PlacardCreate = this.PlacardCreate.bind(this);
    this.PlacardUpdate = this.PlacardUpdate.bind(this);
    this.PlacardPush = this.PlacardPush.bind(this);
    this.PlacardSubmit = this.PlacardSubmit.bind(this);
  }
  UserPlacard(request: PlacardItem): Promise<UserPlacardResponse> {
    const data = PlacardItem.encode(request).finish();
    const promise = this.rpc.request(this.service, "UserPlacard", data);
    return promise.then((data) => UserPlacardResponse.decode(_m0.Reader.create(data)));
  }

  Placard(request: PlacardItem): Promise<UserPlacardResponse> {
    const data = PlacardItem.encode(request).finish();
    const promise = this.rpc.request(this.service, "Placard", data);
    return promise.then((data) => UserPlacardResponse.decode(_m0.Reader.create(data)));
  }

  FindPlacard(request: PlacardItem): Promise<UserPlacardResponse> {
    const data = PlacardItem.encode(request).finish();
    const promise = this.rpc.request(this.service, "FindPlacard", data);
    return promise.then((data) => UserPlacardResponse.decode(_m0.Reader.create(data)));
  }

  PlacardCreate(request: PlacardItem): Promise<StringDataResponse> {
    const data = PlacardItem.encode(request).finish();
    const promise = this.rpc.request(this.service, "PlacardCreate", data);
    return promise.then((data) => StringDataResponse.decode(_m0.Reader.create(data)));
  }

  PlacardUpdate(request: PlacardItem): Promise<StringDataResponse> {
    const data = PlacardItem.encode(request).finish();
    const promise = this.rpc.request(this.service, "PlacardUpdate", data);
    return promise.then((data) => StringDataResponse.decode(_m0.Reader.create(data)));
  }

  PlacardPush(request: PlacardItem): Promise<StringDataResponse> {
    const data = PlacardItem.encode(request).finish();
    const promise = this.rpc.request(this.service, "PlacardPush", data);
    return promise.then((data) => StringDataResponse.decode(_m0.Reader.create(data)));
  }

  PlacardSubmit(request: PlacardItem): Promise<StringDataResponse> {
    const data = PlacardItem.encode(request).finish();
    const promise = this.rpc.request(this.service, "PlacardSubmit", data);
    return promise.then((data) => StringDataResponse.decode(_m0.Reader.create(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
