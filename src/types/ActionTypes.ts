/**
 * Copyright (c) Microsoft Corporation. All rights reserved.  
 * Licensed under the MIT License.
 */
export enum AT {
    // UPDATE
    EDIT_APPLICATION_ASYNC = 'EDIT_APPLICATION_ASYNC',
    EDIT_APPLICATION_FULFILLED = 'EDIT_APPLICATION_FULFILLED',
    EDIT_APPSOURCE_ASYNC = 'EDIT_APPSOURCE_ASYNC',
    EDIT_APPSOURCE_FULFILLED = 'EDIT_APPSOURCE_FULFILLED',
    EDIT_ENTITY_ASYNC = 'EDIT_ENTITY_ASYNC',
    EDIT_ENTITY_FULFILLED = 'EDIT_ENTITY_FULFILLED',
    EDIT_ACTION_ASYNC = 'EDIT_ACTION_ASYNC',
    EDIT_ACTION_FULFILLED = 'EDIT_ACTION_FULFILLED',
    EDIT_TRAINDIALOG_ASYNC = 'EDIT_TRAINDIALOG_ASYNC',
    EDIT_TRAINDIALOG_FULFILLED = 'EDIT_TRAINDIALOG_FULFILLED',
    EDIT_TRAINDIALOG_MERGE_ASYNC = 'EDIT_TRAINDIALOG_MERGE_ASYNC',
    EDIT_TRAINDIALOG_MERGE_FULFILLED = 'EDIT_TRAINDIALOG_MERGE_FULFILLED',
    EDIT_TRAINDIALOG_REPLACE_ASYNC = 'EDIT_TRAINDIALOG_REPLACE_ASYNC',
    EDIT_TRAINDIALOG_REPLACE_FULFILLED = 'EDIT_TRAINDIALOG_REPLACE_FULFILLED',
    EDIT_CHAT_SESSION_EXPIRE_ASYNC = 'EDIT_CHAT_SESSION_EXPIRE_ASYNC',
    EDIT_APP_LIVE_TAG_ASYNC = 'EDIT_APP_LIVE_TAG_ASYNC',
    EDIT_APP_LIVE_TAG_FULFILLED = 'EDIT_APP_LIVE_TAG_FULFILLED',
    EDIT_APP_EDITING_TAG_ASYNC = 'EDIT_APP_EDITING_TAG_ASYNC',
    EDIT_APP_EDITING_TAG_FULFILLED = 'EDIT_APP_EDITING_TAG_FULFILLED',

    // TODO: Remove / Replace this. Don't think 'display' related state changes should exist here.
    // This implies coupling with display logic, but display logic should be responsibility of components.
    // DISPLAY
    SET_CURRENT_APP_ASYNC = 'SET_CURRENT_APP_ASYNC',
    SET_CONVERSATION_ID_ASYNC = 'SET_CONVERSATION_ID_ASYNC',
    SET_CURRENT_APP_FULFILLED = 'SET_CURRENT_APP_FULFILLED',
    SET_DISPLAY_MODE = 'SET_DISPLAY_MODE',
    SET_TIP_TYPE = 'SET_TIP_TYPE',
    SET_LOGIN_DISPLAY = 'SET_LOGIN_DISPLAY',
    SET_ERROR_DISPLAY = 'SET_ERROR_DISPLAY',
    SET_ERROR_DISMISS_CALLBACK = 'SET_ERROR_DISMISS_CALLBACK',
    SET_WEBCHAT_SCROLL_POSITION = 'SET_WEBCHAT_SCROLL_POSITION',
    SET_TEXTVARIATION_CONFLICT = 'SET_TEXTVARIATION_CONFLICT',
    SPINNER_ADD = 'SPINNER_ADD',
    SPINNER_REMOVE = 'SPINNER_REMOVE',
    CLEAR_WEBCHAT_SCROLL_POSITION = 'CLEAR_WEBCHAT_SCROLL_POSITION',
    CLEAR_BANNER = 'CLEAR_BANNER',
    CLEAR_ERROR_DISPLAY = 'CLEAR_ERROR_DISPLAY',
    UPDATE_OPERATION_FULFILLED = 'UPDATE_OPERATION_FULFILLED',
    USER_LOGIN = 'USER_LOGIN',
    USER_LOGOUT = 'USER_LOGOUT',
    NO_OP = 'NO_OP',

