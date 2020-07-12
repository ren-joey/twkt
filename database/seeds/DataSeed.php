<?php

class DataSeed {
    const categories = [
        [
            'serial_number' => 'R001',
            'col_name' => 'R001',
            'tw_name' => '蝦紅素'
        ]
    ];

    const menus = [
        [
            'col_name' => 'materials',
            'tw_name' => '原物料'
        ],
        [
            'col_name' => 'orders',
            'tw_name' => '需求單'
        ],
        [
            'col_name' => 'quotations',
            'tw_name' => '報價單'
        ],
        [
            'col_name' => 'settings',
            'tw_name' => '設定'
        ]
    ];

    const permissionGroups = [
        [
            'col_name' => 'admin',
            'tw_name' => '管理員',
            'permission' => '',
            'menus' => ['materials', 'orders', 'quotations', 'settings']
        ],
        [
            'col_name' => 'agent',
            'tw_name' => '專員',
            'permission' => '',
            'menus' => ['materials', 'orders', 'quotations', 'settings']
        ],
        [
            'col_name' => 'company',
            'tw_name' => '廠商',
            'permission' => '',
            'menus' => ['materials', 'quotations', 'settings']
        ],
        [
            'col_name' => 'user',
            'tw_name' => '用戶',
            'permission' => '',
            'menus' => ['materials', 'orders', 'settings']
        ],
    ];

    const materialColumns = [
        ['col_name' => 'name','tw_name' => '原料名稱','col_option' => '','type' => 'text'],
        ['col_name' => 'moq','tw_name' => 'MOQ','col_option' => '','type' => 'text'],
        ['col_name' => 'price','tw_name' => '報價','col_option' => '','type' => 'text'],
        ['col_name' => 'spec_1','tw_name' => '規格一','col_option' => '','type' => 'text_array'],
        ['col_name' => 'spec_2','tw_name' => '規格二','col_option' => '粉末,顆粒,油狀,液狀,膏狀,片狀,膠狀,糖漿,其它','type' => 'checkbox'],
        ['col_name' => 'origin_name','tw_name' => '原廠名稱','col_option' => '','type' => 'text'],
        ['col_name' => 'origin','tw_name' => '原料產地','col_option' => '台灣,美國,日本,韓國,中國,法國,沖繩,德國,瑞士,泰國,英國,荷蘭,澳洲,祕魯,印度,印尼,巴西,丹麥,智利,挪威,冰島,波蘭,瑞典,北歐,非洲,義大利,加拿大,以色列,阿根廷,摩洛哥,比利時,墨西哥,愛爾蘭,葡萄牙,俄羅斯,紐西蘭,夏威夷,馬來西亞,斯里蘭卡,哥倫比亞,其它','type' => 'select'],
        ['col_name' => 'patent','tw_name' => '專利','col_option' => '無,功效專利,製程專利,其它','type' => 'checkbox'],
        ['col_name' => 'certification','tw_name' => '認證','col_option' => '無,猶太認證 KOSHER,清真認證 HALAL,非基改 Non-GMO,食品GMP認證,ISO認證,HACCP認證,FSSC22000,ESCOP認證,MSC認證,CE歐盟認證,USDA認證,FDA-GRAS認證,USP美國藥典,ECOCERT有機認證,Organic有機認證,其它','type' => 'checkbox'],
        ['col_name' => 'report','tw_name' => '臨床研究 /文獻報告','col_option' => '','type' => 'text'],
        ['col_name' => 'function','tw_name' => '功能','col_option' => '生髮,腦力,視力,口腔,骨骼,心肺,肝臟,心血管,血糖,血壓,血脂,腸胃,睡眠,抗壓/紓壓,免疫力,抗過敏,抗癌,抗發炎,抗氧化 ,性功能(男),性功能(女),攝護腺,女性泌尿道,經前症候群/更年期,體重控制,排便順暢,皮膚美容,美白,除臭,增加吸收率,兒童,銀髮族,其它','type' => 'checkbox'],
        ['col_name' => 'allergen','tw_name' => '原料來源含有過敏原','col_option' => '奶類及其製品,蛋類及其製品,魚類及其製品,甲殼類及其製品,大豆類及其製品,堅果類及其製品,花生及其製品,芝麻及其製品,芒果及其製品,含麩質之穀物其製品','type' => 'checkbox'],
        ['col_name' => 'feature','tw_name' => '原料特性','col_option' => '水溶,油溶,怕光,怕熱,酸鹼,其它','type' => 'checkbox'],
        ['col_name' => 'process','tw_name' => '加工製程','col_option' => '','type' => 'text'],
        ['col_name' => 'dosage_form','tw_name' => '適用劑型','col_option' => '粉包,硬膠囊,軟膠囊,打錠,水劑,其它','type' => 'checkbox'],
        ['col_name' => 'list','tw_name' => '可供食品使用原料彙整一覽表 (依衛生福利部食品藥物管理)','col_option' => '草、木本植物類 (1),草、木本植物類 (2),草、木本植物類來源製取之原料,藻類及其來源製取之原料,菇蕈類,微生物及其來源製取之原料,海洋動物、水產類、爬蟲類及其來源製取之原料,禽、畜類及其來源製取之原料,其它','type' => 'select'],
        ['col_name' => 'gov_limit','tw_name' => '衛福部法規限制','col_option' => '','type' => 'text'],
        ['col_name' => 'dosage_amount','tw_name' => '建議劑量','col_option' => '','type' => 'text'],
        ['col_name' => 'image_json','tw_name' => '上傳產品資訊 (jpg./pdf.檔案)','col_option' => '產品資料,規格表,COA,MSDS,營養標示,進出口報單','type' => 'checkbox'],
        ['col_name' => 'cuzo','tw_name' => '常備庫存','col_option' => '有,無,其它','type' => 'radio'],
        ['col_name' => 'comment','tw_name' => '其他','col_option' => '','type' => 'text'],
    ];

