document.addEventListener('DOMContentLoaded', function() {
    const downloadButton = document.getElementById('download-table-csv');

    if (downloadButton) {
        downloadButton.addEventListener('click', function() {
            const table = document.querySelector('table');
            if (!table) return;

            let csvContent = '';

            // 遍历表头
            const headers = table.querySelectorAll('thead tr th');
            const headerRow = Array.from(headers).map(th => th.textContent.trim()).join(',');
            csvContent += headerRow + '\n';

            // 获取列索引，假设 "代码" 列是第二列（索引为1）
            const codeColumnIndex = 0;

            // 遍历数据行
            const rows = table.querySelectorAll('tbody tr');
            rows.forEach(row => {
                const rowData = Array.from(row.querySelectorAll('td')).map((td, index) => {
                    // 检查是否为 "代码" 列
                    if (index === codeColumnIndex) {
                        // 获取单元格的内容并保留前导零
                        let cellContent = td.textContent.trim();
                        // 检查并添加前置零
                        if (!isNaN(cellContent)) {
                            cellContent = cellContent.padStart(6, '0');
                        }
                        // 返回内容
                        return `"${cellContent}"`; // 使用引号包裹，防止前导零丢失
                    }
                    // 对于其他列，直接返回内容
                    return td.textContent.trim();
                }).join(',');
                csvContent += rowData + '\n';
            });
            
            // 格式化文件名
            const date = new Date(); // 获取当前日期和时间
            const paddedDate = date.getDate().toString().padStart(2, '0'); // 格式化日期，保持前置零
            const paddedMonth = (date.getMonth() + 1).toString().padStart(2, '0'); // 格式化月份，保持前置零
            const paddedYear = date.getFullYear().toString().padStart(4, '0'); // 格式化年份，保持前置零
            const timestamp = `${paddedYear}${paddedMonth}${paddedDate}_${date.getHours()}${date.getMinutes()}${date.getSeconds()}`; // 生成时间戳
            const filename = `table_${timestamp}.csv`; // 组合文件名

            // 创建一个 Blob 来存储 CSV 内容
            const blob = new Blob([csvContent], { type: 'text/csv' });
            const url = URL.createObjectURL(blob);

            // 创建一个临时链接并触发下载
            const a = document.createElement('a');
            a.href = url;
            a.download = filename;
            a.click();

            // 清除 URL 以释放资源
            URL.revokeObjectURL(url);
        });
    }
});
