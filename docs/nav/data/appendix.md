---
title: 附录
---

# 附录

## 附录 A 数据接口

``` { .py }
# -*- coding: utf-8 -*-
# Matplotlib、Seaborn、Plotly、Bokeh

import matplotlib.pyplot as plt
import pandas as pd

# Sample data
data = [
    ['Tushare', 'CN Securities, A share', '-now, 1 min', 'Account-specific', 'OHLCV', 'Prices&Indicators'], 
    ['Akshare', 'CN Securities, A share', '2017-now, 1 day', 'NA', 'OHLCV', 'Prices&Indicators'], 
    ['Baostock', 'CN Securities', '1990-12-19-now, 5min', 'Account-specific', 'OHLCV', 'Prices&Indicators'], 
    ['RiceQuant', 'CN Securities', '2005-now, 1ms', 'Account-specific', 'OHLCV', 'Prices&Indicators'], 
    ['JoinQuant', 'CN Securities', '2005-now, 1min', '3 requests each time', 'OHLCV', 'Prices&Indicators'], 
    ['YahooFinance', 'US Securities', 'Frequency-specific, 1min', '2,000/hour', 'OHLCV', 'Prices&Indicators'], 
    ['Alpaca', 'US Stocks, ETFs', '2015-now, 1min', 'Account-specific', 'OHLCV', 'Prices&Indicators'], 
    ['QuantConnect', 'US Securities', '1998-now, 1s', 'NA', 'OHLCV', 'Prices&Indicators'], 
    ['WRDS', 'US Securities', '2003-now, 1ms', '5 requests each time', 'Intraday Trades', 'Prices&Indicators'], 
    ['IEXCloud', 'NMS US securities', '1970-now, 1 day', '100 per second per IP', 'OHLCV', 'Prices&Indicators'], 
    ['CCXT', 'Cryptocurrency', 'API-specific, 1min', 'API-specific', 'OHLCV', 'Prices&Indicators'], 
    ['Binance', 'Cryptocurrency', 'API-specific, 1s, 1min', 'API-specific', 'Tick-level daily aggegrated trades,\nOHLCV', 'Prices&Indicators'], 
]

# Create DataFrame
df = pd.DataFrame(data)

# Check the number of columns and rows
num_rows, num_columns = df.shape
print(f"Number of rows: {num_rows}")
print(f"Number of columns: {num_columns}")

# Columns name
columns = ['Data Source', 'Type', 'Range and Frequency', 'Request Limits', 'Raw Data', 'Preprocessed Data', ]

# Create subplots
fig, ax = plt.subplots()

# Hide axis
ax.axis('off')

# TABLE
table = ax.table(cellText=data, colLabels=columns, loc='center', cellLoc='center', bbox=[0, 0, 1, 1])

# Set table style
table.auto_set_font_size(False)
table.set_fontsize(10)
table.scale(1.2, 1.2)  # Adjusting table size

plt.title('Supported Data Sources')
plt.show()



data = {
    "Data interface":["Tushare", "Akshare", "baostock", "RiceQuant", "jqdatasdk", "WindPy"], 
    "Data analysis":["pandas", "numpy", "scipy", "math", "PyMC3", "Stan", "Statsmodels"], 
    "Math analysis":["SymPy", "SymPyGamma", "SageMath", "GMPY2"], 
    "Financial analysis":["Quantlib", "Pyfolio", "Zipline", "TA-Lib", "pandas-datareader", "ccxt"], 
    "International finance":["Alpha Vantage", "Quandl", "IEX Cloud", "Yahoo Finance", "Polygon.io", "Eikon Data", "Bloomberg"], 
    "System tasks":["os", "sys", "subprocess"," os.path", "tempfile", "platform", "logging", "socket", "multiprocessing"], 
    "Time processing":["datetime", "dateutil", "pytz", "Workalendar", "BusinessTime", "time", "arrow", "pendulum", "Delorean"], 
    "Data visualization":["matplotlib", "seabron", "plotly", "bokeh"], 
    "Machine learning":["Scikit-learn", "TensorFlow", "PyTorch", "Keras", "XGBoost", "LightGBM", "NLTK(Natural Language Toolkit)"], 
    "win":["pywin32", "pyautogui", "OpenCV"], 
    }

print(data)

# Find the longest list length
max_length = max(len(value) for value in data.values())

# Fill the list with insufficient length using pd.Series
# filled_data = {key: pd.Series(value + [None] * (max_length - len(value))) for key, value in data.items()}

# Fill the list with insufficient length using pd.Series and remove leading and trailing spaces
filled_data = {key: pd.Series([item.strip() if isinstance(item, str) else item for item in value] + [None] * (max_length - len(value))) for key, value in data.items()}

# Check the length of each value
lengths = set(len(value) for value in filled_data.values())

# If all values have the same length, create a DataFrame
if len(lengths) == 1:
    df = pd.DataFrame(filled_data)
    print(df)
else:
    print("Error: All lists in the dictionary must be of the same length.")



data = [
    ['Tushare', 'CN Securities, A share', '-now, 1 min', 'Account-specific', 'OHLCV', 'Prices&Indicators'], 
    ['Akshare', 'CN Securities, A share', '2017-now, 1 day', 'NA', 'OHLCV', 'Prices&Indicators'], 
    ['Baostock', 'CN Securities', '1990-12-19-now, 5min', 'Account-specific', 'OHLCV', 'Prices&Indicators'], 
    ['RiceQuant', 'CN Securities', '2005-now, 1ms', 'Account-specific', 'OHLCV', 'Prices&Indicators'], 
    ['JoinQuant', 'CN Securities', '2005-now, 1min', '3 requests each time', 'OHLCV', 'Prices&Indicators'], 
    ['YahooFinance', 'US Securities', 'Frequency-specific, 1min', '2,000/hour', 'OHLCV', 'Prices&Indicators'], 
    ['Alpaca', 'US Stocks, ETFs', '2015-now, 1min', 'Account-specific', 'OHLCV', 'Prices&Indicators'], 
    ['QuantConnect', 'US Securities', '1998-now, 1s', 'NA', 'OHLCV', 'Prices&Indicators'], 
    ['WRDS', 'US Securities', '2003-now, 1ms', '5 requests each time', 'Intraday Trades', 'Prices&Indicators'], 
    ['IEXCloud', 'NMS US securities', '1970-now, 1 day', '100 per second per IP', 'OHLCV', 'Prices&Indicators'], 
    ['CCXT', 'Cryptocurrency', 'API-specific, 1min', 'API-specific', 'OHLCV', 'Prices&Indicators'], 
    ['Binance', 'Cryptocurrency', 'API-specific, 1s, 1min', 'API-specific', 'Tick-level daily aggegrated trades, OHLCV', 'Prices&Indicators'], 
]

columns = ['Data Source', 'Type', 'Range and Frequency', 'Request Limits', 'Raw Data', 'Preprocessed Data', ]

data = pd.DataFrame(data, columns=columns)

print(data)
```

