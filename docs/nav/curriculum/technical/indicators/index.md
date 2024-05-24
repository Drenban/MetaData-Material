# Welcome to MetaData-Material

## Basic indicators

基本指标：

第五课 基础技术指标

第一节

移动平均线（MOVING AVERAGE）

我们经常使用的技术指标是移动平均线，通常情况下，在大多数整合了趋势跟踪指标的交易系统上使用，因为他们非常的简单。当然，我们并不需要亲自动手来绘制任何东西，我们有一台计算机，为我们操心这些简单的工作。但是，理解他们是怎么被计算的，不失为一个好主意，因为那样我们将更有效地使用它们。

简单移动平均线（Simple Moving Average），缩写为SMA，现在让我们回想一下，我们学生时代，那些冗长的数学课程。毫无疑问，我们是知道如何计算一些数值的平均数的，我们先来看一下SMA的公式吧，其中N是一个变量，是移动平均的时间周期数，C是我们已经熟悉的收盘价格。

尽管也能对其他价格进行平均计算，比如，最高价、最低价，以及最高价和最低价的中间价格，但是，最通常的情况是对收盘价格进行平均计算，我们现在看到了SMA的含义很简单，是一个平均数，但是其中移动又作何解释呢？

为简单起见，我们使用5根蜡烛线，我们在图表中采用了5根连续的蜡烛线，以算出我们的简单移动平均线的第一个值，然后，再新的一天或一小时，或者也可以是一周的开头，我们在公式中加进一个新的收盘价格，并去掉最前面的那个价格，我们在价格图上开始移动，我们选择的周期变量是5，可以是5天、5个小时或者5周，是相对较小的一个时间周期。

移动平均线紧跟着价格曲线的变化而变化，比如，若我们将周期数目上升到10，那么移动平均线看起来将更为稳定，变化更加缓慢，我的意思是移动平均线的反应相比价格曲线的反应更为缓慢和平稳，我们将它与5周期的移动平均线比较一下，如果你使用SMA作为趋势指示，那么，较缓慢的SMA才是更合理和可靠的。在这里，我们将学习由移动平均线构成的曲线形式的支撑线和阻力线，我们可以把移动平均线当做趋势指示。当价格在简单移动平均线之上时是上升趋势，当价格在简单移动平均线之下时是下降趋势。

在这里我们利用了，移动平均线通常意义上的主要缺点，即他们通常要滞后于价格曲线的变化来为我们服务。

但是由于该平均线被称为简单的平均线，那么显而易见，还存在着更为复杂的平均线。

第二节

首先，同学们让我们先回忆一下，技术分析的目的是，基于过去价格行为，对未来价格行为进行预测，那么，你听说过一个天气预报是基于十年前降雪量的统计数据的吗？当然你觉得这不可能，研究数据应该把过去，纳入考虑范围。但是，在预测中所起主要作用的是当前的情况。我的意思是今天发生的事比较重要，那么，今天的事情比昨天的事情更加有分量，昨天的事情比一年前的事情更加有分量。

现在让我们重新回到以10天为周期的简单移动平均线的公式，在每一个收盘价格前，有一个1/10的因子，称之为权值。这是一条简单移动平均线，因此，所有的权值都是一样，但是我们想今天的价格有更大的权值，昨天的稍微低一些，前天的价格再稍微低一些，以此类推，让我们把它称之为加权移动平均线或者WMA，自然的它整合变量N，在我们的例子当中N等于10，那么，我们该做些什么呢？为着手起见，我们将公式中的因子变为10、9、8、7，余下类推到1为止。

价格日，离开今天越远，就有更低的权值，然后，我们让此公式的两边，除以这些全职的总和，这样我们得到了我们想要的，来让我们看看这个公式产生了什么？

明显不同了，请注意这条新的移动平均线有同样的时间周期10，但是变得更快，对价格的波动更为敏感。再提醒小伙伴一次N值越大，移动平均线变化就更缓慢，不管他是何种类型。

第三节

技术分析中，对加权移动平均线的引进，展示了对数据进行平均的不同途径。那么，当前流行的有哪些移动平均线呢？在简单的移动平均线之外，有指数平滑移动平均线（Exponential Moving Average）或EMA，让我们在使用同样时间参数的情况下，将处于简单移动平均线和加权移动平均线进行比较，我们看到指数平滑移动平均线比简单移动平均线更快，但是，比加权移动平均线更缓。

在简单和指数平滑移动平均线之外，适应性移动平均线或VAR的使用也相当的广泛。我们看到此移动平均线比简单移动平均线更慢，小伙伴们很可能疑惑它是干什么用的，我们知道移动平均线是作为趋势指标来设计的。

当价格在移动平均线之上时，我们得到了一个上升趋势，同样当价格在平均线之下时是一个下降趋势。但是，如果趋势不明确时又将如何呢？也就是说，当我们在震荡行情内时应该如何呢？观察适应性移动平均线的波动与其他移动平均线不同，他几乎是平行的，请注意，这是他的一个，非常有趣的特征。可以帮助我们，判断市场震荡行情，也就是我们说的盘整行情。

不同时间周期的移动平均线，在图表上的互相关联性，可以是很好的趋势指标。同样，事实上，如果本周的平均价高于本月的平均价，我们就有了一个上升趋势。同样的道理，有些交易系统，基于两条移动平均线，是如何？以及何时进行交叉的呢？

让我们看看，什么是经常提到的双平均线。为简单起见我们将使用5天和10天的移动平均线，当较快的移动平均线，从下向上越过较慢的移动平均线，我们得到了一个买进信号；相反的，如果较快移动平均线，从上向下穿过较慢移动平均线是卖出的时候，这些买进和卖出的信号，标注在图表上。如果，我们能预知，何处平均线将相交叉，将十分有用，期望能够预知何时交叉是不现实的。但是，预知哪个区域，这倒是非常有可能的！

第四节

让我们把5天周期的移动平均线，再往前移5天，这是他现在的样子，现在，让我们变一点小小的戏法，注意移动平均线在何处交叉？这不是魔术，这是简单的数学。有一句话大家要记住，不同的时间周期，我们需要使用不同的平均线，以及不同的向前移位。

交易员在开发他们的交易系统的时候，利用该特征。比如，比尔威廉姆斯，开发了他称之为鳄鱼线的指标。来看一看这只野兽吧！当一个趋势开始的时候，鳄鱼的口张开，你看到这三条线都是向前移的，指数平滑移动平均线。请看这只爬虫，是如何用他张开的嘴巴，保护我们的利益的。实际上，仅当趋势持续的时候，他才会这样做。

这里是用计算这些EMA的威廉姆斯公式，没有使用收盘价格，作为替代措施，我们使用的是最高价和最低价总和的一半，即蜡烛线的平均价。当趋势结束的时候，口合上了。鳄鱼线指标也是很好的一个趋势指标。然后，也有云图，但是，我们在此处不过多说明，我们将在另外的课程中讲解云图。

总结一下，我们的在技术分析时将仅需要三种类型的移动平均线，他们是简单移动平均线SMA、指数平滑移动平均线EMA，更快，以及适应性移动平均线VAR，更慢。机灵的小伙伴，一定注意到在此列表中，没有加权移动平均线，让我解释一下原因。广泛的研究表明，在不同的交易系统中，简单和指数平滑移动平均线，带来比加权移动平均线更好的结果。好的，那么，适应性移动平均线在确定交易范围上是最有效的，所有这些平均线都只有一个参数值，这个参数值就是（N），也就是移动平均线的时间周期。

第六课 

第一节 价格震荡量指标

到目前为止我们已经检查了，移动平均线的结合，我们看到一个有更短时间周期的MA，比同种类型，有更长时间周期的MA变化更快，我们知道移动平均线的相互关联，可以作为趋势指标，如果更快的线在更慢的线上是一个上升趋势，如果在更慢的线下是一个下降趋势。

但是，如果趋势形成反转或进入一个震荡行情的时候，我们又该如何呢？为标示出趋势区域，并把他们从反转点区分开来，我们使用基于两个移动平均线差异的价格震荡量指标OSC（Price Oscillator），OSC=MA(n1)-MA(n2)，它被称为价格震荡量指标。这里MA（n1）是较快的移动平均线，MA(n2)是较慢的一条。

显而易见，（n1）是小于（n2）的。这里指示的形状，在移动平均线交叉的地方，价格震荡量指标的数值为零；如果较快平均线，高于较慢平均线，价格震荡量指标有高于零的一个数值；如果较快平均线，低于较慢平均线，那么，价格震荡量指标小于零。

让我们找出指标曲线上升并大于零的区域，以及下降并小于零的区域，将他们用阴影来表示。我们可以自信地宣称，在这些区域中有一个上升或者下降的趋势，那么，在没有阴影进行标志的区域发生了什么呢？我们不知道，趋势在这些区域要么转换、要么暂停了，换句话说，我们所确切知道的是，原来的区域消失了，至于消失了多长时间并不重要，我们仅需要知道原来的趋势消失了。

注意，我们没有说要使用移动平均线的类型，他们应该是简单或指数平滑移动平均线，你自己可以进行选择。因此，我们仅把它作为MA，现在我们将讨论合适的时间周期和选择（n1）和（n2），让我们来先看几个例子！这是日元的一张日线图（n1）和（n2）的值已经选好了，他们是较快的平均线7，以及较慢的平均线65，但这是为什么呢？65是65个交易日，三个月、一个季度、一个自然循环期，7大约是65的10%，并且是根据经验选择的。

在绿色表示的区域中，所能得到的收益是利用价格震荡量指标，基于收盘价格而计算出的，第一眼看上去是非常诱人的。但是，请看这些红色的区域，这里将没有任何赚钱的机会，并且您可能遭受到损失。为解决这个问题，我们可以同时使用系列其他指标，RAVI、 MACD、RSI，我们将在后面的课程中学习如何使用他们。

你看一眼当前在你们面前的欧元小时图，现在价格震荡指标的时间周期是12和72，72小时是3天，12是12小时或是半天，尽管这些数字是根据经验选择的，但较慢的移动平均线是一个自然周期。

