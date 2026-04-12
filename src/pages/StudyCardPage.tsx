import React, { version } from 'react';
import { Block, Button, IconButton, InfoList, ManagedTable, Modal, Page, Select, Stack, Table, TBody, TextField, THead, type ColumnTable, type SelectItem } from '../ui/copmonents';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import type { AppDispatch } from '../store/store';
import { addNotice } from '../store/slices/notices';
import { studyApi, type UpdateStudyDto } from '../store/services/study';
import { inferenceApi } from '../store/services/inference';

import type { InfoListOption } from '../ui/copmonents/InfoList/InfoList';
import { formatedDate } from '../utils';
import { useModal } from '../ui/copmonents/Modal/useModal';
import { ROUTES } from '../routes';

const StudyCardPage = () => {
    const {t} = useTranslation();
    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();
    const { id } = useParams();

    const {data: study, refetch, isSuccess: studyIsSuccess, fulfilledTimeStamp: studyFulfilledTimeStamp} = studyApi.useFindOneStudyQuery(Number(id));
    const [remove, {isSuccess: studyRemoveIsSuccess, isError: studyRemoveIsError, error: studyRemoveError, fulfilledTimeStamp: studyRemoveFulfilledTimeStamp}] = studyApi.useRemoveStudyMutation();
    const [update, {isSuccess: studyUpdateIsSuccess, isError: studyUpdateIsError, error: studyUpdateError, fulfilledTimeStamp: studyUpdateFulfilledTimeStamp}] = studyApi.useUpdateStudyMutation();

    const studyInfoList1: InfoListOption[] = [
        {key: t('entities.study.fields.status'), value: study?.status},
        {key: t('entities.study.fields.studyInstanceUID'), value: study?.studyInstanceUID},
        {key: t('entities.study.fields.studyId'), value: study?.studyId},
        {key: t('entities.study.fields.specificCharacterSet'), value: study?.specificCharacterSet},
        {key: t('entities.study.fields.studyDateTime'), value: formatedDate(study?.studyDateTime || null)},
        {key: t('entities.study.fields.modality'), value: study?.modality},
        {key: t('entities.study.fields.institutionName'), value: study?.institutionName},
    ];

    const studyInfoList2: InfoListOption[] = [
        {key: t('entities.study.fields.manufacturer'), value: study?.manufacturer},
        {key: t('entities.study.fields.manufacturersModelName'), value: study?.manufacturersModelName},
        {key: t('entities.study.fields.stationName'), value: study?.stationName},
        {key: t('entities.study.fields.seriesCount'), value: study?.seriesCount},
        {key: t('entities.study.fields.imagesCount'), value: study?.imagesCount},
        {key: t('entities.study.fields.description'), value: study?.description},
        {key: t('entities.study.fields.note'), value: study?.note},
    ];

    const navigatePatientHandler = () => {
        if(study?.patientId) {
            navigate(`${ROUTES.Patients}/${study.patientId}`);
        }
    };

    // ACTIONS START /////////////////////////////////////////////////////////////////
    const updateModal = useModal('updateModal');
    const removeModal = useModal('removeModal');

    const initialRecordFields: UpdateStudyDto = {
        id: Number(id),
        reason: undefined,
    };

    const [recordFields, setRecordFields] = React.useState<UpdateStudyDto>(initialRecordFields);

    React.useEffect(() => {
        if(updateModal.show && study && studyIsSuccess) {
            setRecordFields({
                id: Number(id),
                description: study?.description,
                imagesCount: study?.imagesCount,
                institutionName: study?.institutionName,
                manufacturer: study?.manufacturer,
                manufacturersModelName: study?.manufacturersModelName,
                modality: study?.modality,
                note: study?.note,
                referringPhysiciansName: study?.referringPhysiciansName,
                seriesCount: study?.seriesCount,
                specificCharacterSet: study?.specificCharacterSet,
                stationName: study?.stationName,
                studyDateTime: study?.studyDateTime,
                studyId: study?.studyId,
                studyInstanceUID: study?.studyInstanceUID,
                reason: undefined,
            });
        }
        if(!updateModal.show) {
            clearRecordFieldsHandler();
        }
    }, [updateModal.show]);

    const canSubmitUpdateRecord = recordFields.id !== undefined;

    const clearRecordFieldsHandler = () => {
        setRecordFields(initialRecordFields);
    }

    const actionHandler = () => {
        if(canSubmitUpdateRecord) {
            update(recordFields);
            updateModal.close();
        }
    }

    const removeHandler = () => {
        remove({
            id: Number(id),
            reason: recordFields.reason || '',
        });
    }

    React.useEffect(() => {
        if(studyUpdateIsSuccess) {
            dispatch(addNotice({type: 'success', message: t(`notification.success.updated.default.singular`)}));
            refetch();
        }
        if(studyUpdateIsError) {
            dispatch(addNotice({type: 'error', message: t(`notification.error.default`)}));
        }
    }, [studyUpdateFulfilledTimeStamp]);

    React.useEffect(() => {
        if(studyRemoveIsSuccess) {
            dispatch(addNotice({type: 'success', message: t(`notification.success.deleted.default.singular`)}));
            navigate(ROUTES.Studies);
        }
        if(studyRemoveIsError) {
            dispatch(addNotice({type: 'error', message: t(`notification.error.default`)}));
        }
    }, [studyRemoveFulfilledTimeStamp]);
    // ACTIONS END /////////////////////////////////////////////////////////////////

    // PREDICTION RUN START /////////////////////////////////////////////////////////////////
    type ModelsOptions = {
        label: string,
        model: string,
        version: string,
    };

    const [predict, {isSuccess: predictIsSuccess, isError: predictIsError, error: predictError, fulfilledTimeStamp: predictFulfilledTimeStamp}] = inferenceApi.usePredictMutation();
    const predictionModal = useModal('predictionModal');
    const [model, setModel] = React.useState<ModelsOptions | undefined>(undefined);

    const modelsOptions: ModelsOptions[] = [
        {
            label: 'YOLOv8x',
            model: 'YOLO',
            version: '8x',
        },
        {
            label: 'YOLOv5su',
            model: 'YOLO',
            version: '5su',
        },
    ];

    const canSubmitPredictionRun = (model !== undefined) && (id !== undefined);

    const predictionRunHandler = () => {
        if(canSubmitPredictionRun) {
            predict({
                studyId: Number(id),
                model: model.model,
                version: model.version,
            });
            predictionModal.close();
        }
    }

    React.useEffect(() => {
        if(!predictionModal.show) {
            setModel(undefined);
        }
    }, [predictionModal.show]);

    React.useEffect(() => {
        if(predictIsSuccess) {
            dispatch(addNotice({type: 'success', message: t(`notification.success.deleted.default.singular`)}));
        }
        if(predictIsError) {
            dispatch(addNotice({type: 'error', message: t(`notification.error.default`)}));
        }
    }, [predictFulfilledTimeStamp]);

    // PREDICTION RUN END /////////////////////////////////////////////////////////////////

    // PREDICTION RUN TABLE START /////////////////////////////////////////////////////////////////
    const predictionRunsQuery = studyApi.useLazyFindAllStudyRunsQuery();

    const allpredictionRunsData = predictionRunsQuery[1]?.data?.data || [];

    const columns: ColumnTable<typeof allpredictionRunsData[number]>[] = [
      {key: 'model', label: t('entities.predictionRun.fields.model'), sortable: false, width: '100px', },
      {key: 'version', label: t('entities.predictionRun.fields.version'), sortable: false, width: '100px', },
      {key: 'status', label: t('entities.predictionRun.fields.status'), sortable: false, width: '100px', },
      {key: 'createdAt', label: t('entities.predictionRun.fields.runnedAt'), sortable: false, render: (run) => formatedDate(run.createdAt), width: '200px', },
    ];

    const [selectedRun, setSelectedRun] = React.useState<typeof allpredictionRunsData[number]>();

    const searchFieldOptions: SelectItem[] = [
        {
            title: t('entities.predictionRun.fields.model'),
            value: 'model',
        },
        {
            title: t('entities.predictionRun.fields.version'),
            value: 'version',
        },
        {
            title: t('entities.predictionRun.fields.status'),
            value: 'status',
        },
    ];

    const sortedFieldOptions: SelectItem[] = searchFieldOptions;
    // PREDICTION RUN TABLE END /////////////////////////////////////////////////////////////////

    return (
        <Page
            decorativeIcon='INFO'
            title={t('pages.studyCard.title')}
            description={t('pages.studyCard.description')} >
            <Block 
                title={study?.studyInstanceUID || ''} 
                decorativeIcon='INFO'
                fullWidth
                actions={
                    <Stack direction='row' gap='xs' justify='center' align='center'>
                        <IconButton icon={{name: 'RELOAD', color: 'tertiary', size: 'lg'}} onClick={refetch} />
                        <IconButton icon={{name: 'EDIT', color: 'tertiary', size: 'lg'}} onClick={updateModal.open} />
                        <IconButton icon={{name: 'REMOVE', color: 'tertiary', size: 'lg'}} onClick={removeModal.open} />
                    </Stack>
                }
                footer={
                    <Stack direction='row' gap='md' justify='center' align='center'>
                        <Button variant='primary' icon='ADD' onClick={predictionModal.open}>{t('actions.runPrediction')}</Button>
                        <Button variant='secondary' icon='LINK' onClick={navigatePatientHandler}>{t('actions.goToPatient')}</Button>
                    </Stack>
                } 
                >
                <Stack direction='row' gap='xl' justify='stretch' align='center'>
                    <InfoList oprions={studyInfoList1} />
                    <InfoList oprions={studyInfoList2} />                    
                </Stack>
            </Block>

            <Stack
                style={{width: '100%'}} 
                direction='row' gap='xl' justify='center' align='flex-start'>
                <ManagedTable
                    blockPops={{
                        title: t('entities.predictionRun.plural'),
                        fullWidth: true,
                        style: {maxWidth: '30%'}
                    }}
                    tableProps={{
                        table: {
                            maxHeight: 400,
                            fixedColumnWidth: true,
                        },
                        thead: {
                            columns,
                        },
                        tbody: {
                            rowKey: 'id',
                            columns,
                            data: allpredictionRunsData,
                            select: {selectedRow: selectedRun, onChange: setSelectedRun}
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
                        getAllQuery: predictionRunsQuery,
                        limit: 15,
                        entityId: Number(id),
                    }} />

                    <Block fullWidth style={{maxWidth: '70%'}} >
                        типа слайдер
                    </Block>
            </Stack>

            <Modal 
                title={t(`enums.action.edit`)} 
                decorativeIcon={'EYE'} 
                options={updateModal}
                footer={
                    <Stack 
                        direction='row' gap='sm' justify='flex-end' align='center'>
                        <Button
                            variant='primary'
                            icon={'EDIT'} 
                            disabled={!canSubmitUpdateRecord} 
                            onClick={actionHandler}>
                            {t('actions.save')}
                        </Button>
                    </Stack>                    
                }
            >
                {/* {(auxiliaryData?.isLoading ? auxiliaryData.isLoading : false) && (
                    <Screen type='loading' />
                )} */}
                <Stack direction='column' gap='md' justify='flex-start' align='stretch'>
                    <TextField 
                        value={recordFields.description || ''} 
                        onChangeValue={(val: string) => setRecordFields((prev) => ({ ...prev, description: val }))}
                        label={t('entities.study.fields.description')} />

                    <TextField 
                        value={recordFields.institutionName || ''} 
                        onChangeValue={(val: string) => setRecordFields((prev) => ({ ...prev, institutionName: val }))}
                        label={t('entities.study.fields.institutionName')} />

                    <TextField 
                        value={recordFields.manufacturer || ''} 
                        onChangeValue={(val: string) => setRecordFields((prev) => ({ ...prev, manufacturer: val }))}
                        label={t('entities.study.fields.manufacturer')} />

                    <TextField 
                        value={recordFields.manufacturersModelName || ''} 
                        onChangeValue={(val: string) => setRecordFields((prev) => ({ ...prev, manufacturersModelName: val }))}
                        label={t('entities.study.fields.manufacturersModelName')} />

                    <TextField 
                        value={recordFields.note || ''} 
                        onChangeValue={(val: string) => setRecordFields((prev) => ({ ...prev, note: val }))}
                        label={t('entities.study.fields.note')} />

                    <TextField 
                        value={recordFields.referringPhysiciansName || ''} 
                        onChangeValue={(val: string) => setRecordFields((prev) => ({ ...prev, referringPhysiciansName: val }))}
                        label={t('entities.study.fields.referringPhysiciansName')} />

                    <TextField 
                        value={recordFields.stationName || ''} 
                        onChangeValue={(val: string) => setRecordFields((prev) => ({ ...prev, stationName: val }))}
                        label={t('entities.study.fields.stationName')} />
                        
                    <TextField 
                        value={recordFields.reason} 
                        onChangeValue={(val: string) => setRecordFields((prev) => ({ ...prev, reason: val }))}
                        label={t('common.reason')} />
                </Stack>
            </Modal>

            <Modal 
                title={t(`common.confirmation`)}
                options={removeModal}
                footer={
                    <Stack direction='row' gap='sm' justify='flex-end' align='center'>
                        <Button variant='primary' intent='destructive' icon='CHECK' onClick={removeHandler} >{t('actions.confirm')}</Button>
                        <Button variant='secondary' icon='CLOSE' onClick={() => removeModal.close()} >{t('actions.cancel')}</Button>
                    </Stack>
                } >
                <TextField 
                    value={recordFields.reason} 
                    onChangeValue={(val: string) => setRecordFields((prev) => ({ ...prev, reason: val }))} 
                    label={t('common.reason')} />
            </Modal>

            <Modal 
                title={t(`common.predictionRunning`)}
                options={predictionModal}
                footer={
                    <Stack direction='row' gap='sm' justify='flex-end' align='center'>
                        <Button variant='primary' icon='ADD' onClick={predictionRunHandler}>{t('actions.runPrediction')}</Button>
                    </Stack>
                } >
                <Select 
                    value={model} 
                    onChangeValue={(val) => setModel(val)} 
                    options={modelsOptions} 
                    label={t('entities.patient.fields.gender')}
                    getKey={(item) => item.label}
                    getValue={(item) => item.label} />
            </Modal>
        </Page>
    );
};

export default StudyCardPage;