export default {
  pages: {
    login: {
      title: 'Log in to the system',
      description: 'Please enter your credentials to access the system.',
    },
    patients: {
      title: 'List of all patients',
      description: 'This page contains all the patients managed by the doctor.',
    },
  },

  entities: {
    patient: {
      singular: 'Patient',
      plural: 'Patients',
      gender: 'male',

      singularCases: {
        nominative: 'Patient',
        genitive: 'The Patient',
        dative: 'To the patient',
        accusative: 'The patient',
        instrumental: 'Patient',
        prepositional: 'Patient',
      },

      pluralCases: {
        nominative: 'Patients',
        genitive: 'Patients',
        dative: 'To Patients',
        accusative: 'Patients',
        instrumental: 'By patients',
        prepositional: 'Patients',
      },

      fields: {
        doctor: 'Doctor',
        public: 'Public',
        fullName: 'FULL NAME',
        birthDate: 'Date of birth',
        gender: 'Gender',
        phone: 'Phone',
        email: 'Email',
        note: 'Note',
      },
    },
  },

  notification: {
    type: {
      info: 'Notification',
      error: 'Error',
      warning: 'Warning',
      success: 'Success',
    },
    success: {
      created: {
        male: '{{entity}} successfully created',
        female: '{{entity}} successfully created',
        neuter: '{{entity}} successfully created',
        plural: '{{entity}} successfully created',
      },
      updated: {
        male: '{{entity}} successfully updated',
        female: '{{entity}} successfully updated',
        neuter: '{{entity}} successfully updated',
        plural: '{{entity}} successfully updated',
      },
      deleted: {
        male: '{{entity}} successfully deleted',
        female: '{{entity}} successfully deleted',
        neuter: '{{entity}} successfully deleted',
        plural: '{{entity}} successfully deleted',
      },
      fetched: {
        male: '{{entity}} successfully received',
        female: '{{entity}} successfully received',
        neuter: '{{entity}} successfully received',
        plural: '{{entity}} successfully received',
      },
      auth: 'You have successfully logged in!',
    },
    error: {
      created: 'Error when creating {{entity}}',
      updated: 'Error updating {{entity}}',
      deleted: 'Error deleting {{entity}}',
      fetched: 'Error receiving {{entity}}',
      auth: 'Authorization error. Something went wrong...',
    }
  },

  actions: {
    // CRUD
    create: 'Create',
    add: 'Add',
    edit: 'Edit',
    update: 'Refresh',
    save: 'Save',
    remove: 'Delete',

    // Cancellation/Confirmation
    cancel: 'Cancel',
    confirm: 'Confirm',
    apply: 'Apply',
    reset: 'Reset',

    // Navigation and Search
    open: 'Open',
    close: 'Close',
    clear: 'Clear',
    reload: 'Refresh',

    // Files / upload
    upload: 'Upload',
    download: 'Download',

    // Additional actions for forms and tables
    expand: 'Expand',
    collapse: 'Collapse',

    // Other interactive buttons
    show: 'Show',
    hide: 'Hide',
    select: 'Select',
    deselect: 'Deselect',
  },

  ui: {
    placeholder: {
      default: 'Enter a value...',
      entity: 'Enter {{entity}}...',
      search: 'Search {{entity}}...',
    },

    status: {
      empty: 'No data to display...',
      loading: 'Loading...',
      error: 'Data could not be loaded...',
    },

    filters: {
      fieldSearch: 'Search by...',
      valueSearch: 'Search value',
      fieldSorting: 'Sort by...',
      orderSorting: 'Sort order',
      DatePeriods: 'Preset periods',
      dateStart: 'Beginning of the period',
      dateEnd: 'End of the period',
    },
  },

  common: {
    yes: 'Yes',
    no: 'No',
    all: 'Everything',
    none: 'No',
    ok: 'Ok',
    back: 'Back',
    next: 'Next',
    previous: 'Back',
    done: 'Done',
    search: 'Search',
    filters: 'Filters',
  },

  enums: {
    gender: {
      male: 'Male',
      female: 'Female',
    },

    status: {
      pending: 'Waiting',
      processing: 'In processing',
      completed: 'Completed',
      failed: 'Error',
    },

    modality: {
      MR: 'MRT',
      CT: 'CT',
      XR: 'X-ray',
      US: 'ULTRASOUND',
    },

    orientation: {
      axial: 'Axial',
      coronal: 'Coronal',
      sagittal: 'Sagittal',
      'oblique cut': 'Oblique cut',
    },

    protocol: {
      T1: 'T1',
      T2: 'T2',
      PD: 'PD',
    },

    resultClass: {
      normal: 'Norm',
      tear: "The 'Gap",
    },

    models: {
      YOLO: 'YOLO',
    },

    permission: {
      read: 'Reading',
      create: 'Creation',
      update: 'Update',
      delete: 'Deletion',
    },

    SortOrder: {
      asc: 'Ascending',
      desc: 'Descending order',
    },

    context: {
      create: 'Creation',
      update: 'Editing',
    },

    action: {
      add: 'Adding',
      edit: 'Editing',
      remove: 'Deleting',
    },

    periodTypes: {
      day: 'Day',
      week: 'Week',
      month: 'Month',
      year: 'Year',
    },
  },

  form: {},

  validation: {},

} as const