    const materials = [
        ['serial_number' => 'R001-01-02','name' => '專利紅藻萃取(含蝦紅素)2.5%','moq' => '','spec_1' => '2.5%','spec_2' => '顆粒','origin_name' => 'Valensa','origin' => '美國','patent' => '功效專利','certification' => 'KOSHER、HALAL、HACCP','report' => '2','function' => '腦力,視力,心血管,抗發炎,抗氧化,皮膚美容','allergen' => '','feature' => '','process' => '','dosage_form' => '','list' => '藻類及其來源製取之原料','gov_limit' => '無','dosage_amount' => '','image_json' => '','cuzo' => '','comment' => ''],
        ['serial_number' => 'R001-04','name' => '蝦紅素3%','moq' => '','spec_1' => '3%','spec_2' => '','origin_name' => '','origin' => '中國','patent' => '','certification' => '','report' => '0','function' => '腦力,視力,心血管,抗發炎,抗氧化,皮膚美容','allergen' => '','feature' => '','process' => '','dosage_form' => '','list' => '藻類及其來源製取之原料','gov_limit' => '無','dosage_amount' => '','image_json' => '','cuzo' => '','comment' => ''],
        ['serial_number' => 'R001-07-01','name' => '天然藻紅素2.5%','moq' => '','spec_1' => '2.5%','spec_2' => '粉末','origin_name' => 'NAXA','origin' => '美國','patent' => '功效專利','certification' => 'KOSHER、HALAL、Non-GMO、ISO、HACCP、FDA-GRAS、USDA、ECOCERT','report' => '65','function' => '腦力,視力,心血管,抗發炎,抗氧化,皮膚美容','allergen' => '','feature' => '水溶','process' => '','dosage_form' => '','list' => '藻類及其來源製取之原料','gov_limit' => '無','dosage_amount' => '','image_json' => '','cuzo' => '56000','comment' => ''],
        ['serial_number' => 'R001-07-03','name' => '天然藻紅素2%','moq' => '','spec_1' => '2%','spec_2' => '粉末','origin_name' => 'NAXA','origin' => '美國','patent' => '功效專利','certification' => 'KOSHER、HALAL、Non-GMO、ISO、HACCP、FDA-GRAS、USDA、ECOCERT','report' => '65','function' => '腦力,視力,心血管,抗發炎,抗氧化,皮膚美容','allergen' => '','feature' => '','process' => '','dosage_form' => '','list' => '藻類及其來源製取之原料','gov_limit' => '無','dosage_amount' => '','image_json' => '','cuzo' => '1000000','comment' => ''],
        ['serial_number' => 'R001-08-02','name' => '紅藻萃取物O5 5%','moq' => '1kg','spec_1' => '5%','spec_2' => '油狀','origin_name' => 'ALGALIF®','origin' => '冰島','patent' => '','certification' => 'KOSHER、HALAL、FDA-GRAS、HACCP','report' => '53','function' => '腦力,視力,心血管,抗發炎,抗氧化,皮膚美容','allergen' => '','feature' => '','process' => '','dosage_form' => '軟膠囊,液態素食膠囊','list' => '藻類及其來源製取之原料','gov_limit' => '無','dosage_amount' => '80-120mg/天','image_json' => '','cuzo' => '1380000','comment' => ''],
        ['serial_number' => 'R001-08-03','name' => '紅藻萃取物O10 10%','moq' => '1kg','spec_1' => '10%','spec_2' => '油狀','origin_name' => 'ALGALIF®','origin' => '冰島','patent' => '','certification' => 'KOSHER、HALAL、FDA-GRAS、HACCP、Non-GMO','report' => '53','function' => '腦力,視力,心血管,抗發炎,抗氧化,皮膚美容','allergen' => '','feature' => '','process' => '','dosage_form' => '軟膠囊,液態素食膠囊','list' => '藻類及其來源製取之原料','gov_limit' => '無','dosage_amount' => '40-60mg/天','image_json' => '','cuzo' => '-1000000','comment' => ''],
        ['serial_number' => 'R001-10-02','name' => '紅藻萃取物5%','moq' => '','spec_1' => '5%','spec_2' => '油狀','origin_name' => 'FUJI','origin' => '日本','patent' => '','certification' => '','report' => '0','function' => '腦力,視力,心血管,抗發炎,抗氧化,皮膚美容','allergen' => '','feature' => '','process' => '','dosage_form' => '','list' => '藻類及其來源製取之原料','gov_limit' => '無','dosage_amount' => '0','image_json' => '','cuzo' => '-2850000','comment' => ''],
    ];