## 附录 B 

### 使用的编程语言

* **编程语言:** [Python]()

### 第三方库

* **第三方库：**

    - **数据接口：**
        - [Tushare、Akshare、baostock、RiceQuant、jqdatasdk、WindPy、，etc.]()
    - **数据分析：**
        - [pandas、numpy、scipy、math、PyMC3、Stan、Statsmodels，etc.]()
    - **数学分析：**
        - [SymPy、SymPyGamma、SageMath、GMPY2，etc.]()
    - **财务分析：**
        - [Quantlib、Pyfolio、Zipline、TA-Lib、pandas-datareader、ccxt，etc.]()
    - **国际金融：**
        - [Alpha Vantage、Quandl、IEX Cloud、Yahoo Finance、Polygon.io、Eikon Data、Bloomberg，etc.]()
    - **系统任务：**
        - [os、sys、subprocess、os.path、tempfile、platform、logging、socket、multiprocessing，etc.]()
    - **时间处理：**
        - [datetime、dateutil、pytz、Workalendar、BusinessTime、time、arrow、pendulum、Delorean，etc.]()
    - **数据捕获：**
        - [Requests、Beautiful Soup、Scrapy、Selenium、lxml、urllib、feedparser、Tweepy，etc.]()
    - **可视化：**
        - [matplotlib、seabron、plotly、bokeh，etc.]()
    - **机器学习：**
        - [Scikit-learn、TensorFlow、PyTorch、Keras、XGBoost、LightGBM、NLTK(Natural Language Toolkit)，etc.]()
    - **win：**
        - [pywin32、pyautogui、OpenCV，etc.]()

### 工具

* **工具：** [Jupyter Notebooks、cmd、VScode(Visual Studio Code)、Anaconda、shell]()

*学习顺序* [^1] *参考*

[^1]: 
    可视化：matplotlib、seabron、plotly、bokeh，etc.

    数据分析：pandas、numpy、scipy、math、PyMC3、Stan、Statsmodels，etc.
    
    机器学习：Scikit-learn、TensorFlow、PyTorch、Keras、XGBoost、LightGBM、NLTK(Natural Language Toolkit)，etc.
    
    数据捕获：Requests、Beautiful Soup、Scrapy、Selenium、lxml、urllib、feedparser、Tweepy，etc.

    数学分析：SymPy、SymPyGamma、SageMath、GMPY2，etc.
    
    财务分析：Quantlib、Pyfolio、Zipline、TA-Lib、pandas-datareader、ccxt，etc.
    
    系统任务：os、sys、subprocess、os.path、tempfile、platform、logging、socket、multiprocessing，etc.
    
    win：pywin32、pyautogui、OpenCV，etc.
    
    时间处理：datetime、dateutil、pytz、Workalendar、BusinessTime、time、arrow、pendulum、Delorean，etc.

    数据接口：Tushare、Akshare、baostock、RiceQuant、jqdatasdk、WindPy、，etc.
    
    国际金融：Alpha Vantage、Quandl、IEX Cloud、Yahoo Finance、Polygon.io、Eikon Data、Bloomberg，etc.