请您再看一次图中的阴影部分，这些区域中最坏情况下我们不能获得利润，而在最好情况下，我们将赚钱。收益率与时间周期的长短相对应，时间周期越短，则可能的收益总额越小，小伙伴们，请永远不要忘记这一点。

第二节 RAVI

趋势横盘分别指标RAVI，看起来与价格震荡指标很像，可是实际上它们之间是存在着相当大的差别的。

对于日线图RAVI有以下的表现形式，7日移动平均数与65日移动平均数的差，然后，除以65日的移动平均数，然后，乘以100%。

首先要注意的第一件事情是与价格震荡指标不同，它是用百分比来计算，而不是小数点；另一个不同的是，建议指标使用信号线，在股票的市场上，他们是在加减0.3%-1%的水平绘制的。当RAVI曲线高于上边信号线且上升时，我们有一个上升趋势的形式。相反的，在RAVI曲线低于下边信号线且下降的时候，是一个熊市。

与价格震荡指标进一步的一个差别，是RAVI在两条信号线之间有一个区域，这是交易范围区，如果RAVI曲线没有离开此正1%和负1%之间的区域，那么，我们把市场看作是没有趋势的。

再一次提醒小伙伴们，注意我们选择了65天的MA，以及7天的MA，65天即三个月或一季度是慢线的自然周期，而快线的周期为7天，即大约为65的10%。

这是日线图上RAVI的例子，让我们看一眼RAVI的实际效果，这是一张欧元日线图，我们已经决定将我们的信号线设置在1%的水平上，如果我们基于RAVI的趋势指标来设计我们的交易系统，我们将在绿色区域内得到买入和卖出的信号，同样在红色和白色区域RAVI提供了趋势反转、趋势减缓，或侧向市场的信息，也就是说RAVI指标不为这些间隔产生交易信号。好的，尽管如此，如果我们从2002年4月到2003年3月仅使用RAVI信号，我们将拥有什么呢？

然而，我们需要注意，在给定期间内，我们仅需要在主要的长期趋势方向上进行交易，并且，我们还需要一点点的运气，信心眷顾勇气，但是，勇气的根源是知识。

第三节 RAVI【II】

当我们在交易中使用小时图，时间周期为12、72或24和120，120小时是五个交易日，也就是一周；72小时是3天，这是关键的自然周期，是交易日和交易周。这里是一个小时图上使用的RAVI的例子，请看一眼欧元的小时图，我们选择的RAVI参数是12和72，信号线在0.3%和-0.3%水平上绘制的。

区域A是易识别的一个交易范围，指标离开侧向市场，并在点1给出卖出信号，我们在点2得到退出市场的信号，并且进行平仓。那将为我们赢得90点。区域B是一个下降趋势阶段，在这里可以建立空头头寸并赚取利润，随后的区域CDEF展示了，成功的和不成功的市场进入和退出点。在我的观点中RAVI的一个优势是它确定交易范围的能力，我们用红色进行了标志。

那么，如果我们稍微改变一下RAVI的时间参数后，会发生什么呢？让我们用同一张价格图，并将时间参数改到24和120，1天是24小时，1周是120小时。区域A没有任何变化，他是一个交易范围是侧向市场，我们在同样的点1得到卖出信号，但是我们获得退出信号却更加拖后，在点3一个290点的收益。但是我们不要过度相信RAVI，他并不是100%安全的，在点4产生了，一个错误的买进信号，我们的止损订单将被执行了。

我们在这里学到了什么呢？

首先最重要的我们必须为我们的错误付出代价，因此请设置好你的止损订单。其次我们不能依赖一个指标，我们应该使用一系列指标，并把这些指标与图形分析结合起来。

第四节 ADX

现在，我们所回顾的趋势指标的计算都是简单的，并且相当直观的。但是也有更为复杂的指标，这里是一个动向体系，他更为人所知的名字是ADX。这就是这个系统，它只有一个时间周期参数（n），该参数值应该在10到20周期之间，更精确的说，应该是14到17周期之间。

做一些测试，然后找出最合适的一个，指标由三条曲线组成，所有这三条曲线都是在同一个0-100的范围内测量，主要的曲线是ADX，如果他是上升的，则意味着市场上，有一个趋势。如果他是下降的，则是当前趋势已经结束，但是ADX不能告诉我们趋势是上升的还是下降。

这是其他两条曲线的用途，红线称为正Di，以及绿线被称为负Di，如果正Di在负Di之上，并且ADX是上升的，那么，我们得到了一个上升趋势，如果负Di在正Di之上，以及ADX是上升的，那么，趋势是下降。如果正Di在负Di之上，并且ADX是下降的或者负Di在正Di之上，并且ADX下降的，意味着趋势减缓、停止或者反转。

该指标有一个特性，同学们必须要清楚，ADX即使在一个强势趋势的开头都将继续下降，这是由于ADX的绘制方法造成的，请看正Di在负Di之上，他是下降的，价格也在下降；相反的，负Di上升，以及ADX下降，看ADX将继续下降，直到负Di从下向上越过正Di。现在ADX也向上移动，并且下降趋势在系统中根据标准方式进行了记录，这可能使你付出代价，正Di和负Di在20到22处交叉，ADX确定微弱趋势和交易范围，ADX通过下降到20以下来发出这些信号，并且当他在正Di和负Di之下的时候，他会给出一个更为可靠的信号，动向体系在日线图和周线图上能够很好的工作，但是在小时图上效果却非常的差。


布林带（BOLLINGER BANDS）

那么，我们应该继续前进吗？现在我们想讨论一下布林带，这是一个包络线指标，我们基于一套规则选择一条移动平均线，并在MA周围绘制一个价格范围。

那么，这些规则是什么呢？

第一个规则是选择一条有时间参数（n）的移动平均线，我们手边是小时图，为了更加精确，（n）可以等于24，也就是24小时。若我们交易中被使用的是日线图，则我们应该是（n），等于22，也就是一个月，这些是自然周期；

第二个规则说明了范围（d）的宽度或者高度，通过将（d）增加到移动平均线的数值上，或从此数值中减去，我们得到布林带的上下包络线，（d）的数值是由参数（s）决定的，参数（s）由我们自己选择，（s）数值的允许范畴是0.5-3之间。

但是在我们进一步前进以前，让我们先解释一下σ（sigma），σ的值是市场价格变异性的一个标志。请看，由于你选择的任何一个时间段，比如说24小时的棒线图，我们能以，以下的方法绘制一条直线，使得收盘价格离开此线的偏差总和为可能的最小值，当此线在价格图中移动的时候，它的斜率将发生变化，并且偏差的最小总和也将发生变化。但是，最重要的是该直线的斜率，以及偏差总和的最小值，能用一台计算机根据数学公式，进行准确的计算，得出精确的数值。收盘价格偏差的最小总和是σ标准偏差计算的基础，并且标准偏差是价格在周期（n）内变异性的统计测量，σ是布林带范围内范围宽度的一个因子。

让我们回到（s），（d）是范围的宽度，并且等于（s）乘以σ（d=s ×σ（n）），为计算（d），我们需要知道，我们的σ包含了多少下单价格，并且我们将选择多少个σ，即多大的（s）值，σ值用我们为移动平均线设置的，同样的周期（n）来计算。如果我们使（s）等于0.5，那么，(d)看起来应该是这样；如果我们使（s）等于2.5，那么，（d）等于2.5乘以σ，并且布林带范围，将有这样的形状。

那么，我们怎样才能从此包络线指标中获利呢？让我们首先对一张日线图进行研究，（n）设置22、（s）为0.6，如果价格突破了上线，我们得到买进的信号，就像这样，你看见这个箭头了吗？如果价格突破了下线，我们得到卖出的信号，就像这样，如果价格在上线和下线之间，则没有交易信号，这是一个交易范围，一个横向移动。用来决定，从一个交易范围退出点的（s）值，在0.5和0.8之间。

对于小时蜡烛图来讲，该操作方法实际上并不太合适，因为，我们得到了太多的错误信号。请看一下这个日元的例子，让我们改变参数（s），这里的（s）等于0.5，这里是0.6、0.8，得出你自己的结论吧。

现在让我们检查布林带的其他操作方法，这里又是我们的小时蜡烛图，我们将使（n）等于24、（s）等于2.5，布林带被急剧扩大了。我们获得的交易信号也将是不同的，当价格突破上线后开始下跌，产生一个卖出信号。反之，当价格突破下线后，回到布林带交易范围内产生一个买进信号。让我们看几个例子吧！这里是瑞士法郎，注意移动平均线本身设置的支撑线或阻力线的边界。这里是英镑日线蜡烛图的布林带，这里的（n）等于22，以及（s）等于2.5。我们现在看到的是趋势指标，布林带的一些成功应用，不过，当然他并不总是如此成功的，尤其是对于新的交易员来说。

我把这些场景称为大意新手的陷阱，这是一张瑞士法郎日线图，价格突破了下限，并又回到了范围之内，然后他继续下降，这是一个虚假的买进信号。这是一张欧元小时图，价格突破了上线回到范围之内，然后继续上扬，这是一个虚假的卖出信号。

当然，布林带有一些自身的用法特点，如果价格在突破上限回到通道内后，形成新的高点，那么，这是上升趋势的一个强烈信号，此处就存在陷阱。

作为本节的总结，我想说的布林带，与其他指标配合使用，我们很快将会研究他们。除此之外，我将不厌其烦的重复，如下：不要忘记设置你的止损订单，如果你有止损订单罩着，那么，你的错误判断不会给你带来灾难。

第七课 

第一节 MOMENTUM动量指标

我们已经观察了不同的趋势指标，他们将帮助我们确定市场的状态，它的趋势是上升、下降的，还是在一个交易范围内，但是，我们作为一个交易员，对趋势的反转点会更加感兴趣。

假设一个趋势是上升的，当价格触碰到支撑线的时候，这是买进的好时机，当价格接近通道线的时候，这是获取收益的好时机。但是，我们知道现实中的价格图并不总是纯粹和完美的，价格曲线有时候，会与这些线交叉，有时候不会达到他。震荡指标，用来确定进入和退出市场的最佳时机。

大家知道，这些震荡指标对价格移动的速度进行衡量，无论价格水平的高低，所有震荡指标的祖先是动量指标。

动力指标考虑某段时间内，收盘价格的差别，动力指标等于今天的收盘价格减去（n）天以前的收盘价格，当价格下跌速度减慢时，收盘价格的差别逐步减少，动力指标趋向零。

但是，考虑到每个单独小时或天的收盘价格，是相对随机的数值，动力指标具有相当大的变异性。因此，使得它在价格分析中用处很少，并且在做出可靠预测中所使用的频率更少。

第二节 RSI

为了消除动能指标的不利因素，必须削减他的变异性，并为其波动设置严格的界限，考虑到这一点，我们需要一个新的震荡指标，它被称为相对强弱指标或者是RSI。

我们现在来看看它的基础特性，它仅有一个时间参数（n），我们对（n）时间段内的收盘价格行为感兴趣。如果收盘价格高于之前的一个收盘价格，那么，该值用蓝色来表示，如果小于之前的一个收盘价格，那么，用红色来表示。因此，正面和负面变化的总和比率（U=u1+u2+...+u(n)）上升，以及（D=d1+d2+...+d(n)）下降时，下面这个公式RSI=，对于一个阶段（n）用百分比显示是RSI。看一眼RSI他的最小值等于0，并且它的最大值是100，他的发明者建议对日线图，使用一个14天的时间周期，应该注意到在（n）参数等于或大于14的时候。RSI几乎从来不会达到它的极限值0或者100。

要更好地理解该震荡指标，请仔细观看50水平，如果RSI大于50，那么，在选定的时间段内正的收盘价格变化，比负的收盘价格变化更多，并且今天的收盘价格明显的高于14天前的收盘价格。反之，当RSI小于50的时候，意味着今天的收盘价格比14天前的收盘价格更低，当RSI等于50的时候，今天的收盘价格等于14天前的收盘价格，正如，动力指标等于零的情况一样。

我们已经学习了如何确定价格方向，我们也知道相对强弱指标不是为了趋势跟踪而开发的，我们的目标，以及RSI是确定最佳的买入点和卖出点。RSI在0到100间波动，我们在此范围的30和70水平上绘制两条水平信号线，当指标在70之上时进入超买区，市场在超买状态；当相对强弱指标在30以下时，进入超卖区域，市场在超卖状态。

这些以粉红色标志的区域看上去很美，当指标从上往下离开，超买区域时产生一个卖出信号，并且当RSI从下往上离开超卖区域的时候，买进是一个明智的选择。请注意箭头，这些信号在一个交易范围内或在趋势结束时也是相当可靠的。

第三节

如果小伙伴们不断的买进，比方说连续两周或者一个月或者一年，那么，我们何时才能够进入超买区域呢？好的，听我来给讲一讲！

请看这个例子，将一个趋势和相对强弱指标的变化进行比较，价格将一直上升，直到需求大于供给为止。名词超买和超卖比较容易让人误解，只要价格上升RSI就将持续试图接近100，或当价格下降时，他将持续试图接近0。

我们该做些什么呢？在一旁观望吗？暂停所有的交易，绝不可能！

相信我RSI是一个特别有用的指标，看一下这条上升的红线，这是一条支撑线，但他不是价格曲线的支撑线，而是RSI的曲线支撑线，每次该指标试探此支撑线并返回时，是建立多头头寸的一个好机会。

但是，树木永远不可能抵达天空，趋势跟所有好东西一样，总会有个尽头，那么，在趋势的顶部会发生什么呢？

很频繁的，当RSI突破支撑线的时候，他的表现跟价格类似，他从下对该线重新进行试探，然后，和价格曲线一样下跌，在一个熊市上，我们的震荡指标将显示出类似的风格，这里我们有一张瑞士法郎的日线图，卖出、卖出、买进。

RSI指标有一个更为有趣的特性，我们把它称之为失效波动，你肯定记得在你以前学过的图形分析中学过这个名词，今天他有了，另外一个名字，背离或者分歧。

这是上升趋势上背离的形状，最新的价格高点比前面的一个要高，而震荡指标最新的高点，比前面的一个要低。让我们来绘制两条线，一条上升线，一条下降线，然后，你会得到你的背离。在下降市场上我们也画两条线，但是，现在这条向下的线是在价格曲线上，最后的一个低点，低于前面一个，而指标曲线将有一条向上的线，看再一次出现了背离。一个背离是即将来临，市场反转的一个非常强烈的信号，记住，永远不要忽略他！

第四节

尽管背离有不同的形状和大小，他们中的所有，都是可以立即分辨，让我们把他们找出来。在一张欧元日线图上形成了一个双重顶，与此同时，RSI只是两个下降的高点，这是一个背离并且是很强烈的一个；这里我们看到在价格图上有一个双重底，RSI形成两个谷底，并且最后一个比前面一个要高，又是一个背离。