    // Source
    SOURCE_SET_UPDATED_APP_DEFINITION = 'SOURCE_SET_UPDATED_APP_DEFINITION',
    SOURCE_PROMOTE_UPDATED_APP_DEFINITION = 'SOURCE_PROMOTE_UPDATED_APP_DEFINITION',

    // FetchAction
    FETCH_APPLICATION_TRAININGSTATUS_ASYNC = 'FETCH_APPLICATION_TRAININGSTATUS_ASYNC',
    FETCH_APPLICATION_TRAININGSTATUS_FULFILLED = 'FETCH_APPLICATION_TRAININGSTATUS_FULFILLED',
    FETCH_APPLICATION_TRAININGSTATUS_EXPIRED = 'FETCH_APPLICATION_TRAININGSTATUS_EXPIRED',
    FETCH_APPLICATIONS_ASYNC = 'FETCH_APPLICATIONS_ASYNC',
    FETCH_APPLICATIONS_FULFILLED = 'FETCH_APPLICATIONS_FULFILLED',
    FETCH_BOTINFO_ASYNC = 'FETCH_BOTINFO_ASYNC',
    FETCH_BOTINFO_FULFILLED = 'FETCH_BOTINFO_FULFILLED',
    FETCH_ENTITIES_ASYNC = 'FETCH_ENTITIES_ASYNC',
    FETCH_ENTITIES_FULFILLED = 'FETCH_ENTITIES_FULFILLED',
    FETCH_APPSOURCE_ASYNC = 'FETCH_APPSOURCE_ASYNC',
    FETCH_APPSOURCE_FULFILLED = 'FETCH_APPSOURCE_FULFILLED',
    FETCH_APPSOURCE_UPDATED_FULFILLED = 'FETCH_APPSOURCE_UPDATED_FULFILLED',
    FETCH_ACTIONS_ASYNC = 'FETCH_ACTIONS_ASYNC',
    FETCH_ACTIONS_FULFILLED = 'FETCH_ACTIONS_FULFILLED',
    FETCH_CHAT_SESSIONS_ASYNC = 'FETCH_CHAT_SESSIONS_ASYNC',
    FETCH_CHAT_SESSIONS_FULFILLED = 'FETCH_CHAT_SESSIONS_FULFILLED',
    FETCH_HISTORY_ASYNC = 'FETCH_HISTORY_ASYNC',
    FETCH_HISTORY_FULFILLED = 'FETCH_HISTORY_FULFILLED',
    FETCH_TRAIN_DIALOG_ASYNC = 'FETCH_TRAIN_DIALOG_ASYNC',
    FETCH_TRAIN_DIALOG_FULFILLED = 'FETCH_TRAIN_DIALOG_FULFILLED',
    FETCH_TRAIN_DIALOGS_ASYNC = 'FETCH_TRAIN_DIALOGS_ASYNC',
    FETCH_TRAIN_DIALOGS_FULFILLED = 'FETCH_TRAIN_DIALOGS_FULFILLED',
    FETCH_LOG_DIALOGS_ASYNC = 'FETCH_LOG_DIALOGS_ASYNC',
    FETCH_LOG_DIALOGS_FULFILLED = 'FETCH_LOG_DIALOGS_FULFILLED',
    FETCH_PROFILE_ASYNC = 'FETCH_PROFILE_ASYNC',
    FETCH_PROFILE_FULFILLED = 'FETCH_PROFILE_FULFILLED',
    FETCH_ENTITY_DELETE_VALIDATION_ASYNC = 'FETCH_ENTITY_DELETE_VALIDATION_ASYNC',
    FETCH_ENTITY_DELETE_VALIDATION_FULFILLED = 'FETCH_ENTITY_DELETE_VALIDATION_FULFILLED',
    FETCH_ENTITY_EDIT_VALIDATION_ASYNC = 'FETCH_ENTITY_EDIT_VALIDATION_ASYNC',
    FETCH_ENTITY_EDIT_VALIDATION_FULFILLED = 'FETCH_ENTITY_EDIT_VALIDATION_FULFILLED',
    FETCH_EXTRACTIONS_ASYNC = 'FETCH_EXTRACTIONS_ASYNC',
    FETCH_EXTRACTIONS_FULFILLED = 'FETCH_EXTRACTIONS_FULFILLED',
    FETCH_ACTION_DELETE_VALIDATION_ASYNC = 'FETCH_ACTION_DELETE_VALIDATION_ASYNC',
    FETCH_ACTION_DELETE_VALIDATION_FULFILLED = 'FETCH_ACTION_DELETE_VALIDATION_FULFILLED',
    FETCH_ACTION_EDIT_VALIDATION_ASYNC = 'FETCH_ACTION_EDIT_VALIDATION_ASYNC',
    FETCH_ACTION_EDIT_VALIDATION_FULFILLED = 'FETCH_ACTION_EDIT_VALIDATION_FULFILLED',
    FETCH_SCOREFROMHISTORY_ASYNC = 'FETCH_SCOREFROMHISTORY_ASYNC',
    FETCH_SCOREFROMHISTORY_FULFILLED = 'FETCH_SCOREFROMHISTORY_FULFILLED',
    FETCH_SCOREFROMHISTORY_REJECTED = 'FETCH_SCOREFROMHISTORY_REJECTED',
    FETCH_EXTRACTFROMHISTORY_ASYNC = 'FETCH_EXTRACTFROMHISTORY_ASYNC',
    FETCH_EXTRACTFROMHISTORY_FULFILLED = 'FETCH_EXTRACTFROMHISTORY_FULFILLED',
    FETCH_EXTRACTFROMHISTORY_REJECTED = 'FETCH_EXTRACTFROMHISTORY_REJECTED',
    FETCH_TRAINDIALOGREPLAY_ASYNC = 'FETCH_TRAINDIALOGREPLAY_ASYNC',
    FETCH_TRAINDIALOGREPLAY_FULFILLED = 'FETCH_TRAINDIALOGREPLAY_FULFILLED',
    FETCH_TEXTVARIATION_CONFLICT_ASYNC = 'FETCH_TEXTVARIATION_CONFLICT_ASYNC',
    FETCH_TEXTVARIATION_CONFLICT_FULFILLED = 'FETCH_TEXTVARIATION_CONFLICT_FULFILLED',
    FETCH_TUTORIALS_ASYNC = 'FETCH_TUTORIAL_ASYNC',
    FETCH_TUTORIALS_FULFILLED = 'FETCH_TUTORIAL_FULFILLED',

