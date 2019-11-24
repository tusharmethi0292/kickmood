export const CONSTANT = {
    LIMIT: 10,
    MAX_LIMIT: 100,
    MAX_DB_INSERT_LIMIT: 100000,
    defaultRadius: 30, //in miles
    itemLimit: 10,
    DIGITAL_SIGNATURE: {
        passPhase: {
            str: 5,
            num: 3
        }
    },
    LOGGER: {
        patient: 'Patient',
        appointment: 'Appointment',
        transaction: 'Transactions',
        refund: 'Refunds',
        doctor: 'Doctor',
        nothing: 'Nothing',
        specialities: 'Specialites',
        forum: 'Forum',
        language: 'Language',
        
    },
    HTTP_STATUS_CODE: {
        OK: 200,
        AGAIN: 205,
        CREATED: 201,
        UPDATED: 202,
        NO_CONTENT: 204,
        BAD_REQUEST: 400,
        UNAUTHORIZED: 401,
        PAYMENY_REQUIRED: 402,
        ACCESS_FORBIDDEN: 403,
        URL_NOT_FOUND: 404,
        METHOD_NOT_ALLOWED: 405,
        UNREGISTERED: 410,
        PAYLOAD_TOO_LARGE: 413,
        CONCURRENT_LIMITED_EXCEEDED: 429,
        CALL_NOT_ONGOING: 431,
        INTERNAL_SERVER_ERROR: 500,
        BAD_GATEWAY: 502,
        SHUTDOWN: 503,

    },
    ADMIN: {
        PAYMENT: {
            TRANSACTION: 1,
            REFUND: 2
        },
        EXPIRE_TIME: 120 // it is in seconds
    },
    PAYMENT_MODE: {
        STRIPE: 1,
        PAYTM: 2,
        GOOGLEPAY: 3,
        RAZOR_PAY: 4
    },
    DOCID: {
        keyword: {
            prescription: "P",
            transaction: "T",
            appointment: "A",
            refund: "R",
            forum: "F",
            doctor: "D",
            patient: "P"
        }
    },
    SHIFA_SERVICE_CHARGE: 10, //in %age
    HTTP_RESPONSED: {
        FAILED_API_RESPONSE: (status, msg = null) => {
            return {
                success: false,
                statusCode: status,
                message: msg || 'Internal server error',
                result: {},
                time: 0
            }
        },
        INVALID_URL_RESPONSE: {
            success: false,
            statusCode: 404,
            message: 'Invalid route',
            result: {},
            time: 0
        }
    },
    DB_MODEL_REF: {
        ADMIN: "admins",
        PATIENT: "patients",
        DOCTOR: "doctors",
        CALL: "calls",
        ROOM: "rooms",
        EVENT: "events",
        PATIENT_SESSION: 'patientsessions',
        DOCTOR_SESSION: 'doctorSessions',
        DONATION: 'donations',
        DONATION_INTEREST: 'donation_interests',
        ADMIN_SESSION: 'adminSessions',
        DOCTOR_SLOT: 'doctorslots',
        PATIENT_AADHAR: 'patientaadhars',
        PATIENT_ATTORNEY: 'patientattorneys',
        PATIENT_GUARDIANSHIP: 'patientguardianships',
        PATIENT_WILL: 'patientwills',
        LANGUAGE: 'languages',
        SPECIALITY: 'specialities',
        CATEGORIES: 'categories',
        CURRENCY: 'currencies',
        RELATION: 'relations',
        LOGGER: 'loggers',
        APPOINTMENT: 'appointments',
        APPOINTMENT_TIME: 'appointment_times',
        HOLIDAYS: 'holidays',
        PATIENTHEALTH: 'patienthealths',
        PATIENTFAMILY: 'patientfamilies',
        VIRTUAL_CLINIC: 'virtual_clinics',
        NOTIFICATION: 'notifications',
        FORUM: 'forums',
        FORUMCOMMENT: 'forum_comments',
        FAVOURITE_DOCTOR: 'favourite_doctor',
        APPOINTMENT_FEEDBACK: 'appointment_feedbacks',
        NEWORK_LOGS: 'network_logs',
        PRESCRIPTION: 'prescriptions',
        TRANSACTION: 'transactions',
        ACCOUNT: 'accounts',
        PENDING_PAYMENT: "pending_payments",
        DOCTOR_ACCOUNT_OVERVIEW: 'doctor_account_overviews',
        FAVOURITE: 'favourites',
        REFUND: 'refunds',
        REFUND_REQUEST: "refund_requests",
        DOCTOR_PAYOUT: 'doctor_payouts',
        PAGE: "pages",
        FAQ: "faqs",
        ADMIN_NOTIFICATION: "admin_notifications",
        ADMIN_LOGGER: 'admin_loggers'
    },
    VIRTUAL_CLINIC: {
        initialApiResponses: {
            doctorNotFound: 1,
            doctorFound: 2,
            doctorNotFoundAfterPayment: 3,
            doctorFoundAfterPayment: 4,
            doctorFoundAndWaitingForDoctor: 5,
            callIsOngoing: 6
        },
        time: {
            tea_break_time: 300000 //means 5 mins in milliseconds (5*60*1000)
        },
        fee: 500 /////FOR NOW
    },
    LEGAL_TYPE: {
        WILL: 1,
        GUARDIANSHIP: 2,
        POA: 3
    },
    MEDICAL_STATUS: {
        HIDE: 0,
        SHOW: 1
    },
    MEDICAL_TYPE: {
        BASIC: 1,
        DETAIL: 2,
        DISEASE: 3,
        ALLERGY: 4,
        MEDICATION: 5
    },

    FAMILY_SHOW: {
        HIDE: 0,
        SHOW: 1,
    },
    DOCTOR: {
        SERVICES: {
            virtualClinic: 1,
            onlineConsultation: 2,
            homeVisit: 3,
            clinicVisit: 4
        },
        VC_STATUS: {
            active: 1,
            inactive: 2
        },
        PAYMENT_TYPE: {
            appointmentBook: 1,
            appointmentCancleByDoctor: 2,
            appointmentCancleByPatient: 3,
            complainByPatient: 4,
            doctorPayout: 5,
            vcCallExtend: 6,
            appointment_payment_success: 7, //this one is only for doctor's payout (deprecated right now)
            appointment_success: 8, //this one is only for doctor's payout
            appointmentCancle: 9 //this one is only for doctor's payout
        }
    },
    FEEDBACK: {
        TYPE: {
            normal: 1,
            other: 2
        }
    },
    FORUM: {
        LIST: {
            PUBLIC: 1,
            MY: 2,
            FAVORUITE: 3
        },
        REPORT: {
            FORUM: 1,
            COMMENT: 2
        },
        UPVOTE: {
            FORUM: 1,
            COMMENT: 2,

        },
        ACTION: {
            FAVOURITE: 1,
            UPVOTE: 2,
            REPORT: 3,
            UPVOTE_COMMENT: 4,
            REPORT_COMMENT: 5
        }
    },
    CONTENT_MESSAGE: {
        CARER: 'This is notify you that you have been added as Carer to this user:',
        PAYER: 'This is notify you that you have been added as Payer to this user:',
        NORMAL: 'This is notify you that you have been added as family member to this users:',
    },
    PRESCRIPTION: {
        DOSAGE: {
            ONCE_A_DAY: 1,
            TWICE_A_DAY: 2,
            THRICE_A_DAY: 3
        },
        DURATION_TYPE: {
            DAY: 1,
            WEEK: 2,
            MONTH: 3
        },
        MEAL: {
            BEFORE_BREAKFAST: 1,
            AFTER_BREAKFAST: 2,
            BEFORE_LUNCH: 3,
            AFTER_LUNCH: 4,
            BEFORE_DINNER: 5,
            AFTER_DINNER: 6

        }
    },
    PUSH: {
        ROLE_TYPES: {
            PAYER: 1,
            CARER: 2,
            PATIENT: 4,
            DOCTOR: 5,
            NONE: 3,
            FAMILY_MEMBER: 6
        }, //this type shows what role is assigned to that user (i.e. if payer received the call then role will be 1)
        TYPE: {
            VoIP: 1,
            NORMAL: 2
        },
        VOIP_TYPE: {
            callDisconnected: 1, //when a person disconnect the call
            callEnd: 2, //when entire call is disconnected
        },
        CALL_TYPE: {
            VC: 1,
            OC: 2
        }
    },
    // Appointment constant model!!
    APPOINTMENT: {
        day: 0,
        minAllocationTime: 15, //in minutes
        status: {
            complete: 1,
            confirm: 2,
            ongoing: 3,
            cancelled: 4,
            pass: 5,
            reschedule: 6,
            uninitiated: 7,
            failed: 8,
            all: 9 // means that they got all appointment but need for filter part

        },
        paymentStatus: {
            paid: 1,
            unpaid: 2,
            processing: 3,
            failed: 4,
            refund: 5
        },
        durationType: {
            short: 1,
            long: 2,
            custom: 3,
            home: 4
        },
        duration: {
            short: 900000,//  900000 //1000*60*15 milli seconds
            long: 1800000, //1000*60*30 milli seconds
            homeVisit: 3600000, //1000*60*60 milli seconds
            callExtendTime: 660000 //1000*60*10 milli seconds 10 minutes
        },
        maxDistance: 20000, //in meter,
        type: {
            all: 1,
            upcoming: 2,
            past: 3
        },
        appointmentType: {
            myself: 1,
            byOther: 2,
            forOther: 3
        },
        permission: {
            permission: 1,
            reject: 2,
            notAction: 3,
            pending: 4
        },
        callLogActions: {
            callConnected: 1,
            callDisconnected: 2
        },
        maximunPaymentWaitingTime: 1800000, //30*60*1000 milli seconds (30 min)
        allowedTimeForComplain: 604800000, //7*24*60*60*1000 (7 days)
    },
    FAMILY_TYPE: {
        payer: 1,
        carer: 2,
        normal: 3
    },
    URL_TYPE: {
        image: 1,
        pdf: 2
    },
    OPERATION_TYPE: {
        SAVE: 1,
        UPDATE: 2,
        DELETE: 3
    },
    DEVICE_TYPE: {
        IOS: 1,
        ANDROID: 2,
        WEB: 3
    },
    PATIENT_TYPE: {
        NORMAL: 1,
        GUEST: 1
    },

    NOTIFICATION_TYPE: {
        DEFAULT: 0,
        ADDED_FAMILY: 1,
        FAMILY_MEMBER_APPOINTMENT: 2,
        REQUEST_TO_PAY: 3,
        MEDICAL_REQUEST: 4,
        CARER_BOOK_APPOINTMENT: 5,
        VC_CALL: 6,
        RESCHEDULE_APPOINTMENT: 7,
        DOCTOR_REQUEST_MEDICAL_PATIENT: 8,
        VC_DOCTOR_GOT_OFFLINE: 9,
        ACTION_PATIENT_MEDICAL: 10,
        ACTION_ON_APPOINTMENT_RESCHEDULE: 11,
        PATIENT_BOOKED_APPOINTMENT: 12,
        DOCTOR_APPOINTMENT: 13,
        FORUM_COMMENT: 14,
        FORUM_FAVOURITE: 15,
        FORUM_UPVOTE: 16,
        REMINDER: 17,
        WILL: 18,
        POWER_ATTORNEY: 19,
        GUARDIANSHIP: 20,
        PRESCRIPTION: 21,
        PRESCRIPTION_ADVERSE: 22,
        CANCEL_APPOINTMENT: 23,
        RESCHEDULE_APPOINTMENT_PATIENT: 24,
        ACTION_ON_FAMILY: 25,
        MEDICAL_FAMILY_ACTION: 26,
        REFUND_DECLINE: 27,
        DOCTOR_PAYOUT: 28,
        DOCTOR_BANK_VERIFIED: 29,
        ADMIN_PUSH: 30,
        CHAT_PUSH: 31
    },

    GENERAL_NOTIFICATION_TYPE: {
        FAMILY: 1,
        APPOINTMENT: 2,
        TRANSACTION: 3,
        MISCELLANEOUS: 4,
        MEDICAL: 5,
        FORUM: 6
    },

    REGEX: {
        EMAIL: /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,63}$/,
        URL: /^(https?|ftp|torrent|image|irc):\/\/(-\.)?([^\s\/?\.#-]+\.?)+(\/[^\s]*)?$/i,
        ZIP_CODE: /^[0-9]{5}(?:-[0-9]{4})?$/,
        // PASSWORD: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]\S{8,15}$/,
        PASSWORD: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,40})/,
        // COUNTRY_CODE: /^\d{1,4}$/,
        COUNTRY_CODE: /^(\+\d{1,3}|\d{1,4})$/,
        MOBILE_NUMBER: /^\d{6,16}$/,
        OBJECT_ID: /^[0-9a-fA-F]{24}$/
    },
    SOCKET: {
        ON_EVENTS: {
            connection: "connection",
            disconnect: "disconnect",
            ping: "ping",
            all_events: "all_events", //all messaging events
            call_events: "call_events" //all calling related events
        },
        ALL_EVENT_ACTIONS: {
            message: "message",
            // deliveryConfirmation: "deliveryConfirmation",
            // readConfirmation: "readConfirmation",
            // leaveConfirmation: "leaveConfirmation"
            deliveryConfirmation: "messageDelivered",
            readConfirmation: "messageRead",
            leaveConfirmation: "userLeft",
            roomUpdate: "roomUpdate"
        },
        EMIT_TYPE: {
            connection: "connection",
            all_events: "all_events",
            call_events: "call_events" //all calling related event emiting
        },
        ALL_EMIT_ACTOINS: {
            message: "message", //tell usres that a new message is received
            messageDelivered: "messageDelivered", //message delivered to all users
            messageRead: "messageRead", //message read by all users
            userLeft: "userLeft", //user left the group
            // messageDelivered: "deliveryConfirmation", //message delivered to all users
            // messageRead: "readConfirmation", //message read by all users
            // userLeft: "leaveConfirmation", //user left the group
            userBlocked: "userBlocked", //blocked by admin
            serverError: "serverError", //when some error occured
            roomNameUpdate: "roomNameUpdate",
            roomImageUpdate: "roomImageUpdate"
        },
        CALL_EVENT_RECEIVE_ACTIONS: {
            networkStats: "networkStats"
        },
        CALL_EVENT_EMIT_ACTIONS: {
            callStart: "callStart",
            ocCallStart: "ocCallStart",
            vcCallIsOngoing: "vcCallIsOngoing",
            ocCallIsOngoing: "ocCallIsOngoing",
            vcDoctorUpdate: "vcDoctorUpdate",
            vcDoctorNotAvaiableAfterPayment: "vcDoctorNotAvaiableAfterPayment",
            provideFeedback: "provideFeedback", //when user didn't provides the appointment feedback
            teaBreakData: "teaBreakData",
            callExtend: "callExtend"
        }
    },
    RAZORPAY: {
        status: {
            created: 'created',
            authorized: 'authorized',
            refunded: 'refunded',
            failed: 'failed',
            captured: 'captured'
        },
        method: {
            card: 'card',
            netbanking: 'netbanking',
            wallet: 'wallet',
            emi: 'emi',
            upi: 'upi'
        },
        card: {
            debit: 'debit',
            credit: 'credit'
        }
    },
    MODEL: {
        status: {
            active: 1,
            pending: 2,
            blocked: 3,
            deleted: 4,
        },
        sortOrder: {
            ascending: 1,
            descending: -1
        }
    },
    USER_TYPES: {
        admin: 1,
        patient: 2,
        doctor: 3,
        patientGuest: 6,
    },
    REFUND: {
        STATUS: {
            refunded: 1,
            rejected: 2,
            no_decision: 3
        }
    },
    DONATION: {
        listType: {
            donarList: 1,
            receiverList: 2,
            addedDonationList: 3,
            addedReceivingList: 4,
            donationRequest: 5,
            receivingRequest: 6
        },
        status: {
            active: 1,
            pending: 2,
            deactive: 3
        },
        myRequestStatus: {
            accepted: 1,
            rejected: 2,
            pending: 3
        }
    },
    GENDER: {
        male: 1,
        female: 2,
        other: 3,
        any: 4
    },
    FAMILY_STATUS: {
        unaproved: 0,
        approved: 1,
        rejected: 2
    },
    CALLING: {
        TOKBOX: {
            MESSAGE_TYPE: {
                callEnd: "callEnd",
                newConnection: "newConnection",
                disconnected: "disconnected",
                removed: "removed"
            },
            MESSAGE: {
                callEnd: ""
            }
        },
        USER_TYPES: {
            doctor: 1,
            patient: 2,
            subDocket: 3,
            carer: 4,
            payrer: 5
        },
        STATUS: {
            ongoing: 1,
            completed: 2
        }
    },
    REDIS: {
        CALL_SESSION_ID: {
            to_connection: "",
            to_time: "_time",
            to_callId: "_call",
            to_vcCall: "_vc",
            to_ocCall: "_oc",
            appointment_call_session_info: "_appointmentCallSession"
        },
        CALL_ID: { //this represents the mongodb calling/video _id
            to_sessionId: "_session_id"
        },
        expiryKeyType: {
            startVCCall: 1,
            endVCCall: 2,
            appointmentId: 3,
            oc_appointment_start: 4,
            endOCCall: 5,
            mark_doc_unavailable_vc: 6,
            make_doc_offline_vc: 7,
            appointment_reminder: 8,
            hv_appointment_start: 9,
            cv_appointment_start: 10,
            hv_appointment_end: 11,
            cv_appointment_end: 12,
            other: 99
        },
        appointmentPickTime: (30 * 24 * 60 * 60 * 1000) //30 days for now (else make it 6 hours) //if any appointment is going to happen within this time then it will be moved to redis db
    },
    WEBHOOK: {
        TOKBOX: {
            EVENTS: {
                connectionCreated: "connectionCreated",
                connectionDestroyed: "connectionDestroyed",
                streamCreated: "streamCreated",
                streamDestroyed: "streamDestroyed",
                archive: "archive"
            },
            REASON: {
                DISCONNECT: {
                    clientDisconnected: "clientDisconnected",
                    forceDisconnected: "forceDisconnected",
                    networkDisconnected: "networkDisconnected"
                }
            }
        }
    },
    CHAT: {
        ROOM: {
            STATUS: {
                active: 1,
                inactive: 2
            },
            USER_STATUS: {
                active: 1,
                inactive: 2
            },
            USER_SETTING: {
                can_see_history: 1,
                can_not_see_history: 2
            },
            WHAT_TO_UPDATE: {
                roomName: 1,
                roomImage: 2
            }
        },
        EVENT: {
            TYPE: {
                chat: 1,
                user_left: 2,
                user_kicked_by_admin: 3,
                image: 4,
                video: 5,
                document: 6,
                room_created: 7,
                user_joined: 8,
                room_deleted: 9,
                prescription: 10,
                room_image_update: 11,
                room_name_update: 12
            },
            STATUS: {
                active: 1,
                deleted: 2
            },
        },
        TYPE: {
            one_to_one: 1,
            group: 2
        }
    },
    SIGNUP: {
        TYPE: {
            normal: 1,
            guest: 2,
            google: 3,
            facebook: 4,
            twitter: 5
        }
    },
    OTP: {
        length: 4,
        expiryTime: 2 * 60 * 60 * 1000 //2 hrs in milliseconds
    },
    EMAIL_VERIFICATION_TOKEN: {
        length: 40,
        expiryTime: 2 * 60 * 60 * 1000 //2 hrs in milliseconds
    },
    LEGAL_STATUS: {
        UNVERIFIED: 1,
        VERIFIED: 2,
        REJECTED: 3
    },
    PAGINATION: {
        limit: 20,
        DIRECTION: {
            up: 1,
            down: 2
        }
    },
    rpcModules: {
        newDoctorIncoming: 1,
        newPatientIncoming: 2,
        doctorLeft: 3,
        patientLeft: 4,
        doctorShortBreak: 5,
        doctorNotAvailable: 6,
        patientCallExtend: 7,
        checkIfDoctorAvailable: 8,
        startNewCall: 9,
        doctorShortBreakEnd: 10
    },
    PAYMENT: {
        splitAmountType: {
            shifa: 1,
            doctor: 2,
            patient: 3,
            // transactionCharge: 4,
            pendingPaymentOfOldAppointment: 5,
            pendingPaymentOfOldAppointmentForCallExtend: 6,
            vc: 7
        },
        transactionType: {
            patientPayment: 1,
            refund: 2,
            doctorPayout: 3
        },
        status: {
            successful: 1,
            pending: 2,
            failed: 3,
            refund: 4
        },
        pendingPaymentStatus: {
            received: 1,
            failed: 2,
            pending: 3
        },
        mode: {
            credit: 1,
            debit: 2,
            paytm: 3
        },
        txnCharges: {
            paytm: {
                charge: 1.75 // in %age
            },
            stripe: {
                nonEurope: 2.9, // in %age
                fixedAmountNonEurope: 0.2, // in INR
            },
            razorpay: {
                charge: 2.36
            }
        },
        refund: {
            reasons: {
                shouldRefund: "Payment was already received in some other transaction or appointment got cancelled during payment",
                cancelByDoctor: "Appointment was cancelled by the doctor",
                cancelByPatient: "Appointment was cancelled by the patient",
                cancelByPatientAfterReschedule: "Appointment was cancelled by the patient after it was reschedule by the doctor"
            },
            type: {
                general: 1,
                vc_pass_refund: 2,
                complain: 3,
                appointment_cancellation: 4
            }
        }
    },
    PAGE: {
        ABOUT: 1,
        TERMS: 2,
        PRIVACY: 3
    },
    LANGUAGE: {
        ENGLISH: 1,
        JAPANESE: 2
    },
    CONFIG_CMS: {
        FAQ: {
            QUESTION: {
                MIN_LENGTH: 10,
                MAX_LENGTH: 500,
            },
            ANSWER: {
                MIN_LENGTH: 10,
                MAX_LENGTH: 2000,
            }
        },
        PAGE: {
            BODY: {
                MIN_LENGTH: 10,
                MAX_LENGTH: 5000,
            }
        }
    },
    ADMIN_NOTIFICATION: {
        TITLE: {
            MAX_LENGTH: 100,
            MIN_LENGTH: 3
        },
        DESCRIPTION: {
            MAX_LENGTH: 200,
            MIN_LENGTH: 10
        },
        SEND_TO: {
            ALL: 1,
            DEVICE_TYPE: 2,
            SELECTED_USERS: 3
        }
    },
    CHART_TYPE: {
        SPLINE: 1,
        PIE: 2,
        BAR: 3
    },
    LEADERBOARD: {
        BORAD_TYPE: {
            PATIENT: 1,
            DOCTOR: 2,
            APPOINTMENT: 3,
            TRANSACTION: 4
        },
        GEO_TYPE: {
            STATE: 1,
            COUNTRY: 2
        },
        LIMIT: 5
    },
    TIMELINE: {
        YEARLY: 0,
        MONTHLY: 1,
        WEEKLY: 2
    },
    PAYOUT_STATUS: {
        CLEAR: 1,
        PENDING: 2
    }
};

export const _MESSAGE = {
    email_content_verification: {
        title: 'Verification',
        link: 'click here to verify'
    }
}