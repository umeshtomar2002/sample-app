export default [
        {
            "errorCode": 10,
            "codeName": "DEVICE_CODE_INTERNAL_ERROR_1",
            "errorFormat": "Error",
            "cause": "Internal error when a file can not be opened for reading.",
            "solution": "Make sure your device storage is not full and reinstall the application. If the problem persists contact Binah.ai support team."
        },
        {
            "errorCode": 11,
            "codeName": "DEVICE_CODE_INTERNAL_ERROR_2",
            "errorFormat": "Error",
            "cause": "Internal error when a file cannot be opened for writing",
            "solution": "Make sure your device storage is not full and reinstall the application. If the problem persists contact Binah.ai support team."
        },
        {
            "errorCode": 12,
            "codeName": "DEVICE_CODE_INTERNAL_ERROR_3",
            "errorFormat": "Error",
            "cause": "Internal error",
            "solution": "Make sure your device storage is not full and reinstall the application. If the problem persists contact Binah.ai support team."
        },
        {
            "errorCode": 13,
            "codeName": "DEVICE_CODE_INTERNAL_ERROR_4",
            "errorFormat": "Error",
            "cause": "Internal error",
            "solution": "Make sure your device storage is not full and reinstall the application. If the problem persists contact Binah.ai support team."
        },
        {
            "errorCode": 17,
            "codeName": "DEVICE_CODE_CLOCK_SKEW_ERROR",
            "errorFormat": "Error",
            "cause": "Severe clock skew detected",
            "solution": "Please verify the clock and timezone is set correctly. It is recommended to set it \"automatically\" in the device settings."
        },
        {
            "errorCode": 18,
            "codeName": "DEVICE_CODE_MINIMUM_BROWSER_VERSION_ERROR",
            "errorFormat": "Error",
            "cause": "The browser version is lower than the minimum required version.",
            "solution": "Upgrade the device's browser or use another browser or another device."
        },
        {
            "errorCode": 1002,
            "codeName": "CAMERA_CODE_CAMERA_OPEN_ERROR",
            "errorFormat": "Error",
            "cause": "Could not open the camera",
            "solution": "Try again. Verify the device camera works properly restart the application reinstall the application"
        },
        {
            "errorCode": 1005,
            "codeName": "CAMERA_CODE_CAMERA_MISSING_PERMISSIONS_ERROR",
            "errorFormat": "Error",
            "cause": "The application does not have permissions from OS to open the camera",
            "solution": "Open the device settings and grant the application permissions to use the camera."
        },
        {
            "errorCode": 2001,
            "codeName": "LICENSE_CODE_INTERNAL_ERROR_18",
            "errorFormat": "Error",
            "cause": "Could not activate the license on the device.",
            "solution": "Make sure your device storage is not full and reinstall the application. If the problem persists contact Binah.ai support team."
        },
        {
            "errorCode": 2002,
            "codeName": "LICENSE_CODE_ACTIVATION_LIMIT_REACHED_ERROR",
            "errorFormat": "Error",
            "cause": "No more devices can be used with your license",
            "solution": "Contact Binah.ai customer support."
        },
        {
            "errorCode": 2003,
            "codeName": "LICENSE_CODE_METER_ATTRIBUTE_USES_LIMIT_REACHED_ERROR",
            "errorFormat": "Error",
            "cause": "No more measurements are allowed for the provided license. (Relevant only for customers which use \"By measurement\" payment tier.)",
            "solution": "Contact Binah.ai customer support."
        },
        {
            "errorCode": 2004,
            "codeName": "LICENSE_CODE_AUTHENTICATION_FAILED_ERROR",
            "errorFormat": "Error",
            "cause": "Several issues might cause this error: clock skew detected, the SDK was unable to authenticate the license, a bad token has been received from the license server",
            "solution": "Contact Binah.ai customer support."
        },
        {
            "errorCode": 2006,
            "codeName": "LICENSE_CODE_INTERNAL_ERROR_1",
            "errorFormat": "Error",
            "cause": "The provided product Id is invalid. Product ID is set internally.",
            "solution": "Contact Binah.ai customer support."
        },
        {
            "errorCode": 2007,
            "codeName": "LICENSE_CODE_INVALID_LICENSE_KEY_ERROR",
            "errorFormat": "Error",
            "cause": "The provided license key is invalid",
            "solution": "Use the license key provided by Binah.ai customer support. If the problem persists contact Binah.ai customer support."
        },
        {
            "errorCode": 2008,
            "codeName": "LICENSE_CODE_INTERNAL_ERROR_2",
            "errorFormat": "Error",
            "cause": "The provided license key is invalid",
            "solution": "Use the license key provided by Binah.ai customer support. If the problem persists contact Binah.ai customer support."
        },
        {
            "errorCode": 2009,
            "codeName": "LICENSE_CODE_INTERNAL_ERROR_3",
            "errorFormat": "Error",
            "cause": "The SDK is executed within a virtual machine. This mode is not supported.",
            "solution": "The application should run without using a virtual machine."
        },
        {
            "errorCode": 2010,
            "codeName": "LICENSE_CODE_REVOKED_LICENSE_ERROR",
            "errorFormat": "Error",
            "cause": "The license was revoked.",
            "solution": "Contact Binah.ai customer support."
        },
        {
            "errorCode": 2011,
            "codeName": "LICENSE_CODE_INTERNAL_ERROR_4",
            "errorFormat": "Error",
            "cause": "Internal error when the country of the current device IP addresses is blocked according to license. By defaul all countries are allowed.",
            "solution": "Contact Binah.ai customer support."
        },
        {
            "errorCode": 2012,
            "codeName": "LICENSE_CODE_INTERNAL_ERROR_5",
            "errorFormat": "Error",
            "cause": "Internal error when the current device IP is blocked according to license. By defaul all IP addresses are allowed.",
            "solution": "Contact Binah.ai customer support."
        },
        {
            "errorCode": 2014,
            "codeName": "LICENSE_CODE_INTERNAL_ERROR_7",
            "errorFormat": "Error",
            "cause": "Trial license error",
            "solution": "Contact Binah.ai customer support."
        },
        {
            "errorCode": 2015,
            "codeName": "LICENSE_CODE_INTERNAL_ERROR_8",
            "errorFormat": "Error",
            "cause": "Trial license error",
            "solution": "Contact Binah.ai customer support."
        },
        {
            "errorCode": 2016,
            "codeName": "LICENSE_CODE_INTERNAL_ERROR_9",
            "errorFormat": "Error",
            "cause": "SSL error. Unable to authenticate license server response.",
            "solution": "Retry the last operation. If the problem persists then try again later with another network or contact Binah.ai customer support."
        },
        {
            "errorCode": 2017,
            "codeName": "LICENSE_CODE_LICENSE_EXPIRED_ERROR",
            "errorFormat": "Error",
            "cause": "The license is expired.",
            "solution": "Contact Binah.ai customer support."
        },
        {
            "errorCode": 2018,
            "codeName": "LICENSE_CODE_LICENSE_SUSPENDED_ERROR",
            "errorFormat": "Error",
            "cause": "The license is suspended",
            "solution": "Contact Binah.ai customer support."
        },
        {
            "errorCode": 2020,
            "codeName": "LICENSE_CODE_TOKEN_EXPIRED_ERROR",
            "errorFormat": "Error",
            "cause": "The local token on the device is expired and a new license token is required. To simulate after successfully completing a measurement move your device local time ahead of the grace period and issue another measurement",
            "solution": "Verify your device local time and internet connection"
        },
        {
            "errorCode": 2021,
            "codeName": "LICENSE_CODE_DEVICE_DEACTIVATED_ERROR",
            "errorFormat": "Error",
            "cause": "The device is activated but has been deleted from the license server.",
            "solution": "Re-initiate another measurement in order to re-activate the device."
        },
        {
            "errorCode": 2022,
            "codeName": "LICENSE_CODE_INTERNAL_ERROR_10",
            "errorFormat": "Error",
            "cause": "Internal error. License configuration error",
            "solution": "Contact Binah.ai customer support."
        },
        {
            "errorCode": 2023,
            "codeName": "LICENSE_CODE_INTERNAL_ERROR_11",
            "errorFormat": "Error",
            "cause": "Internal license error",
            "solution": "Contact Binah.ai customer support."
        },
        {
            "errorCode": 2024,
            "codeName": "LICENSE_CODE_NETWORK_ISSUES_ERROR",
            "errorFormat": "Error",
            "cause": "Network issue prevents validating the license with the Binah license server.",
            "solution": "Try again later. If the problem persists use a different network."
        },
        {
            "errorCode": 2025,
            "codeName": "LICENSE_CODE_SSL_HANDSHAKE_ERROR",
            "errorFormat": "Error",
            "cause": "Certificate issue. It is possible that the device date\/time mismatch the actual date\/time",
            "solution": "Try again later. If the problem persists use a different network or contact Binah Support."
        },
        {
            "errorCode": 2030,
            "codeName": "LICENSE_CODE_INTERNAL_ERROR_16",
            "errorFormat": "Error",
            "cause": "Internal error",
            "solution": "Reinstall the application. If the problem persists contact Binah.ai customer support."
        },
        {
            "errorCode": 2032,
            "codeName": "LICENSE_CODE_INPUT_LICENSE_KEY_EMPTY_ERROR",
            "errorFormat": "Error",
            "cause": "No license key was provided to SDK.",
            "solution": "Initiate SDK with a valid license key provided by Binah.ai support team."
        },
        {
            "errorCode": 2033,
            "codeName": "LICENSE_CODE_INPUT_FINGERPRINT_EMPTY_ERROR",
            "errorFormat": "Error",
            "cause": "Internal error",
            "solution": "Contact Binah.ai customer support."
        },
        {
            "errorCode": 2034,
            "codeName": "LICENSE_CODE_INPUT_PRODUCT_ID_ILLEGAL_ERROR",
            "errorFormat": "Error",
            "cause": "Internal error",
            "solution": "Contact Binah.ai customer support."
        },
        {
            "errorCode": 2035,
            "codeName": "LICENSE_CODE_CANNOT_OPEN_FILE_FOR_READ_ERROR",
            "errorFormat": "Error",
            "cause": "Internal error",
            "solution": "Reinstall the application. If the problem persists contact Binah.ai customer support."
        },
        {
            "errorCode": 2036,
            "codeName": "LICENSE_CODE_MONTHLY_USAGE_TRACKING_REQUIRES_SYNC_ERROR",
            "errorFormat": "Error",
            "cause": "Returned on licenses from type \"Pay as You Go\" when the device fails to sync once a month",
            "solution": "Verify that the internet connection is available. Try again later if the problem persists."
        },
        {
            "errorCode": 2037,
            "codeName": "LICENSE_CODE_SSL_HANDSHAKE_DEVICE_DATE_ERROR",
            "errorFormat": "Error",
            "cause": "SSL error, could be beecause the device date is incorrect",
            "solution": "Verify that the device date is correct. Try a different network or try again later. Verify the device is configured to set date and time automatically."
        },
        {
            "errorCode": 2038,
            "codeName": "LICENSE_CODE_SSL_HANDSHAKE_CERTIFICATE_EXPIRED_ERROR",
            "errorFormat": "Error",
            "cause": "SSL error",
            "solution": "SSL network error. Try a different network, reinstall the application or try a different device. Verify the device is configured to use date and time automatically."
        },
        {
            "errorCode": 2039,
            "codeName": "LICENSE_CODE_MIN_SDK_ERROR",
            "errorFormat": "Error",
            "cause": "The license is not supported in this SDK version",
            "solution": "Upgrade to the latest SDK version or contact Binah.ai support team."
        },
        {
            "errorCode": 2040,
            "codeName": "LICENSE_CODE_SDK_VERSION_MISSING_ERROR",
            "errorFormat": "Error",
            "cause": "The SDK version is missing in SDK. Probably due to an integrity error.",
            "solution": "Contact Binah.ai customer support."
        },
        {
            "errorCode": 2041,
            "codeName": "LICENSE_CODE_FORBIDDEN_LICENSE_TYPE_ERROR",
            "errorFormat": "Error",
            "cause": "The license type is forbidden from being used with the current SDK type. (Probably \"annual active users\" license with Web SDK.)",
            "solution": "Use a diffferent license key with this SDK."
        },
        {
            "errorCode": 2042,
            "codeName": "LICENSE_CODE_NETWORK_TIMEOUT_ERROR",
            "errorFormat": "Error",
            "cause": "Timeout on a single network call",
            "solution": "Verify the speed and bandwidth of your internet connection is as expected. Restart the application, wait for a few seconds and try again. If the problem persists try using another network, try later or call binah.ai support team."
        },
        {
            "errorCode": 3003,
            "codeName": "MEASUREMENT_CODE_MISDETECTION_DURATION_EXCEEDS_LIMIT_ERROR",
            "errorFormat": "Error",
            "cause": "The face or finger was not detected for a period of over 0.5 second more than 2 times",
            "solution": "Most commonly happens due to movement or bad light conditions. Please try once again."
        },
        {
            "errorCode": 3004,
            "codeName": "MEASUREMENT_CODE_INVALID_RECENT_DETECTION_RATE_ERROR",
            "errorFormat": "Error",
            "cause": "Too many frame losses detected over 2 times during the measurement.",
            "solution": "Make sure your device is not overheated and not low in resources. Close any other application or service or restart your device. Make sure to follow the measurement guidelines as described in the release notes."
        },
        {
            "errorCode": 3006,
            "codeName": "MEASUREMENT_CODE_LICENSE_ACTIVATION_FAILED_ERROR",
            "errorFormat": "Error",
            "cause": "The license activation failed. For example due to tampered license file or proxy misconfiguration.",
            "solution": "Verify network connection try to reinstall the application. If the problem persists contact Binah.ai customer support."
        },
        {
            "errorCode": 3008,
            "codeName": "MEASUREMENT_CODE_INVALID_MEASUREMENT_AVERAGE_DETECTION_RATE_ERROR",
            "errorFormat": "Error",
            "cause": "Average detection rate is significantly lower than expected. Could be because the device is busy, overloaded, overheated or any other hardware operating system software or hardware issue.",
            "solution": "Close other applications which might consume system resources. Let the device rest in case it overheated and retry. If the problem persists try using another device."
        },
        {
            "errorCode": 3009,
            "codeName": "MEASUREMENT_CODE_TOO_MANY_FRAMES_INORDER_ERROR",
            "errorFormat": "Error",
            "cause": "Many concecutive frames were received in incorrect order according to their timestamp. This error is received if warning 3506 repeated multiple times.",
            "solution": "Rerun another measurement"
        },
        {
            "errorCode": 3500,
            "codeName": "MEASUREMENT_CODE_MISDETECTION_DURATION_EXCEEDS_LIMIT_WARNING",
            "errorFormat": "Warning",
            "cause": "The face or finger was not detected for a period of over 0.5 second.",
            "solution": "Make sure to follow the measurement guidelines as described in the release notes."
        },
        {
            "errorCode": 3504,
            "codeName": "MEASUREMENT_CODE_UNSUPPORTED_ORIENTATION_WARNING",
            "errorFormat": "Warning",
            "cause": "The device is rotated",
            "solution": "Rotate the device back to portrait mode with the home button(s) down"
        },
        {
            "errorCode": 3505,
            "codeName": "MEASUREMENT_CODE_INVALID_RECENT_FPS_RATE_WARNING",
            "errorFormat": "Warning",
            "cause": "Camera FPS is degraded and might affect measurement quality",
            "solution": "Please be sure to look directly into the camera without moving. If the issue persists, ensure the light in your surrounding area is uniformly distributed, without any light sources located behind you.\nIt might also happen due to an overloaded device. Close other applications which might consume system resources. Let the device rest in case it overheated and retry. If the problem persists try using another device.\nIt is not required to stop the measurement when this warning is received if no other errors were received."
        },
        {
            "errorCode": 3506,
            "codeName": "MEASUREMENT_CODE_MEASUREMENT_MISPLACED_FRAME_WARNING",
            "errorFormat": "Warning",
            "cause": "A frame was received in an incorrect order according to its timestamp",
            "solution": "Continue the measurement as usual"
        },
        {
            "errorCode": 4505,
            "codeName": "VITAL_SIGN_CODE_BLOOD_PRESSURE_PROCESSING_FAILED_WARNING",
            "errorFormat": "warning",
            "cause": "Could not process blood pressure vital signs. ",
            "solution": "Restart the application and retry."
        },
        {
            "errorCode": 4506,
            "codeName": "VITAL_SIGN_CODE_MEASURING_WITH_NO_ENABLED_VITAL_SIGNS_WARNING",
            "errorFormat": "warning",
            "cause": "No vital signs are processed as part of this measurement. Returned either when the license is not entitled to any vital signs, or the SDK has issues getting the license information.",
            "solution": "Instruct the user to wait for the SDK to get the license information and vital signs to be displayed."
        },
        {
            "errorCode": 7001,
            "codeName": "SDK_INITIALIZATION_INTERNAL_ERROR_1",
            "errorFormat": "Error",
            "cause": "Error",
            "solution": "Restart the application. If the problem persists reinstall the application or contact Binah.ai support team."
        },
        {
            "errorCode": 7002,
            "codeName": "INITIALIZATION_CODE_INVALID_PROCESSING_TIME_ERROR",
            "errorFormat": "Error",
            "cause": "Invalid session time was provided when creating a session",
            "solution": "Use valid session time. The allowed range is 20-180 sec."
        },
        {
            "errorCode": 7003,
            "codeName": "INITIALIZATION_CODE_SESSION_LISTENERS_MISMATCH",
            "errorFormat": "Error",
            "cause": "Using new listeners along with legacy API. ",
            "solution": "Use either the new listeners (ImageListener, VitalSignsListener, AlertListener) or the legacy listeners. Do not mix old API with new API, as it would lead to duplicate notifications and incorrect behavior of the application."
        },
        {
            "errorCode": 7005,
            "codeName": "INITIALIZATION_CODE_INVALID_LICENSE_FORMAT",
            "errorFormat": "Error",
            "cause": "The provided license key is either empty or its format is invalid",
            "solution": "Review the license key that was provided to the SDK. Make sure that the string that contains the license key is not empty, and that the format is valid. Do not include any spaces, new-line or special characters."
        }
    ]