    // CreateActions
    COPY_APPLICATION_ASYNC = 'COPY_APPLICATIONS_ASYNC',
    COPY_APPLICATION_FULFILLED = 'COPY_APPLICATIONS_FULFILLED',
    CREATE_APPLICATION_ASYNC = 'CREATE_APPLICATION_ASYNC',
    CREATE_APPLICATION_FULFILLED = 'CREATE_APPLICATION_FULFILLED',
    CREATE_ENTITY_ASYNC = 'CREATE_ENTITY_ASYNC',
    CREATE_ENTITY_FULFILLED = 'CREATE_ENTITY_FULFILLED',
    CREATE_REVERSIBLE_ENTITY = 'CREATE_REVERSIBLE_ENTITY',
    CREATE_ACTION_ASYNC = 'CREATE_ACTION_ASYNC',
    CREATE_ACTION_FULFILLED = 'CREATE_ACTION_FULFILLED',
    CREATE_APP_TAG_ASYNC = 'CREATE_APP_TAG_ASYNC',
    CREATE_APP_TAG_FULFILLED = 'CREATE_APP_TAG_FULFILLED',
    CREATE_TRAIN_DIALOG_ASYNC = 'CREATE_TRAIN_DIALOG_ASYNC',
    CREATE_TRAIN_DIALOG_FULFILLED = 'CREATE_TRAIN_DIALOG_FULFILLED',
    CREATE_TRAIN_DIALOG_REJECTED = 'CREATE_TRAIN_DIALOG_REJECTED',
    CREATE_LOG_DIALOG = 'CREATE_LOG_DIALOG',
    CREATE_CHAT_SESSION_ASYNC = 'CREATE_CHAT_SESSION_ASYNC',
    CREATE_CHAT_SESSION_REJECTED = 'CREATE_CHAT_SESSION_REJECTED',
    CREATE_CHAT_SESSION_FULFILLED = 'CREATE_CHAT_SESSION_FULFILLED',
    CREATE_TEACH_SESSION_ASYNC = 'CREATE_TEACH_SESSION_ASYNC',
    CREATE_TEACH_SESSION_REJECTED = 'CREATE_TEACH_SESSION_REJECTED',
    CREATE_TEACH_SESSION_FULFILLED = 'CREATE_TEACH_SESSION_FULFILLED',
    CREATE_TEACH_SESSION_FROMHISTORY_ASYNC = 'CREATE_TEACH_SESSION_FROM_HISTORY_ASYNC',
    CREATE_TEACH_SESSION_FROMHISTORY_FULFILLED = 'CREATE_TEACH_SESSION_FROM_HISTORY_FULFILLED',
    CREATE_TEACH_SESSION_FROMHISTORY_REJECTED = 'CREATE_TEACH_SESSION_FROM_HISTORY_REJECTED',

