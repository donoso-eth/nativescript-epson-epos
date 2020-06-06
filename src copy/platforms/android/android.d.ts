
declare module com {
	export module epson {
		export module epos2 {
			export class BuildConfig {
				public static class: java.lang.Class<com.epson.epos2.BuildConfig>;
				public static DEBUG: boolean;
				public static APPLICATION_ID: string;
				public static BUILD_TYPE: string;
				public static FLAVOR: string;
				public static VERSION_CODE: number;
				public static VERSION_NAME: string;
				public constructor();
			}
		}
	}
}

declare module com {
	export module epson {
		export module epos2 {
			export class ConnectionListener {
				public static class: java.lang.Class<com.epson.epos2.ConnectionListener>;
				/**
				 * Constructs a new instance of the com.epson.epos2.ConnectionListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onConnection(param0: any, param1: number): void;
				});
				public constructor();
				public static EVENT_DISCONNECT: number;
				public static EVENT_RECONNECTING: number;
				public static EVENT_RECONNECT: number;
				public onConnection(param0: any, param1: number): void;
			}
		}
	}
}

declare module com {
	export module epson {
		export module epos2 {
			export class Epos2CallbackCode {
				public static class: java.lang.Class<com.epson.epos2.Epos2CallbackCode>;
				public static CODE_SUCCESS: number;
				public static CODE_ERR_TIMEOUT: number;
				public static CODE_ERR_NOT_FOUND: number;
				public static CODE_ERR_AUTORECOVER: number;
				public static CODE_ERR_COVER_OPEN: number;
				public static CODE_ERR_CUTTER: number;
				public static CODE_ERR_MECHANICAL: number;
				public static CODE_ERR_EMPTY: number;
				public static CODE_ERR_UNRECOVERABLE: number;
				public static CODE_ERR_SYSTEM: number;
				public static CODE_ERR_PORT: number;
				public static CODE_ERR_INVALID_WINDOW: number;
				public static CODE_ERR_JOB_NOT_FOUND: number;
				public static CODE_PRINTING: number;
				public static CODE_ERR_SPOOLER: number;
				public static CODE_ERR_BATTERY_LOW: number;
				public static CODE_ERR_TOO_MANY_REQUESTS: number;
				public static CODE_ERR_REQUEST_ENTITY_TOO_LARGE: number;
				public static CODE_CANCELED: number;
				public static CODE_ERR_NO_MICR_DATA: number;
				public static CODE_ERR_ILLEGAL_LENGTH: number;
				public static CODE_ERR_NO_MAGNETIC_DATA: number;
				public static CODE_ERR_RECOGNITION: number;
				public static CODE_ERR_READ: number;
				public static CODE_ERR_NOISE_DETECTED: number;
				public static CODE_ERR_PAPER_JAM: number;
				public static CODE_ERR_PAPER_PULLED_OUT: number;
				public static CODE_ERR_CANCEL_FAILED: number;
				public static CODE_ERR_PAPER_TYPE: number;
				public static CODE_ERR_WAIT_INSERTION: number;
				public static CODE_ERR_ILLEGAL: number;
				public static CODE_ERR_INSERTED: number;
				public static CODE_ERR_WAIT_REMOVAL: number;
				public static CODE_ERR_DEVICE_BUSY: number;
				public static CODE_ERR_IN_USE: number;
				public static CODE_ERR_CONNECT: number;
				public static CODE_ERR_DISCONNECT: number;
				public static CODE_ERR_MEMORY: number;
				public static CODE_ERR_PROCESSING: number;
				public static CODE_ERR_PARAM: number;
				public static CODE_ERR_GET_JSON_SIZE: number;
				public static CODE_ERR_DIFFERENT_MODEL: number;
				public static CODE_ERR_DIFFERENT_VERSION: number;
				public static CODE_ERR_DATA_CORRUPTED: number;
				public static CODE_ERR_IO: number;
				public static CODE_RETRY: number;
				public static CODE_ERR_FAILURE: number;
				public constructor();
			}
		}
	}
}

declare module com {
	export module epson {
		export module epos2 {
			export class Epos2Exception {
				public static class: java.lang.Class<com.epson.epos2.Epos2Exception>;
				public static ERR_PARAM: number;
				public static ERR_CONNECT: number;
				public static ERR_TIMEOUT: number;
				public static ERR_MEMORY: number;
				public static ERR_ILLEGAL: number;
				public static ERR_PROCESSING: number;
				public static ERR_NOT_FOUND: number;
				public static ERR_IN_USE: number;
				public static ERR_TYPE_INVALID: number;
				public static ERR_DISCONNECT: number;
				public static ERR_ALREADY_OPENED: number;
				public static ERR_ALREADY_USED: number;
				public static ERR_BOX_COUNT_OVER: number;
				public static ERR_BOX_CLIENT_OVER: number;
				public static ERR_UNSUPPORTED: number;
				public static ERR_FAILURE: number;
				public getErrorStatus(): number;
				public constructor(param0: number);
				public constructor(param0: string, param1: java.lang.Throwable);
			}
		}
	}
}

declare module com {
	export module epson {
		export module epos2 {
			export class Log {
				public static class: java.lang.Class<com.epson.epos2.Log>;
				public static PERIOD_TEMPORARY: number;
				public static PERIOD_PERMANENT: number;
				public static OUTPUT_DISABLE: number;
				public static OUTPUT_STORAGE: number;
				public static OUTPUT_TCP: number;
				public static LOGLEVEL_LOW: number;
				public static setLogSettings(param0: globalAndroid.content.Context, param1: number, param2: number, param3: string, param4: number, param5: number, param6: number): void;
				public static getSdkVersion(): string;
				public constructor();
			}
		}
	}
}

declare module com {
	export module epson {
		export module epos2 {
			export class NativeInitializer {
				public static class: java.lang.Class<com.epson.epos2.NativeInitializer>;
				public static initializeNativeEnv(param0: globalAndroid.content.Context): void;
				public static nativeEpos2SetAVDInfo(): void;
			}
		}
	}
}

declare module com {
	export module epson {
		export module epos2 {
			export class OutputLog {
				public static class: java.lang.Class<com.epson.epos2.OutputLog>;
				public static outputLogInfo(param0: string, param1: number, param2: native.Array<any>): void;
				public static outputException(param0: string, param1: number, param2: java.lang.Exception): void;
				public static outputLogReturnFunction(param0: string, param1: number, param2: number, param3: native.Array<any>): void;
				public static readLogSettings(param0: globalAndroid.content.Context): void;
				public static nativeReadLogSettings(param0: string, param1: string, param2: string, param3: string, param4: string, param5: string, param6: string, param7: string): number;
				public static nativeLogOutput(param0: number, param1: number, param2: string, param3: number, param4: string): void;
				public static outputLogCallFunction(param0: string, param1: number, param2: native.Array<any>): void;
				public static outputLogEvent(param0: string, param1: number, param2: native.Array<any>): void;
			}
		}
	}
}

declare module com {
	export module epson {
		export module epos2 {
			export module barcodescanner {
				export class BarcodeScanner {
					public static class: java.lang.Class<com.epson.epos2.barcodescanner.BarcodeScanner>;
					public static TRUE: number;
					public static FALSE: number;
					public static PARAM_DEFAULT: number;
					public static EVENT_RECONNECTING: number;
					public static EVENT_RECONNECT: number;
					public static EVENT_DISCONNECT: number;
					public getAdmin(): string;
					public checkHandle(): void;
					public setScanEventListener(param0: com.epson.epos2.barcodescanner.ScanListener): void;
					public getLocation(): string;
					public getStatus(): com.epson.epos2.barcodescanner.ScannerStatusInfo;
					public nativeEpos2GetAdmin(param0: number): string;
					public finalize(): void;
					public nativeEpos2GetLocation(param0: number): string;
					public initializeScannerInstance(): void;
					public onScanData(param0: string): void;
					public constructor(param0: globalAndroid.content.Context);
					public setConnectionEventListener(param0: com.epson.epos2.ConnectionListener): void;
					public connect(param0: string, param1: number): void;
					public nativeEpos2GetStatus(param0: number): com.epson.epos2.barcodescanner.ScannerStatusInfo;
					public disconnect(): void;
				}
			}
		}
	}
}

declare module com {
	export module epson {
		export module epos2 {
			export module barcodescanner {
				export class ScanListener {
					public static class: java.lang.Class<com.epson.epos2.barcodescanner.ScanListener>;
					/**
					 * Constructs a new instance of the com.epson.epos2.barcodescanner.ScanListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onScanData(param0: com.epson.epos2.barcodescanner.BarcodeScanner, param1: string): void;
					});
					public constructor();
					public onScanData(param0: com.epson.epos2.barcodescanner.BarcodeScanner, param1: string): void;
				}
			}
		}
	}
}

declare module com {
	export module epson {
		export module epos2 {
			export module barcodescanner {
				export class ScannerStatusInfo {
					public static class: java.lang.Class<com.epson.epos2.barcodescanner.ScannerStatusInfo>;
					public constructor();
					public getConnection(): number;
				}
			}
		}
	}
}

declare module com {
	export module epson {
		export module epos2 {
			export module cashchanger {
				export class CashChanger {
					public static class: java.lang.Class<com.epson.epos2.cashchanger.CashChanger>;
					public static COUNT_MODE_MANUAL_INPUT: number;
					public static COUNT_MODE_AUTO_COUNT: number;
					public static DEPOSIT_CHANGE: number;
					public static DEPOSIT_NOCHANGE: number;
					public static DEPOSIT_REPAY: number;
					public static COLLECT_ALL_CASH: number;
					public static COLLECT_PART_OF_CASH: number;
					public static STATUS_BUSY: number;
					public static STATUS_PAUSE: number;
					public static STATUS_END: number;
					public static STATUS_ERR: number;
					public static SUE_POWER_ONLINE: number;
					public static SUE_POWER_OFF: number;
					public static SUE_POWER_OFFLINE: number;
					public static SUE_POWER_OFF_OFFLINE: number;
					public static SUE_STATUS_EMPTY: number;
					public static SUE_STATUS_NEAREMPTY: number;
					public static SUE_STATUS_EMPTYOK: number;
					public static SUE_STATUS_FULL: number;
					public static SUE_STATUS_NEARFULL: number;
					public static SUE_STATUS_FULLOK: number;
					public static SUE_STATUS_JAM: number;
					public static SUE_STATUS_JAMOK: number;
					public static ST_EMPTY: number;
					public static ST_NEAR_EMPTY: number;
					public static ST_OK: number;
					public static ST_NEAR_FULL: number;
					public static ST_FULL: number;
					public static TRUE: number;
					public static FALSE: number;
					public static EVENT_RECONNECTING: number;
					public static EVENT_RECONNECT: number;
					public static EVENT_DISCONNECT: number;
					public static PARAM_DEFAULT: number;
					public sendCommand(param0: native.Array<number>): void;
					public setDirectIOEventListener(param0: com.epson.epos2.cashchanger.DirectIOListener): void;
					public finalize(): void;
					public openDrawer(): void;
					public dispenseCash(param0: java.util.Map<string,java.lang.Integer>): void;
					public nativeEpos2ReadCashCount(param0: number): number;
					public nativeEpos2OpenDrawer(param0: number): number;
					public setDirectIOCommandReplyEventListener(param0: com.epson.epos2.cashchanger.DirectIOCommandReplyListener): void;
					public setDispenseEventListener(param0: com.epson.epos2.cashchanger.DispenseListener): void;
					public nativeEpos2CollectCash(param0: number, param1: number): number;
					public nativeEpos2DispenseChange(param0: number, param1: number): number;
					public nativeEpos2RestartDeposit(param0: number): number;
					public connect(param0: string, param1: number): void;
					public setCommandReplyEventListener(param0: com.epson.epos2.cashchanger.CommandReplyListener): void;
					public setStatusChangeEventListener(param0: com.epson.epos2.cashchanger.StatusChangeListener): void;
					public getLocation(): string;
					public beginDeposit(): void;
					public nativeEpos2EndDeposit(param0: number, param1: number): number;
					public getOposErrorCode(): number;
					public nativeEpos2GetAdmin(param0: number): string;
					public collectCash(param0: number): void;
					public setConfigLeftCash(param0: number, param1: number): void;
					public nativeEpos2GetLocation(param0: number): string;
					public endDeposit(param0: number): void;
					public getStatus(): com.epson.epos2.cashchanger.CashChangerStatusInfo;
					public nativeEpos2SendCommand(param0: number, param1: native.Array<number>): number;
					public setCashCountEventListener(param0: com.epson.epos2.cashchanger.CashCountListener): void;
					public dispenseChange(param0: number): void;
					public nativeEpos2GetOposErrorCode(param0: number): number;
					public sendDirectIOCommand(param0: number, param1: number, param2: string): void;
					public setCollectEventListener(param0: com.epson.epos2.cashchanger.CollectListener): void;
					public nativeEpos2SetConfigCountMode(param0: number, param1: number): number;
					public nativeEpos2SendDirectIOCommand(param0: number, param1: number, param2: number, param3: string): number;
					public initializeCashChangerInstance(): void;
					public nativeEpos2SetConfigLeftCash(param0: number, param1: number, param2: number): number;
					public setConnectionEventListener(param0: com.epson.epos2.ConnectionListener): void;
					public setDepositEventListener(param0: com.epson.epos2.cashchanger.DepositListener): void;
					public disconnect(): void;
					public getAdmin(): string;
					public checkHandle(): void;
					public restartDeposit(): void;
					public readCashCount(): void;
					public nativeEpos2BeginDeposit(param0: number): number;
					public constructor(param0: globalAndroid.content.Context);
					public nativeEpos2GetStatus(param0: number): com.epson.epos2.cashchanger.CashChangerStatusInfo;
					public pauseDeposit(): void;
					public nativeEpos2PauseDeposit(param0: number): number;
					public nativeEpos2DispenseCash(param0: number, param1: native.Array<string>, param2: native.Array<number>, param3: number): number;
					public setStatusUpdateEventListener(param0: com.epson.epos2.cashchanger.StatusUpdateListener): void;
					public setConfigCountMode(param0: number): void;
					public setConfigChangeEventListener(param0: com.epson.epos2.cashchanger.ConfigChangeListener): void;
				}
			}
		}
	}
}

declare module com {
	export module epson {
		export module epos2 {
			export module cashchanger {
				export class CashChangerStatusInfo {
					public static class: java.lang.Class<com.epson.epos2.cashchanger.CashChangerStatusInfo>;
					public constructor();
					public getConnection(): number;
				}
			}
		}
	}
}

declare module com {
	export module epson {
		export module epos2 {
			export module cashchanger {
				export class CashCountListener {
					public static class: java.lang.Class<com.epson.epos2.cashchanger.CashCountListener>;
					/**
					 * Constructs a new instance of the com.epson.epos2.cashchanger.CashCountListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onCChangerCashCount(param0: com.epson.epos2.cashchanger.CashChanger, param1: number, param2: java.util.Map<string,java.lang.Integer>): void;
					});
					public constructor();
					public onCChangerCashCount(param0: com.epson.epos2.cashchanger.CashChanger, param1: number, param2: java.util.Map<string,java.lang.Integer>): void;
				}
			}
		}
	}
}

declare module com {
	export module epson {
		export module epos2 {
			export module cashchanger {
				export class CollectListener {
					public static class: java.lang.Class<com.epson.epos2.cashchanger.CollectListener>;
					/**
					 * Constructs a new instance of the com.epson.epos2.cashchanger.CollectListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onCChangerCollect(param0: com.epson.epos2.cashchanger.CashChanger, param1: number): void;
					});
					public constructor();
					public onCChangerCollect(param0: com.epson.epos2.cashchanger.CashChanger, param1: number): void;
				}
			}
		}
	}
}

declare module com {
	export module epson {
		export module epos2 {
			export module cashchanger {
				export class CommandReplyListener {
					public static class: java.lang.Class<com.epson.epos2.cashchanger.CommandReplyListener>;
					/**
					 * Constructs a new instance of the com.epson.epos2.cashchanger.CommandReplyListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onCChangerCommandReply(param0: com.epson.epos2.cashchanger.CashChanger, param1: number, param2: native.Array<number>): void;
					});
					public constructor();
					public onCChangerCommandReply(param0: com.epson.epos2.cashchanger.CashChanger, param1: number, param2: native.Array<number>): void;
				}
			}
		}
	}
}

declare module com {
	export module epson {
		export module epos2 {
			export module cashchanger {
				export class ConfigChangeListener {
					public static class: java.lang.Class<com.epson.epos2.cashchanger.ConfigChangeListener>;
					/**
					 * Constructs a new instance of the com.epson.epos2.cashchanger.ConfigChangeListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onCChangerConfigChange(param0: com.epson.epos2.cashchanger.CashChanger, param1: number): void;
					});
					public constructor();
					public onCChangerConfigChange(param0: com.epson.epos2.cashchanger.CashChanger, param1: number): void;
				}
			}
		}
	}
}

declare module com {
	export module epson {
		export module epos2 {
			export module cashchanger {
				export class DepositListener {
					public static class: java.lang.Class<com.epson.epos2.cashchanger.DepositListener>;
					/**
					 * Constructs a new instance of the com.epson.epos2.cashchanger.DepositListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onCChangerDeposit(param0: com.epson.epos2.cashchanger.CashChanger, param1: number, param2: number, param3: number, param4: java.util.Map<string,java.lang.Integer>): void;
					});
					public constructor();
					public onCChangerDeposit(param0: com.epson.epos2.cashchanger.CashChanger, param1: number, param2: number, param3: number, param4: java.util.Map<string,java.lang.Integer>): void;
				}
			}
		}
	}
}

declare module com {
	export module epson {
		export module epos2 {
			export module cashchanger {
				export class DirectIOCommandReplyListener {
					public static class: java.lang.Class<com.epson.epos2.cashchanger.DirectIOCommandReplyListener>;
					/**
					 * Constructs a new instance of the com.epson.epos2.cashchanger.DirectIOCommandReplyListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onCChangerDirectIOCommandReply(param0: com.epson.epos2.cashchanger.CashChanger, param1: number, param2: number, param3: number, param4: string): void;
					});
					public constructor();
					public onCChangerDirectIOCommandReply(param0: com.epson.epos2.cashchanger.CashChanger, param1: number, param2: number, param3: number, param4: string): void;
				}
			}
		}
	}
}

declare module com {
	export module epson {
		export module epos2 {
			export module cashchanger {
				export class DirectIOListener {
					public static class: java.lang.Class<com.epson.epos2.cashchanger.DirectIOListener>;
					/**
					 * Constructs a new instance of the com.epson.epos2.cashchanger.DirectIOListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onCChangerDirectIO(param0: com.epson.epos2.cashchanger.CashChanger, param1: number, param2: number, param3: string): void;
					});
					public constructor();
					public onCChangerDirectIO(param0: com.epson.epos2.cashchanger.CashChanger, param1: number, param2: number, param3: string): void;
				}
			}
		}
	}
}

declare module com {
	export module epson {
		export module epos2 {
			export module cashchanger {
				export class DispenseListener {
					public static class: java.lang.Class<com.epson.epos2.cashchanger.DispenseListener>;
					/**
					 * Constructs a new instance of the com.epson.epos2.cashchanger.DispenseListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onCChangerDispense(param0: com.epson.epos2.cashchanger.CashChanger, param1: number): void;
					});
					public constructor();
					public onCChangerDispense(param0: com.epson.epos2.cashchanger.CashChanger, param1: number): void;
				}
			}
		}
	}
}

declare module com {
	export module epson {
		export module epos2 {
			export module cashchanger {
				export class Epos2CallbackCode {
					public static class: java.lang.Class<com.epson.epos2.cashchanger.Epos2CallbackCode>;
					public static CODE_SUCCESS: number;
					public static CODE_BUSY: number;
					public static CODE_DISCREPANCY: number;
					public static CODE_ERR_CASH_IN_TRAY: number;
					public static CODE_ERR_SHORTAGE: number;
					public static CODE_ERR_REJECT_UNIT: number;
					public static CODE_ERR_OPOSCODE: number;
					public static CODE_ERR_UNSUPPORTED: number;
					public static CODE_ERR_PARAM: number;
					public static CODE_ERR_COMMAND: number;
					public static CODE_ERR_DEVICE: number;
					public static CODE_ERR_SYSTEM: number;
					public static CODE_ERR_FAILURE: number;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module epson {
		export module epos2 {
			export module cashchanger {
				export class StatusChangeListener {
					public static class: java.lang.Class<com.epson.epos2.cashchanger.StatusChangeListener>;
					/**
					 * Constructs a new instance of the com.epson.epos2.cashchanger.StatusChangeListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onCChangerStatusChange(param0: com.epson.epos2.cashchanger.CashChanger, param1: number, param2: java.util.Map<string,java.lang.Integer>): void;
					});
					public constructor();
					public onCChangerStatusChange(param0: com.epson.epos2.cashchanger.CashChanger, param1: number, param2: java.util.Map<string,java.lang.Integer>): void;
				}
			}
		}
	}
}

declare module com {
	export module epson {
		export module epos2 {
			export module cashchanger {
				export class StatusUpdateListener {
					public static class: java.lang.Class<com.epson.epos2.cashchanger.StatusUpdateListener>;
					/**
					 * Constructs a new instance of the com.epson.epos2.cashchanger.StatusUpdateListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onCChangerStatusUpdate(param0: com.epson.epos2.cashchanger.CashChanger, param1: number): void;
					});
					public constructor();
					public onCChangerStatusUpdate(param0: com.epson.epos2.cashchanger.CashChanger, param1: number): void;
				}
			}
		}
	}
}

declare module com {
	export module epson {
		export module epos2 {
			export module cat {
				export class AccessDailyLogListener {
					public static class: java.lang.Class<com.epson.epos2.cat.AccessDailyLogListener>;
					/**
					 * Constructs a new instance of the com.epson.epos2.cat.AccessDailyLogListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onCatAccessDailyLog(param0: com.epson.epos2.cat.Cat, param1: number, param2: number, param3: number, param4: java.util.ArrayList<com.epson.epos2.cat.DailyLog>): void;
					});
					public constructor();
					public onCatAccessDailyLog(param0: com.epson.epos2.cat.Cat, param1: number, param2: number, param3: number, param4: java.util.ArrayList<com.epson.epos2.cat.DailyLog>): void;
				}
			}
		}
	}
}

declare module com {
	export module epson {
		export module epos2 {
			export module cat {
				export class AuthorizeCompletionListener {
					public static class: java.lang.Class<com.epson.epos2.cat.AuthorizeCompletionListener>;
					/**
					 * Constructs a new instance of the com.epson.epos2.cat.AuthorizeCompletionListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onCatAuthorizeCompletion(param0: com.epson.epos2.cat.Cat, param1: number, param2: number, param3: number, param4: com.epson.epos2.cat.AuthorizeResult): void;
					});
					public constructor();
					public onCatAuthorizeCompletion(param0: com.epson.epos2.cat.Cat, param1: number, param2: number, param3: number, param4: com.epson.epos2.cat.AuthorizeResult): void;
				}
			}
		}
	}
}

declare module com {
	export module epson {
		export module epos2 {
			export module cat {
				export class AuthorizeRefundListener {
					public static class: java.lang.Class<com.epson.epos2.cat.AuthorizeRefundListener>;
					/**
					 * Constructs a new instance of the com.epson.epos2.cat.AuthorizeRefundListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onCatAuthorizeRefund(param0: com.epson.epos2.cat.Cat, param1: number, param2: number, param3: number, param4: com.epson.epos2.cat.AuthorizeResult): void;
					});
					public constructor();
					public onCatAuthorizeRefund(param0: com.epson.epos2.cat.Cat, param1: number, param2: number, param3: number, param4: com.epson.epos2.cat.AuthorizeResult): void;
				}
			}
		}
	}
}

declare module com {
	export module epson {
		export module epos2 {
			export module cat {
				export class AuthorizeResult {
					public static class: java.lang.Class<com.epson.epos2.cat.AuthorizeResult>;
					public getKid(): string;
					public getTransactionNumber(): string;
					public getVoidSlipNumber(): string;
					public constructor();
					public getApprovalCode(): string;
					public getSettledAmount(): number;
					public getAccountNumber(): string;
					public getSlipNumber(): string;
					public getPaymentCondition(): number;
					public getBalance(): number;
				}
			}
		}
	}
}

declare module com {
	export module epson {
		export module epos2 {
			export module cat {
				export class AuthorizeSalesListener {
					public static class: java.lang.Class<com.epson.epos2.cat.AuthorizeSalesListener>;
					/**
					 * Constructs a new instance of the com.epson.epos2.cat.AuthorizeSalesListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onCatAuthorizeSales(param0: com.epson.epos2.cat.Cat, param1: number, param2: number, param3: number, param4: com.epson.epos2.cat.AuthorizeResult): void;
					});
					public constructor();
					public onCatAuthorizeSales(param0: com.epson.epos2.cat.Cat, param1: number, param2: number, param3: number, param4: com.epson.epos2.cat.AuthorizeResult): void;
				}
			}
		}
	}
}

declare module com {
	export module epson {
		export module epos2 {
			export module cat {
				export class AuthorizeVoidListener {
					public static class: java.lang.Class<com.epson.epos2.cat.AuthorizeVoidListener>;
					/**
					 * Constructs a new instance of the com.epson.epos2.cat.AuthorizeVoidListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onCatAuthorizeVoid(param0: com.epson.epos2.cat.Cat, param1: number, param2: number, param3: number, param4: com.epson.epos2.cat.AuthorizeResult): void;
					});
					public constructor();
					public onCatAuthorizeVoid(param0: com.epson.epos2.cat.Cat, param1: number, param2: number, param3: number, param4: com.epson.epos2.cat.AuthorizeResult): void;
				}
			}
		}
	}
}

declare module com {
	export module epson {
		export module epos2 {
			export module cat {
				export class Cat {
					public static class: java.lang.Class<com.epson.epos2.cat.Cat>;
					public static SERVICE_CREDIT: number;
					public static SERVICE_DEBIT: number;
					public static SERVICE_UNIONPAY: number;
					public static SERVICE_EDY: number;
					public static SERVICE_ID: number;
					public static SERVICE_NANACO: number;
					public static SERVICE_QUICPAY: number;
					public static SERVICE_SUICA: number;
					public static SERVICE_WAON: number;
					public static SERVICE_POINT: number;
					public static SERVICE_COMMON: number;
					public static PAYMENT_CONDITION_LUMP_SUM: number;
					public static PAYMENT_CONDITION_BONUS_1: number;
					public static PAYMENT_CONDITION_BONUS_2: number;
					public static PAYMENT_CONDITION_BONUS_3: number;
					public static PAYMENT_CONDITION_INSTALLMENT_1: number;
					public static PAYMENT_CONDITION_INSTALLMENT_2: number;
					public static PAYMENT_CONDITION_REVOLVING: number;
					public static PAYMENT_CONDITION_COMBINATION_1: number;
					public static PAYMENT_CONDITION_COMBINATION_2: number;
					public static PAYMENT_CONDITION_DEBIT: number;
					public static PAYMENT_CONDITION_ELECTRONIC_MONEY: number;
					public static PAYMENT_CONDITION_OTHER: number;
					public static SUE_POWER_ONLINE: number;
					public static SUE_POWER_OFF_OFFLINE: number;
					public static SUE_LOGSTATUS_OK: number;
					public static SUE_LOGSTATUS_NEARFULL: number;
					public static SUE_LOGSTATUS_FULL: number;
					public static TRUE: number;
					public static FALSE: number;
					public static PARAM_DEFAULT: number;
					public static EVENT_RECONNECTING: number;
					public static EVENT_RECONNECT: number;
					public static EVENT_DISCONNECT: number;
					public setAuthorizeSalesEventListener(param0: com.epson.epos2.cat.AuthorizeSalesListener): void;
					public initializeCatInstance(): void;
					public finalize(): void;
					public setAuthorizeVoidEventListener(param0: com.epson.epos2.cat.AuthorizeVoidListener): void;
					public accessDailyLog(param0: number, param1: number): void;
					public nativeEpos2AuthorizeCompletion(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number): number;
					public setDirectIOCommandReplyEventListener(param0: com.epson.epos2.cat.DirectIOCommandReplyListener): void;
					public nativeEpos2SendDirectIOCommand(param0: number, param1: number, param2: number, param3: string, param4: number, param5: number): number;
					public nativeEpos2AuthorizeSale(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number): number;
					public setConnectionEventListener(param0: com.epson.epos2.ConnectionListener): void;
					public nativeEpos2AuthorizeVoid(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number): number;
					public getStauts(): com.epson.epos2.cat.CatStatusInfo;
					public getTrainingMode(): number;
					public connect(param0: string, param1: number): void;
					public disconnect(): void;
					public authorizeSales(param0: number, param1: number, param2: number): void;
					public authorizeRefund(param0: number, param1: number, param2: number): void;
					public authorizeCompletion(param0: number, param1: number, param2: number): void;
					public nativeEpos2GetStatus(param0: number): com.epson.epos2.cat.CatStatusInfo;
					public getAdmin(): string;
					public authorizeVoid(param0: number, param1: number, param2: number): void;
					public checkHandle(): void;
					public getLocation(): string;
					public nativeEpos2AuthorizeRefund(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number): number;
					public getTimeout(): number;
					public getOposErrorCode(): number;
					public nativeEpos2GetAdmin(param0: number): string;
					public nativeEpos2AccessDailyLog(param0: number, param1: number, param2: number, param3: number, param4: number): number;
					public nativeEpos2GetLocation(param0: number): string;
					public setAccessDailyLogEventListener(param0: com.epson.epos2.cat.AccessDailyLogListener): void;
					public setAuthorizeRefundEventListener(param0: com.epson.epos2.cat.AuthorizeRefundListener): void;
					public constructor(param0: globalAndroid.content.Context);
					public setTrainingMode(param0: number): void;
					public nativeEpos2GetOposErrorCode(param0: number): number;
					public setTimeout(param0: number): void;
					public sendDirectIOCommand(param0: number, param1: number, param2: string, param3: number): void;
					public setStatusUpdateEventListener(param0: com.epson.epos2.cat.StatusUpdateListener): void;
					public setAuthorizeCompletionEventListener(param0: com.epson.epos2.cat.AuthorizeCompletionListener): void;
				}
			}
		}
	}
}

declare module com {
	export module epson {
		export module epos2 {
			export module cat {
				export class CatStatusInfo {
					public static class: java.lang.Class<com.epson.epos2.cat.CatStatusInfo>;
					public constructor();
					public getConnection(): number;
				}
			}
		}
	}
}

declare module com {
	export module epson {
		export module epos2 {
			export module cat {
				export class DailyLog {
					public static class: java.lang.Class<com.epson.epos2.cat.DailyLog>;
					public getKid(): string;
					public getSalesAmount(): number;
					public constructor();
					public getVoidAmount(): number;
					public getVoidCount(): number;
					public getSalesCount(): number;
				}
			}
		}
	}
}

declare module com {
	export module epson {
		export module epos2 {
			export module cat {
				export class DirectIOCommandReplyListener {
					public static class: java.lang.Class<com.epson.epos2.cat.DirectIOCommandReplyListener>;
					/**
					 * Constructs a new instance of the com.epson.epos2.cat.DirectIOCommandReplyListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onCatDirectIOCommandReply(param0: com.epson.epos2.cat.Cat, param1: number, param2: number, param3: number, param4: string, param5: number, param6: number, param7: com.epson.epos2.cat.DirectIOResult): void;
					});
					public constructor();
					public onCatDirectIOCommandReply(param0: com.epson.epos2.cat.Cat, param1: number, param2: number, param3: number, param4: string, param5: number, param6: number, param7: com.epson.epos2.cat.DirectIOResult): void;
				}
			}
		}
	}
}

declare module com {
	export module epson {
		export module epos2 {
			export module cat {
				export class DirectIOResult {
					public static class: java.lang.Class<com.epson.epos2.cat.DirectIOResult>;
					public getTransactionNumber(): string;
					public constructor();
					public getAdditionalSecurityInformation(): string;
					public getSettledAmount(): number;
					public getAccountNumber(): string;
					public getSlipNumber(): string;
					public getPaymentCondition(): number;
					public getBalance(): number;
				}
			}
		}
	}
}

declare module com {
	export module epson {
		export module epos2 {
			export module cat {
				export class Epos2CallbackCode {
					public static class: java.lang.Class<com.epson.epos2.cat.Epos2CallbackCode>;
					public static CODE_SUCCESS: number;
					public static CODE_BUSY: number;
					public static CODE_EXCEEDING_LIMIT: number;
					public static CODE_DISAGREEMENT: number;
					public static CODE_INVALID_CARD: number;
					public static CODE_RESET: number;
					public static CODE_ERR_CENTER: number;
					public static CODE_ERR_OPOSCODE: number;
					public static CODE_ERR_PARAM: number;
					public static CODE_ERR_DEVICE: number;
					public static CODE_ERR_SYSTEM: number;
					public static CODE_ERR_TIMEOUT: number;
					public static CODE_ERR_FAILURE: number;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module epson {
		export module epos2 {
			export module cat {
				export class StatusUpdateListener {
					public static class: java.lang.Class<com.epson.epos2.cat.StatusUpdateListener>;
					/**
					 * Constructs a new instance of the com.epson.epos2.cat.StatusUpdateListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onCatStatusUpdate(param0: com.epson.epos2.cat.Cat, param1: number): void;
					});
					public constructor();
					public onCatStatusUpdate(param0: com.epson.epos2.cat.Cat, param1: number): void;
				}
			}
		}
	}
}

declare module com {
	export module epson {
		export module epos2 {
			export module commbox {
				export class CommBox {
					public static class: java.lang.Class<com.epson.epos2.commbox.CommBox>;
					public static TRUE: number;
					public static FALSE: number;
					public static PARAM_DEFAULT: number;
					public static EVENT_RECONNECTING: number;
					public static EVENT_RECONNECT: number;
					public static EVENT_DISCONNECT: number;
					public getAdmin(): string;
					public nativeEpos2GetStatus(param0: number): com.epson.epos2.commbox.CommBoxStatusInfo;
					public checkHandle(): void;
					public getLocation(): string;
					public initializeCommBoxInstance(): void;
					public sendMessage(param0: string, param1: string, param2: com.epson.epos2.commbox.SendMessageCallback): void;
					public connect(param0: string, param1: number, param2: string): void;
					public getCommHistory(param0: com.epson.epos2.commbox.GetCommHistoryCallback): void;
					public finalize(): void;
					public setReceiveEventListener(param0: com.epson.epos2.commbox.ReceiveListener): void;
					public onCommBoxReceive(param0: number, param1: string, param2: string, param3: string): void;
					public getStatus(): com.epson.epos2.commbox.CommBoxStatusInfo;
					public constructor(param0: globalAndroid.content.Context);
					public nativeEpos2SendMessage(param0: number, param1: string, param2: string, param3: com.epson.epos2.commbox.CommBox.CommBoxSendMessageCallbackAdapter): number;
					public setConnectionEventListener(param0: com.epson.epos2.ConnectionListener): void;
					public nativeEpos2GetCommHistory(param0: number, param1: com.epson.epos2.commbox.CommBox.CommBoxHistoryCallbackAdapter): number;
					public disconnect(): void;
				}
				export module CommBox {
					export class CommBoxHistoryCallbackAdapter {
						public static class: java.lang.Class<com.epson.epos2.commbox.CommBox.CommBoxHistoryCallbackAdapter>;
						public getAdapterCommBoxHandle(): number;
						public addHistory(param0: string, param1: string, param2: string): void;
						public constructor(param0: com.epson.epos2.commbox.CommBox, param1: number, param2: com.epson.epos2.commbox.GetCommHistoryCallback, param3: com.epson.epos2.commbox.CommBox);
						public onCommBoxHistory(param0: number, param1: number): void;
					}
					export class CommBoxSendMessageCallbackAdapter {
						public static class: java.lang.Class<com.epson.epos2.commbox.CommBox.CommBoxSendMessageCallbackAdapter>;
						public constructor(param0: com.epson.epos2.commbox.CommBox, param1: number, param2: com.epson.epos2.commbox.SendMessageCallback, param3: com.epson.epos2.commbox.CommBox);
						public onCommBoxSendMessage(param0: number, param1: number, param2: number): void;
						public getAdapterCommBoxHandle(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module epson {
		export module epos2 {
			export module commbox {
				export class CommBoxStatusInfo {
					public static class: java.lang.Class<com.epson.epos2.commbox.CommBoxStatusInfo>;
					public constructor();
					public getConnection(): number;
				}
			}
		}
	}
}

declare module com {
	export module epson {
		export module epos2 {
			export module commbox {
				export class GetCommHistoryCallback {
					public static class: java.lang.Class<com.epson.epos2.commbox.GetCommHistoryCallback>;
					/**
					 * Constructs a new instance of the com.epson.epos2.commbox.GetCommHistoryCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onGetCommHistory(param0: com.epson.epos2.commbox.CommBox, param1: number, param2: java.util.ArrayList<java.util.HashMap<string,string>>): void;
					});
					public constructor();
					public onGetCommHistory(param0: com.epson.epos2.commbox.CommBox, param1: number, param2: java.util.ArrayList<java.util.HashMap<string,string>>): void;
				}
			}
		}
	}
}

declare module com {
	export module epson {
		export module epos2 {
			export module commbox {
				export class ReceiveListener {
					public static class: java.lang.Class<com.epson.epos2.commbox.ReceiveListener>;
					/**
					 * Constructs a new instance of the com.epson.epos2.commbox.ReceiveListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onCommBoxReceive(param0: com.epson.epos2.commbox.CommBox, param1: string, param2: string, param3: string): void;
					});
					public constructor();
					public onCommBoxReceive(param0: com.epson.epos2.commbox.CommBox, param1: string, param2: string, param3: string): void;
				}
			}
		}
	}
}

declare module com {
	export module epson {
		export module epos2 {
			export module commbox {
				export class SendMessageCallback {
					public static class: java.lang.Class<com.epson.epos2.commbox.SendMessageCallback>;
					/**
					 * Constructs a new instance of the com.epson.epos2.commbox.SendMessageCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onCommBoxSendMessage(param0: com.epson.epos2.commbox.CommBox, param1: number, param2: number): void;
					});
					public constructor();
					public onCommBoxSendMessage(param0: com.epson.epos2.commbox.CommBox, param1: number, param2: number): void;
				}
			}
		}
	}
}

declare module com {
	export module epson {
		export module epos2 {
			export module discovery {
				export class DeviceInfo {
					public static class: java.lang.Class<com.epson.epos2.discovery.DeviceInfo>;
					public getDeviceName(): string;
					public getMacAddress(): string;
					public setDeviceType(param0: number): void;
					public setDeviceName(param0: string): void;
					public getTarget(): string;
					public getDeviceType(): number;
					public setIpAddress(param0: string): void;
					public setBdAddress(param0: string): void;
					public getIpAddress(): string;
					public constructor();
					public setTarget(param0: string): void;
					public getBdAddress(): string;
					public setMacAddress(param0: string): void;
				}
			}
		}
	}
}

declare module com {
	export module epson {
		export module epos2 {
			export module discovery {
				export class Discovery {
					public static class: java.lang.Class<com.epson.epos2.discovery.Discovery>;
					public static TYPE_ALL: number;
					public static TYPE_PRINTER: number;
					public static TYPE_HYBRID_PRINTER: number;
					public static TYPE_DISPLAY: number;
					public static TYPE_KEYBOARD: number;
					public static TYPE_SCANNER: number;
					public static TYPE_SERIAL: number;
					public static TYPE_CCHANGER: number;
					public static TYPE_POS_KEYBOARD: number;
					public static TYPE_CAT: number;
					public static TYPE_MSR: number;
					public static TYPE_OTHER_PERIPHERAL: number;
					public static TYPE_GFE: number;
					public static PORTTYPE_ALL: number;
					public static PORTTYPE_TCP: number;
					public static PORTTYPE_BLUETOOTH: number;
					public static PORTTYPE_USB: number;
					public static MODEL_ALL: number;
					public static FILTER_NONE: number;
					public static FILTER_NAME: number;
					public static TRUE: number;
					public static FALSE: number;
					public static start(param0: globalAndroid.content.Context, param1: com.epson.epos2.discovery.FilterOption, param2: com.epson.epos2.discovery.DiscoveryListener): void;
					public constructor();
					public static onDiscovery(param0: com.epson.epos2.discovery.DeviceInfo): void;
					public static stop(): void;
				}
			}
		}
	}
}

declare module com {
	export module epson {
		export module epos2 {
			export module discovery {
				export class DiscoveryListener {
					public static class: java.lang.Class<com.epson.epos2.discovery.DiscoveryListener>;
					/**
					 * Constructs a new instance of the com.epson.epos2.discovery.DiscoveryListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onDiscovery(param0: com.epson.epos2.discovery.DeviceInfo): void;
					});
					public constructor();
					public onDiscovery(param0: com.epson.epos2.discovery.DeviceInfo): void;
				}
			}
		}
	}
}

declare module com {
	export module epson {
		export module epos2 {
			export module discovery {
				export class FilterOption {
					public static class: java.lang.Class<com.epson.epos2.discovery.FilterOption>;
					public setDeviceType(param0: number): void;
					public getBroadcast(): string;
					public setDeviceModel(param0: number): void;
					public setBroadcast(param0: string): void;
					public setEpsonFilter(param0: number): void;
					public getDeviceType(): number;
					public constructor();
					public setPortType(param0: number): void;
					public getBondedDevices(): number;
					public getPortType(): number;
					public setBondedDevices(param0: number): void;
					public getDeviceModel(): number;
					public getEpsonFilter(): number;
				}
			}
		}
	}
}

declare module com {
	export module epson {
		export module epos2 {
			export module germanyfiscalelement {
				export class GermanyFiscalElement {
					public static class: java.lang.Class<com.epson.epos2.germanyfiscalelement.GermanyFiscalElement>;
					public static TRUE: number;
					public static FALSE: number;
					public static PARAM_DEFAULT: number;
					public static EVENT_RECONNECTING: number;
					public static EVENT_RECONNECT: number;
					public static EVENT_DISCONNECT: number;
					public getAdmin(): string;
					public getLocation(): string;
					public checkHandle(): void;
					public nativeEpos2GetStatus(param0: number): com.epson.epos2.germanyfiscalelement.GermanyFiscalElementStatusInfo;
					public nativeEpos2GetAdmin(param0: number): string;
					public finalize(): void;
					public nativeEpos2GetLocation(param0: number): string;
					public nativeEpos2Operate(param0: number, param1: string, param2: number): number;
					public setReceiveEventListener(param0: com.epson.epos2.germanyfiscalelement.ReceiveListener): void;
					public constructor(param0: globalAndroid.content.Context);
					public operate(param0: string, param1: number): void;
					public setConnectionEventListener(param0: com.epson.epos2.ConnectionListener): void;
					public getStatus(): com.epson.epos2.germanyfiscalelement.GermanyFiscalElementStatusInfo;
					public connect(param0: string, param1: number): void;
					public disconnect(): void;
					public initializeGfeInstance(): void;
				}
			}
		}
	}
}

declare module com {
	export module epson {
		export module epos2 {
			export module germanyfiscalelement {
				export class GermanyFiscalElementStatusInfo {
					public static class: java.lang.Class<com.epson.epos2.germanyfiscalelement.GermanyFiscalElementStatusInfo>;
					public constructor();
					public getConnection(): number;
				}
			}
		}
	}
}

declare module com {
	export module epson {
		export module epos2 {
			export module germanyfiscalelement {
				export class ReceiveListener {
					public static class: java.lang.Class<com.epson.epos2.germanyfiscalelement.ReceiveListener>;
					/**
					 * Constructs a new instance of the com.epson.epos2.germanyfiscalelement.ReceiveListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onGfeReceive(param0: com.epson.epos2.germanyfiscalelement.GermanyFiscalElement, param1: number, param2: string): void;
					});
					public constructor();
					public onGfeReceive(param0: com.epson.epos2.germanyfiscalelement.GermanyFiscalElement, param1: number, param2: string): void;
				}
			}
		}
	}
}

declare module com {
	export module epson {
		export module epos2 {
			export module keyboard {
				export class KeyPressListener {
					public static class: java.lang.Class<com.epson.epos2.keyboard.KeyPressListener>;
					/**
					 * Constructs a new instance of the com.epson.epos2.keyboard.KeyPressListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onKbdKeyPress(param0: com.epson.epos2.keyboard.Keyboard, param1: number, param2: string): void;
					});
					public constructor();
					public onKbdKeyPress(param0: com.epson.epos2.keyboard.Keyboard, param1: number, param2: string): void;
				}
			}
		}
	}
}

declare module com {
	export module epson {
		export module epos2 {
			export module keyboard {
				export class Keyboard {
					public static class: java.lang.Class<com.epson.epos2.keyboard.Keyboard>;
					public static VK_BACK: number;
					public static VK_TAB: number;
					public static VK_RETURN: number;
					public static VK_SHIFT: number;
					public static VK_CONTROL: number;
					public static VK_MENU: number;
					public static VK_CAPITAL: number;
					public static VK_ESCAPE: number;
					public static VK_CONVERT: number;
					public static VK_NONCONVERT: number;
					public static VK_SPACE: number;
					public static VK_PRIOR: number;
					public static VK_NEXT: number;
					public static VK_END: number;
					public static VK_HOME: number;
					public static VK_LEFT: number;
					public static VK_UP: number;
					public static VK_RIGHT: number;
					public static VK_DOWN: number;
					public static VK_INSERT: number;
					public static VK_DELETE: number;
					public static VK_0: number;
					public static VK_1: number;
					public static VK_2: number;
					public static VK_3: number;
					public static VK_4: number;
					public static VK_5: number;
					public static VK_6: number;
					public static VK_7: number;
					public static VK_8: number;
					public static VK_9: number;
					public static VK_A: number;
					public static VK_B: number;
					public static VK_C: number;
					public static VK_D: number;
					public static VK_E: number;
					public static VK_F: number;
					public static VK_G: number;
					public static VK_H: number;
					public static VK_I: number;
					public static VK_J: number;
					public static VK_K: number;
					public static VK_L: number;
					public static VK_M: number;
					public static VK_N: number;
					public static VK_O: number;
					public static VK_P: number;
					public static VK_Q: number;
					public static VK_R: number;
					public static VK_S: number;
					public static VK_T: number;
					public static VK_U: number;
					public static VK_V: number;
					public static VK_W: number;
					public static VK_X: number;
					public static VK_Y: number;
					public static VK_Z: number;
					public static VK_MULTIPLY: number;
					public static VK_ADD: number;
					public static VK_SUBTRACT: number;
					public static VK_F1: number;
					public static VK_F2: number;
					public static VK_F3: number;
					public static VK_F4: number;
					public static VK_F5: number;
					public static VK_F6: number;
					public static VK_F7: number;
					public static VK_F8: number;
					public static VK_F9: number;
					public static VK_F10: number;
					public static VK_F11: number;
					public static VK_F12: number;
					public static VK_OEM_1: number;
					public static VK_OEM_PLUS: number;
					public static VK_OEM_COMMA: number;
					public static VK_OEM_MINUS: number;
					public static VK_OEM_PERIOD: number;
					public static VK_OEM_2: number;
					public static VK_OEM_3: number;
					public static VK_OEM_4: number;
					public static VK_OEM_5: number;
					public static VK_OEM_6: number;
					public static VK_OEM_7: number;
					public static VK_OEM_ATTN: number;
					public static TRUE: number;
					public static FALSE: number;
					public static PARAM_DEFAULT: number;
					public static EVENT_RECONNECTING: number;
					public static EVENT_RECONNECT: number;
					public static EVENT_DISCONNECT: number;
					public getAdmin(): string;
					public nativeEpos2GetStatus(param0: number): com.epson.epos2.keyboard.KeyboardStatusInfo;
					public checkHandle(): void;
					public getLocation(): string;
					public onKbdReadString(param0: string, param1: number): void;
					public nativeEpos2GetAdmin(param0: number): string;
					public finalize(): void;
					public setKeyPressEventListener(param0: com.epson.epos2.keyboard.KeyPressListener): void;
					public nativeEpos2GetLocation(param0: number): string;
					public onKbdKeyPress(param0: number, param1: string): void;
					public nativeEpos2GetPrefix(param0: number): native.Array<number>;
					public constructor(param0: globalAndroid.content.Context);
					public setConnectionEventListener(param0: com.epson.epos2.ConnectionListener): void;
					public getPrefix(): native.Array<number>;
					public setPrefix(param0: native.Array<number>): void;
					public connect(param0: string, param1: number): void;
					public nativeEpos2SetPrefix(param0: number, param1: native.Array<number>): number;
					public setReadStringEventListener(param0: com.epson.epos2.keyboard.ReadStringListener): void;
					public getStatus(): com.epson.epos2.keyboard.KeyboardStatusInfo;
					public initializeKeyboardInstance(): void;
					public disconnect(): void;
				}
			}
		}
	}
}

declare module com {
	export module epson {
		export module epos2 {
			export module keyboard {
				export class KeyboardStatusInfo {
					public static class: java.lang.Class<com.epson.epos2.keyboard.KeyboardStatusInfo>;
					public constructor();
					public getConnection(): number;
				}
			}
		}
	}
}

declare module com {
	export module epson {
		export module epos2 {
			export module keyboard {
				export class ReadStringListener {
					public static class: java.lang.Class<com.epson.epos2.keyboard.ReadStringListener>;
					/**
					 * Constructs a new instance of the com.epson.epos2.keyboard.ReadStringListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onKbdReadString(param0: com.epson.epos2.keyboard.Keyboard, param1: string, param2: number): void;
					});
					public constructor();
					public onKbdReadString(param0: com.epson.epos2.keyboard.Keyboard, param1: string, param2: number): void;
				}
			}
		}
	}
}

declare module com {
	export module epson {
		export module epos2 {
			export module linedisplay {
				export class DisplayStatusInfo {
					public static class: java.lang.Class<com.epson.epos2.linedisplay.DisplayStatusInfo>;
					public constructor();
					public getConnection(): number;
				}
			}
		}
	}
}

declare module com {
	export module epson {
		export module epos2 {
			export module linedisplay {
				export class LineDisplay {
					public static class: java.lang.Class<com.epson.epos2.linedisplay.LineDisplay>;
					public static TRUE: number;
					public static FALSE: number;
					public static EVENT_RECONNECTING: number;
					public static EVENT_RECONNECT: number;
					public static EVENT_DISCONNECT: number;
					public static PARAM_DEFAULT: number;
					public static DM_D110: number;
					public static DM_D210: number;
					public static DM_D30: number;
					public static SCROLL_OVERWRITE: number;
					public static SCROLL_VERTICAL: number;
					public static SCROLL_HORIZONTAL: number;
					public static MOVE_TOP_LEFT: number;
					public static MOVE_TOP_RIGHT: number;
					public static MOVE_BOTTOM_LEFT: number;
					public static MOVE_BOTTOM_RIGHT: number;
					public static CURSOR_NONE: number;
					public static CURSOR_UNDERLINE: number;
					public static LANG_EN: number;
					public static LANG_JA: number;
					public static MARQUEE_WALK: number;
					public static MARQUEE_PLACE: number;
					public static BRIGHTNESS_20: number;
					public static BRIGHTNESS_40: number;
					public static BRIGHTNESS_60: number;
					public static BRIGHTNESS_100: number;
					public setReceiveEventListener(param0: com.epson.epos2.linedisplay.ReceiveListener): void;
					public addSetCursorType(param0: number): void;
					public getStatus(): com.epson.epos2.linedisplay.DisplayStatusInfo;
					public finalize(): void;
					public nativeEpos2AddSetBrightness(param0: number, param1: number): number;
					public addText(param0: string, param1: number): void;
					public addMarqueeText(param0: string, param1: number, param2: number, param3: number, param4: number, param5: number): void;
					public initializeDisplayInstance(param0: number): void;
					public nativeEpos2AddShowClock(param0: number): number;
					public addCreateWindow(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number): void;
					public nativeEpos2AddCreateWindow(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number): number;
					public addReverseText(param0: string): void;
					public nativeEpos2AddDestroyWindow(param0: number, param1: number): number;
					public nativeEpos2AddSetBlink(param0: number, param1: number): number;
					public addReverseText(param0: string, param1: number): void;
					public addSetBlink(param0: number): void;
					public addMoveCursorPosition(param0: number): void;
					public connect(param0: string, param1: number): void;
					public clearCommandBuffer(): void;
					public nativeEpos2AddTextLang(param0: number, param1: string, param2: number): number;
					public sendData(): void;
					public nativeEpos2AddSetCursorPosition(param0: number, param1: number, param2: number): number;
					public nativeEpos2AddText(param0: number, param1: string): number;
					public getLocation(): string;
					public addSetCursorPosition(param0: number, param1: number): void;
					public nativeEpos2GetAdmin(param0: number): string;
					public nativeEpos2GetLocation(param0: number): string;
					public nativeEpos2AddSetCursorType(param0: number, param1: number): number;
					public addSetBrightness(param0: number): void;
					public nativeEpos2AddInitialize(param0: number): number;
					public nativeEpos2AddTextPosition(param0: number, param1: string, param2: number, param3: number): number;
					public addText(param0: string): void;
					public addDestroyWindow(param0: number): void;
					public nativeEpos2ClearCommandBuffer(param0: number): number;
					public nativeEpos2AddClearCurrentWindow(param0: number): number;
					public addText(param0: string, param1: number, param2: number, param3: number): void;
					public constructor(param0: number, param1: globalAndroid.content.Context);
					public nativeEpos2AddReverseText(param0: number, param1: string): number;
					public nativeEpos2AddReverseTextLang(param0: number, param1: string, param2: number): number;
					public nativeEpos2AddMarqueeText(param0: number, param1: string, param2: number, param3: number, param4: number, param5: number, param6: number): number;
					public nativeEpos2AddSetCurrentWindow(param0: number, param1: number): number;
					public nativeEpos2AddMoveCursorPosition(param0: number, param1: number): number;
					public nativeEpos2AddTextPositionLang(param0: number, param1: string, param2: number, param3: number, param4: number): number;
					public setConnectionEventListener(param0: com.epson.epos2.ConnectionListener): void;
					public addText(param0: string, param1: number, param2: number): void;
					public nativeEpos2AddCommand(param0: number, param1: native.Array<number>): number;
					public addSetCurrentWindow(param0: number): void;
					public nativeEpos2SendData(param0: number): number;
					public disconnect(): void;
					public getAdmin(): string;
					public checkHandle(): void;
					public addInitialize(): void;
					public nativeEpos2GetStatus(param0: number): com.epson.epos2.linedisplay.DisplayStatusInfo;
					public addShowClock(): void;
					public addReverseText(param0: string, param1: number, param2: number): void;
					public nativeEpos2AddReverseTextPosition(param0: number, param1: string, param2: number, param3: number): number;
					public nativeEpos2AddReverseTextPositionLang(param0: number, param1: string, param2: number, param3: number, param4: number): number;
					public addReverseText(param0: string, param1: number, param2: number, param3: number): void;
					public addClearCurrentWindow(): void;
					public addCommand(param0: native.Array<number>): void;
				}
			}
		}
	}
}

declare module com {
	export module epson {
		export module epos2 {
			export module linedisplay {
				export class ReceiveListener {
					public static class: java.lang.Class<com.epson.epos2.linedisplay.ReceiveListener>;
					/**
					 * Constructs a new instance of the com.epson.epos2.linedisplay.ReceiveListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onDispReceive(param0: com.epson.epos2.linedisplay.LineDisplay, param1: number): void;
					});
					public constructor();
					public onDispReceive(param0: com.epson.epos2.linedisplay.LineDisplay, param1: number): void;
				}
			}
		}
	}
}

declare module com {
	export module epson {
		export module epos2 {
			export module msr {
				export class Data {
					public static class: java.lang.Class<com.epson.epos2.msr.Data>;
					public getTitle(): string;
					public getTrack2(): string;
					public getMiddleInitial(): string;
					public getExpirationData(): string;
					public getTrack4(): string;
					public getAccountNumber(): string;
					public getSurname(): string;
					public getTrack1(): string;
					public getFirstName(): string;
					public constructor();
					public getServiceCode(): string;
					public getTrack2_dd(): string;
					public getTrack1_dd(): string;
				}
			}
		}
	}
}

declare module com {
	export module epson {
		export module epos2 {
			export module msr {
				export class DataListener {
					public static class: java.lang.Class<com.epson.epos2.msr.DataListener>;
					/**
					 * Constructs a new instance of the com.epson.epos2.msr.DataListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onData(param0: com.epson.epos2.msr.Msr, param1: com.epson.epos2.msr.Data): void;
					});
					public constructor();
					public onData(param0: com.epson.epos2.msr.Msr, param1: com.epson.epos2.msr.Data): void;
				}
			}
		}
	}
}

declare module com {
	export module epson {
		export module epos2 {
			export module msr {
				export class Msr {
					public static class: java.lang.Class<com.epson.epos2.msr.Msr>;
					public static TRUE: number;
					public static FALSE: number;
					public static PARAM_DEFAULT: number;
					public static EVENT_RECONNECTING: number;
					public static EVENT_RECONNECT: number;
					public static EVENT_DISCONNECT: number;
					public onData(param0: com.epson.epos2.msr.Data): void;
					public getAdmin(): string;
					public getLocation(): string;
					public checkHandle(): void;
					public initializeMsrInstance(): void;
					public nativeEpos2GetAdmin(param0: number): string;
					public finalize(): void;
					public nativeEpos2GetLocation(param0: number): string;
					public constructor(param0: globalAndroid.content.Context);
					public setConnectionEventListener(param0: com.epson.epos2.ConnectionListener): void;
					public nativeEpos2GetStatus(param0: number): com.epson.epos2.msr.MsrStatusInfo;
					public getStauts(): com.epson.epos2.msr.MsrStatusInfo;
					public connect(param0: string, param1: number): void;
					public disconnect(): void;
					public setDataEventListener(param0: com.epson.epos2.msr.DataListener): void;
				}
			}
		}
	}
}

declare module com {
	export module epson {
		export module epos2 {
			export module msr {
				export class MsrStatusInfo {
					public static class: java.lang.Class<com.epson.epos2.msr.MsrStatusInfo>;
					public constructor();
					public getConnection(): number;
				}
			}
		}
	}
}

declare module com {
	export module epson {
		export module epos2 {
			export module otherperipheral {
				export class OtherPeripheral {
					public static class: java.lang.Class<com.epson.epos2.otherperipheral.OtherPeripheral>;
					public static TRUE: number;
					public static FALSE: number;
					public static PARAM_DEFAULT: number;
					public static EVENT_RECONNECTING: number;
					public static EVENT_RECONNECT: number;
					public static EVENT_DISCONNECT: number;
					public getStauts(): com.epson.epos2.otherperipheral.OtherPeripheralStatusInfo;
					public getAdmin(): string;
					public sendData(param0: string, param1: string): void;
					public getLocation(): string;
					public checkHandle(): void;
					public nativeEpos2GetAdmin(param0: number): string;
					public initializeOtherInstance(): void;
					public finalize(): void;
					public nativeEpos2GetLocation(param0: number): string;
					public onOtherReceive(param0: string, param1: string): void;
					public nativeEpos2SendData(param0: number, param1: string, param2: string): number;
					public constructor(param0: globalAndroid.content.Context);
					public setConnectionEventListener(param0: com.epson.epos2.ConnectionListener): void;
					public nativeEpos2GetStatus(param0: number): com.epson.epos2.otherperipheral.OtherPeripheralStatusInfo;
					public connect(param0: string, param1: number): void;
					public disconnect(): void;
					public setReceiveEventListener(param0: com.epson.epos2.otherperipheral.ReceiveListener): void;
				}
			}
		}
	}
}

declare module com {
	export module epson {
		export module epos2 {
			export module otherperipheral {
				export class OtherPeripheralStatusInfo {
					public static class: java.lang.Class<com.epson.epos2.otherperipheral.OtherPeripheralStatusInfo>;
					public constructor();
					public getConnection(): number;
				}
			}
		}
	}
}

declare module com {
	export module epson {
		export module epos2 {
			export module otherperipheral {
				export class ReceiveListener {
					public static class: java.lang.Class<com.epson.epos2.otherperipheral.ReceiveListener>;
					/**
					 * Constructs a new instance of the com.epson.epos2.otherperipheral.ReceiveListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onOtherReceive(param0: com.epson.epos2.otherperipheral.OtherPeripheral, param1: string, param2: string): void;
					});
					public constructor();
					public onOtherReceive(param0: com.epson.epos2.otherperipheral.OtherPeripheral, param1: string, param2: string): void;
				}
			}
		}
	}
}

declare module com {
	export module epson {
		export module epos2 {
			export module poskeyboard {
				export class KeyPressListener {
					public static class: java.lang.Class<com.epson.epos2.poskeyboard.KeyPressListener>;
					/**
					 * Constructs a new instance of the com.epson.epos2.poskeyboard.KeyPressListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onPosKbdKeyPress(param0: com.epson.epos2.poskeyboard.PosKeyboard, param1: number): void;
					});
					public constructor();
					public onPosKbdKeyPress(param0: com.epson.epos2.poskeyboard.PosKeyboard, param1: number): void;
				}
			}
		}
	}
}

declare module com {
	export module epson {
		export module epos2 {
			export module poskeyboard {
				export class PosKeyboard {
					public static class: java.lang.Class<com.epson.epos2.poskeyboard.PosKeyboard>;
					public static TRUE: number;
					public static FALSE: number;
					public static PARAM_DEFAULT: number;
					public static EVENT_RECONNECTING: number;
					public static EVENT_RECONNECT: number;
					public static EVENT_DISCONNECT: number;
					public getAdmin(): string;
					public getLocation(): string;
					public checkHandle(): void;
					public nativeEpos2GetAdmin(param0: number): string;
					public finalize(): void;
					public nativeEpos2GetLocation(param0: number): string;
					public setKeyPressEventListener(param0: com.epson.epos2.poskeyboard.KeyPressListener): void;
					public nativeEpos2GetStatus(param0: number): com.epson.epos2.poskeyboard.PosKeyboardStatusInfo;
					public constructor(param0: globalAndroid.content.Context);
					public setConnectionEventListener(param0: com.epson.epos2.ConnectionListener): void;
					public initializePosKbdInstance(): void;
					public getStauts(): com.epson.epos2.poskeyboard.PosKeyboardStatusInfo;
					public connect(param0: string, param1: number): void;
					public disconnect(): void;
					public onPosKbdKeyPress(param0: number): void;
				}
			}
		}
	}
}

declare module com {
	export module epson {
		export module epos2 {
			export module poskeyboard {
				export class PosKeyboardStatusInfo {
					public static class: java.lang.Class<com.epson.epos2.poskeyboard.PosKeyboardStatusInfo>;
					public constructor();
					public getConnection(): number;
				}
			}
		}
	}
}

declare module com {
	export module epson {
		export module epos2 {
			export module printer {
				export abstract class CommonPrinter {
					public static class: java.lang.Class<com.epson.epos2.printer.CommonPrinter>;
					public static TRUE: number;
					public static FALSE: number;
					public static PARAM_UNSPECIFIED: number;
					public static PARAM_DEFAULT: number;
					public static UNKNOWN: number;
					public static MODEL_ANK: number;
					public static MODEL_JAPANESE: number;
					public static MODEL_CHINESE: number;
					public static MODEL_TAIWAN: number;
					public static MODEL_KOREAN: number;
					public static MODEL_THAI: number;
					public static MODEL_SOUTHASIA: number;
					public static ALIGN_LEFT: number;
					public static ALIGN_CENTER: number;
					public static ALIGN_RIGHT: number;
					public static LANG_EN: number;
					public static LANG_JA: number;
					public static LANG_ZH_CN: number;
					public static LANG_ZH_TW: number;
					public static LANG_KO: number;
					public static LANG_TH: number;
					public static LANG_VI: number;
					public static FONT_A: number;
					public static FONT_B: number;
					public static FONT_C: number;
					public static FONT_D: number;
					public static FONT_E: number;
					public static COLOR_NONE: number;
					public static COLOR_1: number;
					public static COLOR_2: number;
					public static COLOR_3: number;
					public static COLOR_4: number;
					public static MODE_MONO: number;
					public static MODE_GRAY16: number;
					public static MODE_MONO_HIGH_DENSITY: number;
					public static HALFTONE_DITHER: number;
					public static HALFTONE_ERROR_DIFFUSION: number;
					public static HALFTONE_THRESHOLD: number;
					public static COMPRESS_NONE: number;
					public static COMPRESS_DEFLATE: number;
					public static COMPRESS_AUTO: number;
					public static BARCODE_UPC_A: number;
					public static BARCODE_UPC_E: number;
					public static BARCODE_EAN13: number;
					public static BARCODE_JAN13: number;
					public static BARCODE_EAN8: number;
					public static BARCODE_JAN8: number;
					public static BARCODE_CODE39: number;
					public static BARCODE_ITF: number;
					public static BARCODE_CODABAR: number;
					public static BARCODE_CODE93: number;
					public static BARCODE_CODE128: number;
					public static BARCODE_GS1_128: number;
					public static BARCODE_GS1_DATABAR_OMNIDIRECTIONAL: number;
					public static BARCODE_GS1_DATABAR_TRUNCATED: number;
					public static BARCODE_GS1_DATABAR_LIMITED: number;
					public static BARCODE_GS1_DATABAR_EXPANDED: number;
					public static HRI_NONE: number;
					public static HRI_ABOVE: number;
					public static HRI_BELOW: number;
					public static HRI_BOTH: number;
					public static SYMBOL_PDF417_STANDARD: number;
					public static SYMBOL_PDF417_TRUNCATED: number;
					public static SYMBOL_QRCODE_MODEL_1: number;
					public static SYMBOL_QRCODE_MODEL_2: number;
					public static SYMBOL_QRCODE_MICRO: number;
					public static SYMBOL_MAXICODE_MODE_2: number;
					public static SYMBOL_MAXICODE_MODE_3: number;
					public static SYMBOL_MAXICODE_MODE_4: number;
					public static SYMBOL_MAXICODE_MODE_5: number;
					public static SYMBOL_MAXICODE_MODE_6: number;
					public static SYMBOL_GS1_DATABAR_STACKED: number;
					public static SYMBOL_GS1_DATABAR_STACKED_OMNIDIRECTIONAL: number;
					public static SYMBOL_GS1_DATABAR_EXPANDED_STACKED: number;
					public static SYMBOL_AZTECCODE_FULLRANGE: number;
					public static SYMBOL_AZTECCODE_COMPACT: number;
					public static SYMBOL_DATAMATRIX_SQUARE: number;
					public static SYMBOL_DATAMATRIX_RECTANGLE_8: number;
					public static SYMBOL_DATAMATRIX_RECTANGLE_12: number;
					public static SYMBOL_DATAMATRIX_RECTANGLE_16: number;
					public static LEVEL_0: number;
					public static LEVEL_1: number;
					public static LEVEL_2: number;
					public static LEVEL_3: number;
					public static LEVEL_4: number;
					public static LEVEL_5: number;
					public static LEVEL_6: number;
					public static LEVEL_7: number;
					public static LEVEL_8: number;
					public static LEVEL_L: number;
					public static LEVEL_M: number;
					public static LEVEL_Q: number;
					public static LEVEL_H: number;
					public static DIRECTION_LEFT_TO_RIGHT: number;
					public static DIRECTION_BOTTOM_TO_TOP: number;
					public static DIRECTION_RIGHT_TO_LEFT: number;
					public static DIRECTION_TOP_TO_BOTTOM: number;
					public static LINE_THIN: number;
					public static LINE_MEDIUM: number;
					public static LINE_THICK: number;
					public static LINE_THIN_DOUBLE: number;
					public static LINE_MEDIUM_DOUBLE: number;
					public static LINE_THICK_DOUBLE: number;
					public static CUT_NO_FEED: number;
					public static CUT_FEED: number;
					public static CUT_RESERVE: number;
					public static DRAWER_2PIN: number;
					public static DRAWER_5PIN: number;
					public static PULSE_100: number;
					public static PULSE_200: number;
					public static PULSE_300: number;
					public static PULSE_400: number;
					public static PULSE_500: number;
					public static PAPER_OK: number;
					public static PAPER_NEAR_END: number;
					public static PAPER_EMPTY: number;
					public static SWITCH_OFF: number;
					public static SWITCH_ON: number;
					public static DRAWER_HIGH: number;
					public static DRAWER_LOW: number;
					public static NO_ERR: number;
					public static MECHANICAL_ERR: number;
					public static AUTOCUTTER_ERR: number;
					public static UNRECOVER_ERR: number;
					public static AUTORECOVER_ERR: number;
					public static HEAD_OVERHEAT: number;
					public static MOTOR_OVERHEAT: number;
					public static BATTERY_OVERHEAT: number;
					public static WRONG_PAPER: number;
					public static COVER_OPEN: number;
					public static EVENT_ONLINE: number;
					public static EVENT_OFFLINE: number;
					public static EVENT_POWER_OFF: number;
					public static EVENT_COVER_CLOSE: number;
					public static EVENT_COVER_OPEN: number;
					public static EVENT_PAPER_OK: number;
					public static EVENT_PAPER_NEAR_END: number;
					public static EVENT_PAPER_EMPTY: number;
					public static EVENT_DRAWER_HIGH: number;
					public static EVENT_DRAWER_LOW: number;
					public static EVENT_RECONNECTING: number;
					public static EVENT_RECONNECT: number;
					public static EVENT_DISCONNECT: number;
					public nativeEpos2AddTextSize(param0: number, param1: number, param2: number): number;
					public addTextAlign(param0: number): void;
					public nativeEpos2AddPulse(param0: number, param1: number, param2: number): number;
					public nativeEpos2StartMonitor(param0: number): number;
					public nativeEpos2StopMonitor(param0: number): number;
					public nativeEpos2AddHPosition(param0: number, param1: number): number;
					public addBarcode(param0: string, param1: number, param2: number, param3: number, param4: number, param5: number): void;
					public addPageBegin(): void;
					public nativeEpos2AddPageArea(param0: number, param1: number, param2: number, param3: number, param4: number): number;
					public addCut(param0: number): void;
					public nativeEpos2AddPageRectangle(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number): number;
					public nativeEpos2AddPageBegin(param0: number): number;
					public nativeEpos2ForceRecover(param0: number, param1: number): number;
					public addHPosition(param0: number): void;
					public nativeEpos2EndTransaction(param0: number): number;
					public nativeEpos2AddLineSpace(param0: number, param1: number): number;
					public nativeEpos2AddFeedUnit(param0: number, param1: number): number;
					public clearCommandBuffer(): void;
					public nativeEpos2ForceReset(param0: number, param1: number): number;
					public addTextSize(param0: number, param1: number): void;
					public nativeEpos2AddBarcode(param0: number, param1: string, param2: number, param3: number, param4: number, param5: number, param6: number): number;
					public nativeEpos2AddPageEnd(param0: number): number;
					public addPageEnd(): void;
					public nativeEpos2AddText(param0: number, param1: string): number;
					public setInterval(param0: number): void;
					public nativeEpos2AddPageLine(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number): number;
					public forcePulse(param0: number, param1: number, param2: number): void;
					public nativeEpos2AddTextAlign(param0: number, param1: number): number;
					public addLineSpace(param0: number): void;
					public nativeEpos2AddTextSmooth(param0: number, param1: number): number;
					public addLogo(param0: number, param1: number): void;
					public addFeedUnit(param0: number): void;
					public getInterval(): number;
					public nativeEpos2AddFeedLine(param0: number, param1: number): number;
					public nativeEpos2AddImage(param0: number, param1: native.Array<number>, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: number, param9: number, param10: number, param11: number, param12: number): number;
					public addPageLine(param0: number, param1: number, param2: number, param3: number, param4: number): void;
					public addSymbol(param0: string, param1: number, param2: number, param3: number, param4: number, param5: number): void;
					public addText(param0: string): void;
					public nativeEpos2ClearCommandBuffer(param0: number): number;
					public addPageRectangle(param0: number, param1: number, param2: number, param3: number, param4: number): void;
					public stopMonitor(): void;
					public addFeedLine(param0: number): void;
					public startMonitor(): void;
					public addPulse(param0: number, param1: number): void;
					public nativeEpos2BeginTransaction(param0: number): number;
					public nativeEpos2AddTextRotate(param0: number, param1: number): number;
					public nativeEpos2AddLogo(param0: number, param1: number, param2: number): number;
					public nativeEpos2AddTextStyle(param0: number, param1: number, param2: number, param3: number, param4: number): number;
					public endTransaction(): void;
					public addPagePosition(param0: number, param1: number): void;
					public nativeEpos2AddTextLang(param0: number, param1: number): number;
					public forceRecover(param0: number): void;
					public nativeEpos2AddCommand(param0: number, param1: native.Array<number>): number;
					public addTextRotate(param0: number): void;
					public nativeEpos2AddTextFont(param0: number, param1: number): number;
					public addPageArea(param0: number, param1: number, param2: number, param3: number): void;
					public nativeEpos2AddPageDirection(param0: number, param1: number): number;
					public checkHandle(): void;
					public nativeEpos2ForcePulse(param0: number, param1: number, param2: number, param3: number): number;
					public addTextLang(param0: number): void;
					public addTextSmooth(param0: number): void;
					public beginTransaction(): void;
					public nativeEpos2AddSymbol(param0: number, param1: string, param2: number, param3: number, param4: number, param5: number, param6: number): number;
					public forceReset(param0: number): void;
					public nativeEpos2AddPagePosition(param0: number, param1: number, param2: number): number;
					public addTextFont(param0: number): void;
					public addTextStyle(param0: number, param1: number, param2: number, param3: number): void;
					public addPageDirection(param0: number): void;
					public nativeEpos2SetInterval(param0: number, param1: number): number;
					public addImage(param0: globalAndroid.graphics.Bitmap, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: number, param9: number): void;
					public addCommand(param0: native.Array<number>): void;
					public nativeEpos2AddCut(param0: number, param1: number): number;
				}
			}
		}
	}
}

declare module com {
	export module epson {
		export module epos2 {
			export module printer {
				export class CommunicationPrimitives {
					public static class: java.lang.Class<com.epson.epos2.printer.CommunicationPrimitives>;
					public static TIMEOUT_05: number;
					public static TIMEOUT_2: number;
					public static TIMEOUT_8: number;
					public static TIMEOUT_10: number;
					public static TIMEOUT_60: number;
					public static TIMEOUT_70: number;
					public static RETRY_INTERVAL: number;
					public static BUFFER_SIZE: number;
					public static COMMAND_GET_FIRMWARE_VERSION: native.Array<number>;
					public static COMMAND_GET_DEVICE_NAME: native.Array<number>;
					public static COMMAND_GET_SERIAL_NUMBER: native.Array<number>;
					public static COMMAND_GET_INFO: native.Array<number>;
					public static COMMAND_ENTER_REPLY_INFO_MODE: native.Array<number>;
					public static COMMAND_ENTER_NORMAL_MODE: native.Array<number>;
					public static COMMAND_ENTER_MEMORY_WRITE_MODE: native.Array<number>;
					public static COMMAND_ENTER_LANGUAGE_RCC: native.Array<number>;
					public static COMMAND_PRINTER_RESET: native.Array<number>;
					public static STATUS_LENGTH: number;
					public static JSON_DATA_HEADER_LENGTH: number;
					public static REPLY_MODE_CHANGE_OK: native.Array<number>;
					public static REPLY_MODE_CHANGE_NG: native.Array<number>;
					public static REPLY_CONTINUES_HEADER: native.Array<number>;
					public static JSON_KEY_PRINTER_SPEC: string;
					public static JSON_KEY_PRODUCT: string;
					public static JSON_KEY_DERIVATIVE: string;
					public static JSON_KEY_PRODUCT_NAME: string;
					public static JSON_KEY_SERIAL_NUMBER: string;
					public static JSON_KEY_PRINTER_FIRM_VERSION: string;
					public static JSON_KEY_UPDATE_INFO: string;
					public static JSON_KEY_UPDATE_INFO_A: string;
					public static JSON_KEY_UPDATE_INFO_B: string;
					public static JSON_KEY_UPDATE_INFO_C: string;
					public static JSON_KEY_UPDATE_INFO_D: string;
					public static JSON_KEY_UPDATE_INFO_E: string;
					public static JSON_KEY_ENTIRE_DERIVATIVE: string;
					public static JSON_KEY_BOARD_ID: string;
					public static JSON_KEY_TYPE_NAME: string;
				}
			}
		}
	}
}

declare module com {
	export module epson {
		export module epos2 {
			export module printer {
				export class Constants {
					public static class: java.lang.Class<com.epson.epos2.printer.Constants>;
					public static NULL_STRING: string;
					public static PRINTER_DEPENDENT_INFO_DEFFILE_NAME_POSTFIX: string;
					public static TAG_PRINTER: string;
					public static ATTR_NAME: string;
					public static TAG_ICON_COVER_STATUS_ENABLED: string;
					public static TAG_ICON_PAPER_STATUS_ENABLED: string;
					public static TAG_ICON_DRAWER_STATUS_ENABLED: string;
					public static TAG_ICON_BATTERY_STATUS_ENABLED: string;
					public static TAG_ICON_BATTERY_STATUS_TYPE: string;
					public static TAG_CUSTOM_TEXT_DATA_TYPE: string;
					public static TEXT_CUSTOM_TEXT_DATA_TYPE_NARROW: number;
					public static TAG_CHECKBOX_AUTCUT_ENABLED: string;
					public static TAG_CHECKBOX_DRAWER_ENABLED: string;
					public static TAG_CHECKBOX_COMPRESS_ENABLED: string;
					public static FIXED_FORM_RECEIPT_DEFFILE_NAME_POSTFIX: string;
					public static FIXED_FORM_RECEIPT_DEFFILE_TAG_PATTERN: string;
					public static FIXED_FORM_RECEIPT_DEFFILE_ATTR_LABEL: string;
					public static FIXED_FORM_RECEIPT_DEFFILE_TAG_IMAGE: string;
					public static FIXED_FORM_RECEIPT_DEFFILE_TAG_COMMAND: string;
					public static FIXED_FORM_RECEIPT_DEFAULT_SELECTED_ITEM_POSITION: number;
					public static FIXED_FORM_RECEIPT_IMAGEVIEW_HEIGHT_TIMES: number;
					public static CODE_TYPE_2D_DIGIT: number;
					public static DEFAULT_TEXT_MODULE_WIDTH: number;
					public static DEFAULT_TEXT_MODULE_HEIGHT: number;
					public static REQUEST_CODE_PRINTER_SETTINGS: number;
					public static REQUEST_CODE_DISCOVER_PRINTER: number;
					public static REQUEST_CODE_SELECT_IMAGE: number;
					public static REQUEST_CODE_CODE: number;
					public static SEND_TIMEOUT_10_SEC: number;
					public static SEND_TIMEOUT_0_SEC: number;
					public static INTERVAL: number;
					public static ICON_BATTERY_STATUS_STYLE_NONE: number;
					public static ICON_BATTERY_STATUS_STYLE_P60: number;
					public static ICON_BATTERY_STATUS_STYLE_P60II_P80: number;
					public static MENU_ID_NOT_DEFINED: number;
					public static MENU_TEXT_SOURCE_IS_RESOURCE_ID: number;
					public static MENU_TEXT_SOURCE_IS_STRING: number;
					public static MENU_IMAGE_NOT_DEFINED: number;
					public static ACTION_NONE: number;
					public static ACTION_BACKUP: number;
					public static ACTION_BACKUP_OK: number;
					public static ACTION_RESTORE: number;
					public static KEY_PARAM_SEQUENCE: string;
					public static KEY_PARAM_NFC_TAG: string;
					public static IMAGE_COMPRESS_UNKNOWN: number;
					public static IMAGE_COMPRESS_SUPPORT: number;
					public static IMAGE_COMPRESS_NOT_SUPPORT: number;
					public static PRINTER_DPI_UNKOWN: number;
					public static GET_DPI_WITH_GSI: number;
					public static PRINTER_DPI_DEFAULT: number;
					public static PRINTER_DPI_180: number;
					public static PRINTER_DPI_203: number;
					public static PRINTER_NAME_TMP20: string;
					public static PRINTER_NAME_TMP60: string;
					public static PRINTER_NAME_TMP60II: string;
					public static PRINTER_NAME_TMP80: string;
					public static PRINTER_NAME_TMT20II: string;
					public static PRINTER_NAME_TMT20III: string;
					public static PRINTER_NAME_TMT70II: string;
					public static PRINTER_NAME_TMT82III: string;
					public static PRINTER_NAME_TMT88V: string;
					public static PRINTER_NAME_TMT88VI: string;
					public static PRINTER_NAME_TMU220: string;
					public static PRINTER_NAME_TMm30: string;
					public static PRINTER_NAME_TMT88VI_iHUB: string;
					public static PRINTER_NAME_TMT88VI_IUIB: string;
					public static PRINTER_NAME_TMM10: string;
					public static PRINTER_NAME_TMU330: string;
					public static PRINTER_NAME_TMH6000V: string;
					public static IMAGE_WIDTH_MAX: number;
				}
			}
		}
	}
}

declare module com {
	export module epson {
		export module epos2 {
			export module printer {
				export class EfxExtractor {
					public static class: java.lang.Class<com.epson.epos2.printer.EfxExtractor>;
					public static efxToZip(param0: java.io.InputStream, param1: java.io.OutputStream): boolean;
					public static cryptedRcxToRcx(param0: java.io.InputStream, param1: java.io.OutputStream, param2: string): boolean;
					public static getUnzippedFilename(param0: java.io.InputStream): string;
					public static zipToCtyptedRcx(param0: java.io.InputStream, param1: java.io.OutputStream): boolean;
				}
			}
		}
	}
}

declare module com {
	export module epson {
		export module epos2 {
			export module printer {
				export class FirmwareDownloader {
					public static class: java.lang.Class<com.epson.epos2.printer.FirmwareDownloader>;
					public static LANGUAGE_EN: string;
					public static LANGUAGE_JA: string;
					public static LANGUAGE_FR: string;
					public static LANGUAGE_IT: string;
					public static LANGUAGE_DE: string;
					public static LANGUAGE_ES: string;
					public static LANGUAGE_PT: string;
					public static LANGUAGE_NL: string;
					public static LANGUAGE_RU: string;
					public static LANGUAGE_KO: string;
					public static UTF8: string;
					public static DEFAULT_DERIVATIVE: string;
					public static INTENT_KEY_DEVICE_NAME: string;
					public static INTENT_KEY_FIRMWARE_VERESION: string;
					public static INTENT_KEY_TO_BE_UPDATED_VERESION: string;
					public static INTENT_KEY_TYPE_NAME: string;
					public static INTENT_KEY_SELECT_FIRMEWARE_INDEX: string;
					public constructor(param0: string, param1: string);
					public clearListeners(): void;
					public stopDownload(): void;
					public getHistory(): void;
					public setOnProgressListener(param0: com.epson.epos2.printer.FirmwareDownloader.OnProgressListener): void;
					public static langStringOf(param0: java.util.Locale): string;
					public setLocale(param0: java.util.Locale): void;
					public getFile(param0: string, param1: java.io.OutputStream): void;
					public createOrderedJSONString(param0: org.json.JSONObject): string;
					public setOnResultListener(param0: com.epson.epos2.printer.FirmwareDownloader.OnResultListener): void;
					public getFileList(): void;
					public getLocale(): java.util.Locale;
				}
				export module FirmwareDownloader {
					export class Error {
						public static class: java.lang.Class<com.epson.epos2.printer.FirmwareDownloader.Error>;
						public static UNREACHABLE: com.epson.epos2.printer.FirmwareDownloader.Error;
						public static DISCONNECT: com.epson.epos2.printer.FirmwareDownloader.Error;
						public static CONGESTION: com.epson.epos2.printer.FirmwareDownloader.Error;
						public static WRONG_ID_PASSWORD: com.epson.epos2.printer.FirmwareDownloader.Error;
						public static EXPIRED_PASSWORD: com.epson.epos2.printer.FirmwareDownloader.Error;
						public static FILE_NONE: com.epson.epos2.printer.FirmwareDownloader.Error;
						public static OUTPUT_STREAM: com.epson.epos2.printer.FirmwareDownloader.Error;
						public static UNKNOWN: com.epson.epos2.printer.FirmwareDownloader.Error;
						public static values(): native.Array<com.epson.epos2.printer.FirmwareDownloader.Error>;
						public static valueOf(param0: string): com.epson.epos2.printer.FirmwareDownloader.Error;
					}
					export class OnProgressListener {
						public static class: java.lang.Class<com.epson.epos2.printer.FirmwareDownloader.OnProgressListener>;
						/**
						 * Constructs a new instance of the com.epson.epos2.printer.FirmwareDownloader$OnProgressListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							OnDownloadFirmwareProgress(param0: number, param1: number): void;
						});
						public constructor();
						public OnDownloadFirmwareProgress(param0: number, param1: number): void;
					}
					export class OnResultListener {
						public static class: java.lang.Class<com.epson.epos2.printer.FirmwareDownloader.OnResultListener>;
						/**
						 * Constructs a new instance of the com.epson.epos2.printer.FirmwareDownloader$OnResultListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							OnSuccess(): void;
							OnFileListGet(param0: string, param1: native.Array<string>): void;
							OnHistoryGet(param0: string): void;
							OnError(param0: com.epson.epos2.printer.FirmwareDownloader.Error): void;
						});
						public constructor();
						public OnSuccess(): void;
						public OnError(param0: com.epson.epos2.printer.FirmwareDownloader.Error): void;
						public OnFileListGet(param0: string, param1: native.Array<string>): void;
						public OnHistoryGet(param0: string): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module epson {
		export module epos2 {
			export module printer {
				export class FirmwareFilenames {
					public static class: java.lang.Class<com.epson.epos2.printer.FirmwareFilenames>;
					public static DEVICENAME_FIRMWAREVERSION_SEPARATOR: string;
					public static EFX_EXTENSION: string;
					public static FIRMWARE_ZIP_NAME: string;
					public static FIRMWARE_CRYPTED_RCX_NAME: string;
					public static FIRMWARE_RCX_NAME: string;
					public static filenameOf(param0: string, param1: string): string;
				}
			}
		}
	}
}

declare module com {
	export module epson {
		export module epos2 {
			export module printer {
				export class FirmwareInfo {
					public static class: java.lang.Class<com.epson.epos2.printer.FirmwareInfo>;
					public constructor(param0: string, param1: string);
					public setVersion(param0: string): void;
					public getVersion(): string;
					public constructor(param0: string);
					public getModel(): string;
					public getJson(): org.json.JSONObject;
				}
			}
		}
	}
}

declare module com {
	export module epson {
		export module epos2 {
			export module printer {
				export class FirmwareUpdate {
					public static class: java.lang.Class<com.epson.epos2.printer.FirmwareUpdate>;
					public static convertEpos2exToEpos2CallbackCode(param0: number): number;
					public static getRcxHeaderAnalyzer(param0: native.Array<number>): com.epson.epos2.printer.RcxHeaderAnalyzer;
					public static extract(param0: string, param1: string): native.Array<number>;
				}
			}
		}
	}
}

declare module com {
	export module epson {
		export module epos2 {
			export module printer {
				export class FirmwareUpdateListener {
					public static class: java.lang.Class<com.epson.epos2.printer.FirmwareUpdateListener>;
					/**
					 * Constructs a new instance of the com.epson.epos2.printer.FirmwareUpdateListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onReceiveFirmwareInformation(param0: com.epson.epos2.printer.FirmwareInfo): void;
						onDownloadFirmwareList(param0: number, param1: native.Array<com.epson.epos2.printer.FirmwareInfo>): void;
						onUpdateFirmware(param0: number, param1: number): void;
						onFirmwareUpdateProgress(param0: string, param1: number): void;
						onUpdateVerify(param0: number): void;
					});
					public constructor();
					public onUpdateFirmware(param0: number, param1: number): void;
					public onFirmwareUpdateProgress(param0: string, param1: number): void;
					public onDownloadFirmwareList(param0: number, param1: native.Array<com.epson.epos2.printer.FirmwareInfo>): void;
					public onUpdateVerify(param0: number): void;
					public onReceiveFirmwareInformation(param0: com.epson.epos2.printer.FirmwareInfo): void;
				}
			}
		}
	}
}

declare module com {
	export module epson {
		export module epos2 {
			export module printer {
				export class FirmwareUpdater {
					public static class: java.lang.Class<com.epson.epos2.printer.FirmwareUpdater>;
					public clearProgressListener(): void;
					public static calcUpdateTime(param0: com.epson.epos2.printer.RcxHeaderAnalyzer, param1: java.util.List<globalAndroid.util.Pair<java.lang.Integer,com.epson.epos2.printer.FirmwareUpdater.UpdateRequiredType>>): number;
					public static calcUpdateAllTime(param0: com.epson.epos2.printer.RcxHeaderAnalyzer, param1: java.util.List<globalAndroid.util.Pair<java.lang.Integer,com.epson.epos2.printer.FirmwareUpdater.UpdateRequiredType>>): number;
					public setProgressListener(param0: com.epson.epos2.printer.FirmwareUpdater.OnProgressListener): void;
					public static calcSendSize(param0: java.io.InputStream, param1: java.util.List<globalAndroid.util.Pair<java.lang.Integer,com.epson.epos2.printer.FirmwareUpdater.UpdateRequiredType>>): number;
					public static checkFirmwareInfo(param0: com.epson.epos2.printer.RcxHeaderAnalyzer, param1: org.json.JSONObject, param2: string, param3: native.Array<boolean>): number;
					public static calcAllSize(param0: java.io.InputStream, param1: java.util.List<globalAndroid.util.Pair<java.lang.Integer,com.epson.epos2.printer.FirmwareUpdater.UpdateRequiredType>>): number;
					public stopUpdate(): void;
					public static enumUpdateAreas(param0: com.epson.epos2.printer.RcxHeaderAnalyzer, param1: org.json.JSONObject): java.util.List<globalAndroid.util.Pair<java.lang.Integer,com.epson.epos2.printer.FirmwareUpdater.UpdateRequiredType>>;
					public static calcRebootTime(param0: com.epson.epos2.printer.RcxHeaderAnalyzer): number;
				}
				export module FirmwareUpdater {
					export class OnProgressListener {
						public static class: java.lang.Class<com.epson.epos2.printer.FirmwareUpdater.OnProgressListener>;
						/**
						 * Constructs a new instance of the com.epson.epos2.printer.FirmwareUpdater$OnProgressListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onProgress(param0: number): void;
						});
						public constructor();
						public onProgress(param0: number): void;
					}
					export class UpdateRequiredType {
						public static class: java.lang.Class<com.epson.epos2.printer.FirmwareUpdater.UpdateRequiredType>;
						public static UPDATE_REQUIRED: com.epson.epos2.printer.FirmwareUpdater.UpdateRequiredType;
						public static UPDATE_NOT_REQUIRED: com.epson.epos2.printer.FirmwareUpdater.UpdateRequiredType;
						public static AREA_NOT_MATCHED: com.epson.epos2.printer.FirmwareUpdater.UpdateRequiredType;
						public static UPDATE_REQUIRED_WITH_REPEAT: com.epson.epos2.printer.FirmwareUpdater.UpdateRequiredType;
						public static valueOf(param0: string): com.epson.epos2.printer.FirmwareUpdater.UpdateRequiredType;
						public static values(): native.Array<com.epson.epos2.printer.FirmwareUpdater.UpdateRequiredType>;
					}
				}
			}
		}
	}
}

declare module com {
	export module epson {
		export module epos2 {
			export module printer {
				export class HybdReceiveListener {
					public static class: java.lang.Class<com.epson.epos2.printer.HybdReceiveListener>;
					/**
					 * Constructs a new instance of the com.epson.epos2.printer.HybdReceiveListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onHybdReceive(param0: com.epson.epos2.printer.HybridPrinter, param1: number, param2: number, param3: string, param4: com.epson.epos2.printer.HybridPrinterStatusInfo): void;
					});
					public constructor();
					public onHybdReceive(param0: com.epson.epos2.printer.HybridPrinter, param1: number, param2: number, param3: string, param4: com.epson.epos2.printer.HybridPrinterStatusInfo): void;
				}
			}
		}
	}
}

declare module com {
	export module epson {
		export module epos2 {
			export module printer {
				export class HybdStatusChangeListener {
					public static class: java.lang.Class<com.epson.epos2.printer.HybdStatusChangeListener>;
					/**
					 * Constructs a new instance of the com.epson.epos2.printer.HybdStatusChangeListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onHybdStatusChange(param0: com.epson.epos2.printer.HybridPrinter, param1: number): void;
					});
					public constructor();
					public onHybdStatusChange(param0: com.epson.epos2.printer.HybridPrinter, param1: number): void;
				}
			}
		}
	}
}

declare module com {
	export module epson {
		export module epos2 {
			export module printer {
				export class HybridPrinter extends com.epson.epos2.printer.CommonPrinter {
					public static class: java.lang.Class<com.epson.epos2.printer.HybridPrinter>;
					public static PAPER_TYPE_RECEIPT: number;
					public static PAPER_TYPE_SLIP: number;
					public static PAPER_TYPE_ENDORSE: number;
					public static PAPER_TYPE_VALIDATION: number;
					public static METHOD_WAITINSERTION: number;
					public static METHOD_SENDDATA: number;
					public static METHOD_CANCELINSERTION: number;
					public static METHOD_EJECTPAPER: number;
					public static METHOD_READMICRDATA: number;
					public static METHOD_CLEANMICRREADER: number;
					public static MICR_FONT_E13B: number;
					public static MICR_FONT_CMC7: number;
					public static INSERTION_WAIT_SLIP: number;
					public static INSERTION_WAIT_VALIDATION: number;
					public static INSERTION_WAIT_MICR: number;
					public static INSERTION_WAIT_NONE: number;
					public static REMOVAL_WAIT_PAPER: number;
					public static REMOVAL_WAIT_NONE: number;
					public static SLIP_PAPER_OK: number;
					public static SLIP_PAPER_EMPTY: number;
					public static EVENT_INSERTION_WAIT_SLIP: number;
					public static EVENT_INSERTION_WAIT_VALIDATION: number;
					public static EVENT_INSERTION_WAIT_MICR: number;
					public static EVENT_INSERTION_WAIT_NONE: number;
					public static EVENT_REMOVAL_WAIT_PAPER: number;
					public static EVENT_REMOVAL_WAIT_NONE: number;
					public static EVENT_SLIP_PAPER_OK: number;
					public static EVENT_SLIP_PAPER_EMPTY: number;
					public getWaitTime(): number;
					public constructor(param0: number, param1: globalAndroid.content.Context);
					public cleanMicrReader(param0: number): void;
					public nativeEpos2SetWaitTime(param0: number, param1: number): number;
					public finalize(): void;
					public nativeEpos2CreateHandle(param0: number, param1: native.Array<number>): number;
					public readMicrData(param0: number, param1: number): void;
					public setStatusChangeEventListener(param0: com.epson.epos2.printer.HybdStatusChangeListener): void;
					public nativeEpos2SendData(param0: number, param1: number, param2: number, param3: number): number;
					public setConnectionEventListener(param0: com.epson.epos2.ConnectionListener): void;
					public forceCommand(param0: native.Array<number>, param1: number): void;
					public nativeEpos2Connect(param0: number, param1: string, param2: number, param3: any): number;
					public nativeEpos2SetMode40Cpl(param0: number, param1: number): number;
					public nativeEpos2SelectPaperType(param0: number, param1: number): number;
					public nativeEpos2Disconnect(param0: number): number;
					public connect(param0: string, param1: number): void;
					public disconnect(): void;
					public getMode40Cpl(): number;
					public nativeEpos2GetStatus(param0: number): com.epson.epos2.printer.HybridPrinterStatusInfo;
					public waitInsertion(param0: number): void;
					public setReceiveEventListener(param0: com.epson.epos2.printer.HybdReceiveListener): void;
					public getAdmin(): string;
					public getLocation(): string;
					public nativeEpos2CancelInsertion(param0: number): number;
					public nativeEpos2WaitInsertion(param0: number, param1: number, param2: number): number;
					public nativeEpos2GetAdmin(param0: number): string;
					public sendData(param0: number): void;
					public nativeEpos2EjectPaper(param0: number): number;
					public nativeEpos2GetLocation(param0: number): string;
					public getStatus(): com.epson.epos2.printer.HybridPrinterStatusInfo;
					public selectPaperType(param0: number): void;
					public nativeEpos2CleanMicrReader(param0: number, param1: number, param2: number): number;
					public cancelInsertion(): void;
					public nativeEpos2DestroyHandle(param0: number): number;
					public setWaitTime(param0: number): void;
					public ejectPaper(): void;
					public setMode40Cpl(param0: number): void;
					public nativeEpos2ReadMicrData(param0: number, param1: number, param2: number, param3: number): number;
					public nativeEpos2ForceCommand(param0: number, param1: native.Array<number>, param2: number, param3: number): number;
					public getPaperType(): number;
				}
			}
		}
	}
}

declare module com {
	export module epson {
		export module epos2 {
			export module printer {
				export class HybridPrinterStatusInfo {
					public static class: java.lang.Class<com.epson.epos2.printer.HybridPrinterStatusInfo>;
					public getWaitOnline(): number;
					public getErrorStatus(): number;
					public getInsertionWaiting(): number;
					public getOnline(): number;
					public getPaperFeed(): number;
					public getPanelSwitch(): number;
					public getAutoRecoverError(): number;
					public getRemovalWaiting(): number;
					public getCoverOpen(): number;
					public getPaper(): number;
					public constructor();
					public getDrawer(): number;
					public getSlipPaper(): number;
					public getConnection(): number;
				}
			}
		}
	}
}

declare module com {
	export module epson {
		export module epos2 {
			export module printer {
				export class LogoKeyCode {
					public static class: java.lang.Class<com.epson.epos2.printer.LogoKeyCode>;
					public key1: number;
					public key2: number;
				}
			}
		}
	}
}

declare module com {
	export module epson {
		export module epos2 {
			export module printer {
				export class MaintenanceCounterListener {
					public static class: java.lang.Class<com.epson.epos2.printer.MaintenanceCounterListener>;
					/**
					 * Constructs a new instance of the com.epson.epos2.printer.MaintenanceCounterListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onGetMaintenanceCounter(param0: number, param1: number, param2: number): void;
						onResetMaintenanceCounter(param0: number, param1: number): void;
					});
					public constructor();
					public onResetMaintenanceCounter(param0: number, param1: number): void;
					public onGetMaintenanceCounter(param0: number, param1: number, param2: number): void;
				}
			}
		}
	}
}

declare module com {
	export module epson {
		export module epos2 {
			export module printer {
				export class Printer extends com.epson.epos2.printer.CommonPrinter {
					public static class: java.lang.Class<com.epson.epos2.printer.Printer>;
					public static TM_M10: number;
					public static TM_M30: number;
					public static TM_P20: number;
					public static TM_P60: number;
					public static TM_P60II: number;
					public static TM_P80: number;
					public static TM_T20: number;
					public static TM_T60: number;
					public static TM_T70: number;
					public static TM_T81: number;
					public static TM_T82: number;
					public static TM_T83: number;
					public static TM_T88: number;
					public static TM_T90: number;
					public static TM_T90KP: number;
					public static TM_U220: number;
					public static TM_U330: number;
					public static TM_L90: number;
					public static TM_H6000: number;
					public static TM_T83III: number;
					public static TM_T100: number;
					public static PATTERN_NONE: number;
					public static PATTERN_A: number;
					public static PATTERN_B: number;
					public static PATTERN_C: number;
					public static PATTERN_D: number;
					public static PATTERN_E: number;
					public static PATTERN_ERROR: number;
					public static PATTERN_PAPER_EMPTY: number;
					public static PATTERN_1: number;
					public static PATTERN_2: number;
					public static PATTERN_3: number;
					public static PATTERN_4: number;
					public static PATTERN_5: number;
					public static PATTERN_6: number;
					public static PATTERN_7: number;
					public static PATTERN_8: number;
					public static PATTERN_9: number;
					public static PATTERN_10: number;
					public static FEED_PEELING: number;
					public static FEED_CUTTING: number;
					public static FEED_CURRENT_TOF: number;
					public static FEED_NEXT_TOF: number;
					public static LAYOUT_RECEIPT: number;
					public static LAYOUT_LABEL: number;
					public static LAYOUT_LABEL_BM: number;
					public static LAYOUT_RECEIPT_BM: number;
					public static BATTERY_LEVEL_6: number;
					public static BATTERY_LEVEL_5: number;
					public static BATTERY_LEVEL_4: number;
					public static BATTERY_LEVEL_3: number;
					public static BATTERY_LEVEL_2: number;
					public static BATTERY_LEVEL_1: number;
					public static BATTERY_LEVEL_0: number;
					public static EVENT_BATTERY_ENOUGH: number;
					public static EVENT_BATTERY_EMPTY: number;
					public static MAINTENANCE_COUNTER_PAPERFEED: number;
					public static MAINTENANCE_COUNTER_AUTOCUTTER: number;
					public static MAINTENANCE_COUNTER_OTHER: number;
					public static SETTING_PAPERWIDTH: number;
					public static SETTING_PRINTDENSITY: number;
					public static SETTING_PRINTSPEED: number;
					public static SETTING_OTHER: number;
					public static SETTING_PAPERWIDTH_NOT_SETTING_TARGET: number;
					public static SETTING_PAPERWIDTH_58_0: number;
					public static SETTING_PAPERWIDTH_60_0: number;
					public static SETTING_PAPERWIDTH_80_0: number;
					public static SETTING_PRINTDENSITY_NOT_SETTING_TARGET: number;
					public static SETTING_PRINTDENSITY_DIP: number;
					public static SETTING_PRINTDENSITY_70: number;
					public static SETTING_PRINTDENSITY_75: number;
					public static SETTING_PRINTDENSITY_80: number;
					public static SETTING_PRINTDENSITY_85: number;
					public static SETTING_PRINTDENSITY_90: number;
					public static SETTING_PRINTDENSITY_95: number;
					public static SETTING_PRINTDENSITY_100: number;
					public static SETTING_PRINTDENSITY_105: number;
					public static SETTING_PRINTDENSITY_110: number;
					public static SETTING_PRINTDENSITY_115: number;
					public static SETTING_PRINTDENSITY_120: number;
					public static SETTING_PRINTDENSITY_125: number;
					public static SETTING_PRINTDENSITY_130: number;
					public static SETTING_PRINTSPEED_NOT_SETTING_TARGET: number;
					public static SETTING_PRINTSPEED_1: number;
					public static SETTING_PRINTSPEED_2: number;
					public static SETTING_PRINTSPEED_3: number;
					public static SETTING_PRINTSPEED_4: number;
					public static SETTING_PRINTSPEED_5: number;
					public static SETTING_PRINTSPEED_6: number;
					public static SETTING_PRINTSPEED_7: number;
					public static SETTING_PRINTSPEED_8: number;
					public static SETTING_PRINTSPEED_9: number;
					public static SETTING_PRINTSPEED_10: number;
					public static SETTING_PRINTSPEED_11: number;
					public static SETTING_PRINTSPEED_12: number;
					public static SETTING_PRINTSPEED_13: number;
					public static SETTING_PRINTSPEED_14: number;
					public addFeedPosition(param0: number): void;
					public updateFirmware(param0: com.epson.epos2.printer.FirmwareInfo, param1: com.epson.epos2.printer.FirmwareUpdateListener, param2: globalAndroid.content.Context): void;
					public finalize(): void;
					public registerLogo(param0: number, param1: number, param2: globalAndroid.graphics.Bitmap, param3: number, param4: number, param5: number, param6: number, param7: number, param8: number, param9: number, param10: number): void;
					public nativeEpos2UnregisterAllLogo(param0: number): number;
					public nativeEpos2RequestPrintJobStatus(param0: number, param1: string): number;
					public nativeEpos2WriteFirmwareImage(param0: number, param1: native.Array<number>, param2: boolean): number;
					public setPrinterSetting(param0: number, param1: java.util.Map<java.lang.Integer,java.lang.Integer>, param2: com.epson.epos2.printer.PrinterSettingListener): void;
					public addVLineBegin(param0: number, param1: number, param2: native.Array<number>): void;
					public forceCommand(param0: native.Array<number>, param1: number): void;
					public resetMaintenanceCounter(param0: number, param1: number, param2: com.epson.epos2.printer.MaintenanceCounterListener): void;
					public nativeEpos2Connect(param0: number, param1: string, param2: number, param3: any): number;
					public nativeEpos2UnregisterLogo(param0: number, param1: number, param2: number): number;
					public nativeEpos2Disconnect(param0: number): number;
					public nativeEpos2GetLogoList(param0: number, param1: java.util.Vector<com.epson.epos2.printer.LogoKeyCode>): number;
					public connect(param0: string, param1: number): void;
					public nativeEpos2ForceCommand(param0: number, param1: native.Array<number>, param2: number): number;
					public addSound(param0: number, param1: number, param2: number): void;
					public setStatusChangeEventListener(param0: com.epson.epos2.printer.StatusChangeListener): void;
					public getLocation(): string;
					public nativeEpos2GetStatus(param0: number): com.epson.epos2.printer.PrinterStatusInfo;
					public nativeEpos2AddHLine(param0: number, param1: number, param2: number, param3: number): number;
					public nativeEpos2GetAdmin(param0: number): string;
					public sendData(param0: number): void;
					public nativeEpos2GetLocation(param0: number): string;
					public addLayout(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number): void;
					public constructor(param0: number, param1: number, param2: globalAndroid.content.Context);
					public getStatus(): com.epson.epos2.printer.PrinterStatusInfo;
					public getPrinterFirmwareInfo(param0: number, param1: com.epson.epos2.printer.FirmwareUpdateListener): void;
					public downloadFirmwareList(param0: string, param1: com.epson.epos2.printer.FirmwareUpdateListener): void;
					public verifyUpdate(param0: com.epson.epos2.printer.FirmwareInfo, param1: com.epson.epos2.printer.FirmwareUpdateListener): void;
					public nativeEpos2AddSound(param0: number, param1: number, param2: number, param3: number): number;
					public addHLine(param0: number, param1: number, param2: number): void;
					public getPrinterSetting(param0: number, param1: number, param2: com.epson.epos2.printer.PrinterSettingListener): void;
					public nativeEpos2SendData(param0: number, param1: number, param2: string, param3: number): number;
					public nativeEpos2ResetMaintenanceCounter(param0: number, param1: number, param2: number): number;
					public unregisterLogo(param0: number, param1: number): void;
					public setConnectionEventListener(param0: com.epson.epos2.ConnectionListener): void;
					public nativeEpos2GetFirmwareInformation(param0: number, param1: number, param2: native.Array<string>): number;
					public nativeEpos2SetPrinterSetting(param0: number, param1: number, param2: native.Array<number>, param3: native.Array<number>): number;
					public verifyUpdate(param0: java.net.URL, param1: string, param2: string, param3: com.epson.epos2.printer.FirmwareUpdateListener): void;
					public nativeEpos2AddVLineEnd(param0: number, param1: number): number;
					public disconnect(): void;
					public nativeEpos2AddFeedPosition(param0: number, param1: number): number;
					public getAdmin(): string;
					public nativeEpos2CreateHandle(param0: number, param1: number, param2: native.Array<number>): number;
					public nativeEpos2GetMaintenanceCounter(param0: number, param1: number, param2: number, param3: native.Array<number>): number;
					public nativeEpos2ForceStopSound(param0: number, param1: number): number;
					public getMaintenanceCounter(param0: number, param1: number, param2: com.epson.epos2.printer.MaintenanceCounterListener): void;
					public setReceiveEventListener(param0: com.epson.epos2.printer.ReceiveListener): void;
					public nativeEpos2DestroyHandle(param0: number): number;
					public nativeEpos2RegisterLogo(param0: number, param1: number, param2: number, param3: native.Array<number>, param4: number, param5: number, param6: number, param7: number, param8: number, param9: number, param10: number, param11: number, param12: number, param13: number): number;
					public addVLineEnd(param0: number): void;
					public unregisterAllLogo(): void;
					public updateFirmware(param0: java.net.URL, param1: string, param2: string, param3: com.epson.epos2.printer.FirmwareUpdateListener, param4: globalAndroid.content.Context): void;
					public requestPrintJobStatus(param0: string): void;
					public nativeEpos2GetPrinterSetting(param0: number, param1: number, param2: number, param3: native.Array<number>): number;
					public forceStopSound(param0: number): void;
					public nativeEpos2AddLayout(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number): number;
					public getLogoList(): native.Array<com.epson.epos2.printer.LogoKeyCode>;
					public nativeEpos2AddVLineBegin(param0: number, param1: number, param2: number, param3: native.Array<number>): number;
				}
				export module Printer {
					export class DownloadFirmwareListMain extends com.epson.epos2.printer.FirmwareDownloader.OnResultListener {
						public static class: java.lang.Class<com.epson.epos2.printer.Printer.DownloadFirmwareListMain>;
						public OnSuccess(): void;
						public constructor(param0: com.epson.epos2.printer.Printer, param1: string, param2: com.epson.epos2.printer.FirmwareUpdateListener);
						public OnError(param0: com.epson.epos2.printer.FirmwareDownloader.Error): void;
						public start(): void;
						public OnFileListGet(param0: string, param1: native.Array<string>): void;
						public OnHistoryGet(param0: string): void;
					}
					export class InnerThread {
						public static class: java.lang.Class<com.epson.epos2.printer.Printer.InnerThread>;
						public constructor(param0: com.epson.epos2.printer.Printer, param1: com.epson.epos2.printer.Printer, param2: any, param3: number, param4: number, param5: number, param6: native.Array<number>, param7: native.Array<number>);
					}
					export class UpdateFirmwareMain implements com.epson.epos2.printer.FirmwareDownloader.OnResultListener, com.epson.epos2.printer.FirmwareDownloader.OnProgressListener {
						public static class: java.lang.Class<com.epson.epos2.printer.Printer.UpdateFirmwareMain>;
						public OnSuccess(): void;
						public OnError(param0: com.epson.epos2.printer.FirmwareDownloader.Error): void;
						public run(): void;
						public OnFileListGet(param0: string, param1: native.Array<string>): void;
						public OnDownloadFirmwareProgress(param0: number, param1: number): void;
						public OnHistoryGet(param0: string): void;
					}
					export module UpdateFirmwareMain {
						export class ProgressMonitor {
							public static class: java.lang.Class<com.epson.epos2.printer.Printer.UpdateFirmwareMain.ProgressMonitor>;
							public startMonitor(): void;
							public run(): void;
							public stopMonitor(): void;
						}
					}
					export class UpdateFirmwareWithUrlMain {
						public static class: java.lang.Class<com.epson.epos2.printer.Printer.UpdateFirmwareWithUrlMain>;
						public run(): void;
					}
					export module UpdateFirmwareWithUrlMain {
						export class ProgressMonitor {
							public static class: java.lang.Class<com.epson.epos2.printer.Printer.UpdateFirmwareWithUrlMain.ProgressMonitor>;
							public startMonitor(): void;
							public run(): void;
							public stopMonitor(): void;
						}
					}
					export class VerifyUpdateMain {
						public static class: java.lang.Class<com.epson.epos2.printer.Printer.VerifyUpdateMain>;
						public run(): void;
					}
					export class VerifyUpdateWithUrlMain {
						public static class: java.lang.Class<com.epson.epos2.printer.Printer.VerifyUpdateWithUrlMain>;
						public run(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module epson {
		export module epos2 {
			export module printer {
				export class PrinterSettingListener {
					public static class: java.lang.Class<com.epson.epos2.printer.PrinterSettingListener>;
					/**
					 * Constructs a new instance of the com.epson.epos2.printer.PrinterSettingListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onGetPrinterSetting(param0: number, param1: number, param2: number): void;
						onSetPrinterSetting(param0: number): void;
					});
					public constructor();
					public onGetPrinterSetting(param0: number, param1: number, param2: number): void;
					public onSetPrinterSetting(param0: number): void;
				}
			}
		}
	}
}

declare module com {
	export module epson {
		export module epos2 {
			export module printer {
				export class PrinterStatusInfo {
					public static class: java.lang.Class<com.epson.epos2.printer.PrinterStatusInfo>;
					public getWaitOnline(): number;
					public getErrorStatus(): number;
					public getOnline(): number;
					public getPaperFeed(): number;
					public getPanelSwitch(): number;
					public getAutoRecoverError(): number;
					public getAdapter(): number;
					public getCoverOpen(): number;
					public getPaper(): number;
					public getBuzzer(): number;
					public constructor();
					public getDrawer(): number;
					public getBatteryLevel(): number;
					public getConnection(): number;
				}
			}
		}
	}
}

declare module com {
	export module epson {
		export module epos2 {
			export module printer {
				export class RccStream {
					public static class: java.lang.Class<com.epson.epos2.printer.RccStream>;
					public static HEADER_LENGTH: number;
					public static ID_ADDRESS: number;
					public static ID_LENGTH: number;
					public static ADDRESS_ADDRESS: number;
					public static ADDRESS_LENGTH: number;
					public static LENGTH_ADDRESS: number;
					public static LENGTH_LENGTH: number;
					public static CRC32_ADDRESS: number;
					public static CRC32_LENGTH: number;
					public static END_OF_RCC: number;
					public read(param0: native.Array<number>, param1: number, param2: number): number;
					public constructor(param0: java.io.InputStream);
					public next(): boolean;
				}
			}
		}
	}
}

declare module com {
	export module epson {
		export module epos2 {
			export module printer {
				export class RcxHeaderAnalyzer {
					public static class: java.lang.Class<com.epson.epos2.printer.RcxHeaderAnalyzer>;
					public valid(): boolean;
					public getChildrenKeys(param0: string, param1: string): native.Array<number>;
					public getChildrenKeys(param0: string, param1: native.Array<number>): native.Array<number>;
					public constructor(param0: java.io.InputStream);
					public constructor(param0: string);
					public get(param0: string, param1: native.Array<number>): string;
					public getChildrenSize(param0: string, param1: native.Array<number>): number;
					public get(param0: string, param1: string): string;
					public getChildrenSize(param0: string, param1: string): number;
				}
				export module RcxHeaderAnalyzer {
					export class Element {
						public static class: java.lang.Class<com.epson.epos2.printer.RcxHeaderAnalyzer.Element>;
						public element: string;
						public children: java.util.Map<java.lang.Integer,com.epson.epos2.printer.RcxHeaderAnalyzer.Element>;
					}
				}
			}
		}
	}
}

declare module com {
	export module epson {
		export module epos2 {
			export module printer {
				export class ReceiveListener {
					public static class: java.lang.Class<com.epson.epos2.printer.ReceiveListener>;
					/**
					 * Constructs a new instance of the com.epson.epos2.printer.ReceiveListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onPtrReceive(param0: com.epson.epos2.printer.Printer, param1: number, param2: com.epson.epos2.printer.PrinterStatusInfo, param3: string): void;
					});
					public constructor();
					public onPtrReceive(param0: com.epson.epos2.printer.Printer, param1: number, param2: com.epson.epos2.printer.PrinterStatusInfo, param3: string): void;
				}
			}
		}
	}
}

declare module com {
	export module epson {
		export module epos2 {
			export module printer {
				export class StatusChangeListener {
					public static class: java.lang.Class<com.epson.epos2.printer.StatusChangeListener>;
					/**
					 * Constructs a new instance of the com.epson.epos2.printer.StatusChangeListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onPtrStatusChange(param0: com.epson.epos2.printer.Printer, param1: number): void;
					});
					public constructor();
					public onPtrStatusChange(param0: com.epson.epos2.printer.Printer, param1: number): void;
				}
			}
		}
	}
}

declare module com {
	export module epson {
		export module epos2 {
			export module printer {
				export class TMUtilityFirmwareDownloader extends com.epson.epos2.printer.FirmwareDownloader {
					public static class: java.lang.Class<com.epson.epos2.printer.TMUtilityFirmwareDownloader>;
				}
			}
		}
	}
}

declare module com {
	export module epson {
		export module epos2 {
			export module printer {
				export class TMUtilityFirmwareUpdater extends com.epson.epos2.printer.FirmwareUpdater {
					public static class: java.lang.Class<com.epson.epos2.printer.TMUtilityFirmwareUpdater>;
				}
			}
		}
	}
}

declare module com {
	export module epson {
		export module epos2 {
			export module printer {
				export class firmwareUpdateException {
					public static class: java.lang.Class<com.epson.epos2.printer.firmwareUpdateException>;
					public getErrorStatus(): number;
					public constructor(param0: number);
				}
			}
		}
	}
}

declare module com {
	export module epson {
		export module epos2 {
			export module simpleserial {
				export class ReceiveListener {
					public static class: java.lang.Class<com.epson.epos2.simpleserial.ReceiveListener>;
					/**
					 * Constructs a new instance of the com.epson.epos2.simpleserial.ReceiveListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onSimpleSerialReceive(param0: com.epson.epos2.simpleserial.SimpleSerial, param1: native.Array<number>): void;
					});
					public constructor();
					public onSimpleSerialReceive(param0: com.epson.epos2.simpleserial.SimpleSerial, param1: native.Array<number>): void;
				}
			}
		}
	}
}

declare module com {
	export module epson {
		export module epos2 {
			export module simpleserial {
				export class SerialStatusInfo {
					public static class: java.lang.Class<com.epson.epos2.simpleserial.SerialStatusInfo>;
					public constructor();
					public getConnection(): number;
				}
			}
		}
	}
}

declare module com {
	export module epson {
		export module epos2 {
			export module simpleserial {
				export class SimpleSerial {
					public static class: java.lang.Class<com.epson.epos2.simpleserial.SimpleSerial>;
					public static TRUE: number;
					public static FALSE: number;
					public static PARAM_DEFAULT: number;
					public static EVENT_RECONNECTING: number;
					public static EVENT_RECONNECT: number;
					public static EVENT_DISCONNECT: number;
					public sendCommand(param0: native.Array<number>): void;
					public onSimpleSerialReceive(param0: native.Array<number>): void;
					public getAdmin(): string;
					public checkHandle(): void;
					public getLocation(): string;
					public nativeEpos2GetAdmin(param0: number): string;
					public finalize(): void;
					public nativeEpos2GetLocation(param0: number): string;
					public constructor(param0: globalAndroid.content.Context);
					public nativeEpos2SendCommand(param0: number, param1: native.Array<number>): number;
					public setConnectionEventListener(param0: com.epson.epos2.ConnectionListener): void;
					public nativeEpos2GetStatus(param0: number): com.epson.epos2.simpleserial.SerialStatusInfo;
					public connect(param0: string, param1: number): void;
					public initializeSerialInstance(): void;
					public getStatus(): com.epson.epos2.simpleserial.SerialStatusInfo;
					public disconnect(): void;
					public setReceiveEventListener(param0: com.epson.epos2.simpleserial.ReceiveListener): void;
				}
			}
		}
	}
}

declare module com {
	export module epson {
		export module eposdevice {
			export class ConnectListener {
				public static class: java.lang.Class<com.epson.eposdevice.ConnectListener>;
				/**
				 * Constructs a new instance of the com.epson.eposdevice.ConnectListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onConnect(param0: string, param1: number): void;
				});
				public constructor();
				public onConnect(param0: string, param1: number): void;
			}
		}
	}
}

declare module com {
	export module epson {
		export module eposdevice {
			export class CreateDeviceListener {
				public static class: java.lang.Class<com.epson.eposdevice.CreateDeviceListener>;
				/**
				 * Constructs a new instance of the com.epson.eposdevice.CreateDeviceListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onCreateDevice(param0: string, param1: string, param2: number, param3: any, param4: number): void;
				});
				public constructor();
				public onCreateDevice(param0: string, param1: string, param2: number, param3: any, param4: number): void;
			}
		}
	}
}

declare module com {
	export module epson {
		export module eposdevice {
			export class DeleteDeviceListener {
				public static class: java.lang.Class<com.epson.eposdevice.DeleteDeviceListener>;
				/**
				 * Constructs a new instance of the com.epson.eposdevice.DeleteDeviceListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onDeleteDevice(param0: string, param1: string, param2: number): void;
				});
				public constructor();
				public onDeleteDevice(param0: string, param1: string, param2: number): void;
			}
		}
	}
}

declare module com {
	export module epson {
		export module eposdevice {
			export class Device extends com.epson.eposdevice.DeviceInnerImplement {
				public static class: java.lang.Class<com.epson.eposdevice.Device>;
				public static TRUE: number;
				public static FALSE: number;
				public static PARAM_UNSPECIFIED: number;
				public static PARAM_DEFAULT: number;
				public static DEV_TYPE_PRINTER: number;
				public static DEV_TYPE_DISPLAY: number;
				public static DEV_TYPE_KEYBOARD: number;
				public static DEV_TYPE_SCANNER: number;
				public static DEV_TYPE_SIMPLE_SERIAL: number;
				public createDevice(param0: string, param1: number, param2: number, param3: number, param4: com.epson.eposdevice.CreateDeviceListener): void;
				public nativeOnReconnecting(param0: string): void;
				public initializeDeviceInstance(): void;
				public outputException(param0: string, param1: java.lang.Exception): void;
				public outputLogReturnFunction(param0: string, param1: native.Array<any>): void;
				public finalize(): void;
				public connect(param0: string, param1: com.epson.eposdevice.ConnectListener): void;
				public getLocation(): string;
				public setReconnectingEventCallback(param0: com.epson.eposdevice.ReconnectingListener): void;
				public setReconnectEventCallback(param0: com.epson.eposdevice.ReconnectListener): void;
				public constructor();
				public nativeOnReconnect(param0: string): void;
				public outputLogCallFunction(param0: string, param1: native.Array<any>): void;
				public getCommBoxManager(): com.epson.eposdevice.commbox.CommBoxManager;
				public isConnected(): boolean;
				public setDisconnectEventCallback(param0: com.epson.eposdevice.DisconnectListener): void;
				public constructor(param0: globalAndroid.content.Context);
				public disconnect(): void;
				public nativeOnDisconnect(param0: string): void;
				public isEmptyCallbacks(): boolean;
				public getAdmin(): string;
				public deleteAllDeviceObject(): void;
				public outputLogEvent(param0: string, param1: native.Array<any>): void;
				public deleteDevice(param0: any, param1: com.epson.eposdevice.DeleteDeviceListener): void;
			}
			export module Device {
				export class ConnectCallbackAdapter extends com.epson.eposdevice.NativeDevice.NativeConnectCallbackAdapter {
					public static class: java.lang.Class<com.epson.eposdevice.Device.ConnectCallbackAdapter>;
					public nativeOnConnect(param0: string, param1: number): void;
					public constructor(param0: com.epson.eposdevice.Device, param1: com.epson.eposdevice.ConnectListener);
				}
				export class CreateDeviceCallbackAdapter extends com.epson.eposdevice.NativeDevice.NativeCreateDeviceCallbackAdapter {
					public static class: java.lang.Class<com.epson.eposdevice.Device.CreateDeviceCallbackAdapter>;
					public constructor(param0: com.epson.eposdevice.Device, param1: com.epson.eposdevice.CreateDeviceListener);
					public nativeOnCreateDevice(param0: string, param1: string, param2: number, param3: number, param4: number): void;
				}
				export class DeleteDeviceCallbackAdapter extends com.epson.eposdevice.NativeDevice.NativeDeleteDeviceCallbackAdapter {
					public static class: java.lang.Class<com.epson.eposdevice.Device.DeleteDeviceCallbackAdapter>;
					public constructor(param0: com.epson.eposdevice.Device, param1: com.epson.eposdevice.DeleteDeviceListener, param2: com.epson.eposdevice.DeviceInnerImplement.IDeviceObject);
					public nativeOnDeleteDevice(param0: string, param1: string, param2: number): void;
				}
			}
		}
	}
}

declare module com {
	export module epson {
		export module eposdevice {
			export abstract class DeviceInnerImplement extends com.epson.eposdevice.NativeDevice {
				public static class: java.lang.Class<com.epson.eposdevice.DeviceInnerImplement>;
				public LOGIF_FUNC_IN: number;
				public LOGIF_FUNC_OUT_WITH_RET: number;
				public LOGIF_FUNC_OUT_WITHOUT_RET: number;
				public LOGIF_FUNC_CB_EVENT: number;
				public processOutputLogData(param0: number, param1: number, param2: string, param3: native.Array<any>): void;
				public processOutputExceptionLog(param0: number, param1: number, param2: string, param3: java.lang.Exception): void;
			}
			export module DeviceInnerImplement {
				export class CommBoxManagerInner extends com.epson.eposdevice.commbox.CommBoxManager implements com.epson.eposdevice.DeviceInnerImplement.IHandleObject {
					public static class: java.lang.Class<com.epson.eposdevice.DeviceInnerImplement.CommBoxManagerInner>;
					public getDeviceHandle(): number;
					public outputLogEvent(param0: string, param1: native.Array<any>): void;
					public constructor(param0: com.epson.eposdevice.DeviceInnerImplement, param1: number);
					public deleteInstance(): void;
					public outputException(param0: string, param1: java.lang.Exception): void;
					public createCommBoxInstance(param0: number): com.epson.eposdevice.DeviceInnerImplement.CommBoxManagerInner.CommBoxInner;
					public constructor(param0: number);
					public createCommBoxInstance(param0: number): com.epson.eposdevice.commbox.CommBoxManager.CommBoxAccessor;
					public outputLogCallFunction(param0: string, param1: native.Array<any>): void;
					public outputLogReturnFunction(param0: string, param1: native.Array<any>): void;
				}
				export module CommBoxManagerInner {
					export class CommBoxInner extends com.epson.eposdevice.commbox.CommBoxManager.CommBoxAccessor implements com.epson.eposdevice.DeviceInnerImplement.IHandleObject {
						public static class: java.lang.Class<com.epson.eposdevice.DeviceInnerImplement.CommBoxManagerInner.CommBoxInner>;
						public getDeviceHandle(): number;
						public outputBoxLogCallFunction(param0: string, param1: native.Array<any>): void;
						public constructor(param0: number);
						public constructor(param0: com.epson.eposdevice.commbox.CommBoxManager, param1: number);
						public outputBoxLogEvent(param0: string, param1: native.Array<any>): void;
						public constructor(param0: com.epson.eposdevice.DeviceInnerImplement.CommBoxManagerInner, param1: number);
						public outputBoxException(param0: string, param1: java.lang.Exception): void;
						public outputBoxLogReturnFunction(param0: string, param1: native.Array<any>): void;
					}
				}
				export class DisplayInner extends com.epson.eposdevice.display.Display implements com.epson.eposdevice.DeviceInnerImplement.IDeviceObject {
					public static class: java.lang.Class<com.epson.eposdevice.DeviceInnerImplement.DisplayInner>;
					public getDeviceHandle(): number;
					public outputLogEvent(param0: string, param1: native.Array<any>): void;
					public constructor(param0: com.epson.eposdevice.DeviceInnerImplement, param1: number);
					public deleteInstance(): void;
					public outputException(param0: string, param1: java.lang.Exception): void;
					public constructor(param0: number);
					public outputLogCallFunction(param0: string, param1: native.Array<any>): void;
					public outputLogReturnFunction(param0: string, param1: native.Array<any>): void;
				}
				export class IDeviceObject extends com.epson.eposdevice.DeviceInnerImplement.IHandleObject {
					public static class: java.lang.Class<com.epson.eposdevice.DeviceInnerImplement.IDeviceObject>;
					/**
					 * Constructs a new instance of the com.epson.eposdevice.DeviceInnerImplement$IDeviceObject interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						deleteInstance(): void;
						getDeviceHandle(): number;
					});
					public constructor();
					public getDeviceHandle(): number;
					public deleteInstance(): void;
				}
				export class IHandleObject {
					public static class: java.lang.Class<com.epson.eposdevice.DeviceInnerImplement.IHandleObject>;
					/**
					 * Constructs a new instance of the com.epson.eposdevice.DeviceInnerImplement$IHandleObject interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getDeviceHandle(): number;
					});
					public constructor();
					public getDeviceHandle(): number;
				}
				export class KeyboardInner extends com.epson.eposdevice.keyboard.Keyboard implements com.epson.eposdevice.DeviceInnerImplement.IDeviceObject {
					public static class: java.lang.Class<com.epson.eposdevice.DeviceInnerImplement.KeyboardInner>;
					public getDeviceHandle(): number;
					public outputLogEvent(param0: string, param1: native.Array<any>): void;
					public constructor(param0: com.epson.eposdevice.DeviceInnerImplement, param1: number);
					public deleteInstance(): void;
					public outputException(param0: string, param1: java.lang.Exception): void;
					public constructor(param0: number);
					public outputLogCallFunction(param0: string, param1: native.Array<any>): void;
					public outputLogReturnFunction(param0: string, param1: native.Array<any>): void;
				}
				export class PrinterInner extends com.epson.eposdevice.printer.Printer implements com.epson.eposdevice.DeviceInnerImplement.IDeviceObject {
					public static class: java.lang.Class<com.epson.eposdevice.DeviceInnerImplement.PrinterInner>;
					public getDeviceHandle(): number;
					public outputLogEvent(param0: string, param1: native.Array<any>): void;
					public constructor(param0: com.epson.eposdevice.DeviceInnerImplement, param1: number);
					public deleteInstance(): void;
					public outputException(param0: string, param1: java.lang.Exception): void;
					public constructor(param0: number);
					public outputLogCallFunction(param0: string, param1: native.Array<any>): void;
					public outputLogReturnFunction(param0: string, param1: native.Array<any>): void;
				}
				export class ScannerInner extends com.epson.eposdevice.scanner.Scanner implements com.epson.eposdevice.DeviceInnerImplement.IDeviceObject {
					public static class: java.lang.Class<com.epson.eposdevice.DeviceInnerImplement.ScannerInner>;
					public getDeviceHandle(): number;
					public outputLogEvent(param0: string, param1: native.Array<any>): void;
					public constructor(param0: com.epson.eposdevice.DeviceInnerImplement, param1: number);
					public deleteInstance(): void;
					public outputException(param0: string, param1: java.lang.Exception): void;
					public constructor(param0: number);
					public outputLogCallFunction(param0: string, param1: native.Array<any>): void;
					public outputLogReturnFunction(param0: string, param1: native.Array<any>): void;
				}
				export class SimpleSerialInner extends com.epson.eposdevice.simpleserial.SimpleSerial implements com.epson.eposdevice.DeviceInnerImplement.IDeviceObject {
					public static class: java.lang.Class<com.epson.eposdevice.DeviceInnerImplement.SimpleSerialInner>;
					public getDeviceHandle(): number;
					public outputLogEvent(param0: string, param1: native.Array<any>): void;
					public constructor(param0: com.epson.eposdevice.DeviceInnerImplement, param1: number);
					public deleteInstance(): void;
					public outputException(param0: string, param1: java.lang.Exception): void;
					public constructor(param0: number);
					public outputLogCallFunction(param0: string, param1: native.Array<any>): void;
					public outputLogReturnFunction(param0: string, param1: native.Array<any>): void;
				}
			}
		}
	}
}

declare module com {
	export module epson {
		export module eposdevice {
			export class DisconnectListener {
				public static class: java.lang.Class<com.epson.eposdevice.DisconnectListener>;
				/**
				 * Constructs a new instance of the com.epson.eposdevice.DisconnectListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onDisconnect(param0: string): void;
				});
				public constructor();
				public onDisconnect(param0: string): void;
			}
		}
	}
}

declare module com {
	export module epson {
		export module eposdevice {
			export class EposCallbackCode {
				public static class: java.lang.Class<com.epson.eposdevice.EposCallbackCode>;
				public static SUCCESS: number;
				public static ERR_PARAM: number;
				public static ERR_FAILURE: number;
				public static ERR_TIMEOUT: number;
				public static ERR_ILLEGAL: number;
				public static ERR_NOT_FOUND: number;
				public static ERR_TYPE_INVALID: number;
				public static ERR_IN_USE: number;
				public static ERR_OPEN: number;
				public static ERR_NOT_OPENED: number;
				public static ERR_CLOSE: number;
				public static ERR_MEMORY: number;
				public static ERR_AUTOMATICAL: number;
				public static ERR_COVER_OPEN: number;
				public static ERR_CUTTER: number;
				public static ERR_MECHANICAL: number;
				public static ERR_EMPTY: number;
				public static ERR_UNRECOVERABLE: number;
				public static ERR_SYSTEM: number;
				public static ERR_PORT: number;
				public static ERR_INVALID_WINDOW: number;
				public static ERR_ALREADY_OPENED: number;
				public static ERR_ALREADY_USED: number;
				public static ERR_BOX_COUNT_OVER: number;
				public static ERR_BOX_CLIENT_OVER: number;
				public static ERR_JOB_NOT_FOUND: number;
				public static PRINTING: number;
				public static ERR_SPOOLER: number;
				public static ERR_BATTERY_LOW: number;
				public constructor();
			}
		}
	}
}

declare module com {
	export module epson {
		export module eposdevice {
			export class EposException {
				public static class: java.lang.Class<com.epson.eposdevice.EposException>;
				public static ERR_PARAM: number;
				public static ERR_PROCESSING: number;
				public static ERR_CONNECT: number;
				public static ERR_ILLEGAL: number;
				public static ERR_IN_USE: number;
				public static ERR_MEMORY: number;
				public static ERR_FAILURE: number;
				public getErrorStatus(): number;
				public constructor(param0: number);
				public constructor(param0: string, param1: java.lang.Throwable);
			}
		}
	}
}

declare module com {
	export module epson {
		export module eposdevice {
			export class Log {
				public static class: java.lang.Class<com.epson.eposdevice.Log>;
				public static LOG_TEMPORARY: number;
				public static LOG_PERMANENT: number;
				public static LOG_DISABLE: number;
				public static LOG_STORAGE: number;
				public static LOG_TCP: number;
				public static LOG_LOW: number;
				public static setLogSettings(param0: globalAndroid.content.Context, param1: number, param2: number, param3: string, param4: number, param5: number, param6: number): void;
				public constructor();
			}
		}
	}
}

declare module com {
	export module epson {
		export module eposdevice {
			export abstract class NativeDevice {
				public static class: java.lang.Class<com.epson.eposdevice.NativeDevice>;
				public static NATIVE_TRUE: number;
				public static NATIVE_FALSE: number;
				public static NATIVE_PARAM_UNSPECIFIED: number;
				public static NATIVE_PARAM_DEFAULT: number;
				public static NATIVE_DEV_TYPE_PRINTER: number;
				public static NATIVE_DEV_TYPE_DISPLAY: number;
				public static NATIVE_DEV_TYPE_KEYBOARD: number;
				public static NATIVE_DEV_TYPE_SCANNER: number;
				public static NATIVE_DEV_TYPE_SIMPLE_SERIAL: number;
				public nativeOnReconnecting(param0: string): void;
				public nativeDisconnect(param0: number): number;
				public nativeGetCommBoxManager(param0: number, param1: native.Array<number>): number;
				public nativeGetLocal(param0: number): string;
				public nativeReadLogSettings(param0: string, param1: string, param2: string, param3: string, param4: string, param5: string, param6: string, param7: string): number;
				public nativeCreateDevice(param0: number, param1: string, param2: number, param3: number, param4: number, param5: com.epson.eposdevice.NativeDevice.NativeCreateDeviceCallbackAdapter): number;
				public nativeCreateHandle(param0: native.Array<number>): number;
				public nativeLogOutput(param0: number, param1: number, param2: string, param3: string): void;
				public nativeOnReconnect(param0: string): void;
				public nativeConnect(param0: number, param1: string, param2: com.epson.eposdevice.NativeDevice.NativeConnectCallbackAdapter): number;
				public nativeDeleteDevice(param0: number, param1: number, param2: com.epson.eposdevice.NativeDevice.NativeDeleteDeviceCallbackAdapter): number;
				public nativeSetDeviceCallback(param0: number, param1: com.epson.eposdevice.NativeDevice): void;
				public nativeDeleteHandle(param0: number): number;
				public nativeGetAdmin(param0: number): string;
				public nativeOnDisconnect(param0: string): void;
				public nativeIsConnect(param0: number): boolean;
			}
			export module NativeDevice {
				export class NativeConnectCallbackAdapter {
					public static class: java.lang.Class<com.epson.eposdevice.NativeDevice.NativeConnectCallbackAdapter>;
					/**
					 * Constructs a new instance of the com.epson.eposdevice.NativeDevice$NativeConnectCallbackAdapter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						nativeOnConnect(param0: string, param1: number): void;
					});
					public constructor();
					public nativeOnConnect(param0: string, param1: number): void;
				}
				export class NativeCreateDeviceCallbackAdapter {
					public static class: java.lang.Class<com.epson.eposdevice.NativeDevice.NativeCreateDeviceCallbackAdapter>;
					/**
					 * Constructs a new instance of the com.epson.eposdevice.NativeDevice$NativeCreateDeviceCallbackAdapter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						nativeOnCreateDevice(param0: string, param1: string, param2: number, param3: number, param4: number): void;
					});
					public constructor();
					public nativeOnCreateDevice(param0: string, param1: string, param2: number, param3: number, param4: number): void;
				}
				export class NativeDeleteDeviceCallbackAdapter {
					public static class: java.lang.Class<com.epson.eposdevice.NativeDevice.NativeDeleteDeviceCallbackAdapter>;
					/**
					 * Constructs a new instance of the com.epson.eposdevice.NativeDevice$NativeDeleteDeviceCallbackAdapter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						nativeOnDeleteDevice(param0: string, param1: string, param2: number): void;
					});
					public constructor();
					public nativeOnDeleteDevice(param0: string, param1: string, param2: number): void;
				}
			}
		}
	}
}

declare module com {
	export module epson {
		export module eposdevice {
			export class ReconnectListener {
				public static class: java.lang.Class<com.epson.eposdevice.ReconnectListener>;
				/**
				 * Constructs a new instance of the com.epson.eposdevice.ReconnectListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onReconnect(param0: string): void;
				});
				public constructor();
				public onReconnect(param0: string): void;
			}
		}
	}
}

declare module com {
	export module epson {
		export module eposdevice {
			export class ReconnectingListener {
				public static class: java.lang.Class<com.epson.eposdevice.ReconnectingListener>;
				/**
				 * Constructs a new instance of the com.epson.eposdevice.ReconnectingListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onReconnecting(param0: string): void;
				});
				public constructor();
				public onReconnecting(param0: string): void;
			}
		}
	}
}

declare module com {
	export module epson {
		export module eposdevice {
			export module commbox {
				export class CloseCommBoxListener {
					public static class: java.lang.Class<com.epson.eposdevice.commbox.CloseCommBoxListener>;
					/**
					 * Constructs a new instance of the com.epson.eposdevice.commbox.CloseCommBoxListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onCloseCommBox(param0: string, param1: number, param2: number): void;
					});
					public constructor();
					public onCloseCommBox(param0: string, param1: number, param2: number): void;
				}
			}
		}
	}
}

declare module com {
	export module epson {
		export module eposdevice {
			export module commbox {
				export abstract class CommBox extends com.epson.eposdevice.commbox.NativeCommBox {
					public static class: java.lang.Class<com.epson.eposdevice.commbox.CommBox>;
					public getInnerHandle(): number;
					public outputBoxLogEvent(param0: string, param1: native.Array<any>): void;
					public outputBoxLogCallFunction(param0: string, param1: native.Array<any>): void;
					public getCommHistory(param0: native.Array<number>, param1: com.epson.eposdevice.commbox.GetCommHistoryListener): void;
					public sendData(param0: string, param1: string, param2: native.Array<number>, param3: com.epson.eposdevice.commbox.SendDataListener): void;
					public innerDeleteInstance(): void;
					public nativeOnCommBoxReceive(param0: number, param1: string, param2: string, param3: string, param4: string): void;
					public outputBoxException(param0: string, param1: java.lang.Exception): void;
					public constructor(param0: number);
					public setReceiveEventCallback(param0: com.epson.eposdevice.commbox.ReceiveListener): void;
					public outputBoxLogReturnFunction(param0: string, param1: native.Array<any>): void;
				}
				export module CommBox {
					export class CommBoxHistoryCallbackAdapter extends com.epson.eposdevice.commbox.NativeCommBox.NativeCommBoxHistoryCallbackAdapter {
						public static class: java.lang.Class<com.epson.eposdevice.commbox.CommBox.CommBoxHistoryCallbackAdapter>;
						public constructor(param0: com.epson.eposdevice.commbox.CommBox, param1: com.epson.eposdevice.commbox.GetCommHistoryListener);
						public onCommBoxHistory(param0: number, param1: string, param2: number, param3: number): void;
						public addHistory(param0: string, param1: string, param2: string): void;
					}
					export class CommBoxSendDataCallbackAdapter extends com.epson.eposdevice.commbox.NativeCommBox.NativeCommBoxSendDataCallbackAdapter {
						public static class: java.lang.Class<com.epson.eposdevice.commbox.CommBox.CommBoxSendDataCallbackAdapter>;
						public constructor(param0: com.epson.eposdevice.commbox.CommBox, param1: com.epson.eposdevice.commbox.SendDataListener);
						public onCommBoxSendData(param0: number, param1: string, param2: number, param3: number, param4: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module epson {
		export module eposdevice {
			export module commbox {
				export abstract class CommBoxManager extends com.epson.eposdevice.commbox.NativeCommBoxManager {
					public static class: java.lang.Class<com.epson.eposdevice.commbox.CommBoxManager>;
					public getInnerHandle(): number;
					public closeCommBox(param0: com.epson.eposdevice.commbox.CommBox, param1: native.Array<number>, param2: com.epson.eposdevice.commbox.CloseCommBoxListener): void;
					public openCommBox(param0: string, param1: string, param2: native.Array<number>, param3: com.epson.eposdevice.commbox.OpenCommBoxListener): void;
					public outputLogEvent(param0: string, param1: native.Array<any>): void;
					public outputException(param0: string, param1: java.lang.Exception): void;
					public innerDeleteInstance(): void;
					public constructor(param0: number);
					public createCommBoxInstance(param0: number): com.epson.eposdevice.commbox.CommBoxManager.CommBoxAccessor;
					public outputLogCallFunction(param0: string, param1: native.Array<any>): void;
					public outputLogReturnFunction(param0: string, param1: native.Array<any>): void;
				}
				export module CommBoxManager {
					export class CloseCommBoxCallbackAdapter extends com.epson.eposdevice.commbox.NativeCommBoxManager.NativeCloseCommBoxCallbackAdapter {
						public static class: java.lang.Class<com.epson.eposdevice.commbox.CommBoxManager.CloseCommBoxCallbackAdapter>;
						public nativeOnCloseCommBox(param0: number, param1: number, param2: string, param3: number, param4: number): void;
						public constructor(param0: com.epson.eposdevice.commbox.CommBoxManager, param1: com.epson.eposdevice.commbox.CloseCommBoxListener, param2: com.epson.eposdevice.commbox.CommBoxManager.CommBoxAccessor);
					}
					export abstract class CommBoxAccessor extends com.epson.eposdevice.commbox.CommBox {
						public static class: java.lang.Class<com.epson.eposdevice.commbox.CommBoxManager.CommBoxAccessor>;
						public constructor(param0: number);
						public constructor(param0: com.epson.eposdevice.commbox.CommBoxManager, param1: number);
						public getHandle(): number;
						public deleteInstance(): void;
					}
					export class OpenCommBoxCallbackAdapter extends com.epson.eposdevice.commbox.NativeCommBoxManager.NativeOpenCommBoxCallbackAdapter {
						public static class: java.lang.Class<com.epson.eposdevice.commbox.CommBoxManager.OpenCommBoxCallbackAdapter>;
						public nativeOnOpenCommBox(param0: number, param1: number, param2: string, param3: number, param4: number): void;
						public constructor(param0: com.epson.eposdevice.commbox.CommBoxManager, param1: com.epson.eposdevice.commbox.OpenCommBoxListener);
					}
				}
			}
		}
	}
}

declare module com {
	export module epson {
		export module eposdevice {
			export module commbox {
				export class GetCommHistoryListener {
					public static class: java.lang.Class<com.epson.eposdevice.commbox.GetCommHistoryListener>;
					/**
					 * Constructs a new instance of the com.epson.eposdevice.commbox.GetCommHistoryListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onGetCommHistory(param0: string, param1: number, param2: java.util.ArrayList<java.util.HashMap<string,string>>, param3: number): void;
					});
					public constructor();
					public onGetCommHistory(param0: string, param1: number, param2: java.util.ArrayList<java.util.HashMap<string,string>>, param3: number): void;
				}
			}
		}
	}
}

declare module com {
	export module epson {
		export module eposdevice {
			export module commbox {
				export abstract class NativeCommBox {
					public static class: java.lang.Class<com.epson.eposdevice.commbox.NativeCommBox>;
					public nativeCommBoxSendData(param0: number, param1: string, param2: string, param3: native.Array<number>, param4: com.epson.eposdevice.commbox.NativeCommBox.NativeCommBoxSendDataCallbackAdapter): number;
					public nativeCommBoxGetHistory(param0: number, param1: native.Array<number>, param2: com.epson.eposdevice.commbox.NativeCommBox.NativeCommBoxHistoryCallbackAdapter): number;
					public nativeSetCommBoxReceiveEventCallback(param0: number, param1: com.epson.eposdevice.commbox.NativeCommBox): number;
					public nativeOnCommBoxReceive(param0: number, param1: string, param2: string, param3: string, param4: string): void;
				}
				export module NativeCommBox {
					export class NativeCommBoxHistoryCallbackAdapter {
						public static class: java.lang.Class<com.epson.eposdevice.commbox.NativeCommBox.NativeCommBoxHistoryCallbackAdapter>;
						/**
						 * Constructs a new instance of the com.epson.eposdevice.commbox.NativeCommBox$NativeCommBoxHistoryCallbackAdapter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onCommBoxHistory(param0: number, param1: string, param2: number, param3: number): void;
							addHistory(param0: string, param1: string, param2: string): void;
						});
						public constructor();
						public onCommBoxHistory(param0: number, param1: string, param2: number, param3: number): void;
						public addHistory(param0: string, param1: string, param2: string): void;
					}
					export class NativeCommBoxSendDataCallbackAdapter {
						public static class: java.lang.Class<com.epson.eposdevice.commbox.NativeCommBox.NativeCommBoxSendDataCallbackAdapter>;
						/**
						 * Constructs a new instance of the com.epson.eposdevice.commbox.NativeCommBox$NativeCommBoxSendDataCallbackAdapter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onCommBoxSendData(param0: number, param1: string, param2: number, param3: number, param4: number): void;
						});
						public constructor();
						public onCommBoxSendData(param0: number, param1: string, param2: number, param3: number, param4: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module epson {
		export module eposdevice {
			export module commbox {
				export abstract class NativeCommBoxManager {
					public static class: java.lang.Class<com.epson.eposdevice.commbox.NativeCommBoxManager>;
					public nativeOpenCommBox(param0: number, param1: string, param2: string, param3: native.Array<number>, param4: com.epson.eposdevice.commbox.NativeCommBoxManager.NativeOpenCommBoxCallbackAdapter): number;
					public nativeCloseCommBox(param0: number, param1: number, param2: native.Array<number>, param3: com.epson.eposdevice.commbox.NativeCommBoxManager.NativeCloseCommBoxCallbackAdapter): number;
				}
				export module NativeCommBoxManager {
					export class NativeCloseCommBoxCallbackAdapter {
						public static class: java.lang.Class<com.epson.eposdevice.commbox.NativeCommBoxManager.NativeCloseCommBoxCallbackAdapter>;
						/**
						 * Constructs a new instance of the com.epson.eposdevice.commbox.NativeCommBoxManager$NativeCloseCommBoxCallbackAdapter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							nativeOnCloseCommBox(param0: number, param1: number, param2: string, param3: number, param4: number): void;
						});
						public constructor();
						public nativeOnCloseCommBox(param0: number, param1: number, param2: string, param3: number, param4: number): void;
					}
					export class NativeOpenCommBoxCallbackAdapter {
						public static class: java.lang.Class<com.epson.eposdevice.commbox.NativeCommBoxManager.NativeOpenCommBoxCallbackAdapter>;
						/**
						 * Constructs a new instance of the com.epson.eposdevice.commbox.NativeCommBoxManager$NativeOpenCommBoxCallbackAdapter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							nativeOnOpenCommBox(param0: number, param1: number, param2: string, param3: number, param4: number): void;
						});
						public constructor();
						public nativeOnOpenCommBox(param0: number, param1: number, param2: string, param3: number, param4: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module epson {
		export module eposdevice {
			export module commbox {
				export class OpenCommBoxListener {
					public static class: java.lang.Class<com.epson.eposdevice.commbox.OpenCommBoxListener>;
					/**
					 * Constructs a new instance of the com.epson.eposdevice.commbox.OpenCommBoxListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onOpenCommBox(param0: string, param1: com.epson.eposdevice.commbox.CommBox, param2: number, param3: number): void;
					});
					public constructor();
					public onOpenCommBox(param0: string, param1: com.epson.eposdevice.commbox.CommBox, param2: number, param3: number): void;
				}
			}
		}
	}
}

declare module com {
	export module epson {
		export module eposdevice {
			export module commbox {
				export class ReceiveListener {
					public static class: java.lang.Class<com.epson.eposdevice.commbox.ReceiveListener>;
					/**
					 * Constructs a new instance of the com.epson.eposdevice.commbox.ReceiveListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onCommBoxReceive(param0: string, param1: string, param2: string, param3: string): void;
					});
					public constructor();
					public onCommBoxReceive(param0: string, param1: string, param2: string, param3: string): void;
				}
			}
		}
	}
}

declare module com {
	export module epson {
		export module eposdevice {
			export module commbox {
				export class SendDataListener {
					public static class: java.lang.Class<com.epson.eposdevice.commbox.SendDataListener>;
					/**
					 * Constructs a new instance of the com.epson.eposdevice.commbox.SendDataListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onCommBoxSendData(param0: string, param1: number, param2: number, param3: number): void;
					});
					public constructor();
					public onCommBoxSendData(param0: string, param1: number, param2: number, param3: number): void;
				}
			}
		}
	}
}

declare module com {
	export module epson {
		export module eposdevice {
			export module display {
				export abstract class Display extends com.epson.eposdevice.display.NativeDisplay {
					public static class: java.lang.Class<com.epson.eposdevice.display.Display>;
					public static TRUE: number;
					public static FALSE: number;
					public static SCROLL_OVERWRITE: number;
					public static SCROLL_VERTICAL: number;
					public static SCROLL_HORIZONTAL: number;
					public static MOVE_TOP_LEFT: number;
					public static MOVE_TOP_RIGHT: number;
					public static MOVE_BOTTOM_LEFT: number;
					public static MOVE_BOTTOM_RIGHT: number;
					public static CURSOR_NONE: number;
					public static CURSOR_UNDERLINE: number;
					public static LANG_EN: number;
					public static LANG_JA: number;
					public static MARQUEE_WALK: number;
					public static MARQUEE_PLACE: number;
					public static BRIGHTNESS_20: number;
					public static BRIGHTNESS_40: number;
					public static BRIGHTNESS_60: number;
					public static BRIGHTNESS_100: number;
					public clearWindow(): void;
					public addText(param0: string, param1: number, param2: number, param3: number): void;
					public setReceiveEventCallback(param0: com.epson.eposdevice.display.ReceiveListener): void;
					public createWindow(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number): void;
					public addText(param0: string, param1: number): void;
					public outputException(param0: string, param1: java.lang.Exception): void;
					public innerDeleteInstance(): void;
					public showClock(): void;
					public outputLogReturnFunction(param0: string, param1: native.Array<any>): void;
					public destroyWindow(param0: number): void;
					public addReverseText(param0: string): void;
					public addReverseText(param0: string, param1: number): void;
					public setBrightness(param0: number): void;
					public outputLogEvent(param0: string, param1: native.Array<any>): void;
					public addText(param0: string, param1: number, param2: number): void;
					public clearCommandBuffer(): void;
					public moveCursorPosition(param0: number): void;
					public sendData(): void;
					public constructor(param0: number);
					public outputLogCallFunction(param0: string, param1: native.Array<any>): void;
					public getInnerHandle(): number;
					public checkHandle(): void;
					public reset(): void;
					public nativeOnDspReceive(param0: string, param1: string, param2: number, param3: number, param4: number, param5: number): void;
					public addMarquee(param0: string, param1: number, param2: number, param3: number, param4: number, param5: number): void;
					public addReverseText(param0: string, param1: number, param2: number): void;
					public setCurrentWindow(param0: number): void;
					public setCursorPosition(param0: number, param1: number): void;
					public addReverseText(param0: string, param1: number, param2: number, param3: number): void;
					public addText(param0: string): void;
					public setCursorType(param0: number): void;
					public setBlink(param0: number): void;
					public addCommand(param0: native.Array<number>): void;
				}
			}
		}
	}
}

declare module com {
	export module epson {
		export module eposdevice {
			export module display {
				export abstract class NativeDisplay {
					public static class: java.lang.Class<com.epson.eposdevice.display.NativeDisplay>;
					public static NATIVE_TRUE: number;
					public static NATIVE_FALSE: number;
					public static NATIVE_SCROLL_OVERWRITE: number;
					public static NATIVE_SCROLL_VERTICAL: number;
					public static NATIVE_SCROLL_HORIZONTAL: number;
					public static NATIVE_MOVE_TOP_LEFT: number;
					public static NATIVE_MOVE_TOP_RIGHT: number;
					public static NATIVE_MOVE_BOTTOM_LEFT: number;
					public static NATIVE_MOVE_BOTTOM_RIGHT: number;
					public static NATIVE_CURSOR_NONE: number;
					public static NATIVE_CURSOR_UNDERLINE: number;
					public static NATIVE_LANG_EN: number;
					public static NATIVE_LANG_JA: number;
					public static NATIVE_MARQUEE_WALK: number;
					public static NATIVE_MARQUEE_PLACE: number;
					public static NATIVE_BRIGHTNESS_20: number;
					public static NATIVE_BRIGHTNESS_40: number;
					public static NATIVE_BRIGHTNESS_60: number;
					public static NATIVE_BRIGHTNESS_100: number;
					public nativeDspSendData(param0: number): number;
					public nativeDspAddTextPositionLang(param0: number, param1: string, param2: number, param3: number, param4: number): number;
					public nativeDspAddCommand(param0: number, param1: native.Array<number>): number;
					public nativeDspAddTextLang(param0: number, param1: string, param2: number): number;
					public nativeDspAddTextPosition(param0: number, param1: string, param2: number, param3: number): number;
					public nativeDspAddSetCursorPosition(param0: number, param1: number, param2: number): number;
					public nativeDspAddShowClock(param0: number): number;
					public nativeDspAddText(param0: number, param1: string): number;
					public nativeDspAddDestroyWindow(param0: number, param1: number): number;
					public nativeDspAddBlink(param0: number, param1: number): number;
					public nativeDspAddMarquee(param0: number, param1: string, param2: number, param3: number, param4: number, param5: number, param6: number): number;
					public nativeDspAddReverseTextLang(param0: number, param1: string, param2: number): number;
					public nativeDspAddSetCurrentWindow(param0: number, param1: number): number;
					public nativeOnDspReceive(param0: string, param1: string, param2: number, param3: number, param4: number, param5: number): void;
					public nativeDspClearCommandBuffer(param0: number): number;
					public nativeDspAddSetCursorType(param0: number, param1: number): number;
					public nativeDspAddClearWindow(param0: number): number;
					public nativeDspAddReverseTextPositionLang(param0: number, param1: string, param2: number, param3: number, param4: number): number;
					public nativeDspAddReset(param0: number): number;
					public nativeDspAddReverseText(param0: number, param1: string): number;
					public nativeDspAddBrightness(param0: number, param1: number): number;
					public nativeDspAddCreateWindow(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number): number;
					public nativeSetDspReceiveCallback(param0: number, param1: com.epson.eposdevice.display.NativeDisplay): number;
					public nativeDspAddReverseTextPosition(param0: number, param1: string, param2: number, param3: number): number;
					public nativeDspAddMoveCursorPosition(param0: number, param1: number): number;
				}
			}
		}
	}
}

declare module com {
	export module epson {
		export module eposdevice {
			export module display {
				export class ReceiveListener {
					public static class: java.lang.Class<com.epson.eposdevice.display.ReceiveListener>;
					/**
					 * Constructs a new instance of the com.epson.eposdevice.display.ReceiveListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onDspReceive(param0: string, param1: string, param2: number, param3: number): void;
					});
					public constructor();
					public onDspReceive(param0: string, param1: string, param2: number, param3: number): void;
				}
			}
		}
	}
}

declare module com {
	export module epson {
		export module eposdevice {
			export module keyboard {
				export class KeyPressListener {
					public static class: java.lang.Class<com.epson.eposdevice.keyboard.KeyPressListener>;
					/**
					 * Constructs a new instance of the com.epson.eposdevice.keyboard.KeyPressListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onKbdKeyPress(param0: string, param1: string, param2: number, param3: string): void;
					});
					public constructor();
					public onKbdKeyPress(param0: string, param1: string, param2: number, param3: string): void;
				}
			}
		}
	}
}

declare module com {
	export module epson {
		export module eposdevice {
			export module keyboard {
				export abstract class Keyboard extends com.epson.eposdevice.keyboard.NativeKeyboard {
					public static class: java.lang.Class<com.epson.eposdevice.keyboard.Keyboard>;
					public static VK_BACK: number;
					public static VK_TAB: number;
					public static VK_RETURN: number;
					public static VK_SHIFT: number;
					public static VK_CONTROL: number;
					public static VK_MENU: number;
					public static VK_CAPITAL: number;
					public static VK_ESCAPE: number;
					public static VK_CONVERT: number;
					public static VK_NONCONVERT: number;
					public static VK_SPACE: number;
					public static VK_PRIOR: number;
					public static VK_NEXT: number;
					public static VK_END: number;
					public static VK_HOME: number;
					public static VK_LEFT: number;
					public static VK_UP: number;
					public static VK_RIGHT: number;
					public static VK_DOWN: number;
					public static VK_INSERT: number;
					public static VK_DELETE: number;
					public static VK_0: number;
					public static VK_1: number;
					public static VK_2: number;
					public static VK_3: number;
					public static VK_4: number;
					public static VK_5: number;
					public static VK_6: number;
					public static VK_7: number;
					public static VK_8: number;
					public static VK_9: number;
					public static VK_A: number;
					public static VK_B: number;
					public static VK_C: number;
					public static VK_D: number;
					public static VK_E: number;
					public static VK_F: number;
					public static VK_G: number;
					public static VK_H: number;
					public static VK_I: number;
					public static VK_J: number;
					public static VK_K: number;
					public static VK_L: number;
					public static VK_M: number;
					public static VK_N: number;
					public static VK_O: number;
					public static VK_P: number;
					public static VK_Q: number;
					public static VK_R: number;
					public static VK_S: number;
					public static VK_T: number;
					public static VK_U: number;
					public static VK_V: number;
					public static VK_W: number;
					public static VK_X: number;
					public static VK_Y: number;
					public static VK_Z: number;
					public static VK_MULTIPLY: number;
					public static VK_ADD: number;
					public static VK_SUBTRACT: number;
					public static VK_F1: number;
					public static VK_F2: number;
					public static VK_F3: number;
					public static VK_F4: number;
					public static VK_F5: number;
					public static VK_F6: number;
					public static VK_F7: number;
					public static VK_F8: number;
					public static VK_F9: number;
					public static VK_F10: number;
					public static VK_F11: number;
					public static VK_F12: number;
					public static VK_OEM_1: number;
					public static VK_OEM_PLUS: number;
					public static VK_OEM_COMMA: number;
					public static VK_OEM_MINUS: number;
					public static VK_OEM_PERIOD: number;
					public static VK_OEM_2: number;
					public static VK_OEM_3: number;
					public static VK_OEM_4: number;
					public static VK_OEM_5: number;
					public static VK_OEM_6: number;
					public static VK_OEM_7: number;
					public static VK_OEM_ATTN: number;
					public getInnerHandle(): number;
					public checkHandle(): void;
					public setStringEventCallback(param0: com.epson.eposdevice.keyboard.StringListener): void;
					public nativeOnKbdKeyPress(param0: string, param1: string, param2: number, param3: string): void;
					public nativeOnKbdString(param0: string, param1: string, param2: string, param3: number): void;
					public outputException(param0: string, param1: java.lang.Exception): void;
					public innerDeleteInstance(): void;
					public setKeyPressEventCallback(param0: com.epson.eposdevice.keyboard.KeyPressListener): void;
					public outputLogReturnFunction(param0: string, param1: native.Array<any>): void;
					public setPrefix(param0: native.Array<number>): void;
					public outputLogEvent(param0: string, param1: native.Array<any>): void;
					public constructor(param0: number);
					public outputLogCallFunction(param0: string, param1: native.Array<any>): void;
				}
			}
		}
	}
}

declare module com {
	export module epson {
		export module eposdevice {
			export module keyboard {
				export abstract class NativeKeyboard {
					public static class: java.lang.Class<com.epson.eposdevice.keyboard.NativeKeyboard>;
					public nativeSetKbdStringCallback(param0: number, param1: com.epson.eposdevice.keyboard.NativeKeyboard): number;
					public nativeKbdSetPrefix(param0: number, param1: native.Array<number>): number;
					public nativeSetKbdKeyPressCallback(param0: number, param1: com.epson.eposdevice.keyboard.NativeKeyboard): number;
					public nativeOnKbdKeyPress(param0: string, param1: string, param2: number, param3: string): void;
					public nativeOnKbdString(param0: string, param1: string, param2: string, param3: number): void;
				}
			}
		}
	}
}

declare module com {
	export module epson {
		export module eposdevice {
			export module keyboard {
				export class StringListener {
					public static class: java.lang.Class<com.epson.eposdevice.keyboard.StringListener>;
					/**
					 * Constructs a new instance of the com.epson.eposdevice.keyboard.StringListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onKbdString(param0: string, param1: string, param2: string, param3: number): void;
					});
					public constructor();
					public onKbdString(param0: string, param1: string, param2: string, param3: number): void;
				}
			}
		}
	}
}

declare module com {
	export module epson {
		export module eposdevice {
			export module printer {
				export class BatteryLowListener {
					public static class: java.lang.Class<com.epson.eposdevice.printer.BatteryLowListener>;
					/**
					 * Constructs a new instance of the com.epson.eposdevice.printer.BatteryLowListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onPtrBatteryLow(param0: string, param1: string): void;
					});
					public constructor();
					public onPtrBatteryLow(param0: string, param1: string): void;
				}
			}
		}
	}
}

declare module com {
	export module epson {
		export module eposdevice {
			export module printer {
				export class BatteryOkListener {
					public static class: java.lang.Class<com.epson.eposdevice.printer.BatteryOkListener>;
					/**
					 * Constructs a new instance of the com.epson.eposdevice.printer.BatteryOkListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onPtrBatteryOk(param0: string, param1: string): void;
					});
					public constructor();
					public onPtrBatteryOk(param0: string, param1: string): void;
				}
			}
		}
	}
}

declare module com {
	export module epson {
		export module eposdevice {
			export module printer {
				export class BatteryStatusChangeListener {
					public static class: java.lang.Class<com.epson.eposdevice.printer.BatteryStatusChangeListener>;
					/**
					 * Constructs a new instance of the com.epson.eposdevice.printer.BatteryStatusChangeListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onPtrBatteryStatusChange(param0: string, param1: string, param2: number): void;
					});
					public constructor();
					public onPtrBatteryStatusChange(param0: string, param1: string, param2: number): void;
				}
			}
		}
	}
}

declare module com {
	export module epson {
		export module eposdevice {
			export module printer {
				export class CoverOkListener {
					public static class: java.lang.Class<com.epson.eposdevice.printer.CoverOkListener>;
					/**
					 * Constructs a new instance of the com.epson.eposdevice.printer.CoverOkListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onPtrCoverOk(param0: string, param1: string): void;
					});
					public constructor();
					public onPtrCoverOk(param0: string, param1: string): void;
				}
			}
		}
	}
}

declare module com {
	export module epson {
		export module eposdevice {
			export module printer {
				export class CoverOpenListener {
					public static class: java.lang.Class<com.epson.eposdevice.printer.CoverOpenListener>;
					/**
					 * Constructs a new instance of the com.epson.eposdevice.printer.CoverOpenListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onPtrCoverOpen(param0: string, param1: string): void;
					});
					public constructor();
					public onPtrCoverOpen(param0: string, param1: string): void;
				}
			}
		}
	}
}

declare module com {
	export module epson {
		export module eposdevice {
			export module printer {
				export class DrawerClosedListener {
					public static class: java.lang.Class<com.epson.eposdevice.printer.DrawerClosedListener>;
					/**
					 * Constructs a new instance of the com.epson.eposdevice.printer.DrawerClosedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onPtrDrawerClosed(param0: string, param1: string): void;
					});
					public constructor();
					public onPtrDrawerClosed(param0: string, param1: string): void;
				}
			}
		}
	}
}

declare module com {
	export module epson {
		export module eposdevice {
			export module printer {
				export class DrawerOpenListener {
					public static class: java.lang.Class<com.epson.eposdevice.printer.DrawerOpenListener>;
					/**
					 * Constructs a new instance of the com.epson.eposdevice.printer.DrawerOpenListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onPtrDrawerOpen(param0: string, param1: string): void;
					});
					public constructor();
					public onPtrDrawerOpen(param0: string, param1: string): void;
				}
			}
		}
	}
}

declare module com {
	export module epson {
		export module eposdevice {
			export module printer {
				export class JobReceiveListener extends com.epson.eposdevice.printer.ReceiveListener {
					public static class: java.lang.Class<com.epson.eposdevice.printer.JobReceiveListener>;
					/**
					 * Constructs a new instance of the com.epson.eposdevice.printer.JobReceiveListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onPtrReceive(param0: string, param1: string, param2: number, param3: number, param4: number, param5: number, param6: string): void;
						onPtrReceive(param0: string, param1: string, param2: number, param3: number, param4: number, param5: number): void;
					});
					public constructor();
					public onPtrReceive(param0: string, param1: string, param2: number, param3: number, param4: number, param5: number, param6: string): void;
					public onPtrReceive(param0: string, param1: string, param2: number, param3: number, param4: number, param5: number): void;
				}
			}
		}
	}
}

declare module com {
	export module epson {
		export module eposdevice {
			export module printer {
				export abstract class NativePrinter {
					public static class: java.lang.Class<com.epson.eposdevice.printer.NativePrinter>;
					public static NATIVE_TRUE: number;
					public static NATIVE_FALSE: number;
					public static NATIVE_PARAM_UNSPECIFIED: number;
					public static NATIVE_PARAM_DEFAULT: number;
					public static NATIVE_ST_NO_RESPONSE: number;
					public static NATIVE_ST_PRINT_SUCCESS: number;
					public static NATIVE_ST_DRAWER_KICK: number;
					public static NATIVE_ST_BATTERY_OFFLINE: number;
					public static NATIVE_ST_OFF_LINE: number;
					public static NATIVE_ST_COVER_OPEN: number;
					public static NATIVE_ST_PAPER_FEED: number;
					public static NATIVE_ST_WAIT_ON_LINE: number;
					public static NATIVE_ST_PANEL_SWITCH: number;
					public static NATIVE_ST_MECHANICAL_ERR: number;
					public static NATIVE_ST_AUTOCUTTER_ERR: number;
					public static NATIVE_ST_UNRECOVER_ERR: number;
					public static NATIVE_ST_AUTORECOVER_ERR: number;
					public static NATIVE_ST_RECEIPT_NEAR_END: number;
					public static NATIVE_ST_RECEIPT_END: number;
					public static NATIVE_ST_BUZZER: number;
					public static NATIVE_ST_SPOOLER_IS_STOPPED: number;
					public static NATIVE_ALIGN_LEFT: number;
					public static NATIVE_ALIGN_CENTER: number;
					public static NATIVE_ALIGN_RIGHT: number;
					public static NATIVE_LANG_EN: number;
					public static NATIVE_LANG_JA: number;
					public static NATIVE_LANG_ZH_CN: number;
					public static NATIVE_LANG_ZH_TW: number;
					public static NATIVE_LANG_KO: number;
					public static NATIVE_LANG_TH: number;
					public static NATIVE_FONT_A: number;
					public static NATIVE_FONT_B: number;
					public static NATIVE_FONT_C: number;
					public static NATIVE_FONT_D: number;
					public static NATIVE_FONT_E: number;
					public static NATIVE_COLOR_NONE: number;
					public static NATIVE_COLOR_1: number;
					public static NATIVE_COLOR_2: number;
					public static NATIVE_COLOR_3: number;
					public static NATIVE_COLOR_4: number;
					public static NATIVE_MODE_MONO: number;
					public static NATIVE_MODE_GRAY16: number;
					public static NATIVE_HALFTONE_DITHER: number;
					public static NATIVE_HALFTONE_ERROR_DIFFUSION: number;
					public static NATIVE_HALFTONE_THRESHOLD: number;
					public static NATIVE_BARCODE_UPC_A: number;
					public static NATIVE_BARCODE_UPC_E: number;
					public static NATIVE_BARCODE_EAN13: number;
					public static NATIVE_BARCODE_JAN13: number;
					public static NATIVE_BARCODE_EAN8: number;
					public static NATIVE_BARCODE_JAN8: number;
					public static NATIVE_BARCODE_CODE39: number;
					public static NATIVE_BARCODE_ITF: number;
					public static NATIVE_BARCODE_CODABAR: number;
					public static NATIVE_BARCODE_CODE93: number;
					public static NATIVE_BARCODE_CODE128: number;
					public static NATIVE_BARCODE_GS1_128: number;
					public static NATIVE_BARCODE_GS1_DATABAR_OMNIDIRECTIONAL: number;
					public static NATIVE_BARCODE_GS1_DATABAR_TRUNCATED: number;
					public static NATIVE_BARCODE_GS1_DATABAR_LIMITED: number;
					public static NATIVE_BARCODE_GS1_DATABAR_EXPANDED: number;
					public static NATIVE_HRI_NONE: number;
					public static NATIVE_HRI_ABOVE: number;
					public static NATIVE_HRI_BELOW: number;
					public static NATIVE_HRI_BOTH: number;
					public static NATIVE_SYMBOL_PDF417_STANDARD: number;
					public static NATIVE_SYMBOL_PDF417_TRUNCATED: number;
					public static NATIVE_SYMBOL_QRCODE_MODEL_1: number;
					public static NATIVE_SYMBOL_QRCODE_MODEL_2: number;
					public static NATIVE_SYMBOL_MAXICODE_MODE_2: number;
					public static NATIVE_SYMBOL_MAXICODE_MODE_3: number;
					public static NATIVE_SYMBOL_MAXICODE_MODE_4: number;
					public static NATIVE_SYMBOL_MAXICODE_MODE_5: number;
					public static NATIVE_SYMBOL_MAXICODE_MODE_6: number;
					public static NATIVE_SYMBOL_GS1_DATABAR_STACKED: number;
					public static NATIVE_SYMBOL_GS1_DATABAR_STACKED_OMNIDIRECTIONAL: number;
					public static NATIVE_SYMBOL_GS1_DATABAR_EXPANDED_STACKED: number;
					public static NATIVE_SYMBOL_AZTECCODE_FULLRANGE: number;
					public static NATIVE_SYMBOL_AZTECCODE_COMPACT: number;
					public static NATIVE_SYMBOL_DATAMATRIX_SQUARE: number;
					public static NATIVE_SYMBOL_DATAMATRIX_RECTANGLE_8: number;
					public static NATIVE_SYMBOL_DATAMATRIX_RECTANGLE_12: number;
					public static NATIVE_SYMBOL_DATAMATRIX_RECTANGLE_16: number;
					public static NATIVE_SYMBOL_QRCODE_MICRO: number;
					public static NATIVE_LEVEL_0: number;
					public static NATIVE_LEVEL_1: number;
					public static NATIVE_LEVEL_2: number;
					public static NATIVE_LEVEL_3: number;
					public static NATIVE_LEVEL_4: number;
					public static NATIVE_LEVEL_5: number;
					public static NATIVE_LEVEL_6: number;
					public static NATIVE_LEVEL_7: number;
					public static NATIVE_LEVEL_8: number;
					public static NATIVE_LEVEL_L: number;
					public static NATIVE_LEVEL_M: number;
					public static NATIVE_LEVEL_Q: number;
					public static NATIVE_LEVEL_H: number;
					public static NATIVE_LEVEL_DEFAULT: number;
					public static NATIVE_LINE_THIN: number;
					public static NATIVE_LINE_MEDIUM: number;
					public static NATIVE_LINE_THICK: number;
					public static NATIVE_LINE_THIN_DOUBLE: number;
					public static NATIVE_LINE_MEDIUM_DOUBLE: number;
					public static NATIVE_LINE_THICK_DOUBLE: number;
					public static NATIVE_DIRECTION_LEFT_TO_RIGHT: number;
					public static NATIVE_DIRECTION_BOTTOM_TO_TOP: number;
					public static NATIVE_DIRECTION_RIGHT_TO_LEFT: number;
					public static NATIVE_DIRECTION_TOP_TO_BOTTOM: number;
					public static NATIVE_CUT_NO_FEED: number;
					public static NATIVE_CUT_FEED: number;
					public static NATIVE_CUT_RESERVE: number;
					public static NATIVE_DRAWER_1: number;
					public static NATIVE_DRAWER_2: number;
					public static NATIVE_PULSE_100: number;
					public static NATIVE_PULSE_200: number;
					public static NATIVE_PULSE_300: number;
					public static NATIVE_PULSE_400: number;
					public static NATIVE_PULSE_500: number;
					public static NATIVE_PATTERN_NONE: number;
					public static NATIVE_PATTERN_A: number;
					public static NATIVE_PATTERN_B: number;
					public static NATIVE_PATTERN_C: number;
					public static NATIVE_PATTERN_D: number;
					public static NATIVE_PATTERN_E: number;
					public static NATIVE_PATTERN_ERROR: number;
					public static NATIVE_PATTERN_PAPER_END: number;
					public static NATIVE_PATTERN_1: number;
					public static NATIVE_PATTERN_2: number;
					public static NATIVE_PATTERN_3: number;
					public static NATIVE_PATTERN_4: number;
					public static NATIVE_PATTERN_5: number;
					public static NATIVE_PATTERN_6: number;
					public static NATIVE_PATTERN_7: number;
					public static NATIVE_PATTERN_8: number;
					public static NATIVE_PATTERN_9: number;
					public static NATIVE_PATTERN_10: number;
					public static NATIVE_FEED_PEELING: number;
					public static NATIVE_FEED_CUTTING: number;
					public static NATIVE_FEED_CURRENT_TOF: number;
					public static NATIVE_FEED_NEXT_TOF: number;
					public static NATIVE_LAYOUT_RECEIPT: number;
					public static NATIVE_LAYOUT_LABEL: number;
					public static NATIVE_LAYOUT_LABEL_BM: number;
					public static NATIVE_LAYOUT_RECEIPT_BM: number;
					public static NATIVE_DRAWER_OPEN_LEVEL_LOW: number;
					public static NATIVE_DRAWER_OPEN_LEVEL_HIGH: number;
					public nativeAddPageDirection(param0: number, param1: number): number;
					public nativeSetPtrOfflineEventCallback(param0: number, param1: com.epson.eposdevice.printer.NativePrinter): number;
					public nativeOnPtrCoverOpen(param0: string, param1: string): void;
					public nativeAddFeedLine(param0: number, param1: number): number;
					public nativeOnPtrStatusChange(param0: string, param1: string, param2: number): void;
					public nativeSetPtrPowerOffEventCallback(param0: number, param1: com.epson.eposdevice.printer.NativePrinter): number;
					public nativeAddPulse(param0: number, param1: number, param2: number): number;
					public nativeAddTextLineSpace(param0: number, param1: number): number;
					public nativeOnPtrBatteryStatusChange(param0: string, param1: string, param2: number): void;
					public nativeAddPageBegin(param0: number): number;
					public nativeSetPtrOnlineEventCallback(param0: number, param1: com.epson.eposdevice.printer.NativePrinter): number;
					public nativeStartMonitor(param0: number, param1: number): number;
					public nativeAddImage(param0: number, param1: native.Array<number>, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: number, param9: number, param10: number, param11: number): number;
					public nativeOnPtrOffline(param0: string, param1: string): void;
					public nativeOnPtrReceive(param0: string, param1: string, param2: number, param3: number, param4: number, param5: number, param6: string): void;
					public nativeOnPtrBatteryOk(param0: string, param1: string): void;
					public nativeSetPtrCoverOkEventCallback(param0: number, param1: com.epson.eposdevice.printer.NativePrinter): number;
					public nativeAddSound(param0: number, param1: number, param2: number, param3: number): number;
					public nativeOnPtrBatteryLow(param0: string, param1: string): void;
					public nativeSetPtrBatteryLowEventCallback(param0: number, param1: com.epson.eposdevice.printer.NativePrinter): number;
					public nativeStopMonitor(param0: number): number;
					public nativeAddVLineEnd(param0: number, param1: number, param2: number): number;
					public nativeAddRecovery(param0: number): number;
					public nativeAddHLine(param0: number, param1: number, param2: number, param3: number): number;
					public nativeOnPtrPaperOk(param0: string, param1: string): void;
					public nativeAddTextSmooth(param0: number, param1: number): number;
					public nativeAddTextVPosition(param0: number, param1: number): number;
					public nativeAddPageEnd(param0: number): number;
					public nativeAddTextRotate(param0: number, param1: number): number;
					public nativeAddCut(param0: number, param1: number): number;
					public nativeOnPtrCoverOk(param0: string, param1: string): void;
					public nativeOnPtrPaperNearEnd(param0: string, param1: string): void;
					public nativeSetPtrCoverOpenEventCallback(param0: number, param1: com.epson.eposdevice.printer.NativePrinter): number;
					public nativeAddTextSize(param0: number, param1: number, param2: number): number;
					public nativeOnPtrOnline(param0: string, param1: string): void;
					public nativeSetPtrDrawerClosedEventCallback(param0: number, param1: com.epson.eposdevice.printer.NativePrinter): number;
					public nativeAddFeedUnit(param0: number, param1: number): number;
					public nativeOnPtrPowerOff(param0: string, param1: string): void;
					public nativeReset(param0: number, param1: boolean): number;
					public nativeClearCommandBuffer(param0: number): number;
					public nativeSetPtrBatteryStatusChangeEventCallback(param0: number, param1: com.epson.eposdevice.printer.NativePrinter): number;
					public nativeSetPtrReceiveEventCallback(param0: number, param1: com.epson.eposdevice.printer.NativePrinter): number;
					public nativeAddVLineBegin(param0: number, param1: number, param2: number): number;
					public nativeSetPtrStatusChangeEventCallback(param0: number, param1: com.epson.eposdevice.printer.NativePrinter): number;
					public nativeAddBarcode(param0: number, param1: string, param2: number, param3: number, param4: number, param5: number, param6: number): number;
					public nativeAddFeedPosition(param0: number, param1: number): number;
					public nativeAddCommand(param0: number, param1: native.Array<number>): number;
					public nativeRecovery(param0: number): number;
					public nativeAddLayout(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number): number;
					public nativeAddPageArea(param0: number, param1: number, param2: number, param3: number, param4: number): number;
					public nativeSendData(param0: number, param1: number, param2: string, param3: boolean, param4: boolean): number;
					public nativeAddPagePosition(param0: number, param1: number, param2: number): number;
					public nativeAddTextDouble(param0: number, param1: number, param2: number): number;
					public nativeAddTextStyle(param0: number, param1: number, param2: number, param3: number, param4: number): number;
					public nativeOnPtrDrawerClosed(param0: string, param1: string): void;
					public nativeAddTextAlign(param0: number, param1: number): number;
					public nativeOnPtrDrawerOpen(param0: string, param1: string): void;
					public nativeSetDrawerOpenLevel(param0: number, param1: number): number;
					public nativeAddFeed(param0: number): number;
					public nativeSetPtrPaperNearEndEventCallback(param0: number, param1: com.epson.eposdevice.printer.NativePrinter): number;
					public nativeSetPtrDrawerOpenEventCallback(param0: number, param1: com.epson.eposdevice.printer.NativePrinter): number;
					public nativeSetPtrBatteryOkEventCallback(param0: number, param1: com.epson.eposdevice.printer.NativePrinter): number;
					public nativeSetInterval(param0: number, param1: number): number;
					public nativeSetPtrPaperOkEventCallback(param0: number, param1: com.epson.eposdevice.printer.NativePrinter): number;
					public nativeSetPtrPaperEndEventCallback(param0: number, param1: com.epson.eposdevice.printer.NativePrinter): number;
					public nativeAddTextLang(param0: number, param1: number): number;
					public nativeAddPageRectangle(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number): number;
					public nativeAddPageLine(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number): number;
					public nativeAddReset(param0: number): number;
					public nativeAddText(param0: number, param1: string): number;
					public nativeAddTextFont(param0: number, param1: number): number;
					public nativeAddTextPosition(param0: number, param1: number): number;
					public nativeAddLogo(param0: number, param1: number, param2: number): number;
					public nativeAddSymbol(param0: number, param1: string, param2: number, param3: number, param4: number, param5: number, param6: number): number;
					public nativeOnPtrPaperEnd(param0: string, param1: string): void;
				}
			}
		}
	}
}

declare module com {
	export module epson {
		export module eposdevice {
			export module printer {
				export class OfflineListener {
					public static class: java.lang.Class<com.epson.eposdevice.printer.OfflineListener>;
					/**
					 * Constructs a new instance of the com.epson.eposdevice.printer.OfflineListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onPtrOffline(param0: string, param1: string): void;
					});
					public constructor();
					public onPtrOffline(param0: string, param1: string): void;
				}
			}
		}
	}
}

declare module com {
	export module epson {
		export module eposdevice {
			export module printer {
				export class OnlineListener {
					public static class: java.lang.Class<com.epson.eposdevice.printer.OnlineListener>;
					/**
					 * Constructs a new instance of the com.epson.eposdevice.printer.OnlineListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onPtrOnline(param0: string, param1: string): void;
					});
					public constructor();
					public onPtrOnline(param0: string, param1: string): void;
				}
			}
		}
	}
}

declare module com {
	export module epson {
		export module eposdevice {
			export module printer {
				export class PaperEndListener {
					public static class: java.lang.Class<com.epson.eposdevice.printer.PaperEndListener>;
					/**
					 * Constructs a new instance of the com.epson.eposdevice.printer.PaperEndListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onPtrPaperEnd(param0: string, param1: string): void;
					});
					public constructor();
					public onPtrPaperEnd(param0: string, param1: string): void;
				}
			}
		}
	}
}

declare module com {
	export module epson {
		export module eposdevice {
			export module printer {
				export class PaperNearEndListener {
					public static class: java.lang.Class<com.epson.eposdevice.printer.PaperNearEndListener>;
					/**
					 * Constructs a new instance of the com.epson.eposdevice.printer.PaperNearEndListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onPtrPaperNearEnd(param0: string, param1: string): void;
					});
					public constructor();
					public onPtrPaperNearEnd(param0: string, param1: string): void;
				}
			}
		}
	}
}

declare module com {
	export module epson {
		export module eposdevice {
			export module printer {
				export class PaperOkListener {
					public static class: java.lang.Class<com.epson.eposdevice.printer.PaperOkListener>;
					/**
					 * Constructs a new instance of the com.epson.eposdevice.printer.PaperOkListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onPtrPaperOk(param0: string, param1: string): void;
					});
					public constructor();
					public onPtrPaperOk(param0: string, param1: string): void;
				}
			}
		}
	}
}

declare module com {
	export module epson {
		export module eposdevice {
			export module printer {
				export class PowerOffListener {
					public static class: java.lang.Class<com.epson.eposdevice.printer.PowerOffListener>;
					/**
					 * Constructs a new instance of the com.epson.eposdevice.printer.PowerOffListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onPtrPowerOff(param0: string, param1: string): void;
					});
					public constructor();
					public onPtrPowerOff(param0: string, param1: string): void;
				}
			}
		}
	}
}

declare module com {
	export module epson {
		export module eposdevice {
			export module printer {
				export abstract class Printer extends com.epson.eposdevice.printer.NativePrinter {
					public static class: java.lang.Class<com.epson.eposdevice.printer.Printer>;
					public static TRUE: number;
					public static FALSE: number;
					public static PARAM_UNSPECIFIED: number;
					public static PARAM_DEFAULT: number;
					public static ST_NO_RESPONSE: number;
					public static ST_PRINT_SUCCESS: number;
					public static ST_DRAWER_KICK: number;
					public static ST_BATTERY_OFFLINE: number;
					public static ST_OFF_LINE: number;
					public static ST_COVER_OPEN: number;
					public static ST_PAPER_FEED: number;
					public static ST_WAIT_ON_LINE: number;
					public static ST_PANEL_SWITCH: number;
					public static ST_MECHANICAL_ERR: number;
					public static ST_AUTOCUTTER_ERR: number;
					public static ST_UNRECOVER_ERR: number;
					public static ST_AUTORECOVER_ERR: number;
					public static ST_RECEIPT_NEAR_END: number;
					public static ST_RECEIPT_END: number;
					public static ST_BUZZER: number;
					public static ST_SPOOLER_IS_STOPPED: number;
					public static ALIGN_LEFT: number;
					public static ALIGN_CENTER: number;
					public static ALIGN_RIGHT: number;
					public static LANG_EN: number;
					public static LANG_JA: number;
					public static LANG_ZH_CN: number;
					public static LANG_ZH_TW: number;
					public static LANG_KO: number;
					public static LANG_TH: number;
					public static FONT_A: number;
					public static FONT_B: number;
					public static FONT_C: number;
					public static FONT_D: number;
					public static FONT_E: number;
					public static COLOR_NONE: number;
					public static COLOR_1: number;
					public static COLOR_2: number;
					public static COLOR_3: number;
					public static COLOR_4: number;
					public static MODE_MONO: number;
					public static MODE_GRAY16: number;
					public static HALFTONE_DITHER: number;
					public static HALFTONE_ERROR_DIFFUSION: number;
					public static HALFTONE_THRESHOLD: number;
					public static BARCODE_UPC_A: number;
					public static BARCODE_UPC_E: number;
					public static BARCODE_EAN13: number;
					public static BARCODE_JAN13: number;
					public static BARCODE_EAN8: number;
					public static BARCODE_JAN8: number;
					public static BARCODE_CODE39: number;
					public static BARCODE_ITF: number;
					public static BARCODE_CODABAR: number;
					public static BARCODE_CODE93: number;
					public static BARCODE_CODE128: number;
					public static BARCODE_GS1_128: number;
					public static BARCODE_GS1_DATABAR_OMNIDIRECTIONAL: number;
					public static BARCODE_GS1_DATABAR_TRUNCATED: number;
					public static BARCODE_GS1_DATABAR_LIMITED: number;
					public static BARCODE_GS1_DATABAR_EXPANDED: number;
					public static HRI_NONE: number;
					public static HRI_ABOVE: number;
					public static HRI_BELOW: number;
					public static HRI_BOTH: number;
					public static SYMBOL_PDF417_STANDARD: number;
					public static SYMBOL_PDF417_TRUNCATED: number;
					public static SYMBOL_QRCODE_MODEL_1: number;
					public static SYMBOL_QRCODE_MODEL_2: number;
					public static SYMBOL_QRCODE_MICRO: number;
					public static SYMBOL_MAXICODE_MODE_2: number;
					public static SYMBOL_MAXICODE_MODE_3: number;
					public static SYMBOL_MAXICODE_MODE_4: number;
					public static SYMBOL_MAXICODE_MODE_5: number;
					public static SYMBOL_MAXICODE_MODE_6: number;
					public static SYMBOL_GS1_DATABAR_STACKED: number;
					public static SYMBOL_GS1_DATABAR_STACKED_OMNIDIRECTIONAL: number;
					public static SYMBOL_GS1_DATABAR_EXPANDED_STACKED: number;
					public static SYMBOL_AZTECCODE_FULLRANGE: number;
					public static SYMBOL_AZTECCODE_COMPACT: number;
					public static SYMBOL_DATAMATRIX_SQUARE: number;
					public static SYMBOL_DATAMATRIX_RECTANGLE_8: number;
					public static SYMBOL_DATAMATRIX_RECTANGLE_12: number;
					public static SYMBOL_DATAMATRIX_RECTANGLE_16: number;
					public static LEVEL_0: number;
					public static LEVEL_1: number;
					public static LEVEL_2: number;
					public static LEVEL_3: number;
					public static LEVEL_4: number;
					public static LEVEL_5: number;
					public static LEVEL_6: number;
					public static LEVEL_7: number;
					public static LEVEL_8: number;
					public static LEVEL_L: number;
					public static LEVEL_M: number;
					public static LEVEL_Q: number;
					public static LEVEL_H: number;
					public static LEVEL_DEFAULT: number;
					public static LINE_THIN: number;
					public static LINE_MEDIUM: number;
					public static LINE_THICK: number;
					public static LINE_THIN_DOUBLE: number;
					public static LINE_MEDIUM_DOUBLE: number;
					public static LINE_THICK_DOUBLE: number;
					public static DIRECTION_LEFT_TO_RIGHT: number;
					public static DIRECTION_BOTTOM_TO_TOP: number;
					public static DIRECTION_RIGHT_TO_LEFT: number;
					public static DIRECTION_TOP_TO_BOTTOM: number;
					public static CUT_NO_FEED: number;
					public static CUT_FEED: number;
					public static CUT_RESERVE: number;
					public static DRAWER_1: number;
					public static DRAWER_2: number;
					public static PULSE_100: number;
					public static PULSE_200: number;
					public static PULSE_300: number;
					public static PULSE_400: number;
					public static PULSE_500: number;
					public static PATTERN_NONE: number;
					public static PATTERN_A: number;
					public static PATTERN_B: number;
					public static PATTERN_C: number;
					public static PATTERN_D: number;
					public static PATTERN_E: number;
					public static PATTERN_ERROR: number;
					public static PATTERN_PAPER_END: number;
					public static PATTERN_1: number;
					public static PATTERN_2: number;
					public static PATTERN_3: number;
					public static PATTERN_4: number;
					public static PATTERN_5: number;
					public static PATTERN_6: number;
					public static PATTERN_7: number;
					public static PATTERN_8: number;
					public static PATTERN_9: number;
					public static PATTERN_10: number;
					public static FEED_PEELING: number;
					public static FEED_CUTTING: number;
					public static FEED_CURRENT_TOF: number;
					public static FEED_NEXT_TOF: number;
					public static LAYOUT_RECEIPT: number;
					public static LAYOUT_LABEL: number;
					public static LAYOUT_LABEL_BM: number;
					public static LAYOUT_RECEIPT_BM: number;
					public static DRAWER_OPEN_LEVEL_LOW: number;
					public static DRAWER_OPEN_LEVEL_HIGH: number;
					public setBatteryStatusChangeEventCallback(param0: com.epson.eposdevice.printer.BatteryStatusChangeListener): void;
					public addFeedPosition(param0: number): void;
					public addTextAlign(param0: number): void;
					public setOnlineEventCallback(param0: com.epson.eposdevice.printer.OnlineListener): void;
					public addVLineBegin(param0: number, param1: number): void;
					public nativeOnPtrCoverOpen(param0: string, param1: string): void;
					public addBarcode(param0: string, param1: number, param2: number, param3: number, param4: number, param5: number): void;
					public setReceiveEventCallback(param0: com.epson.eposdevice.printer.ReceiveListener): void;
					public addPageBegin(): void;
					public nativeOnPtrStatusChange(param0: string, param1: string, param2: number): void;
					public addCut(param0: number): void;
					public outputException(param0: string, param1: java.lang.Exception): void;
					public setCoverOkEventCallback(param0: com.epson.eposdevice.printer.CoverOkListener): void;
					public outputLogReturnFunction(param0: string, param1: native.Array<any>): void;
					public nativeOnPtrBatteryStatusChange(param0: string, param1: string, param2: number): void;
					public outputLogEvent(param0: string, param1: native.Array<any>): void;
					public nativeOnPtrOffline(param0: string, param1: string): void;
					public nativeOnPtrReceive(param0: string, param1: string, param2: number, param3: number, param4: number, param5: number, param6: string): void;
					public nativeOnPtrBatteryOk(param0: string, param1: string): void;
					public checkPrintJobIdFormat(param0: string): void;
					public clearCommandBuffer(): void;
					public getDrawerOpenLevel(): number;
					public sendData(): void;
					public nativeOnPtrBatteryLow(param0: string, param1: string): void;
					public addVLineEnd(param0: number, param1: number): void;
					public outputLogCallFunction(param0: string, param1: native.Array<any>): void;
					public addTextSize(param0: number, param1: number): void;
					public addSound(param0: number, param1: number, param2: number): void;
					public setDrawerOpenEventCallback(param0: com.epson.eposdevice.printer.DrawerOpenListener): void;
					public addPageEnd(): void;
					public nativeOnPtrPaperOk(param0: string, param1: string): void;
					public setInterval(param0: number): void;
					public setPaperNearEndEventCallback(param0: com.epson.eposdevice.printer.PaperNearEndListener): void;
					public getTimeout(): number;
					public addLayout(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number): void;
					public addRecovery(): void;
					public setOfflineEventCallback(param0: com.epson.eposdevice.printer.OfflineListener): void;
					public nativeOnPtrCoverOk(param0: string, param1: string): void;
					public nativeOnPtrPaperNearEnd(param0: string, param1: string): void;
					public getForce(): boolean;
					public addLogo(param0: number, param1: number): void;
					public setPaperEndEventCallback(param0: com.epson.eposdevice.printer.PaperEndListener): void;
					public addFeedUnit(param0: number): void;
					public getInterval(): number;
					public setStatusChangeEventCallback(param0: com.epson.eposdevice.printer.StatusChangeListener): void;
					public addPageLine(param0: number, param1: number, param2: number, param3: number, param4: number): void;
					public nativeOnPtrOnline(param0: string, param1: string): void;
					public setTimeout(param0: number): void;
					public addReset(): void;
					public addSymbol(param0: string, param1: number, param2: number, param3: number, param4: number, param5: number): void;
					public addText(param0: string): void;
					public addTextDouble(param0: number, param1: number): void;
					public setBatteryOkEventCallback(param0: com.epson.eposdevice.printer.BatteryOkListener): void;
					public sendData(param0: string): void;
					public nativeOnPtrPowerOff(param0: string, param1: string): void;
					public setBatteryLowEventCallback(param0: com.epson.eposdevice.printer.BatteryLowListener): void;
					public setHalftone(param0: number): void;
					public recover(): void;
					public addHLine(param0: number, param1: number, param2: number): void;
					public addPageRectangle(param0: number, param1: number, param2: number, param3: number, param4: number): void;
					public stopMonitor(): void;
					public addFeedLine(param0: number): void;
					public startMonitor(): void;
					public addTextVPosition(param0: number): void;
					public addPulse(param0: number, param1: number): void;
					public innerDeleteInstance(): void;
					public addTextLineSpace(param0: number): void;
					public addPagePosition(param0: number, param1: number): void;
					public setBrightness(param0: number): void;
					public nativeOnPtrDrawerClosed(param0: string, param1: string): void;
					public setDrawerOpenLevel(param0: number): void;
					public addTextPosition(param0: number): void;
					public nativeOnPtrDrawerOpen(param0: string, param1: string): void;
					public addTextRotate(param0: number): void;
					public setForce(param0: boolean): void;
					public getPrintJobStatus(param0: string): void;
					public constructor(param0: number);
					public getInnerHandle(): number;
					public addPageArea(param0: number, param1: number, param2: number, param3: number): void;
					public checkHandle(): void;
					public reset(): void;
					public setCoverOpenEventCallback(param0: com.epson.eposdevice.printer.CoverOpenListener): void;
					public addTextLang(param0: number): void;
					public addTextSmooth(param0: number): void;
					public addImage(param0: globalAndroid.graphics.Bitmap, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number): void;
					public getHalftone(): number;
					public addTextFont(param0: number): void;
					public addTextStyle(param0: number, param1: number, param2: number, param3: number): void;
					public setDrawerClosedEventCallback(param0: com.epson.eposdevice.printer.DrawerClosedListener): void;
					public setPowerOffEventCallback(param0: com.epson.eposdevice.printer.PowerOffListener): void;
					public addPageDirection(param0: number): void;
					public setPaperOkEventCallback(param0: com.epson.eposdevice.printer.PaperOkListener): void;
					public nativeOnPtrPaperEnd(param0: string, param1: string): void;
					public getBrightness(): number;
					public addCommand(param0: native.Array<number>): void;
					public addFeed(): void;
				}
			}
		}
	}
}

declare module com {
	export module epson {
		export module eposdevice {
			export module printer {
				export class ReceiveListener {
					public static class: java.lang.Class<com.epson.eposdevice.printer.ReceiveListener>;
					/**
					 * Constructs a new instance of the com.epson.eposdevice.printer.ReceiveListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onPtrReceive(param0: string, param1: string, param2: number, param3: number, param4: number, param5: number): void;
					});
					public constructor();
					public onPtrReceive(param0: string, param1: string, param2: number, param3: number, param4: number, param5: number): void;
				}
			}
		}
	}
}

declare module com {
	export module epson {
		export module eposdevice {
			export module printer {
				export class StatusChangeListener {
					public static class: java.lang.Class<com.epson.eposdevice.printer.StatusChangeListener>;
					/**
					 * Constructs a new instance of the com.epson.eposdevice.printer.StatusChangeListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onPtrStatusChange(param0: string, param1: string, param2: number): void;
					});
					public constructor();
					public onPtrStatusChange(param0: string, param1: string, param2: number): void;
				}
			}
		}
	}
}

declare module com {
	export module epson {
		export module eposdevice {
			export module scanner {
				export class DataListener {
					public static class: java.lang.Class<com.epson.eposdevice.scanner.DataListener>;
					/**
					 * Constructs a new instance of the com.epson.eposdevice.scanner.DataListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onScanData(param0: string, param1: string, param2: string): void;
					});
					public constructor();
					public onScanData(param0: string, param1: string, param2: string): void;
				}
			}
		}
	}
}

declare module com {
	export module epson {
		export module eposdevice {
			export module scanner {
				export abstract class NativeScanner {
					public static class: java.lang.Class<com.epson.eposdevice.scanner.NativeScanner>;
					public nativeOnScanData(param0: string, param1: string, param2: string): void;
					public nativeSetScanDataCallback(param0: number, param1: com.epson.eposdevice.scanner.NativeScanner): number;
				}
			}
		}
	}
}

declare module com {
	export module epson {
		export module eposdevice {
			export module scanner {
				export abstract class Scanner extends com.epson.eposdevice.scanner.NativeScanner {
					public static class: java.lang.Class<com.epson.eposdevice.scanner.Scanner>;
					public getInnerHandle(): number;
					public setDataEventCallback(param0: com.epson.eposdevice.scanner.DataListener): void;
					public nativeOnScanData(param0: string, param1: string, param2: string): void;
					public outputLogEvent(param0: string, param1: native.Array<any>): void;
					public outputException(param0: string, param1: java.lang.Exception): void;
					public innerDeleteInstance(): void;
					public constructor(param0: number);
					public outputLogCallFunction(param0: string, param1: native.Array<any>): void;
					public outputLogReturnFunction(param0: string, param1: native.Array<any>): void;
				}
			}
		}
	}
}

declare module com {
	export module epson {
		export module eposdevice {
			export module simpleserial {
				export class CommandReplayListener {
					public static class: java.lang.Class<com.epson.eposdevice.simpleserial.CommandReplayListener>;
					/**
					 * Constructs a new instance of the com.epson.eposdevice.simpleserial.CommandReplayListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onSimpleSerialCommandReplay(param0: string, param1: string, param2: native.Array<number>): void;
					});
					public constructor();
					public onSimpleSerialCommandReplay(param0: string, param1: string, param2: native.Array<number>): void;
				}
			}
		}
	}
}

declare module com {
	export module epson {
		export module eposdevice {
			export module simpleserial {
				export abstract class NativeSimpleSerial {
					public static class: java.lang.Class<com.epson.eposdevice.simpleserial.NativeSimpleSerial>;
					public nativeSetSscCommandReplyEventCallback(param0: number, param1: com.epson.eposdevice.simpleserial.NativeSimpleSerial): number;
					public nativeSscSendCommand(param0: number, param1: native.Array<number>): number;
					public nativeOnSimpleSerialCommandReply(param0: string, param1: string, param2: native.Array<number>): void;
				}
			}
		}
	}
}

declare module com {
	export module epson {
		export module eposdevice {
			export module simpleserial {
				export abstract class SimpleSerial extends com.epson.eposdevice.simpleserial.NativeSimpleSerial {
					public static class: java.lang.Class<com.epson.eposdevice.simpleserial.SimpleSerial>;
					public getInnerHandle(): number;
					public sendCommand(param0: native.Array<number>): void;
					public checkHandle(): void;
					public outputLogEvent(param0: string, param1: native.Array<any>): void;
					public nativeOnSimpleSerialCommandReply(param0: string, param1: string, param2: native.Array<number>): void;
					public setCommandReplyEventCallback(param0: com.epson.eposdevice.simpleserial.CommandReplayListener): void;
					public outputException(param0: string, param1: java.lang.Exception): void;
					public innerDeleteInstance(): void;
					public constructor(param0: number);
					public outputLogCallFunction(param0: string, param1: native.Array<any>): void;
					public outputLogReturnFunction(param0: string, param1: native.Array<any>): void;
				}
			}
		}
	}
}

declare module com {
	export module epson {
		export module eposprint {
			export class BatteryLowEventListener {
				public static class: java.lang.Class<com.epson.eposprint.BatteryLowEventListener>;
				/**
				 * Constructs a new instance of the com.epson.eposprint.BatteryLowEventListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onBatteryLowEvent(param0: string): void;
				});
				public constructor();
				public onBatteryLowEvent(param0: string): void;
			}
		}
	}
}

declare module com {
	export module epson {
		export module eposprint {
			export class BatteryOkEventListener {
				public static class: java.lang.Class<com.epson.eposprint.BatteryOkEventListener>;
				/**
				 * Constructs a new instance of the com.epson.eposprint.BatteryOkEventListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onBatteryOkEvent(param0: string): void;
				});
				public constructor();
				public onBatteryOkEvent(param0: string): void;
			}
		}
	}
}

declare module com {
	export module epson {
		export module eposprint {
			export class BatteryStatusChangeEventListener {
				public static class: java.lang.Class<com.epson.eposprint.BatteryStatusChangeEventListener>;
				/**
				 * Constructs a new instance of the com.epson.eposprint.BatteryStatusChangeEventListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onBatteryStatusChangeEvent(param0: string, param1: number): void;
				});
				public constructor();
				public onBatteryStatusChangeEvent(param0: string, param1: number): void;
			}
		}
	}
}

declare module com {
	export module epson {
		export module eposprint {
			export class Builder {
				public static class: java.lang.Class<com.epson.eposprint.Builder>;
				public static TRUE: number;
				public static FALSE: number;
				public static PARAM_UNSPECIFIED: number;
				public static PARAM_DEFAULT: number;
				public static MODEL_ANK: number;
				public static MODEL_JAPANESE: number;
				public static MODEL_CHINESE: number;
				public static MODEL_TAIWAN: number;
				public static MODEL_KOREAN: number;
				public static MODEL_THAI: number;
				public static MODEL_SOUTHASIA: number;
				public static ALIGN_LEFT: number;
				public static ALIGN_CENTER: number;
				public static ALIGN_RIGHT: number;
				public static LANG_EN: number;
				public static LANG_JA: number;
				public static LANG_ZH_CN: number;
				public static LANG_ZH_TW: number;
				public static LANG_KO: number;
				public static LANG_TH: number;
				public static LANG_VI: number;
				public static FONT_A: number;
				public static FONT_B: number;
				public static FONT_C: number;
				public static FONT_D: number;
				public static FONT_E: number;
				public static COLOR_NONE: number;
				public static COLOR_1: number;
				public static COLOR_2: number;
				public static COLOR_3: number;
				public static COLOR_4: number;
				public static MODE_MONO: number;
				public static MODE_GRAY16: number;
				public static HALFTONE_DITHER: number;
				public static HALFTONE_ERROR_DIFFUSION: number;
				public static HALFTONE_THRESHOLD: number;
				public static COMPRESS_NONE: number;
				public static COMPRESS_DEFLATE: number;
				public static BARCODE_UPC_A: number;
				public static BARCODE_UPC_E: number;
				public static BARCODE_EAN13: number;
				public static BARCODE_JAN13: number;
				public static BARCODE_EAN8: number;
				public static BARCODE_JAN8: number;
				public static BARCODE_CODE39: number;
				public static BARCODE_ITF: number;
				public static BARCODE_CODABAR: number;
				public static BARCODE_CODE93: number;
				public static BARCODE_CODE128: number;
				public static BARCODE_GS1_128: number;
				public static BARCODE_GS1_DATABAR_OMNIDIRECTIONAL: number;
				public static BARCODE_GS1_DATABAR_TRUNCATED: number;
				public static BARCODE_GS1_DATABAR_LIMITED: number;
				public static BARCODE_GS1_DATABAR_EXPANDED: number;
				public static HRI_NONE: number;
				public static HRI_ABOVE: number;
				public static HRI_BELOW: number;
				public static HRI_BOTH: number;
				public static SYMBOL_PDF417_STANDARD: number;
				public static SYMBOL_PDF417_TRUNCATED: number;
				public static SYMBOL_QRCODE_MODEL_1: number;
				public static SYMBOL_QRCODE_MODEL_2: number;
				public static SYMBOL_MAXICODE_MODE_2: number;
				public static SYMBOL_MAXICODE_MODE_3: number;
				public static SYMBOL_MAXICODE_MODE_4: number;
				public static SYMBOL_MAXICODE_MODE_5: number;
				public static SYMBOL_MAXICODE_MODE_6: number;
				public static SYMBOL_GS1_DATABAR_STACKED: number;
				public static SYMBOL_GS1_DATABAR_STACKED_OMNIDIRECTIONAL: number;
				public static SYMBOL_GS1_DATABAR_EXPANDED_STACKED: number;
				public static SYMBOL_AZTECCODE_FULLRANGE: number;
				public static SYMBOL_AZTECCODE_COMPACT: number;
				public static SYMBOL_DATAMATRIX_SQUARE: number;
				public static SYMBOL_DATAMATRIX_RECTANGLE_8: number;
				public static SYMBOL_DATAMATRIX_RECTANGLE_12: number;
				public static SYMBOL_DATAMATRIX_RECTANGLE_16: number;
				public static LEVEL_0: number;
				public static LEVEL_1: number;
				public static LEVEL_2: number;
				public static LEVEL_3: number;
				public static LEVEL_4: number;
				public static LEVEL_5: number;
				public static LEVEL_6: number;
				public static LEVEL_7: number;
				public static LEVEL_8: number;
				public static LEVEL_L: number;
				public static LEVEL_M: number;
				public static LEVEL_Q: number;
				public static LEVEL_H: number;
				public static LEVEL_DEFAULT: number;
				public static LINE_THIN: number;
				public static LINE_MEDIUM: number;
				public static LINE_THICK: number;
				public static LINE_THIN_DOUBLE: number;
				public static LINE_MEDIUM_DOUBLE: number;
				public static LINE_THICK_DOUBLE: number;
				public static DIRECTION_LEFT_TO_RIGHT: number;
				public static DIRECTION_BOTTOM_TO_TOP: number;
				public static DIRECTION_RIGHT_TO_LEFT: number;
				public static DIRECTION_TOP_TO_BOTTOM: number;
				public static CUT_NO_FEED: number;
				public static CUT_FEED: number;
				public static CUT_RESERVE: number;
				public static DRAWER_1: number;
				public static DRAWER_2: number;
				public static PULSE_100: number;
				public static PULSE_200: number;
				public static PULSE_300: number;
				public static PULSE_400: number;
				public static PULSE_500: number;
				public static PATTERN_A: number;
				public static PATTERN_B: number;
				public static PATTERN_C: number;
				public static PATTERN_D: number;
				public static PATTERN_E: number;
				public static PATTERN_ERROR: number;
				public static PATTERN_PAPER_END: number;
				public static PATTERN_1: number;
				public static PATTERN_2: number;
				public static PATTERN_3: number;
				public static PATTERN_4: number;
				public static PATTERN_5: number;
				public static PATTERN_6: number;
				public static PATTERN_7: number;
				public static PATTERN_8: number;
				public static PATTERN_9: number;
				public static PATTERN_10: number;
				public static FEED_PEELING: number;
				public static FEED_CUTTING: number;
				public static FEED_CURRENT_TOF: number;
				public static FEED_NEXT_TOF: number;
				public static LAYOUT_RECEIPT: number;
				public static LAYOUT_LABEL: number;
				public static LAYOUT_LABEL_BM: number;
				public static LAYOUT_RECEIPT_BM: number;
				public addTextLang(param0: number): void;
				public addTextAlign(param0: number): void;
				public addTextSize(param0: number, param1: number): void;
				public addPageDirection(param0: number): void;
				public addPagePosition(param0: number, param1: number): void;
				public finalize(): void;
				public addPageEnd(): void;
				public addImage(param0: globalAndroid.graphics.Bitmap, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: number): void;
				public clearCommandBuffer(): void;
				public addCommand(param0: native.Array<number>): void;
				public constructor(param0: string, param1: number, param2: globalAndroid.content.Context);
				public addTextFont(param0: number): void;
				public addLogo(param0: number, param1: number): void;
				public addPageLine(param0: number, param1: number, param2: number, param3: number, param4: number): void;
				public addText(param0: string): void;
				public addCut(param0: number): void;
				public constructor(param0: string, param1: number);
				public addTextPosition(param0: number): void;
				public addPageRectangle(param0: number, param1: number, param2: number, param3: number, param4: number): void;
				public addTextLineSpace(param0: number): void;
				public addTextRotate(param0: number): void;
				public addFeedPosition(param0: number): void;
				public addTextStyle(param0: number, param1: number, param2: number, param3: number): void;
				public addSymbol(param0: string, param1: number, param2: number, param3: number, param4: number, param5: number): void;
				public addVLineEnd(param0: number, param1: number): void;
				public addVLineBegin(param0: number, param1: number): void;
				public addSound(param0: number, param1: number): void;
				public addPageBegin(): void;
				public addFeedLine(param0: number): void;
				public addImage(param0: globalAndroid.graphics.Bitmap, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: number, param9: number): void;
				public addTextSmooth(param0: number): void;
				public addLayout(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number): void;
				public addBarcode(param0: string, param1: number, param2: number, param3: number, param4: number, param5: number): void;
				public addHLine(param0: number, param1: number, param2: number): void;
				public getHandle(): number;
				public addImage(param0: globalAndroid.graphics.Bitmap, param1: number, param2: number, param3: number, param4: number, param5: number): void;
				public addSound(param0: number, param1: number, param2: number): void;
				public addTextDouble(param0: number, param1: number): void;
				public addPulse(param0: number, param1: number): void;
				public addPageArea(param0: number, param1: number, param2: number, param3: number): void;
				public addFeedUnit(param0: number): void;
			}
		}
	}
}

declare module com {
	export module epson {
		export module eposprint {
			export class CoverOkEventListener {
				public static class: java.lang.Class<com.epson.eposprint.CoverOkEventListener>;
				/**
				 * Constructs a new instance of the com.epson.eposprint.CoverOkEventListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onCoverOkEvent(param0: string): void;
				});
				public constructor();
				public onCoverOkEvent(param0: string): void;
			}
		}
	}
}

declare module com {
	export module epson {
		export module eposprint {
			export class CoverOpenEventListener {
				public static class: java.lang.Class<com.epson.eposprint.CoverOpenEventListener>;
				/**
				 * Constructs a new instance of the com.epson.eposprint.CoverOpenEventListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onCoverOpenEvent(param0: string): void;
				});
				public constructor();
				public onCoverOpenEvent(param0: string): void;
			}
		}
	}
}

declare module com {
	export module epson {
		export module eposprint {
			export class DrawerClosedEventListener {
				public static class: java.lang.Class<com.epson.eposprint.DrawerClosedEventListener>;
				/**
				 * Constructs a new instance of the com.epson.eposprint.DrawerClosedEventListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onDrawerClosedEvent(param0: string): void;
				});
				public constructor();
				public onDrawerClosedEvent(param0: string): void;
			}
		}
	}
}

declare module com {
	export module epson {
		export module eposprint {
			export class DrawerOpenEventListener {
				public static class: java.lang.Class<com.epson.eposprint.DrawerOpenEventListener>;
				/**
				 * Constructs a new instance of the com.epson.eposprint.DrawerOpenEventListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onDrawerOpenEvent(param0: string): void;
				});
				public constructor();
				public onDrawerOpenEvent(param0: string): void;
			}
		}
	}
}

declare module com {
	export module epson {
		export module eposprint {
			export class EposException {
				public static class: java.lang.Class<com.epson.eposprint.EposException>;
				public static SUCCESS: number;
				public static ERR_PARAM: number;
				public static ERR_OPEN: number;
				public static ERR_CONNECT: number;
				public static ERR_TIMEOUT: number;
				public static ERR_MEMORY: number;
				public static ERR_ILLEGAL: number;
				public static ERR_PROCESSING: number;
				public static ERR_UNSUPPORTED: number;
				public static ERR_OFF_LINE: number;
				public static ERR_FAILURE: number;
				public constructor(param0: number, param1: number);
				public constructor(param0: number, param1: number, param2: number);
				public getErrorStatus(): number;
				public getPrinterStatus(): number;
				public constructor(param0: number);
				public constructor(param0: string, param1: java.lang.Throwable);
				public getBatteryStatus(): number;
			}
		}
	}
}

declare module com {
	export module epson {
		export module eposprint {
			export class Log {
				public static class: java.lang.Class<com.epson.eposprint.Log>;
				public static SDK_NAME: string;
				public static SDK_VERSION: string;
				public static LOG_TEMPORARY: number;
				public static LOG_PERMANENT: number;
				public static LOG_DISABLE: number;
				public static LOG_STORAGE: number;
				public static LOG_TCP: number;
				public static LOG_LOW: number;
				public static setLogSettings(param0: globalAndroid.content.Context, param1: number, param2: number, param3: string, param4: number, param5: number, param6: number): void;
				public constructor();
			}
		}
	}
}

declare module com {
	export module epson {
		export module eposprint {
			export class OfflineEventListener {
				public static class: java.lang.Class<com.epson.eposprint.OfflineEventListener>;
				/**
				 * Constructs a new instance of the com.epson.eposprint.OfflineEventListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onOfflineEvent(param0: string): void;
				});
				public constructor();
				public onOfflineEvent(param0: string): void;
			}
		}
	}
}

declare module com {
	export module epson {
		export module eposprint {
			export class OnlineEventListener {
				public static class: java.lang.Class<com.epson.eposprint.OnlineEventListener>;
				/**
				 * Constructs a new instance of the com.epson.eposprint.OnlineEventListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onOnlineEvent(param0: string): void;
				});
				public constructor();
				public onOnlineEvent(param0: string): void;
			}
		}
	}
}

declare module com {
	export module epson {
		export module eposprint {
			export class PaperEndEventListener {
				public static class: java.lang.Class<com.epson.eposprint.PaperEndEventListener>;
				/**
				 * Constructs a new instance of the com.epson.eposprint.PaperEndEventListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onPaperEndEvent(param0: string): void;
				});
				public constructor();
				public onPaperEndEvent(param0: string): void;
			}
		}
	}
}

declare module com {
	export module epson {
		export module eposprint {
			export class PaperNearEndEventListener {
				public static class: java.lang.Class<com.epson.eposprint.PaperNearEndEventListener>;
				/**
				 * Constructs a new instance of the com.epson.eposprint.PaperNearEndEventListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onPaperNearEndEvent(param0: string): void;
				});
				public constructor();
				public onPaperNearEndEvent(param0: string): void;
			}
		}
	}
}

declare module com {
	export module epson {
		export module eposprint {
			export class PaperOkEventListener {
				public static class: java.lang.Class<com.epson.eposprint.PaperOkEventListener>;
				/**
				 * Constructs a new instance of the com.epson.eposprint.PaperOkEventListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onPaperOkEvent(param0: string): void;
				});
				public constructor();
				public onPaperOkEvent(param0: string): void;
			}
		}
	}
}

declare module com {
	export module epson {
		export module eposprint {
			export class PowerOffEventListener {
				public static class: java.lang.Class<com.epson.eposprint.PowerOffEventListener>;
				/**
				 * Constructs a new instance of the com.epson.eposprint.PowerOffEventListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onPowerOffEvent(param0: string): void;
				});
				public constructor();
				public onPowerOffEvent(param0: string): void;
			}
		}
	}
}

declare module com {
	export module epson {
		export module eposprint {
			export class Print {
				public static class: java.lang.Class<com.epson.eposprint.Print>;
				public static TRUE: number;
				public static FALSE: number;
				public static PARAM_UNSPECIFIED: number;
				public static PARAM_DEFAULT: number;
				public static ST_NO_RESPONSE: number;
				public static ST_PRINT_SUCCESS: number;
				public static ST_DRAWER_KICK: number;
				public static ST_BATTERY_OFFLINE: number;
				public static ST_OFF_LINE: number;
				public static ST_COVER_OPEN: number;
				public static ST_PAPER_FEED: number;
				public static ST_WAIT_ON_LINE: number;
				public static ST_PANEL_SWITCH: number;
				public static ST_MECHANICAL_ERR: number;
				public static ST_AUTOCUTTER_ERR: number;
				public static ST_UNRECOVER_ERR: number;
				public static ST_AUTORECOVER_ERR: number;
				public static ST_RECEIPT_NEAR_END: number;
				public static ST_RECEIPT_END: number;
				public static ST_BUZZER: number;
				public static ST_HEAD_OVERHEAT: number;
				public static ST_MOTOR_OVERHEAT: number;
				public static ST_BATTERY_OVERHEAT: number;
				public static ST_WRONG_PAPER: number;
				public static DEVTYPE_TCP: number;
				public static DEVTYPE_BLUETOOTH: number;
				public static DEVTYPE_USB: number;
				public openPrinter(param0: number, param1: string): void;
				public beginTransaction(): void;
				public setBatteryOkEventCallback(param0: com.epson.eposprint.BatteryOkEventListener): void;
				public finalize(): void;
				public closePrinter(): void;
				public constructor();
				public openPrinter(param0: number, param1: string, param2: number, param3: number, param4: number): void;
				public constructor(param0: globalAndroid.content.Context);
				public sendData(param0: com.epson.eposprint.Builder, param1: number, param2: native.Array<number>, param3: native.Array<number>): void;
				public setCoverOpenEventCallback(param0: com.epson.eposprint.CoverOpenEventListener): void;
				public setPaperEndEventCallback(param0: com.epson.eposprint.PaperEndEventListener): void;
				public setCoverOkEventCallback(param0: com.epson.eposprint.CoverOkEventListener): void;
				public setBatteryStatusChangeEventCallback(param0: com.epson.eposprint.BatteryStatusChangeEventListener): void;
				public setStatusChangeEventCallback(param0: com.epson.eposprint.StatusChangeEventListener): void;
				public sendData(param0: com.epson.eposprint.Builder, param1: number, param2: native.Array<number>): void;
				public setOfflineEventCallback(param0: com.epson.eposprint.OfflineEventListener): void;
				public setPaperNearEndEventCallback(param0: com.epson.eposprint.PaperNearEndEventListener): void;
				public setDrawerClosedEventCallback(param0: com.epson.eposprint.DrawerClosedEventListener): void;
				public getStatus(param0: native.Array<number>, param1: native.Array<number>): void;
				public setOnlineEventCallback(param0: com.epson.eposprint.OnlineEventListener): void;
				public setPaperOkEventCallback(param0: com.epson.eposprint.PaperOkEventListener): void;
				public setPowerOffEventCallback(param0: com.epson.eposprint.PowerOffEventListener): void;
				public setDrawerOpenEventCallback(param0: com.epson.eposprint.DrawerOpenEventListener): void;
				public openPrinter(param0: number, param1: string, param2: number, param3: number): void;
				public endTransaction(): void;
				public setBatteryLowEventCallback(param0: com.epson.eposprint.BatteryLowEventListener): void;
			}
		}
	}
}

declare module com {
	export module epson {
		export module eposprint {
			export class StatusChangeEventListener {
				public static class: java.lang.Class<com.epson.eposprint.StatusChangeEventListener>;
				/**
				 * Constructs a new instance of the com.epson.eposprint.StatusChangeEventListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onStatusChangeEvent(param0: string, param1: number): void;
				});
				public constructor();
				public onStatusChangeEvent(param0: string, param1: number): void;
			}
		}
	}
}

declare module com {
	export module epson {
		export module epsonio {
			export class DevType {
				public static class: java.lang.Class<com.epson.epsonio.DevType>;
				public static NONE: number;
				public static TCP: number;
				public static BLUETOOTH: number;
				public static USB: number;
				public static ANY: number;
				public constructor();
			}
		}
	}
}

declare module com {
	export module epson {
		export module epsonio {
			export class DeviceInfo {
				public static class: java.lang.Class<com.epson.epsonio.DeviceInfo>;
				public getDeviceName(): string;
				public getMacAddress(): string;
				public getIpAddress(): string;
				public getDeviceType(): number;
				public constructor(param0: number, param1: string, param2: string, param3: string, param4: string);
				public getPrinterName(): string;
			}
		}
	}
}

declare module com {
	export module epson {
		export module epsonio {
			export class EpsonIo {
				public static class: java.lang.Class<com.epson.epsonio.EpsonIo>;
				public open(param0: number, param1: string, param2: string): void;
				public close(): void;
				public finalize(): void;
				public open(param0: number, param1: string, param2: string, param3: globalAndroid.content.Context): void;
				public constructor();
				public write(param0: native.Array<number>, param1: number, param2: number, param3: number): number;
				public read(param0: native.Array<number>, param1: number, param2: number, param3: number): number;
			}
		}
	}
}

declare module com {
	export module epson {
		export module epsonio {
			export class EpsonIoException {
				public static class: java.lang.Class<com.epson.epsonio.EpsonIoException>;
				public setStatus(param0: number): void;
				public getStatus(): number;
				public constructor(param0: number);
				public constructor(param0: string, param1: java.lang.Throwable);
			}
		}
	}
}

declare module com {
	export module epson {
		export module epsonio {
			export class FilterOption {
				public static class: java.lang.Class<com.epson.epsonio.FilterOption>;
				public static FILTER_NONE: number;
				public static FILTER_NAME: number;
				public static PARAM_DEFAULT: number;
				public constructor();
			}
		}
	}
}

declare module com {
	export module epson {
		export module epsonio {
			export class Finder {
				public static class: java.lang.Class<com.epson.epsonio.Finder>;
				public static PARAM_DEFAULT: number;
				public static FILTER_NONE: number;
				public static FILTER_NAME: number;
				public static start(param0: globalAndroid.content.Context, param1: number, param2: string): void;
				public static getResult(): native.Array<string>;
				public static stop(): void;
				public static getDeviceInfoList(param0: number): native.Array<com.epson.epsonio.DeviceInfo>;
				public constructor();
			}
		}
	}
}

declare module com {
	export module epson {
		export module epsonio {
			export class IoStatus {
				public static class: java.lang.Class<com.epson.epsonio.IoStatus>;
				public static SUCCESS: number;
				public static ERR_PARAM: number;
				public static ERR_OPEN: number;
				public static ERR_CONNECT: number;
				public static ERR_TIMEOUT: number;
				public static ERR_MEMORY: number;
				public static ERR_ILLEGAL: number;
				public static ERR_PROCESSING: number;
				public static ERR_FAILURE: number;
				public constructor();
			}
		}
	}
}

declare module com {
	export module epson {
		export module epsonio {
			export class NetIFInfo {
				public static class: java.lang.Class<com.epson.epsonio.NetIFInfo>;
				public static getNetInfoNum(param0: native.Array<number>): number;
				public static getNetInfoList(param0: number): native.Array<com.epson.epsonio.NetIfResult>;
				public constructor();
			}
		}
	}
}

declare module com {
	export module epson {
		export module epsonio {
			export class NetIfResult {
				public static class: java.lang.Class<com.epson.epsonio.NetIfResult>;
				public ipAddress: native.Array<number>;
				public macAddress: native.Array<number>;
				public constructor();
			}
		}
	}
}

declare module com {
	export module epson {
		export module epsonio {
			export class SupportUsb {
				public static class: java.lang.Class<com.epson.epsonio.SupportUsb>;
				public static start(param0: globalAndroid.content.Context, param1: number, param2: string): number;
				public static stop(): number;
				public static getResult(param0: native.Array<number>, param1: number): native.Array<com.epson.epsonio.DeviceInfo>;
				public constructor();
				public static isSupport(): java.lang.Boolean;
			}
		}
	}
}

declare module com {
	export module epson {
		export module epsonio {
			export module bluetooth {
				export class AdapterHandler {
					public static class: java.lang.Class<com.epson.epsonio.bluetooth.AdapterHandler>;
					public getAdapter(): globalAndroid.bluetooth.BluetoothAdapter;
					public constructor();
					public handleMessage(param0: globalAndroid.os.Message): void;
				}
			}
		}
	}
}

declare module com {
	export module epson {
		export module epsonio {
			export module bluetooth {
				export class DevBt {
					public static class: java.lang.Class<com.epson.epsonio.bluetooth.DevBt>;
					public static TRUE: number;
					public static FALSE: number;
					public constructor();
					public static stop(): number;
					public static start(param0: globalAndroid.content.Context, param1: number, param2: string, param3: number): number;
					public static getResult(param0: native.Array<number>, param1: number): native.Array<com.epson.epsonio.DeviceInfo>;
				}
			}
		}
	}
}

declare module com {
	export module epson {
		export module epsonio {
			export module bluetooth {
				export class NetBt {
					public static class: java.lang.Class<com.epson.epsonio.bluetooth.NetBt>;
					public constructor();
					public static kill(param0: number): number;
					public static close(param0: number): number;
					public static write(param0: number, param1: native.Array<number>, param2: number, param3: number, param4: number, param5: native.Array<number>): number;
					public static read(param0: number, param1: native.Array<number>, param2: number, param3: number, param4: number, param5: native.Array<number>): number;
					public static open(param0: string, param1: string, param2: native.Array<number>): number;
				}
			}
		}
	}
}

declare module com {
	export module epson {
		export module epsonio {
			export module usb {
				export class DevUsb {
					public static class: java.lang.Class<com.epson.epsonio.usb.DevUsb>;
					public constructor();
					public static stop(): number;
					public static start(param0: globalAndroid.content.Context, param1: number, param2: string): number;
					public static getResult(param0: native.Array<number>, param1: number): native.Array<com.epson.epsonio.DeviceInfo>;
				}
			}
		}
	}
}

declare module com {
	export module epson {
		export module epsonio {
			export module usb {
				export class NetUsb {
					public static class: java.lang.Class<com.epson.epsonio.usb.NetUsb>;
					public static getConnecter(param0: number): com.epson.epsonio.usb.UsbConnecter;
					public constructor();
					public static kill(param0: number): number;
					public static getOnlineTMStatus(param0: number, param1: native.Array<number>): number;
					public static enableFlowControl(param0: number, param1: number): number;
					public static close(param0: number): number;
					public static write(param0: number, param1: native.Array<number>, param2: number, param3: number, param4: number, param5: native.Array<number>): number;
					public static read(param0: number, param1: native.Array<number>, param2: number, param3: number, param4: number, param5: native.Array<number>): number;
					public static checkDeviceName(param0: string): java.lang.Boolean;
					public static getOnlineDMStatus(param0: number, param1: native.Array<number>): number;
					public static open(param0: string, param1: string, param2: native.Array<number>, param3: any): number;
					public static removeConnecter(param0: number): java.lang.Boolean;
				}
			}
		}
	}
}

declare module com {
	export module epson {
		export module epsonio {
			export module usb {
				export class UsbConnecter {
					public static class: java.lang.Class<com.epson.epsonio.usb.UsbConnecter>;
					public balkWrite(param0: native.Array<number>, param1: number, param2: native.Array<number>, param3: number): number;
					public checkDevice(param0: string): java.lang.Boolean;
					public ioctrlSend(param0: number, param1: number, param2: number): number;
					public close(): number;
					public getOnlineStatus(param0: native.Array<number>, param1: number): number;
					public balkRead(param0: native.Array<number>, param1: number, param2: native.Array<number>, param3: number): number;
					public getOnlineTMStatus(param0: native.Array<number>): number;
					public checkHandle(param0: number): java.lang.Boolean;
					public enableFlowControl(param0: number): number;
					public ioctrlRev(param0: number, param1: native.Array<number>): number;
					public constructor();
					public connect(param0: number, param1: globalAndroid.hardware.usb.UsbManager, param2: globalAndroid.hardware.usb.UsbDevice): number;
					public getOnlineDMStatus(param0: native.Array<number>): number;
				}
			}
		}
	}
}

//Generics information:

