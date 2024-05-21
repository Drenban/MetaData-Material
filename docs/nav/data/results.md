---
title: 数据结果
---

# 数据结果

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

    === "数据更新"

        {{ read_excel('data.xlsx', engine='openpyxl') }}