当形成一个背离的时候，我们所关心的是指标曲线，最后一个高点，是否在70信号线以下，即在超买区域外，以及RSI的最后一个谷底，是否在超卖区域外，即30线以上，就像该图所示的一样。

我们应该怎样为日线图上的RSI振动指标选择时间参数（n）呢？建议选择14，也可以用9这个数字。好的，让我们使用范围在9和14之间的（n），我们建议对于小时图来说，设置的（n）不小于7，并且不大于11，请记住这些数值。有时我们不满足RSI的频繁波浪形状，他们对震荡指标线进行平滑处理，最通常的平滑途径是利用简单或指数平滑移动平均线对指标数值进行平均处理。

请注意，对指标的平滑处理，减少了它的摆动幅度。由于这个原因我们能将信号线的水平进行改变，以便适合平均数值，这里进行了较大程度的平滑处理，因此超买和超卖区域分别被调整到60和40，当RSI与一个趋势指标联合使用，并结合图形分析来确定阻力和支撑区域是最为有效的。

第八课 随机指标（STOCHASTIC OSCILLATOR）

第一节

我们今天学习一个复杂的震荡指标来继续研究超买和超卖区域，该指标也在寻找趋势反转点的时候，考虑到了超买和超卖区域。随机指标的原则基于以下规则，也就是说在总体价格上升的时候，收盘价格通常聚集于价格范围的上面的边界，反之，当市场上有一个下降趋势的时候，收盘价格将聚集于下面的边界。

在该震荡指标中使用了几条曲线，主要的曲线称为百分（K），随机指标，确定一个价格范围内最新收盘价格，在某一时间段的水平。那么，这是该指标的第一个值（n1），该曲线的最广泛应用的时间周期为5天，或者小时，或者周。该曲线的公式非常简单，大家可以看到%K=，他将帮助确定在选定的一段时间内，最低价格为L5和最高价格为H5的价格范围内的最后收盘价格的位置，我们选定的时间段是五天。

K曲线对价格的变化非常敏感，并且，许多时候曲线都抵达了价格范围的顶部和底部。但是，如果我们对其进行平均，比如，进行3天平均，我们将得到一条更缓的曲线，3天是震荡指标的第二个周期（n2），我们把新的曲线称为一条慢性的百分（K）曲线。尽管，在我们的随机指标曲线图上是最快的一条，这就是他。

在对此新的百分（K）线，再次进行3天的平均和平滑之后，我们得到了百分（D）线，以及第三，也就是最后一个时间周期（n3），我们将用虚线在图表上绘制。这就是，我们终于把它画出来，那么，我们得到了什么呢？

两条负的百分（K）和百分（D），除此之外，我们还有三个时间周期参数，（n1）为5是常用数值，并且（n2）和（n3）是平滑周期，我们将他都设置到3，我们也能对他们进行改变，只需要在电脑上修改他们的参数。和（D）曲线在垂直范围内在0到100之间进行波动，为了标出超买和超卖区域，也应该在30和70的水平线上画两条信号线。

第二节

随机指标是如何产生交易信号的呢？

第一眼看上去，如前面的指标RSI产生交易信号的方式是一样的，第一种类型的信号，在K曲线离开临界区域的时候出现，如果我们已经设置了超买水平线为70，那么，当K线从上往下与此线交叉的时候是卖出信号。如果K线与超卖水平线30交叉，那么，这是买进信号。

第二种类型的随机指标交易信号，在（K）和（D）曲线交叉的时候产生。让我们看看他们产生了什么？哇呜，好像有太多的信号了，我们不应该过早的下结论！

现在，作为一个开始，让我们回到背离概念，随机指标背离是价格曲线和（D）曲线之间的差异，在这些图表上有牛市和熊市背离的例子。他们看起来与前面的震荡指标RSI很像，当产生（D）曲线和价格曲线的一个背离的时候，（K）线和（D）线的交叉给出一个买进或卖出的最重要的交易信号。

让我们使用其他的时间参数来检查随机指标的一些其他特殊性，14、5以及3这些数值，刚才我说随机指标中的分歧看起来与RSI中的分歧是类似的，相似其实并不一样。

记得随机指标是基于什么原因的吗？

当趋势是上升的时候，收盘价格靠近交易范围的上边界。当趋势是下降的时候，收盘价格靠近交易范围的下界，这是为何当市场上有一个强势上升趋势的时候，进入超买区域的随机指标看起来非常特殊，你明白我的意思了吗？看起来好像（D）线，从70移到100的时候是无止境的，可那不会发生。

市场需要喘口气，哪怕脚步放慢，在到达顶部之前要盘整一下，此时（D）线离开顶部区域并开始下降，该信号通常被忽略。(D)曲线回到超买区域，并且，能形成一个背离（K）线和（D）线的交叉，提供了一个很好的建立空头头寸的机会。对这些信号的过滤，可以从价格支撑线和通道线，以及鳄鱼指标得到强有力的帮助，这些我们前面都已经讨论过，看看效果吧！请您看，正如我们用RSI所做的那样，在一张随机指标曲线图上绘制了一条支撑线，在被突破以后，支撑线变成了阻力线，并且造成一个背离。