    const users = [
        ['serial_number' => 'CE01-001','name' => '衡山診所','tax_id' => NULL,'phone' => '04-22381622','fax' => '04-22384110','address' => '404台中市北區崇德路一段631號3樓-2','email' => 'CE01-001@mail.com','line_id' => '','wechat_id' => '','whatsapp_id' => '','url' => '','liaison_name' => '吳小姐','liaison_phone' => '','service' => ''],
        ['serial_number' => 'CE01-002','name' => '漢明中醫診所','tax_id' => NULL,'phone' => '07-8069977,07-8032323','fax' => '07-8030012','address' => '812高雄市小港區漢民路503-505號','email' => 'CE01-002@mail.com','line_id' => '','wechat_id' => '','whatsapp_id' => '','url' => '','liaison_name' => '張小姐','liaison_phone' => '','service' => ''],
        ['serial_number' => 'CE01-003','name' => '澄清眼科','tax_id' => NULL,'phone' => '','fax' => '','address' => '','email' => 'CE01-003@mail.com','line_id' => '','wechat_id' => '','whatsapp_id' => '','url' => '','liaison_name' => '何藥師','liaison_phone' => '','service' => ''],
        ['serial_number' => 'CE01-004','name' => '大同中醫診所','tax_id' => NULL,'phone' => '','fax' => '','address' => '','email' => 'CE01-004@mail.com','line_id' => '','wechat_id' => '','whatsapp_id' => '','url' => '','liaison_name' => '歐美琪','liaison_phone' => '','service' => ''],
        ['serial_number' => 'CE01-005','name' => '正德中醫診所','tax_id' => NULL,'phone' => '07-3844707','fax' => '','address' => '高雄市三民區建興路213號','email' => 'CE01-005@mail.com','line_id' => '','wechat_id' => '','whatsapp_id' => '','url' => '','liaison_name' => '','liaison_phone' => '','service' => ''],
    ];

    const admins = [
        ['serial_number' => 'AD01-001','name' => 'twkt.bio','tax_id' => NULL,'phone' => '','fax' => '','address' => '','email' => 'twkt.bio@gmail.com','line_id' => '','wechat_id' => '','whatsapp_id' => '','url' => '','liaison_name' => 'cuishi guo','liaison_phone' => '','service' => ''],
    ];

    const existUser = [
        [
            'name' => 'Anny',
            'email' => 'twkt18@gmail.com',
            'password' => '$2y$10$mBNkeb55XGDqFah/Bl7/qOXXY6PeuCL5OLzjsgJkELCASc72Uqqum',
            'serial_number' => 'AG01-002',
            'tax_id' => '53245911',
            'phone' => '07-5576266',
            'address' => '高雄市左營區富民路418號2樓',
            'email' => 'twkt18@gmail.com',
            'liaison_name' => '鐘小姐'
        ]
    ];
}
