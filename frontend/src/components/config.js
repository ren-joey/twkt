export default {
    fetching: {
        login: 'N',
        logout: 'N',
        addMaterial: 'N',
        editMaterial: 'N'
    },
    headers: [
        {
            text: '編號',
            align: 'start',
            // sortable: false,
            value: 'material_id'
        },
        { text: '原料名稱', value: 'material_name' },
        { text: '來源', value: 'material_source' },
        { text: '規格1', value: 'material_spec_1' },
        { text: '規格2', value: 'material_spec_2' },
        { text: '產地', value: 'material_origin' },
        // { text: '專利', value: 'material_patent' },
        // { text: '認證', value: 'material_certification' },
        // { text: '臨床研究/文獻', value: 'material_clinic' },
        { text: '功能', value: 'material_fn' },
        { text: '操作', value: 'actions', sortable: false },
        { text: '', value: 'data-table-expand' }
    ]
};