第三节

现在让我们来查看一下，一个熊市背离的例子，我们有一个典型的当指标进入临界区域的实例，然后，指标短暂的离开了该区域，然后，这是背离以及买进信号。让我们来看一眼这些线，他们形成了价格通道的边界，结合随机指标信号和图形分析，能使交易员的生活变得更为轻松。

那么，随机指标的典型特征是什么呢？

此形态有他自己的名字钩子（HOOK），通常情况下他在50区左右出现，并且他通常在一个强势趋势，刚开始的时候形成的，我们只能通过观察价格在价格通道内活动来确定一个勾子或期望他的出现。他可能在支撑线上被突破后出现，或如我们看到的，在一个上升趋势的开头，阻力线被突破后出现。

我们建议用他来研究长期的价格动态情况，在周线图绘制随机指标，并且在日线图上寻找交易的机会，将其方向纳入考虑范围。

现代技术允许交易员用小时价格图进行工作，在小时价格图绘制随机指标之后，让我们利用在日线图上绘制的随机指标来帮助我们，过滤小时图上的交易信号，看这是他的外形。当日线图上的随机指标上升时，我们只能使用在小时图上产生随机指标的买进信号，我们将在（K）线从超卖区域离开的时候买进，并在（K）线离开超买区域的时候平仓啊。

现在要小心这里指标曲线离开了超卖区域，但是没有达到超买区域，并且又跌了回来，让我们把这种情况称之为未完成的波动，并且，在（K）线跌回到30以下的时候立即进行平仓。

停下来，这里又是一个未完成的波动形态，但，此时该曲线没有回到超卖区域，我把它称为浮线。（K）线探出70线一点，然后，又弹回到区域内，我们认为这是一个买进信号。

第四节

最终我们进行了英镑的十次交易，并且，遭受了两次损失，收益的总数之和是452点，同时从2002年的10月23日到11月13日，也就是15个交易日之内的整体价格移动，仅仅为368点。

其实，我们指出该例子的目的仅仅是用来阐述随机指标作为趋势指标的属性，就像我们今天回顾的所有其他指标一样，随机指标仅仅反映了发生在过去的某些事情，所以我们大家都知道。

只有支撑和阻力线合位是有能力进行预测的，一条被突破的阻力线，在未来能形成一条支撑线，而被突破的趋势线，预告了一个价格的可能反转。

让我们来看最后的例子，2002年10月23日价格抵达了支撑水平线，以及通道线，随后发生了阻力线的突破，然后，小时图支撑线或修正水平，允许我们放置合理的止损订单。

让我们再次看我们的价格图，你能从图上的合理止损点获得计算出的风险信息。

唯一令人惊异的是，多少机会可以重新使用一个随机指标而得出呢？在关于随机指标说明的最后，我们将对关键的几点进行总结，当价格曲线靠近支撑和阻力线合位的时候，该指标产生重要的信号，也就是说，我们需要将价格通道的方向和边际，以及修正水平的位置纳入考虑的范围。

好的，仔细观察背离，这是震荡指标的最重要的特性之一，可以和蜡烛形态结合使用。

第九课MACD

第一节

我们已经学习了一个基于两条移动平均线值差，而创建的趋势指标，我们称之为价格震荡量指标，今天我们来学习，类似的震荡指标，但是具有一些不同的特点。

他的全名是平滑异同移动平均线或者MACD，作为该指标基础的指数平滑移动平均线给出了相当严格的参数。就在这里，我们来看看吧。

MACD的第一部分是以12和26为周期的，两条指数平滑移动平均线的一个差值，他是用实线来绘制的，我们将他称为快线或者主线。第二部分是该差值的9周期的，一条指数平滑移动平均线，在图表上以虚线绘制，并且称为信号线。当然我们能对时间周期参数进行实验，但是，请注意时间周期的选择依赖于价格图的时间范围。

对于一小时图，根据SAFIN的建议，能应用(n1)=6、（n2）=24、（n3）=3的数值，对于日线图，除了前面提到的数值之外，我们可以使用数值(n1)=9、（n2）=19、（n3）=9。

对于日线图参数（n2）相当于一个月左右，对于小时图接近于一天，（n1）是在（n2）的S四分之一到二分之一之间进行选择，信号线的参数（n3）是从3到9的范围内进行选择。

看起来好像我们已经说了，关于MACD的所有方面，他是如何被绘制的，以及时间参数是如何被选择的，但是，我们没有说明他是干什么的。

我们是否已经有了价格震荡量指标，以及RAVI，让我们来看一下最后的图标，我们的指标是基于两条指数平滑移动平均线之间的差值，但是，较慢移动平均线的周期参数为（19），如果于价格震荡量指标相比较，是相对较小的数字。而我们选择较快移动平均线的周期参数，相当于较慢移动平均线参数的一半，我们想在MACD的帮助下，对价格变化的动态情况进行跟踪。与此同时，通过对所得的差别进行平均，我们将尝试得到进入市场的交易信号，交叉点给出这些信号。

