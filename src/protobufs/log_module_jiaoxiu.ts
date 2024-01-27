/* eslint-disable */
import * as _m0 from 'protobufjs/minimal';

export const protobufPackage = 'log_module_jiaoxiu';

export interface UserUid {
  uid: string;
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
  uid: string;
  name: string;
  os: string;
  client: string;
  bowser: string;
  host: string;
  country: string;
  city: string;
  created: string;
}

function createBaseUserUid(): UserUid {
  return { uid: '' };
}

export const UserUid = {
  encode(
    message: UserUid,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.uid !== '') {
      writer.uint32(10).string(message.uid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserUid {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserUid();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.uid = reader.string();
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
    return { uid: isSet(object.uid) ? globalThis.String(object.uid) : '' };
  },

  toJSON(message: UserUid): unknown {
    const obj: any = {};
    if (message.uid !== '') {
      obj.uid = message.uid;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UserUid>, I>>(base?: I): UserUid {
    return UserUid.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UserUid>, I>>(object: I): UserUid {
    const message = createBaseUserUid();
    message.uid = object.uid ?? '';
    return message;
  },
};

function createBaseResponse(): Response {
  return { code: 0, message: '' };
}

export const Response = {
  encode(
    message: Response,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.code !== 0) {
      writer.uint32(8).int32(message.code);
    }
    if (message.message !== '') {
      writer.uint32(18).string(message.message);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Response {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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
      message: isSet(object.message) ? globalThis.String(object.message) : '',
    };
  },

  toJSON(message: Response): unknown {
    const obj: any = {};
    if (message.code !== 0) {
      obj.code = Math.round(message.code);
    }
    if (message.message !== '') {
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
    message.message = object.message ?? '';
    return message;
  },
};

function createBaseTimeFrame(): TimeFrame {
  return { st: '', et: '' };
}

export const TimeFrame = {
  encode(
    message: TimeFrame,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.st !== '') {
      writer.uint32(10).string(message.st);
    }
    if (message.et !== '') {
      writer.uint32(18).string(message.et);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TimeFrame {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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
      st: isSet(object.st) ? globalThis.String(object.st) : '',
      et: isSet(object.et) ? globalThis.String(object.et) : '',
    };
  },

  toJSON(message: TimeFrame): unknown {
    const obj: any = {};
    if (message.st !== '') {
      obj.st = message.st;
    }
    if (message.et !== '') {
      obj.et = message.et;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TimeFrame>, I>>(base?: I): TimeFrame {
    return TimeFrame.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TimeFrame>, I>>(
    object: I,
  ): TimeFrame {
    const message = createBaseTimeFrame();
    message.st = object.st ?? '';
    message.et = object.et ?? '';
    return message;
  },
};

function createBaseLoginLogs(): LoginLogs {
  return { code: 0, message: '', data: [] };
}

export const LoginLogs = {
  encode(
    message: LoginLogs,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.code !== 0) {
      writer.uint32(8).int32(message.code);
    }
    if (message.message !== '') {
      writer.uint32(18).string(message.message);
    }
    for (const v of message.data) {
      LoginLog.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LoginLogs {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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
      message: isSet(object.message) ? globalThis.String(object.message) : '',
      data: globalThis.Array.isArray(object?.data)
        ? object.data.map((e: any) => LoginLog.fromJSON(e))
        : [],
    };
  },

  toJSON(message: LoginLogs): unknown {
    const obj: any = {};
    if (message.code !== 0) {
      obj.code = Math.round(message.code);
    }
    if (message.message !== '') {
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
  fromPartial<I extends Exact<DeepPartial<LoginLogs>, I>>(
    object: I,
  ): LoginLogs {
    const message = createBaseLoginLogs();
    message.code = object.code ?? 0;
    message.message = object.message ?? '';
    message.data = object.data?.map((e) => LoginLog.fromPartial(e)) || [];
    return message;
  },
};

function createBaseLoginLog(): LoginLog {
  return {
    id: 0,
    uid: '',
    name: '',
    os: '',
    client: '',
    bowser: '',
    host: '',
    country: '',
    city: '',
    created: '',
  };
}

export const LoginLog = {
  encode(
    message: LoginLog,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).int32(message.id);
    }
    if (message.uid !== '') {
      writer.uint32(18).string(message.uid);
    }
    if (message.name !== '') {
      writer.uint32(26).string(message.name);
    }
    if (message.os !== '') {
      writer.uint32(34).string(message.os);
    }
    if (message.client !== '') {
      writer.uint32(42).string(message.client);
    }
    if (message.bowser !== '') {
      writer.uint32(50).string(message.bowser);
    }
    if (message.host !== '') {
      writer.uint32(58).string(message.host);
    }
    if (message.country !== '') {
      writer.uint32(66).string(message.country);
    }
    if (message.city !== '') {
      writer.uint32(74).string(message.city);
    }
    if (message.created !== '') {
      writer.uint32(82).string(message.created);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LoginLog {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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
          if (tag !== 18) {
            break;
          }

          message.uid = reader.string();
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
      uid: isSet(object.uid) ? globalThis.String(object.uid) : '',
      name: isSet(object.name) ? globalThis.String(object.name) : '',
      os: isSet(object.os) ? globalThis.String(object.os) : '',
      client: isSet(object.client) ? globalThis.String(object.client) : '',
      bowser: isSet(object.bowser) ? globalThis.String(object.bowser) : '',
      host: isSet(object.host) ? globalThis.String(object.host) : '',
      country: isSet(object.country) ? globalThis.String(object.country) : '',
      city: isSet(object.city) ? globalThis.String(object.city) : '',
      created: isSet(object.created) ? globalThis.String(object.created) : '',
    };
  },

  toJSON(message: LoginLog): unknown {
    const obj: any = {};
    if (message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    if (message.uid !== '') {
      obj.uid = message.uid;
    }
    if (message.name !== '') {
      obj.name = message.name;
    }
    if (message.os !== '') {
      obj.os = message.os;
    }
    if (message.client !== '') {
      obj.client = message.client;
    }
    if (message.bowser !== '') {
      obj.bowser = message.bowser;
    }
    if (message.host !== '') {
      obj.host = message.host;
    }
    if (message.country !== '') {
      obj.country = message.country;
    }
    if (message.city !== '') {
      obj.city = message.city;
    }
    if (message.created !== '') {
      obj.created = message.created;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LoginLog>, I>>(base?: I): LoginLog {
    return LoginLog.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LoginLog>, I>>(object: I): LoginLog {
    const message = createBaseLoginLog();
    message.id = object.id ?? 0;
    message.uid = object.uid ?? '';
    message.name = object.name ?? '';
    message.os = object.os ?? '';
    message.client = object.client ?? '';
    message.bowser = object.bowser ?? '';
    message.host = object.host ?? '';
    message.country = object.country ?? '';
    message.city = object.city ?? '';
    message.created = object.created ?? '';
    return message;
  },
};

export interface LogService {
  GetLoginLogs(request: TimeFrame): Promise<LoginLogs>;
  UpdateAllIpAddrs(request: UserUid): Promise<Response>;
}

export const LogServiceServiceName = 'log_module_jiaoxiu.LogService';
export class LogServiceClientImpl implements LogService {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || LogServiceServiceName;
    this.rpc = rpc;
    this.GetLoginLogs = this.GetLoginLogs.bind(this);
    this.UpdateAllIpAddrs = this.UpdateAllIpAddrs.bind(this);
  }
  GetLoginLogs(request: TimeFrame): Promise<LoginLogs> {
    const data = TimeFrame.encode(request).finish();
    const promise = this.rpc.request(this.service, 'GetLoginLogs', data);
    return promise.then((data) => LoginLogs.decode(_m0.Reader.create(data)));
  }

  UpdateAllIpAddrs(request: UserUid): Promise<Response> {
    const data = UserUid.encode(request).finish();
    const promise = this.rpc.request(this.service, 'UpdateAllIpAddrs', data);
    return promise.then((data) => Response.decode(_m0.Reader.create(data)));
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array,
  ): Promise<Uint8Array>;
}

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;

export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends globalThis.Array<infer U>
    ? globalThis.Array<DeepPartial<U>>
    : T extends ReadonlyArray<infer U>
      ? ReadonlyArray<DeepPartial<U>>
      : T extends {}
        ? { [K in keyof T]?: DeepPartial<T[K]> }
        : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
  ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & {
      [K in Exclude<keyof I, KeysOfUnion<P>>]: never;
    };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
