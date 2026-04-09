export default {
  pages: {
    login: {
      title: 'Авторизация в системе',
      description: 'Пожалуйста, введите свои учетные данные для доступа к системе.',

      fields: {
        email: 'Email',
        password: 'Пароль',
      },
      placeholders: {
        email: 'Введите email...',
        password: 'Введите пароль...',
      },
    },
    patients: {
      title: 'Список всех пациентов',
      description: 'На этой странице представлены все пациенты которых ведет доктор.',
    },
  },

  entities: {
    patient: {
      singular: 'Пациент',
      plural: 'Пациенты',
      gender: 'male',

      singularCases: {
        nominative: 'Пациент',
        genitive: 'Пациента',
        dative: 'Пациенту',
        accusative: 'Пациента',
        instrumental: 'Пациентом',
        prepositional: 'Пациенте',
      },

      pluralCases: {
        nominative: 'Пациенты',
        genitive: 'Пациентов',
        dative: 'Пациентам',
        accusative: 'Пациентов',
        instrumental: 'Пациентами',
        prepositional: 'Пациентах',
      },
      
      fields: {
        doctor: 'Доктор',
        public: 'Публичный',
        fullName: 'ФИО',
        birthDate: 'Дата рождения',
        gender: 'Пол',
        phone: 'Телефон',
        email: 'Email',
        note: 'Примечание',
      },
    },
  },

  notification: {
    type: {
			info: 'Уведомление',
			error: 'Ошибка',
			warning: 'Предупреждение',
			success: 'Успех',
		},
    success: {
      created: {
        male: '{{entity}} успешно создан',
        female: '{{entity}} успешно создана',
        neuter: '{{entity}} успешно создано',
        plural: '{{entity}} успешно созданы',
        default: {
          singular: 'Запись успешно создана',
          plural: 'Записи успешно созданы',
        },
      },
      updated: {
        male: '{{entity}} успешно обновлен',
        female: '{{entity}} успешно обновлена',
        neuter: '{{entity}} успешно обновлено',
        plural: '{{entity}} успешно обновлены',
        default: {
          singular: 'Запись успешно обновлена',
          plural: 'Записи успешно обновлены',
        }
      },
      deleted: {
        male: '{{entity}} успешно удален',
        female: '{{entity}} успешно удалена',
        neuter: '{{entity}} успешно удалено',
        plural: '{{entity}} успешно удалены',
        default: {
          singular: 'Запись успешно удалена',
          plural: 'Записи успешно удалены',
        }
      },
      fetched: {
        male: '{{entity}} успешно получен',
        female: '{{entity}} успешно получена',
        neuter: '{{entity}} успешно получено',
        plural: '{{entity}} успешно получены',
        default: 'Данные успешно получены',
      },
      auth: 'Вы успешно авторизовались!',
    },
    error: {
      created: 'Ошибка при создании {{entity}}',
      updated: 'Ошибка при обновлении {{entity}}',
      deleted: 'Ошибка при удалении {{entity}}',
      fetched: 'Ошибка при получении {{entity}}',
      default: 'Что то пошло не так...',
      auth: 'Ошибка при авторизации. Что то пошло не так...',
    }
  },

  actions: {
    // CRUD
    create: 'Создать',
    add: 'Добавить',
    edit: 'Редактировать',
    update: 'Обновить',
    save: 'Сохранить',
    remove: 'Удалить',

    // Отмена/подтверждение
    cancel: 'Отмена',
    confirm: 'Подтвердить',
    apply: 'Применить',
    reset: 'Сбросить',

    // Навигация и поиск
    open: 'Открыть',
    close: 'Закрыть',
    clear: 'Очистить',
    reload: 'Обновить',

    // Файлы / загрузка
    upload: 'Загрузить',
    download: 'Скачать',

    // Добавочные действия для форм и таблиц
    expand: 'Развернуть',
    collapse: 'Свернуть',

    // Прочие интерактивные кнопки
    show: 'Показать',
    hide: 'Скрыть',
    select: 'Выбрать',
    deselect: 'Снять выделение',

    login: 'Войти',
    logout: 'Выйти',
  },

  ui: {
    placeholder: {
      select: {
        default: 'Выберите значение...',
        entity: 'Выберите {{entity}}...',
      },
      textField: {
        default: 'Введите значение...',
        entity: 'Введите {{entity}}...',
        search: 'Поиск {{entity}}...',
      },
    },

    status: {
      empty: 'Нет данных для отображения...',
      loading: 'Загрузка...',
      error: 'Не удалось загрузить данные...',
    },

    filters: {
      fieldSearch: 'Поиск по...',
      valueSearch: 'Значение поиска',
      fieldSorting: 'Сортировка по...',
      orderSorting: 'Порядок сортировки',
      datePeriods: 'Предустановленные периоды',
      dateStart: 'Начало периода',
      dateEnd: 'Конец периода',
    },
  },

  form: {},

  validation: {},

  common: {
    yes: 'Да',
    no: 'Нет',
    all: 'Все',
    none: 'Нет',
    ok: 'Ок',
    back: 'Назад',
    next: 'Далее',
    previous: 'Назад',
    done: 'Готово',
    search: 'Поиск',
    filters: 'Фильтры',
    reason: 'Причина',
    confirmation: 'Подтверждение действия',
    settings: 'Настройки',
  },

  enums: {
    gender: {
      male: 'Мужской',
      female: 'Женский',
    },

    status: {
      pending: 'Ожидание',
      processing: 'В обработке',
      completed: 'Завершено',
      failed: 'Ошибка',
    },

    modality: {
      MR: 'МРТ',
      CT: 'КТ',
      XR: 'Рентген',
      US: 'УЗИ',
    },

    orientation: {
      axial: 'Аксиальная',
      coronal: 'Корональная',
      sagittal: 'Сагиттальная',
      'oblique cut': 'Косой срез',
    },

    protocol: {
      T1: 'T1',
      T2: 'T2',
      PD: 'PD',
    },

    resultClass: {
      normal: 'Норма',
      tear: 'Разрыв',
    },

    models: {
      YOLO: 'YOLO',
    },

    permission: {
      read: 'Чтение',
      create: 'Создание',
      update: 'Обновление',
      delete: 'Удаление',
    },

    sortOrder: {
      asc: 'По возрастанию',
      desc: 'По убыванию',
    },

    context: {
      create: 'Создание',
      update: 'Редактирование',
    },

    action: {
      add: 'Добавление',
      edit: 'Редактирование',
      remove: 'Удаление',
    },

    periodTypes: {
      day: 'День',
      week: 'Неделя',
      month: 'Месяц',
      year: 'Год',
    },
  },

  sidebar: {
    main: 'Главная',
    patients: 'Пациенты',
    studies: 'Исследования',
    examples: 'UI компоненты',
  },

} as const
