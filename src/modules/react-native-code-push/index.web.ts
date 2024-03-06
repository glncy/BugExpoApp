const codePush = {
  SyncStatus: {
    UP_TO_DATE: 0,
    UPDATE_INSTALLED: 1,
    UPDATE_IGNORED: 2,
    UNKNOWN_ERROR: 3,
    SYNC_IN_PROGRESS: 4,
    CHECKING_FOR_UPDATE: 5,
    AWAITING_USER_ACTION: 6,
    DOWNLOADING_PACKAGE: 7,
    INSTALLING_UPDATE: 8,
  },
  CheckFrequency: {
    ON_APP_START: 0,
    ON_APP_RESUME: 1,
    MANUALLY: 2,
  },
};
type LocalPackage = null;

export { LocalPackage };
export default codePush;
