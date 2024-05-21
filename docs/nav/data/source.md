---
title: 数据源
---

# 数据收集

* 1、来源识别：
    - 确定数据来源，包括 **内部数据**（如交易记录、客户信息）和 **外部数据**（如市场数据、社交媒体、新闻报道）。
* 2、数据抓取：
    - 使用 **API**、**爬虫** 或 **直接购买** 等方式收集 **数据**。
* 3、数据接收：
    - 通过 **实时** 数据流、**批量** 上传等方式接收数据。

## 收集与问题相关的数据。

数据可以有不同来源，包括数据库、文件、API等。同时需要确保数据的 **准确性**、**完整性** 和 **一致性**。

## 2.1 数据源

### 2.1.1 网络抓取

```python
import urllib.request as request
```

### 2.1.2 API

**数据接口**，与我们研究领域相关的数据接口，数据供应商，有收费的、有免费的，可以按需选择。

**```tushare、akshare、baostock，etc.```**

为了使用 **Tushare**、**AkShare** 和 **Baostock** 这三个库来读取接口数据，您需要首先确保已经安装了这些库。如果还未安装，可以通过运行 ```pip install tushare akshare baostock``` 来安装它们。

#### 2.1.2.1 Tushare

首先，您需要在 **Tushare** 官网注册并获取一个 **token**。

```python
import tushare as ts

# Set Tushare token
ts.set_token('your_token_here')

# Initialize the Pro interface
pro = ts.pro_api()

# Obtain stock data
# Taking the daily data of the Shanghai Stock Exchange 50 Index as an example
df = pro.index_daily(ts_code='000016.SH', start_date='20230101', end_date='20230301')

print(df)
```

- ```set_token('your_token_here')```：这里需要将 **'your_token_here'** 替换为您的 **Tushare token**。
- ```pro_api()```：初始化 **Tushare** 的 **pro** 接口。
- ```index_daily``` 方法用于获取指数的日线数据。**ts_code='000016.SH'** 指定了上证50指数的代码，**start_date** 和**end_date** 参数用于指定获取数据的时间范围。

#### 2.1.2.1 AkShare

**AkShare** 是一个开源的金融数据接口库，不需要注册和token。

```python
import akshare as ak

# Obtain stock data
# Taking the daily data of the Shanghai Composite Index as an example
stock_zh_index_daily_df = ak.stock_zh_index_daily(symbol="sh000001")

print(stock_zh_index_daily_df)
```
- ```stock_zh_index_daily``` 函数用于获取中国股市指数的日线数据。**symbol="sh000001"** 指定了上证指数的代码。

#### 2.1.2.3 Baostock

**Baostock** 是一个 **Stock**  数据接口库，提供了丰富的 **Stock**  数据，使用时需要登录和登出操作。

```python
import baostock as bs
import pandas as pd

# log in
lg = bs.login()

# Obtain stock data
# Taking the daily data of the Shanghai Stock Exchange 50 Index as an example
rs = bs.query_history_k_data_plus("sh.000016",
                                  "date,code,open,high,low,close,preclose,volume,amount,adjustflag",
                                  start_date='2023-01-01', end_date='2023-03-01',
                                  frequency="d", adjustflag="3")

data_list = []
while (rs.error_code == '0') & rs.next():
    # Obtain a record and merge the records together
    data_list.append(rs.get_row_data())
result = pd.DataFrame(data_list, columns=rs.fields)

# Log out
bs.logout()

print(result)
```
- ```login()``` 和 ```logout()``` 用于登录和登出 **Baostock**。
- ```query_history_k_data_plus``` 方法用于查询历史K线数据。参数中 **"sh.000016"** 是上证50指数的代码，**start_date** 和 **end_date** 指定了获取数据的时间范围，**frequency="d"** 表示日频数据，**adjustflag="3"** 表示复权类型为后复权。

以上是如何使用这三个库来读取 **Stock**  数据的基本示例。每个库都有自己的特点和优势，您可以根据自己的需要选择合适的库来使用。请注意，您需要将示例代码中的一些参数（如Tushare的token）替换为您自己的信息。

### 2.1.3 建立随机数据

