---
title: 数据结果
---

# 数据结果

---

!!! info inline ""

    -   :bootstrap-material-file-tree:{ .lg .middle } __数据源__

        ---

        数据源是指数据的起始点，是数据收集的原始位置或形式。数据源可以是数据库、文件、API ...

        [:bootstrap-octicons-arrow-right-24:] [数据源][数据源]

    [数据源]: source.md

!!! info inline ""

    -   :bootstrap-material-table-edit:{ .lg .middle } __数据清洗__

        ---

        数据清洗是数据预处理的一个重要步骤，它涉及到从原始数据中识别并纠正错误或不完整、...

        [:bootstrap-octicons-arrow-right-24:] [数据清洗][数据清洗]

    [数据清洗]: cleaning.md

- :bootstrap-fontawesome-brands-safari: __Target__ 清洗前的数据问题（如缺失值、异常值、格式问题等）
- :bootstrap-fontawesome-brands-medapps: __Method__ 采取的清洗措施（如数据填充、异常处理、数据转换等）

---

!!! info inline end ""

    -   :bootstrap-material-information:{ .lg .middle } __数据结果__

        ---

        数据结果是数据分析过程的产出，通常以报告、图表、仪表板或其他形式的数据表现来呈现。

        [:bootstrap-octicons-arrow-right-24:] [数据结果][数据结果]

    [数据结果]: #实时数据

!!! info inline end ""

    -   :bootstrap-material-alphabet-greek:{ .lg .middle } __数据分析__

        ---

        数据分析是对清洗后的数据进行详细检查、转换和建模的过程，目的是提取有价值的信息、...

        [:bootstrap-octicons-arrow-right-24:] [数据分析][数据分析]

    [数据分析]: analysis.md

- :bootstrap-fontawesome-brands-usb: __Step__ 数据分析的具体步骤（如模型的建立、训练、测试等）
- :bootstrap-fontawesome-brands-jsfiddle: __Tools__ 使用的工具和软件（如Python, R, Excel等）

---

## 数据下载

=== "CSV"

    `.csv` 文件更方便本地筛选和过滤数据，(1)更适合值的对照和比较。
    { .annotate }

    1.  :man_raising_hand: 注意： 此数据文件 **`代码`** 列容易出现，前导 **0** 丢失问题。

=== "TXT"

    `.txt` 文件仅保留 **`代码`** 列，可直接 **`全选-复制`** 到软件的 **`自选`** 中，便于数据分析。(1)
    { .annotate }

    1.  :woman_raising_hand: 提醒： 以上添加数据到 **`自选`** 的方式，仅对部分软件有效。

<button id="download-table-csv" class="md-button">下载 CSV 数据</button>
<button id="download-table-txt" class="md-button">下载 TXT 数据</button>

## 实时数据

---