    // DeleteAction 
    DELETE_APPLICATION_ASYNC = 'DELETE_APPLICATION_ASYNC',
    DELETE_APPLICATION_FULFILLED = 'DELETE_APPLICATION_FULFILLED',
    DELETE_MEMORY_ASYNC = 'DELETE_MEMORY_ASYNC',
    DELETE_MEMORY_FULFILLED = 'DELETE_MEMORY_FULFILLED',
    DELETE_ENTITY_ASYNC = 'DELETE_ENTITY_ASYNC',
    DELETE_ENTITY_FULFILLED = 'DELETE_ENTITY_FULFILLED',
    DELETE_ACTION_ASYNC = 'DELETE_ACTION_ASYNC',
    DELETE_ACTION_FULFILLED = 'DELETE_ACTION_FULFILLED',
    DELETE_TRAIN_DIALOG_ASYNC = 'DELETE_TRAIN_DIALOG_ASYNC',
    DELETE_TRAIN_DIALOG_FULFILLED = 'DELETE_TRAIN_DIALOG_FULFILLED',
    DELETE_TRAIN_DIALOG_REJECTED = 'DELETE_TRAIN_DIALOG_REJECTED',
    DELETE_LOG_DIALOG_ASYNC = 'DELETE_LOG_DIALOG_ASYNC',
    DELETE_LOG_DIALOG_FULFILLED = 'DELETE_LOG_DIALOG_FULFILLED',
    DELETE_LOG_DIALOG_REJECTED = 'DELETE_LOG_DIALOG_REJECTED',
    DELETE_CHAT_SESSION_ASYNC = 'DELETE_CHAT_SESSION_ASYNC',
    DELETE_CHAT_SESSION_FULFILLED = 'DELETE_CHAT_SESSION_FULFILLED',
    DELETE_TEACH_SESSION_ASYNC = 'DELETE_TEACH_SESSION_ASYNC',
    DELETE_TEACH_SESSION_FULFILLED = 'DELETE_TEACH_SESSION_FULFILLED',
    CLEAR_TEACH_SESSION = 'CLEAR_TEACH_SESSION',
    DELETE_OPERATION_FULFILLED = 'DELETE_OPERATION_FULFILLED',

    //TeachAction
    RUN_EXTRACTOR_ASYNC = 'RUN_EXTRACTOR_ASYNC',
    RUN_EXTRACTOR_FULFILLED = 'RUN_EXTRACTOR_FULFILLED',
    UPDATE_EXTRACT_RESPONSE = 'UPDATE_EXTRACT_RESPONSE',
    UPDATE_SOURCE_LOG_DIALOG = 'UPDATE_SOURCE_LOG_DIALOG',
    REMOVE_EXTRACT_RESPONSE = 'REMOVE_EXTRACT_RESPONSE',
    CLEAR_EXTRACT_RESPONSES = 'CLEAR_EXTRACT_RESPONSES',
    CLEAR_EXTRACT_CONFLICT = 'CLEAR_EXTRACT_CONFLICT',
    GET_SCORES_ASYNC = 'GET_SCORES_ASYNC',
    GET_SCORES_FULFILLED = 'GET_SCORES_FULFILLED',
    RUN_SCORER_ASYNC = 'RUN_SCORER_ASYNC',
    RUN_SCORER_FULFILLED = 'RUN_SCORER_FULFILLED',
    POST_SCORE_FEEDBACK_ASYNC = 'POST_SCORE_FEEDBACK_ASYNC',
    POST_SCORE_FEEDBACK_FULFILLED = 'POST_SCORE_FEEDBACK_FULFILLED',
    TOGGLE_AUTO_TEACH = 'TOGGLE_AUTO_TEACH',

    SETTINGS_RESET = 'SETTINGS_RESET',
    SETTINGS_UPDATE = 'SETTINGS_UPDATE',
    SETTINGS_USE_CUSTOM_PORT = 'SETTING_USE_CUSTOM_PORT',
}