使用 **Python** 的 **random** 模块生成随机数据，并通过这些数据来辅助理解大数据分析的过程，我们可以创建不同 **类型** 和 **形状** 的随机数据集，并应用基本的数据分析方法。

```python
import random
# random(), 返回一个浮点数，范围在 [0.0, 1.0] 之间，包括 0.0 但不包括 1.0
x = random.random()

# randint(a, b), 返回一个范围在 [a, b] 之间的整数，包括 a 和 b
x = random.randint(1, 10)

# uniform(a, b), 返回一个范围在 [a, b] 之间的浮点数
x = random.uniform(1.0, 10.0)

# choice(seq), 从非空序列中随机选择一个元素
x = random.choice([1, 2, 3, 4, 5])

# shuffle(seq), 将序列的元素随机排列
items = [1, 2, 3, 4, 5]
random.shuffle(items)

# sample(population, k), 从总体中无放回地随机选择 k 个唯一元素
x = random.sample([1, 2, 3, 4, 5], 3)

# randrange(start, stop[, step]), 返回一个在给定范围内以给定步长递增的随机整数
x = random.randrange(0, 10, 2)
```

**随机生成数据示例**

```python
import random
import string
import pandas as pd
import numpy as np
import mplfinance as mpf
import statsmodels.api as sm
import matplotlib.pyplot as plt
from datetime import datetime, timedelta
from statsmodels.tsa.arima_process import ArmaProcess
from statsmodels.tsa.arima.model import ARIMA

# Generate stock code
def generate_stock_code():
    prefix_list = ["600", "601", "002", "300", "886", "001", "000"]
    prefix = random.choice(prefix_list)
    suffix = ''.join(random.choices(string.digits, k=3))
    stock_code = prefix + suffix
    return stock_code


# Generate stock name
def generate_stock_name():
    stock_name = ''.join(random.choices(string.ascii_uppercase, k=4))
    return stock_name


def generate_stock_data(start_date, end_date, ar_params=np.array([0.7, -0.3]), ma_params=np.array([0.1, -0.3]), random_seed=None):
    np.random.seed(random_seed)
    code = generate_stock_code()
    name = generate_stock_name()

    dates = pd.date_range(start=start_date, end=end_date, freq='B')
    days = len(dates)

    np.random.seed(random_seed) # Set seed for reproducibility
    close_seq = np.zeros(days)

    trend = np.random.randn(days) * 0.01 # Use numpy random function for more randomness

    # compute max and min changes based on previous close
    max_change = 0.1
    min_change = -0.1
    max_trend_change = 0.05
    min_trend_change = -max_trend_change
    if days > 0:
        prev_close = 100 # Set initial price to 100
        close_seq[0] = prev_close
    for i in range(1, days):
        max_change = prev_close * 0.1
        min_change = -max_change
        max_trend = prev_close * (1 + max_change)
        min_trend = prev_close * (1 + min_change)

        # clip trend between min_trend and max_trend
        trend[i] = np.clip(trend[i], min_trend - prev_close, max_trend - prev_close)
        trend[i] = np.clip(trend[i], min_trend_change * prev_close, max_trend_change * prev_close) # add trend clip

        # Add high-low range to stock prices
        high_low_range = 0.5
        high_low_diff = np.random.uniform(high_low_range/2, high_low_range) * prev_close
        high_price = max(prev_close, prev_close + trend[i] * prev_close + high_low_diff/2)
        low_price = min(prev_close, prev_close + trend[i] * prev_close - high_low_diff/2)

        # Add trading volume and price noise
        volume_scale = 1e6
        noise_scale = 0.5
        volume = np.random.randint(1, 100) * volume_scale # Random trading volume between 1 and 100 million
        mean_price = (high_price + low_price) / 2
        price_std = (high_price - low_price) / 4
        noisy_price = np.random.normal(mean_price, noise_scale * price_std)
        prev_close = np.clip(noisy_price, 10, 2000) # Add trading volume and price noise
        close_seq[i] = np.clip(prev_close + trend[i] * prev_close, 10, 2000) # Add high-low range to stock prices

        prev_close = close_seq[i]

    close_seq = np.round(close_seq, 2)
    trend = np.round(trend, 2)

    df = pd.DataFrame({'Date': dates,
                       'Close': close_seq,
                       'Trend': trend,
                       'Open': np.zeros(days),
                       'High': np.zeros(days),
                       'Low': np.zeros(days),
                       'Volume': np.zeros(days),
                       'Capitalization': np.zeros(days),
                       'Code': np.full(days, code),
                       'Name': np.full(days, name)})

    df.loc[1:, 'Open'] = df['Close'].shift()
    df.loc[df['Open'] <= 0, 'Open'] = df['Close']
    df['High'] = np.maximum(df['Open'], df['Close'])
    df['Low'] = np.minimum(df['Open'], df['Close'])
    df['Volume'] = np.random.randint(10000, 100000, days)
    df['Capitalization'] = np.random.randint(10000000, 100000000, days)

    return df


def generate_random_stock_data(start_date, end_date, num_stocks, ar_params=np.array([0.5, -0.2]), ma_params=np.array([0.1, -0.3])):
    stock_data = []
    for i in range(num_stocks):
        data = generate_stock_data(start_date, end_date, ar_params, ma_params)
        data = data.dropna()  # Remove rows with missing values
        stock_data.append(data)
    df = pd.concat(stock_data)
    return df


# Example usage
df = generate_random_stock_data("2014-01-01", "2024-12-30", 1)
df.to_excel('RandomData.xlsx', index=False)
print(f"\nGenerated Stock Data:\n{df}")


df = df.iloc[-200:]


def plot_k_line(df):
    # Convert index to DatetimeIndex
    df.index = pd.to_datetime(df.index)
    mpf.plot(df, type='candle', mav=(5, 10, 20), volume=True,
             title='Random data K-line diagram', ylabel='Price', ylabel_lower='Volume', 
             figratio=(10,6), figscale=1.0, style='yahoo')
line = plot_k_line(df)


def plot_k_line(df):
    # Convert index to DatetimeIndex
    df.index = pd.to_datetime(df.index)
    
    # Define the color palette for up and down prices
    colors = mpf.make_marketcolors(up='r', down='g')
    
    # Create the style for the chart
    style = mpf.make_mpf_style(marketcolors=colors)
    
    # Plot the K-line chart
    mpf.plot(df, type='candle', mav=(5, 10, 20), volume=True,
             title='Random data K-line diagram', ylabel='Price', ylabel_lower='Volume', 
             figratio=(10,6), figscale=1.0, style=style)

plot_k_line(df)


# Data preprocessing
# Use Pandas to preprocess the obtained data, 
# including data cleaning, transformation, and merging operations
# Read the obtained data, clean and convert the data

# df = pd.read_csv('RandomData.xlsx')
df = df.dropna()  # Delete null values
df['Date'] = pd.to_datetime(df['Date'])  # Convert date to time series

# Calculate the 5-day, 10 day, and 20 day moving averages for daily market trends
df['ma5'] = df['Close'].rolling(5).mean()
df['ma10'] = df['Close'].rolling(10).mean()
df['ma20'] = df['Close'].rolling(20).mean()


# Merge data
# stock_data = pd.concat([df1, df2, df3], axis=0, ignore_index=True)
stock_data = df

# Data visualization
# Visualize data using Matplotlib and explore some common technical indicators.
# Draw a K-line diagram

def plot_k_line(stock_data):
    fig, ax = plt.subplots()
    idx = pd.to_datetime(stock_data.index, format='%Y-%m-%d')
    ax.set_xticks(range(0, len(stock_data), 10))
    ax.set_xticklabels(idx[::10].strftime('%Y-%m-%d'), rotation=90, fontsize=9)
    # ax.set_xticklabels(stock_data.index[::10].to_pydatetime().strftime('%Y-%m-%d'), rotation=90, fontsize=9)
    # ax.set_xticklabels(stock_data.index[::10].strftime('%Y-%m-%d'), rotation=90, fontsize=9)
    # ax.set_xticklabels(stock_data['Date'].dt.Date[::10], rotation=90, fontsize=9)
    # ax.set_xticklabels(stock_data.index.Date[::10], rotation=90, fontsize=9)
    plt.candlestick2_ochl(
        ax=ax,
        opens=stock_data['open'],
        closes=stock_data['close'],
        highs=stock_data['high'],
        lows=stock_data['low'],
        width=0.6,
        colorup='r',
        colordown='g',
        alpha=1.0
    )
    plt.show()

def plot_k_line(stock_data):
    # Convert index to DatetimeIndex
    stock_data.index = pd.to_datetime(stock_data.index)
    mpf.plot(stock_data, type='candle', mav=(5, 10, 20), volume=True,
             title='Stock K-line chart', ylabel='Price', ylabel_lower='Shares', 
             figratio=(10,6), figscale=1.0, style='yahoo')


# Draw moving average line
def plot_ma(stock_data):
    fig, ax = plt.subplots()
    ax.plot(stock_data.index, stock_data['Close'], label='Close')
    ax.plot(stock_data.index, stock_data['ma5'], label='5-day moving average')
    ax.plot(stock_data.index, stock_data['ma10'], label='10-day moving average')
    ax.plot(stock_data.index, stock_data['ma20'], label='20-day moving average')
    ax.legend()
    plt.show()

line = plot_k_line(stock_data)
ma = plot_ma(stock_data)

# Strategy
# Use Python's Pandas and Numpy libraries to implement some simple stock investment strategies, 
# such as trend strategies and mean regression strategies.

# Strategy 1: Trend following strategy
stock_data['returns'] = np.log(stock_data.Close / stock_data.Close.shift(1))
stock_data['direction'] = np.sign(stock_data['ma20'] - stock_data['ma5'])
stock_data.dropna(inplace=True)

# Trend following strategy: long up trend, short down trend
stock_data['strategy'] = stock_data['returns'] * stock_data['direction'].shift(1)
fig = stock_data[['returns', 'strategy']].cumsum().apply(np.exp).plot(figsize=(10, 6))

# Strategy 2: Mean Regression Strategy
stock_data['returns'] = np.log(stock_data.Close / stock_data.Close.shift(1))
stock_data['spread'] = stock_data['ma5'] - stock_data['ma20']
stock_data.dropna(inplace=True)

# Mean regression strategy: long prices below the mean line and short prices above the mean line
stock_data['position'] = np.where(stock_data['spread'] > 0, -1, 1)
stock_data['strategy'] = stock_data['returns'] * stock_data['position'].shift(1)
stock_data[['returns', 'strategy']].cumsum().apply(np.exp).plot(figsize=(10, 6))

import matplotlib.pyplot as plt

# Plotting strategy one: Trend following
plt.figure(figsize=(10,6))
plt.plot(stock_data[["returns", "strategy"]].cumsum().apply(np.exp))
plt.legend(["Returns", "Trend following strategy"])
plt.title("Returns and trend following strategy")

# Plotting strategy two: Mean reversion
plt.figure(figsize=(10,6))
plt.plot(stock_data[["returns", "strategy"]].cumsum().apply(np.exp))
plt.legend(["Returns", "Mean reversion strategy"])
plt.title("Returns and mean reversion strategy")

plt.show()
```

### 2.1.4 读取本地数据

**```.xlsx、.csv、.txt、.hdf5、.json，etc.```**

```python
import pandas as pd
import h5py
import json

# Read .xlsx file
xlsx_path = 'your_file_path_here.xlsx'
xlsx_data = pd.read_excel(xlsx_path)

print(xlsx_data)


# Read .csv file
csv_path = 'your_file_path_here.csv'
csv_data = pd.read_csv(csv_path)

print(csv_data)


# Read .txt file
txt_path = 'your_file_path_here.txt'
with open(txt_path, 'r') as file:
    txt_data = file.read()

print(txt_data)


# Read .hdf5 file
hdf5_path = 'your_file_path_here.hdf5'
with h5py.File(hdf5_path, 'r') as file:
    hdf5_data = {key: file[key][()] for key in file.keys()}

print(hdf5_data)


# Read .json file
json_path = 'your_file_path_here.json'
with open(json_path, 'r') as file:
    json_data = json.load(file)

print(json_data)
```

### 2.1.5 建立数据库

**```SQLite、MySQL、PostgreSQL、MongoDB，etc. (OLTP，Online Transaction Processing)```**

### 2.1.6 搭建数据仓库

**```(OLAP，Online Analytical Processing)```**