import React from 'react';
import { Block, IconButton, ManagedTable, Page, Select, Stack, Table, TBody, TextField, THead, type ColumnTable, type IconPath, type SelectItem, type SortedColumn } from '../ui/copmonents';
import type { PageProps } from '../ui/copmonents/Page';
import { patientApi, type CreatePatientDto } from '../store/services/patient';
import { Gender } from '../common/enums';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../routes';

const pageProps: Partial<PageProps> = {
    title: 'Список всех пациентов' ,
    description: 'На этой странице представлены все пациенты которых ведет доктор.' ,
    decorativeIcon: 'INFO' as IconPath,
}

const PatientPage = () => {
    const {t} = useTranslation();
    const navigate = useNavigate();
    
    const allDataQuery = patientApi.useLazyFindAllQuery();
    const oneDataQuery = patientApi.useLazyFindOneQuery();

    const createMutation = patientApi.useCreateMutation();
    const updateMutation = patientApi.useUpdateMutation();
    const removeMutation = patientApi.useRemoveMutation();

    const allData = allDataQuery[1]?.data?.data || [];
    const oneData = oneDataQuery[1]?.data;

    const columns: ColumnTable<typeof allData[number]>[] = [
        {key: 'id', label: 'ID', sortable: false}, 
        {key: 'fullName', label: 'Имя', sortable: false}, 
        {key: 'gender', label: 'Пол', sortable: false, render: (item) => (item.gender === Gender.Male ? 'Мужской' : 'Женский')}, 
        {key: 'note', label: 'Примечание', sortable: false}, 
    ];

    // FILTERS START //////////////////////////////////////////////////////////////
    const searchFieldOptions: SelectItem[] = [
        {
            title: 'ID',
            value: 'id',
        },
        {
            title: 'Имя',
            value: 'fullName',
        },
        {
            title: 'Пол',
            value: 'gender',
        },
        {
            title: 'Примечание',
            value: 'note',
        },
    ];

    const sortedFieldOptions: SelectItem[] = searchFieldOptions;
    // FILTERS END//////////////////////////////////////////////////////////////////////

    const [sortedColumn, setSortedColumn] = React.useState<SortedColumn<typeof allData[number]>>();

    // ACTIONS START /////////////////////////////////////////////////////////////////
    const gendertOptions = [
        {id: Gender.Male, name: 'Мужской'},
        {id: Gender.Female, name: 'Женский'},
    ];

    type RecordData = {
        doctorId: number;
        fullName: string;
        birthDate: string;
        gender: typeof gendertOptions[0];
        phone: string;
        email: string;
        note: string;
    };

    const initialRecordData: RecordData = {
        doctorId: 1,
        fullName: '',
        birthDate: '',
        gender: gendertOptions[0],
        phone: '',
        email: '',
        note: '',
    };

    const [recordFields, setRecordFields] = React.useState<RecordData>(initialRecordData);

    const recordData = {
        ...recordFields,
        gender: recordFields.gender.id,
    };

    const canSubmitRecord = recordFields.fullName.trim() !== '' && recordFields.birthDate.trim() !== '' && recordFields.phone.trim() !== '';

    const fillFormWithRecordData = () => {
        if(oneData) {
            setRecordFields({
                doctorId: oneData.doctorId,
                fullName: oneData.fullName,
                birthDate: oneData.birthDate,
                gender: gendertOptions.find(option => option.id === oneData.gender) || gendertOptions[0],
                phone: oneData.phone,
                email: oneData.email || '',
                note: oneData.note || '',
            });
        }
    }

    const clearFieldsRecordHandler = () => {
        setRecordFields(initialRecordData);
    }
    // ACTIONS END ///////////////////////////////////////////////////////////////////
    
    return (
        <Page
            {...pageProps} >
            <ManagedTable
                blockPops={{
                    title: 'Пациенты',
                    fullWidth: true,
                }}
                tableProps={{
                    table: {
                        maxHeight: 200,
                    },
                    thead: {
                        columns,
                    },
                    tbody: {
                        rowKey: 'id',
                        columns,
                        data: allData,
                        rowClick: (row) => navigate(`${ROUTES.Patients}/${row.id}`),
                    },
                }}
                filters={{
                    period: true,
                    searchFieldOptions,
                    sortedFieldOptions,
                }}
                hasPermissions={{
                    read: true,
                    create: true,
                    update: true,
                    delete: true,
                }}
                crudApiTable={{
                    getAllQuery: allDataQuery,
                    getOneQuery: oneDataQuery,
                    createMutation: createMutation,
                    updateMutation: updateMutation,
                    removeMutation: removeMutation,
                    limit: 6,
                }}
                record={{
                    body: (
                        <Stack direction='column' gap='md' justify='flex-start' align='stretch'>
                            <TextField 
                                value={recordFields.fullName} 
                                onChangeValue={(val: string) => setRecordFields((prev) => ({ ...prev, fullName: val }))}
                                placeholder={'Введите имя пациента'} 
                                label={'ФИО'} />
                            <TextField 
                                value={recordFields.birthDate} 
                                onChangeValue={(val: string) => setRecordFields((prev) => ({ ...prev, birthDate: val }))}
                                label={'Дата рождения'}
                                type="date" />
                            <Select 
                                value={recordFields.gender} 
                                onChangeValue={(val) => setRecordFields((prev) => ({ ...prev, gender: val || gendertOptions[0] }))} 
                                options={gendertOptions} 
                                label={t('kit:filters.fieldSearch')}
                                getKey={(item) => item.id}
                                getValue={(item) => item.name} />
                            <TextField 
                                value={recordFields.phone} 
                                onChangeValue={(val: string) => setRecordFields((prev) => ({ ...prev, phone: val }))}
                                placeholder={'Введите номер телефона'} 
                                label={'Номер телефона'} />
                            <TextField 
                                value={recordFields.email} 
                                onChangeValue={(val: string) => setRecordFields((prev) => ({ ...prev, email: val }))}
                                placeholder={'Введите email пациента'} 
                                label={'Email'} />
                            <TextField 
                                value={recordFields.note} 
                                onChangeValue={(val: string) => setRecordFields((prev) => ({ ...prev, note: val }))}
                                placeholder={'Введите примечание к пациенту'} 
                                label={'Примечание'} />
                        </Stack>
                    ),
                    recordData,
                    canSubmitRecord,
                    fillFormWithRecordData,
                    clearFieldsRecordHandler,
                }} >

            </ManagedTable>
        </Page>
    );
};

export default PatientPage;