第二节

让我们来看一下，这里较快的实线与较慢的虚线交叉，并在虚线下面，这是一个卖出的信号，如果在慢线的上面，则是一个买进的信号。但是，我们在对MACD的交易信号进行检查以前，让我们来看一看该震荡指标的一些属性，当主线是在0之上，并且高于信号线，或是在0之下，并低于信号线的时候，我们可以肯定的说价格是在上升或是在下降，我们已经用价格震荡量指标看到了这一点。有一件很有趣的事情，看一张图上有多少部分，会用阴影标志为可靠的信息呢？你很可能会惊讶地发现，如果你知道在主要货币对的日线图上，超过60%的时间都用阴影来表示，几乎2/3的时间，我们有相当可靠的关于市场方向的信息。

对于小时图来说大约50%，正如你所看到的，信息可靠性，随着时间跨度增加，而增大的理论又一次被验证了。

我们应该注意到，我们已经对具有参数（9）、（19）（9）的MACD进行了检查。在一个上升市场上，每一个震荡指标的最高点可能会变成一个转折点，在此类封顶之后，图上立即出现了，未加阴影的区域，他们通常预告着一个背离，我们现在应该非常熟悉这个概念了。

我们在价格曲线图上有两个上升的高点或双重顶，而在指标曲线图上有两个下降的高点，那么，我们能对卖出信号做一些什么呢？显然他来得太早了，我们已经知道答案了。只有支撑线合位，才能确定一个趋势是否已经结束，除非有突破现象，否则，我们没必要移去这种颜色，或离开此种有利可图的趋势。

第三节

如果能预先知道未来价格将会形成反转的阻力位，将是一件多好的事情啊！但是这可能吗？这不仅是可能的，而且是可以经常做到的哟！关于这一点，我们课程中的波浪分析部分，将对此进行说明。

在市场的底部有一个背离，看起来像是上面价格图的一个镜像，他在这里价格图上的两个下降的谷底，或一个双重底，以及MACD的曲线图上的两个上升谷底，我们将再次绘制我们的限额位。但此时他们将是阻力线，在这种情况下，价格曲线给我们暗示以前，我们是不会买进的。

实践带来完美，让我们再重复一遍，有些东西能够帮助我们确定价格图上的反转点，并且作为结果能确定MACD上的信号，他们就是日本的蜡烛信号、基本面新闻、支撑线和趋势线，以及我们已经回顾过的震荡指标RSI和随机指标，但是，到目前为止我们仅谈论的趋势市场，那么，当我们在一个交易范围内的时候会发生些什么呢？

我们已经看过类似的例子，这里MACD能帮助我们什么呢？请记住鳄鱼指标，它也是基于指数平滑移动平均线的，鳄鱼的大嘴闭上时，将和移动平均线紧密联系在一起。令人惊讶的是，日线图上的MACD更多的时候是阻碍，而不是帮助，他的信号是滞后的，可能在该卖出的时候提示我们买进。

如果我们在小时时间段内对该情况进行彻底检查，则不要忘记使用日线图中交易范围的边界，我们建议使用参数（6）、（24）和（3）来绘制MACD，除了支撑、阻力线合位之外，我们还要用到RSI和随机指标。

我应该逐字逐句的重复我所说的关于趋势市场的一切。好了，现在重新回到我们的战争中去吧！也许当我说到战争的时候，我有些偏题了，但是在这里研究的不是如何与市场进行战斗，而是跟随市场潮流而动。我们并不能决定市场中，谁是胜利者，我们只是在市场中发现胜利者。

第四节

在完成MACD学习之前，尤其是有些小伙伴很懒，不愿意检查主线和信号线之间空间的同学，我想告诉你们另一个指标就是MACD柱状图，他对主线和信号线之间的差别进行绘制，在图表上看起来就是一系列的柱子，当主线在信号线之上，该指标大于零，当主线在信号线之下，该指标小于0，当MACD柱状图与0线交叉的时候，这是MACD的交易信号。

请看图表，我们在短期内已经检查了，技术分析中所使用的相当多的指标，我们如何才能全部的记住他们呢？

如果我告诉你们总共有几百个指标的时候，大家又会怎么想呢？你会害怕吗？不要害怕，不要担心，这没有你听起来，那么可怕！

首先，绝大多数你不知道的指标，是从你已经知道的指标中修改而来的；其次，在一个交易系统中不会使用超过3个或4个的指标，我们将在后面的内容中对交易系统进行介绍；第三，你永远不应该相信，会有一个有魔力的指标能够帮你一直赢得胜利，或者是能有精确反映价格变化动态信息的一套时间参数存在。

不要浪费你的时间去寻找一个圣杯了，在股票市场上交易是不难的，你所需要的是，利用我们已经学习过的，简单的基础指标，使用我们推荐的或稍经修改的时间周期，利用你的判断力和严格自制能力，来选择最重要的信号。

这些信号在判断市场方向上可以相互借鉴，你能够做到！！！我们仅仅需要移走所有多余的石头，剩下一个美丽的雕塑。