!!! example ""

    === "20240527"
    
    |   股票代码 | 股票名称   |   收盘价 |   收期价 |   冗余位 | B                                                                           |
    |-----:|-----------:|:-----------|---------:|---------:|---------:|
    |000400|许继电气|30.08|31.79|29.37|:bootstrap-material-star::bootstrap-material-star::bootstrap-material-star:|
    |000520|凤凰航运|3.19|3.51|3.13|:bootstrap-material-star::bootstrap-material-star::bootstrap-material-star:|
    |000590|启迪药业|7.35|8.09|7.16|:bootstrap-material-star::bootstrap-material-star::bootstrap-material-star:|
    |000638|万方发展|5.42|5.96|4.79|:bootstrap-material-star::bootstrap-material-star::bootstrap-material-star:|
    |000722|湖南发展|11.6|11.7|11.55|:bootstrap-material-star::bootstrap-material-star::bootstrap-material-star:|
    |000819|岳阳兴长|17.8|18.46|17.24|:bootstrap-material-star::bootstrap-material-star::bootstrap-material-star:|
    |000863|三湘印象|3.63|3.99|3.54|:bootstrap-material-star::bootstrap-material-star::bootstrap-material-star:|
    |000875|吉电股份|6|6.5|5.58|:bootstrap-material-star::bootstrap-material-star::bootstrap-material-star:|
    |002016|世荣兆业|6.66|7.33|6.2|:bootstrap-material-star::bootstrap-material-star::bootstrap-material-star:|
    |002063|远光软件|5.64|5.98|5.52|:bootstrap-material-star::bootstrap-material-star::bootstrap-material-star:|
    |002182|宝武镁业|19.61|21.57|19.36|:bootstrap-material-star::bootstrap-material-star::bootstrap-material-star:|
    |002246|北化股份|11.56|12.71|11.02|:bootstrap-material-star::bootstrap-material-star::bootstrap-material-star:|
    |002272|川润股份|5.92|6.15|5.73|:bootstrap-material-star::bootstrap-material-star::bootstrap-material-star:|
    |002640|跨境通|2.45|2.69|2.39|:bootstrap-material-star::bootstrap-material-star::bootstrap-material-star:|
    |002676|顺威股份|5.02|5.53|4.83|:bootstrap-material-star::bootstrap-material-star::bootstrap-material-star:|
    |002769|普路通|6.51|7.16|6.48|:bootstrap-material-star::bootstrap-material-star::bootstrap-material-star:|
    |002897|意华股份|47.27|47.43|43.23|:bootstrap-material-star::bootstrap-material-star::bootstrap-material-star:|
    |002956|西麦食品|15.86|17.44|15.24|:bootstrap-material-star::bootstrap-material-star::bootstrap-material-star:|
    |002966|苏州银行|8.28|8.52|8.17|:bootstrap-material-star::bootstrap-material-star::bootstrap-material-star:|
    |002968|新大正|11.75|12.93|11.79|:bootstrap-material-star::bootstrap-material-star::bootstrap-material-star:|
    |003020|立方制药|26.78|28.48|26.01|:bootstrap-material-star::bootstrap-material-star::bootstrap-material-star:|
    |300001|特锐德|21.97|24.05|21.49|:bootstrap-material-star::bootstrap-material-star::bootstrap-material-star:|
    |300040|九洲集团|6.87|7.11|6.45|:bootstrap-material-star::bootstrap-material-star::bootstrap-material-star:|
    |300141|和顺电气|8.22|8.54|8.19|:bootstrap-material-star::bootstrap-material-star::bootstrap-material-star:|
    |300151|昌红科技|16.48|16.6|16.44|:bootstrap-material-star::bootstrap-material-star::bootstrap-material-star:|
    |300214|日科化学|6.32|7.4|6.13|:bootstrap-material-star::bootstrap-material-star::bootstrap-material-star:|
    |300215|电科院|6.06|6.23|5.91|:bootstrap-material-star::bootstrap-material-star::bootstrap-material-star:|
    |300218|安利股份|16.95|18.01|16.52|:bootstrap-material-star::bootstrap-material-star::bootstrap-material-star:|
    |300254|仟源医药|11.86|14.24|10.45|:bootstrap-material-star::bootstrap-material-star::bootstrap-material-star:|
    |300286|安科瑞|26.2|28.02|24.87|:bootstrap-material-star::bootstrap-material-star::bootstrap-material-star:|
    |300293|蓝英装备|14.38|17.26|13.74|:bootstrap-material-star::bootstrap-material-star::bootstrap-material-star:|
    |300298|三诺生物|26.97|27.47|26.07|:bootstrap-material-star::bootstrap-material-star::bootstrap-material-star:|
    |300327|中颖电子|23.39|25.12|23.35|:bootstrap-material-star::bootstrap-material-star::bootstrap-material-star:|
    |300346|南大光电|26.53|30.19|26.1|:bootstrap-material-star::bootstrap-material-star::bootstrap-material-star:|
    |300429|强力新材|12.07|14.17|11.52|:bootstrap-material-star::bootstrap-material-star::bootstrap-material-star:|
    |300444|双杰电气|7.27|7.5|7.29|:bootstrap-material-star::bootstrap-material-star::bootstrap-material-star:|
    |300464|星徽股份|4.62|5.54|4.32|:bootstrap-material-star::bootstrap-material-star::bootstrap-material-star:|
    |300499|高澜股份|13.19|13.72|12.66|:bootstrap-material-star::bootstrap-material-star::bootstrap-material-star:|
    |300513|恒实科技|10.13|12.16|9.34|:bootstrap-material-star::bootstrap-material-star::bootstrap-material-star:|
    |300515|三德科技|11.13|12.11|10.76|:bootstrap-material-star::bootstrap-material-star::bootstrap-material-star:|
    |300537|广信材料|16.96|19.16|16.22|:bootstrap-material-star::bootstrap-material-star::bootstrap-material-star:|
    |300632|光莆股份|10.94|11.72|10.82|:bootstrap-material-star::bootstrap-material-star::bootstrap-material-star:|
    |300637|扬帆新材|8.48|10.17|8.2|:bootstrap-material-star::bootstrap-material-star::bootstrap-material-star:|
    |300641|正丹股份|32.82|33.9|29.81|:bootstrap-material-star::bootstrap-material-star::bootstrap-material-star:|
    |300669|沪宁股份|15.04|14.83|14.98|:bootstrap-material-star::bootstrap-material-star::bootstrap-material-star:|
    |300670|大烨智能|5.87|6.16|5.82|:bootstrap-material-star::bootstrap-material-star::bootstrap-material-star:|
    |300727|润禾材料|27.98|30.41|26.6|:bootstrap-material-star::bootstrap-material-star::bootstrap-material-star:|
    |300786|国林科技|13.76|14.9|12.96|:bootstrap-material-star::bootstrap-material-star::bootstrap-material-star:|
    |300792|壹网壹创|19.23|21.88|18.7|:bootstrap-material-star::bootstrap-material-star::bootstrap-material-star:|
    |300819|聚杰微纤|15.34|16.57|15.49|:bootstrap-material-star::bootstrap-material-star::bootstrap-material-star:|
    |300822|贝仕达克|14.3|16.1|12.49|:bootstrap-material-star::bootstrap-material-star::bootstrap-material-star:|
    |300831|派瑞股份|11.58|12.43|11.32|:bootstrap-material-star::bootstrap-material-star::bootstrap-material-star:|
    |300870|欧陆通|49.63|50.81|48.75|:bootstrap-material-star::bootstrap-material-star::bootstrap-material-star:|
    |300880|迦南智能|20.28|20.21|20|:bootstrap-material-star::bootstrap-material-star::bootstrap-material-star:|
    |300913|兆龙互连|41.79|42.29|41.28|:bootstrap-material-star::bootstrap-material-star::bootstrap-material-star:|
    |300943|春晖智控|12.58|13.39|12.05|:bootstrap-material-star::bootstrap-material-star::bootstrap-material-star:|
    |300982|苏文电能|22.79|23.66|22.79|:bootstrap-material-star::bootstrap-material-star::bootstrap-material-star:|
    |301001|凯淳股份|21.31|25.57|19.64|:bootstrap-material-star::bootstrap-material-star::bootstrap-material-star:|
    |301016|雷尔伟|22.04|23.24|21.05|:bootstrap-material-star::bootstrap-material-star::bootstrap-material-star:|
    |301019|宁波色母|23.5|24.64|23.44|:bootstrap-material-star::bootstrap-material-star::bootstrap-material-star:|
    |301070|开勒股份|46.15|48.67|44.22|:bootstrap-material-star::bootstrap-material-star::bootstrap-material-star:|
    |301082|久盛电气|14.97|16.31|13.84|:bootstrap-material-star::bootstrap-material-star::bootstrap-material-star:|
    |301120|新特电气|10.58|10.79|10.75|:bootstrap-material-star::bootstrap-material-star::bootstrap-material-star:|
    |301131|聚赛龙|43.26|42.9|42.08|:bootstrap-material-star::bootstrap-material-star::bootstrap-material-star:|
    |301137|哈焊华通|15.89|16.29|15.67|:bootstrap-material-star::bootstrap-material-star::bootstrap-material-star:|
    |301157|华塑科技|38.48|41.53|36.86|:bootstrap-material-star::bootstrap-material-star::bootstrap-material-star:|
    |301162|国能日新|52.73|54.51|49.3|:bootstrap-material-star::bootstrap-material-star::bootstrap-material-star:|
    |301217|铜冠铜箔|11.13|11.3|11.19|:bootstrap-material-star::bootstrap-material-star::bootstrap-material-star:|
    |301237|和顺科技|24.68|26.05|23.84|:bootstrap-material-star::bootstrap-material-star::bootstrap-material-star:|
    |301272|英华特|41.71|41.2|41.58|:bootstrap-material-star::bootstrap-material-star::bootstrap-material-star:|
    |301285|鸿日达|24.61|25.03|24.85|:bootstrap-material-star::bootstrap-material-star::bootstrap-material-star:|
    |301297|富乐德|22.2|24.75|21.75|:bootstrap-material-star::bootstrap-material-star::bootstrap-material-star:|
    |301323|新莱福|38.51|39.39|36.52|:bootstrap-material-star::bootstrap-material-star::bootstrap-material-star:|
    |301328|维峰电子|42.16|42.94|41.92|:bootstrap-material-star::bootstrap-material-star::bootstrap-material-star:|
    |301348|蓝箭电子|32.45|34.06|32.35|:bootstrap-material-star::bootstrap-material-star::bootstrap-material-star:|
    |301353|普莱得|27|28.81|26.56|:bootstrap-material-star::bootstrap-material-star::bootstrap-material-star:|
    |301361|众智科技|26.71|32.05|22.21|:bootstrap-material-star::bootstrap-material-star::bootstrap-material-star:|
    |301381|赛维时代|30.5|33.34|29.29|:bootstrap-material-star::bootstrap-material-star::bootstrap-material-star:|
    |301390|经纬股份|34.81|37.41|33.59|:bootstrap-material-star::bootstrap-material-star::bootstrap-material-star:|
    |301399|英特科技|35.03|34.52|34.01|:bootstrap-material-star::bootstrap-material-star::bootstrap-material-star:|
    |301418|协昌科技|41.36|46.32|38.39|:bootstrap-material-star::bootstrap-material-star::bootstrap-material-star:|
    |301421|波长光电|47.32|53.44|45.26|:bootstrap-material-star::bootstrap-material-star::bootstrap-material-star:|
    |600021|上海电力|10.29|10.51|10|:bootstrap-material-star::bootstrap-material-star::bootstrap-material-star:|
    |600023|浙能电力|6.9|7.3|6.65|:bootstrap-material-star::bootstrap-material-star::bootstrap-material-star:|
    |600057|厦门象屿|7.62|7.89|7.64|:bootstrap-material-star::bootstrap-material-star::bootstrap-material-star:|
    |600101|明星电力|14.31|15.06|13.53|:bootstrap-material-star::bootstrap-material-star::bootstrap-material-star:|
    |600149|廊坊发展|4.4|4.47|4.32|:bootstrap-material-star::bootstrap-material-star::bootstrap-material-star:|
    |600188|兖矿能源|25.56|26.26|25.55|:bootstrap-material-star::bootstrap-material-star::bootstrap-material-star:|
    |600192|长城电工|4.61|4.74|4.6|:bootstrap-material-star::bootstrap-material-star::bootstrap-material-star:|
    |600230|沧州大化|12.77|13.68|12.43|:bootstrap-material-star::bootstrap-material-star::bootstrap-material-star:|
    |600236|桂冠电力|7.15|7.36|7.02|:bootstrap-material-star::bootstrap-material-star::bootstrap-material-star:|
    |600268|国电南自|7.68|8.45|7.4|:bootstrap-material-star::bootstrap-material-star::bootstrap-material-star:|
    |600310|广西能源|4.16|4.58|3.77|:bootstrap-material-star::bootstrap-material-star::bootstrap-material-star:|
    |600435|北方导航|9.36|9.57|9.19|:bootstrap-material-star::bootstrap-material-star::bootstrap-material-star:|
    |600483|福能股份|10.92|11.04|10.85|:bootstrap-material-star::bootstrap-material-star::bootstrap-material-star:|
    |600546|山煤国际|15.89|16.42|15.88|:bootstrap-material-star::bootstrap-material-star::bootstrap-material-star:|
    |600550|保变电气|4.63|5.09|4.51|:bootstrap-material-star::bootstrap-material-star::bootstrap-material-star:|
    |600575|淮河能源|3.54|3.63|3.51|:bootstrap-material-star::bootstrap-material-star::bootstrap-material-star:|
    |600719|大连热电|10.71|11.78|9.25|:bootstrap-material-star::bootstrap-material-star::bootstrap-material-star:|
    |600875|东方电气|18.55|19.48|18.4|:bootstrap-material-star::bootstrap-material-star::bootstrap-material-star:|
    |600886|国投电力|17.18|17.57|16.8|:bootstrap-material-star::bootstrap-material-star::bootstrap-material-star:|
    |600969|郴电国际|6.66|7.33|6.16|:bootstrap-material-star::bootstrap-material-star::bootstrap-material-star:|
    |600975|新五丰|10.11|10.27|9.78|:bootstrap-material-star::bootstrap-material-star::bootstrap-material-star:|
    |600976|健民集团|63.27|65.71|63.72|:bootstrap-material-star::bootstrap-material-star::bootstrap-material-star:|
    |601001|晋控煤业|19.11|20.52|18.62|:bootstrap-material-star::bootstrap-material-star::bootstrap-material-star:|
    |601009|南京银行|10.33|10.57|10.2|:bootstrap-material-star::bootstrap-material-star::bootstrap-material-star:|
    |601020|华钰矿业|14.12|15.53|12.75|:bootstrap-material-star::bootstrap-material-star::bootstrap-material-star:|
    |601117|中国化学|8.21|8.38|8.26|:bootstrap-material-star::bootstrap-material-star::bootstrap-material-star:|
    |601126|四方股份|17.77|19.02|17.68|:bootstrap-material-star::bootstrap-material-star::bootstrap-material-star:|
    |601229|上海银行|8.02|8.17|7.99|:bootstrap-material-star::bootstrap-material-star::bootstrap-material-star:|
    |601825|沪农商行|8.2|8.4|8.13|:bootstrap-material-star::bootstrap-material-star::bootstrap-material-star:|
    |601928|凤凰传媒|11.36|11.76|11.4|:bootstrap-material-star::bootstrap-material-star::bootstrap-material-star:|
    |601998|中信银行|7.32|7.57|7.26|:bootstrap-material-star::bootstrap-material-star::bootstrap-material-star:|
    |603016|新宏泰|18.44|20.29|18.28|:bootstrap-material-star::bootstrap-material-star::bootstrap-material-star:|
    |603058|永吉股份|8.88|9.14|8.67|:bootstrap-material-star::bootstrap-material-star::bootstrap-material-star:|
    |603068|博通集成|25.15|27.67|22.91|:bootstrap-material-star::bootstrap-material-star::bootstrap-material-star:|
    |603097|江苏华辰|29.85|31|29.31|:bootstrap-material-star::bootstrap-material-star::bootstrap-material-star:|
    |603111|康尼机电|7|7.34|6.87|:bootstrap-material-star::bootstrap-material-star::bootstrap-material-star:|
    |603323|苏农银行|5.39|5.5|5.37|:bootstrap-material-star::bootstrap-material-star::bootstrap-material-star:|
    |603530|神马电力|24.72|27.2|24.01|:bootstrap-material-star::bootstrap-material-star::bootstrap-material-star:|
    |603665|康隆达|21.03|21.24|20.79|:bootstrap-material-star::bootstrap-material-star::bootstrap-material-star:|
    |603836|海程邦达|13.89|15.28|13.63|:bootstrap-material-star::bootstrap-material-star::bootstrap-material-star:|
    |603991|至正股份|36.06|36.69|33.47|:bootstrap-material-star::bootstrap-material-star::bootstrap-material-star:|
    |605056|咸亨国际|14.07|14.08|14.07|:bootstrap-material-star::bootstrap-material-star::bootstrap-material-star:|
    |605162|新中港|9.02|9.92|8.32|:bootstrap-material-star::bootstrap-material-star::bootstrap-material-star:|
    |605287|德才股份|14.02|14.19|13.95|:bootstrap-material-star::bootstrap-material-star::bootstrap-material-star:|
    |688047|龙芯中科|104.05|116.9|98.09|:bootstrap-material-star::bootstrap-material-star::bootstrap-material-star:|
    |688090|瑞松科技|27.72|28.78|26.08|:bootstrap-material-star::bootstrap-material-star::bootstrap-material-star:|
    |688100|威胜信息|38.71|42.01|37.73|:bootstrap-material-star::bootstrap-material-star::bootstrap-material-star:|
    |688191|智洋创新|18.91|19.77|18.53|:bootstrap-material-star::bootstrap-material-star::bootstrap-material-star:|
    |688279|峰岹科技|117.01|121.52|117.42|:bootstrap-material-star::bootstrap-material-star::bootstrap-material-star:|
    |688347|华虹公司|33.15|34.67|32.96|:bootstrap-material-star::bootstrap-material-star::bootstrap-material-star:|
    |688360|德马科技|19.14|19.63|18.65|:bootstrap-material-star::bootstrap-material-star::bootstrap-material-star:|
    |688419|耐科装备|32.32|35.93|30.81|:bootstrap-material-star::bootstrap-material-star::bootstrap-material-star:|
    |688456|有研粉材|37.77|41.43|36.34|:bootstrap-material-star::bootstrap-material-star::bootstrap-material-star:|
    |688502|茂莱光学|109.81|123.04|104.06|:bootstrap-material-star::bootstrap-material-star::bootstrap-material-star:|
    |688536|思瑞浦|98.74|106.66|95.76|:bootstrap-material-star::bootstrap-material-star::bootstrap-material-star:|
    |688603|天承科技|53.34|55.7|53.3|:bootstrap-material-star::bootstrap-material-star::bootstrap-material-star:|
    |688676|金盘科技|62|64.52|60.53|:bootstrap-material-star::bootstrap-material-star::bootstrap-material-star:|
    |688702|盛科通信-U|41.82|43.51|40.76|:bootstrap-material-star::bootstrap-material-star::bootstrap-material-star:|
    |688720|艾森股份|37.45|41.03|35.48|:bootstrap-material-star::bootstrap-material-star::bootstrap-material-star:|
    |688789|宏华数科|118.41|123.1|119.47|:bootstrap-material-star::bootstrap-material-star::bootstrap-material-star:|
    |831445|龙竹科技|4.93|5.11|4.96|:bootstrap-material-star::bootstrap-material-star::bootstrap-material-star:|
    |831526|凯华材料|21.35|23.38|20.25|:bootstrap-material-star::bootstrap-material-star::bootstrap-material-star:|
    |833455|汇隆活塞|4.41|4.5|4.34|:bootstrap-material-star::bootstrap-material-star::bootstrap-material-star:|
    |836239|长虹能源|18.48|19.8|18.33|:bootstrap-material-star::bootstrap-material-star::bootstrap-material-star:|
    |837046|亿能电力|10.42|9.92|9.7|:bootstrap-material-star::bootstrap-material-star::bootstrap-material-star:|
    |838227|美登科技|23.77|24.98|23.42|:bootstrap-material-star::bootstrap-material-star::bootstrap-material-star:|
    |838810|春光药装|7.74|8.04|7.47|:bootstrap-material-star::bootstrap-material-star::bootstrap-material-star:|
    |872351|华光源海|7.17|7.64|7.12|:bootstrap-material-star::bootstrap-material-star::bootstrap-material-star:|
    |872931|无锡鼎邦|9.5|9.33|9.17|:bootstrap-material-star::bootstrap-material-star::bootstrap-material-star:|
    |873693|阿为特|32.02|36.23|26.35|:bootstrap-material-star::bootstrap-material-star::bootstrap-material-star:|
    |873706|铁拓机械|11.19|11.5|11.12|:bootstrap-material-star::bootstrap-material-star::bootstrap-material-star:|