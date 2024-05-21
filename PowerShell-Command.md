下面是对您给出的每条 Git 和 MkDocs 命令的详细解释：

1.git remote rm origin:


2.此命令用于删除当前仓库中名为 origin 的远程链接。这通常用于更改远程仓库的链接或清除旧的链接。


3.git remote -v:


4.显示所有远程仓库的详细信息。使用 -v （verbose，详细）选项可以显示每个远程的 URL 以及其别名。


5.git init:


6.初始化一个新的 Git 仓库。如果你在一个新的目录中执行此命令，它会创建一个新的 .git 目录，这个目录包含所有的 Git 仓库数据。


7.git config core.autocrlf true:


8.设置 Git 配置，以自动处理文本文件中的换行符问题。当此选项设置为 true 时，Git 在提交时会将 CRLF（回车换行，Windows 默认）转换为 LF（换行，Unix/Linux 默认），在检出时恢复为 CRLF。


9.git add .:


10.将当前目录下的所有更改（新增、修改、删除的文件）添加到暂存区，准备下一次提交。


11.git commit -m "20240511 2.0 Fix mkdocs.yml 'npm install glightbox' configuration issues":


12.将暂存区的更改提交到仓库。-m 后面的字符串是本次提交的说明。


13.git remote add origin https://github.com/Drenban/MetaByte-Metrics.git:


14.添加一个新的远程仓库，命名为 origin，并设置其 URL。这样你就可以将代码推送到这个新的远程仓库。


15.git push -u origin master:


16.将本地的 master 分支推送到远程的 origin 仓库。-u 参数用来设置上游（tracking）关系，之后你可以直接使用 git push 或 git pull。


17.git push -f origin master:


18.强制推送本地的 master 分支到远程的 origin 仓库。-f（force）参数用来覆盖远程分支的历史，这可能会导致其他协作者的更改丢失。


19.mkdocs gh-deploy:

20.使用 MkDocs 将文档部署到 GitHub Pages。此命令会自动构建文档，并推送到 gh-pages 分支。
21.mkdocs gh-deploy --force:

22.强制部署文档到 GitHub Pages，即使存在潜在的问题也不中断部署。

查找 Git 和 MkDocs 的全部 PowerShell 命令
要查找 Git 和 MkDocs 的全部命令和选项，你可以利用它们自带的帮助系统：

23.对于 Git，在 PowerShell 中输入 git help 可以看到所有的 Git 命令。如果你想查看特定命令的详细帮助文档，可以使用 git help &lt;命令&gt;，例如 git help commit。
24.对于 MkDocs，可以通过在 PowerShell 中输入 mkdocs --help 来查看所有可用的 MkDocs 命令和选项。查看特定命令的帮助，如 mkdocs build --help。

这些帮助命令提供了详尽的文档，让你可以了解每个工具的使用方法和可用选项。

Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass 是一个用于 PowerShell 的命令，具体解释如下：

1.Set-ExecutionPolicy:


2.这是一个用于更改 PowerShell 脚本执行策略的命令。


3.-Scope Process:


4.该参数指定更改执行策略的范围。在这种情况下，它仅对当前 PowerShell 会话有效。关闭会话后，策略会恢复到默认状态。


5.-ExecutionPolicy Bypass:


6.该参数指定将执行策略设置为 Bypass。Bypass 意味着不阻止任何脚本的执行，并且不发出警告或提示。这对于临时允许运行某些脚本非常有用，尤其是在当前会话中。

其他相关命令
PowerShell 提供了一组命令来管理执行策略：

7.Get-ExecutionPolicy:


8.获取当前执行策略。


9.Set-ExecutionPolicy:


10.设置执行策略。常见的策略有：
11.Restricted：不允许执行任何脚本（默认设置）。
12.AllSigned：只允许执行由可信发布者签名的脚本。
13.RemoteSigned：允许执行本地创建的脚本和来自互联网的签名脚本。
14.Unrestricted：允许执行所有脚本，但可能会提示用户。
15.Bypass：允许所有脚本执行，没有提示或警告。


16.Get-Help Set-ExecutionPolicy:


17.显示 Set-ExecutionPolicy 命令的帮助文档，包括参数和示例。

查找 PowerShell 命令
要查找 PowerShell 中的所有命令和获取帮助，可以使用以下命令：

18.Get-Command:


19.列出所有可用的 PowerShell 命令。


20.Get-Help &lt;命令名&gt;:


21.获取指定命令的帮助文档。例如，Get-Help Get-Command 将显示 Get-Command 的详细信息。


22.Get-Help &lt;命令名&gt; -Examples:


23.显示指定命令的用法示例。


24.Get-Help &lt;命令名&gt; -Detailed:


25.显示指定命令的详细帮助信息。


26.Update-Help:


27.更新 PowerShell 帮助文档，以确保你获得最新的信息。

通过这些命令，你可以详细了解 PowerShell 提供的所有功能和选项。

(env) PS G:\FinanceAnalysis\DataWeb\Blog\MetaData-Material> Save-Help
位于命令管道位置 1 的 cmdlet Save-Help
请为以下参数提供值:
DestinationPath[0]: 

``` PowerShell
Save-Help -DestinationPath "C:\HelpFiles"

Save-Help -DestinationPath "C:\Users\YourUsername\Desktop\HelpFiles"
```

``` PowerShell
# Find the installation path for the PSReadline module
(env) PS G:\FinanceAnalysis\DataWeb\Blog\MetaData-Material> $modulePath = (Get-Module -ListAvailable PSReadline).ModuleBase
(env) PS G:\FinanceAnalysis\DataWeb\Blog\MetaData-Material> Write-Host "PSReadline is located at: $modulePath"
PSReadline is located at: C:\Program Files\WindowsPowerShell\Modules\PSReadline\2.0.0

# View the version of PowerShell
(env) PS G:\FinanceAnalysis\DataWeb\Blog\MetaData-Material> $PSVersionTable.PSVersion

Major  Minor  Build  Revision
-----  -----  -----  --------
5      1      19041  4412


(env) PS G:\FinanceAnalysis\DataWeb\Blog\MetaData-Material> $PSVersionTable 

Name                           Value
----                           -----
PSVersion                      5.1.19041.4412
PSEdition                      Desktop
PSCompatibleVersions           {1.0, 2.0, 3.0, 4.0...}
BuildVersion                   10.0.19041.4412
CLRVersion                     4.0.30319.42000
WSManStackVersion              3.0
PSRemotingProtocolVersion      2.3
SerializationVersion           1.1.0.1


(env) PS G:\FinanceAnalysis\DataWeb\Blog\MetaData-Material> Install-Module -Name PSReadLine -RequiredVersion 2.3.5

需要使用 NuGet 提供程序来继续操作
PowerShellGet 需要使用 NuGet 提供程序“2.8.5.201”或更高版本来与基于 NuGet 的存储库交互。必须在“C:\Program
Files\PackageManagement\ProviderAssemblies”或“C:\Users\Administrator\AppData\Local\PackageManagement\ProviderAssemblies”中提供 NuGet 提供程序。也可以通过运行 'Install-PackageProvider -Name NuGet -MinimumVersion 2.8.5.201 -Force' 安装    
 NuGet 提供程序。是否要让 PowerShellGet 立即安装并导入 NuGet 提供程序?
[Y] 是(Y)  [N] 否(N)  [S] 暂停(S)  [?] 帮助 (默认值为“Y”):

不受信任的存储库
你正在从不受信任的存储库安装模块。如果你信任该存储库，请通过运行 Set-PSRepository cmdlet 更改其 InstallationPolicy 值。是否确实要从“PSGallery”安装模块?
[Y] 是(Y)  [A] 全是(A)  [N] 否(N)  [L] 全否(L)  [S] 暂停(S)  [?] 帮助 (默认值为“N”): Y
```


``` PowerShell
(env) PS G:\FinanceAnalysis\DataWeb\Blog\MetaData-Material> $PSVersionTable.PSVersion

Major  Minor  Build  Revision
-----  -----  -----  --------
5      1      19041  4412


(env) PS G:\FinanceAnalysis\DataWeb\Blog\MetaData-Material> Get-Process

Handles  NPM(K)    PM(K)      WS(K)     CPU(s)     Id  SI ProcessName
-------  ------    -----      -----     ------     --  -- -----------
   2082     216   300888      68904     252.02   1152   1 360tray
    472      44    26244       4644       2.98   8684   1 360UDiskPro
    328      22    21092      16468       0.83  13620   1 APlayer
    253      15     3352       1844       0.20   3592   0 AppHelperCap
    313      19     9176       1928       0.17   5296   1 ApplicationFrameHost
    157      11     7296         20       0.27   3524   0 atkexComSvc
    523      14    14212      18452     309.36  13660   0 audiodg
    426      35    16392         16       0.73   6128   1 CalculatorApp
    148       8     1440         44       0.02   2884   1 ChsIME
   1339      40    49140      71240      42.16   2272   1 Code
    549      31   180732     159756     107.84   3120   1 Code
    231      13   123432      12968      27.16   3160   1 Code
    262      13    10732       1904       0.06   4824   1 Code
    206      22    38660      13320       3.83   5304   1 Code
    292      16    12224       9624       0.78   8708   1 Code
    229      15    37392      19680      11.86   8752   1 Code
    275      15    53500      55772      17.89   9348   1 Code
    423      66   235348     122652      30.44   9536   1 Code
    398      19    58000      49400      25.88   9644   1 Code
    505      22   186824     188452     253.02  10004   1 Code
    210      13    22004      12892       1.17  10944   1 Code
    353      18    63496     120228      10.64  15048   1 Code
    145       7     1476       8436       0.08   2024   1 CompPkgSrv
    112       8     2044       2080      20.63   5796   1 conhost
    109       7     6348         48       0.05   9092   1 conhost
    111       7     6332       5680       0.03  11760   1 conhost
    652      22     1992       1584       1.34    632   0 csrss
    851      28     3552       5044     109.22    752   1 csrss
    893      34    18152      38812      40.44   6096   1 ctfmon
    716       7     2440         40       0.06   3988   0 dasHost
    248      15    10332       1300       2.63   3600   0 DiagsCap
    237      16     3368      11992       0.25   1416   1 dllhost
    438      15     4108      18636       1.63  13992   1 dllhost
    638     119    23960      27028      10.48    116   1 DownloadSDKServer
   1189      38    62140      38540   1,062.17   1160   1 dwm
   3776     194   351756     139224     310.77   2476   1 explorer
     36       5     1880         24       0.06    536   0 fontdrvhost
     36       8     5612       8840       1.72    544   1 fontdrvhost
      0       0       60          8                 0   0 Idle
    200      11     2084       1900       0.06   2172   0 igfxCUIService
    165      11     2504        308       0.08   4840   1 igfxHK
    199      12     3028        256       0.25   6380   1 igfxTray
    781      53   408752     266188      53.55  10744   1 KMPlayer64
    182      14     3540      13556       0.42  12324   1 KMPLoading
   1537      28     8280      10624      10.30    832   0 lsass
    177      13     1804        676       0.20   3532   0 mDNSResponder
      0       0     1704     567324      44.52   2052   0 Memory Compression
    296      19     9752      11908       1.13     72   1 msedge
    613      28   132468     180364      62.73    132   1 msedge
    446      25    95620      92400     475.89   1544   1 msedge
    384      23    44348      89496       6.38   3096   1 msedge
    404      32    25280      35984      59.13   4720   1 msedge
    445      23    54860      69344       2.33   6384   1 msedge
    430      23    70112      89504     103.38   6464   1 msedge
    255      21   216048      59652      19.48   6520   1 msedge
    302      21    26252      24948      11.94   7508   1 msedge
    419      14     3296       3064       0.17   7792   1 msedge
    261      17    10576       8300       6.52   8220   1 msedge
    688      59   473060     441248   1,385.45   8244   1 msedge
   3343     318   147776     199836     468.03   8536   1 msedge
    302      21   175840     104552      19.95   9072   1 msedge
    315      21    36524      40984      14.28   9084   1 msedge
    300      21    16652       6572       0.47   9176   1 msedge
    310      21    21560       6860       0.52   9192   1 msedge
    259      20    18800      34276       0.19   9832   1 msedge
    516      23    55212     107268       4.53  12764   1 msedge
    286      21    20456      47204       0.30  12912   1 msedge
    425      25    74048     113264      18.66  13052   1 msedge
    362      23    36172      83604       3.91  13488   1 msedge
    305      21    10104      24460       6.66  13512   1 msedge
    351      23    68284     121128      92.11  14228   1 msedge
    284      22    12356      25056       0.72  16004   1 MultiTip
    208      13     3112       1308       0.14   3612   0 NetworkCap
   1115      91   162540     110052     110.97   8428   1 powershell
    412      29    13232      32144       1.72  14104   1 prevhost
    189      28    37712       1588       0.91   3944   1 python
     77       5      796         32       0.03   6272   1 python
      0      15     2624      44032       1.48    108   0 Registry
    386      23     4228       1168       0.58   8476   1 RtkNGUI64
    289      17     5732       6576       3.50   1200   1 RuntimeBroker
    566      27    10860      25492       4.13   3864   1 RuntimeBroker
    334      17     7252      18428       7.44   9632   1 RuntimeBroker
    123       7     1380        760       0.02   9944   1 RuntimeBroker
    460      31    24540      17964     113.70   4992   1 safesvr
   1414     122   165728      78604      16.94   8848   1 SearchApp
    743      74    44092      35896      14.98   7744   0 SearchIndexer
    725      14     6060       6676      21.36    824   0 services
    105       8     4404       4360       0.53   8992   0 SgrmBroker
    542      18     6116      15236       7.77   6812   1 sihost
     53       3     1168        248       0.52    384   0 smss
    480      26     5904       2388       0.16   3384   0 spoolsv
    615      46    31364      22876       4.08  10616   0 sqlceip
    698      59   385808      68520     992.39   8204   0 sqlservr
    155      10     1892         60       0.02   3708   0 sqlwriter
    602      30    28756      21376       2.02   7456   1 StartMenuExperienceHost
   1406      22    10820      18068       9.67    300   0 svchost
    323      12     3964      11824       4.08    572   0 svchost
    290      13     2816       4840       0.17   1012   0 svchost
   1220      19     8452      10852      65.05   1048   0 svchost
    302      10     2760       3212       1.03   1092   0 svchost
    170       7     1508       1620       0.55   1308   0 svchost
    363      17     6552      10292       4.38   1392   0 svchost
    417      14    15604       9864       1.50   1424   0 svchost
    247      13     3324       5488       4.73   1432   0 svchost
    248      13     2516       2288       0.09   1440   0 svchost
    270      10     2520       4708       1.63   1556   0 svchost
    126       8     1408        864       0.05   1580   0 svchost
    152      25     5124       2748       0.27   1608   0 svchost
    270       9     1940       8056       0.08   1620   0 svchost
    140       9     1600       1024       0.03   1716   0 svchost
    234      10     2292       2056       6.72   1752   0 svchost
    394      14     4756       4816       6.55   1848   0 svchost
    474      13     3048       4976       1.31   1932   0 svchost
    243      14   104828     105496     213.31   1988   0 svchost
    262       8     1360       1212       0.33   2000   0 svchost
    185       9     1944       3252       0.08   2008   0 svchost
    183      12     1896        308       0.05   2124   0 svchost
    247       9     2056       1008       0.70   2232   0 svchost
    158      10     2064       3932       0.23   2240   0 svchost
    474      17    12320      13832       9.50   2304   0 svchost
    490      20     6064       5104     104.36   2472   0 svchost
    398      12     3156       8588      11.16   2544   0 svchost
    176      10     8252      13572      20.34   2624   0 svchost
    386      15     2520       2684       0.20   2652   0 svchost
    150      11     1720       2404       0.11   2656   0 svchost
    301      14     3512       4064     150.70   2676   0 svchost
    415      32     8220       7596       1.58   2932   0 svchost
    367      16     2808       1312       0.09   3100   0 svchost
    218      15     2208       1108       0.08   3108   0 svchost
    265      14     2720       1504       0.09   3164   0 svchost
    164      12     1712       3296       0.25   3180   0 svchost
    184      11     2020       2400       0.27   3468   0 svchost
    162      11     3912       1188       0.06   3508   0 svchost
    113       8     1228        972       0.00   3516   0 svchost
    119       8     1300        828       0.02   3560   0 svchost
    265      26     3804       8456       0.69   3576   0 svchost
    148       9     1588       1016       0.05   3584   0 svchost
    174       9     1792        904       0.02   3636   0 svchost
    384      18     4384       5048       0.28   3740   0 svchost
    191      21     1368        496       0.00   3748   0 svchost
    180      10     1900       1072       0.11   3756   0 svchost
    344       8     2172        896       0.56   3780   0 svchost
    207      11     2060       1428       0.05   3788   0 svchost
    227      14     4524       4504       0.06   3796   0 svchost
    140       9     1568       1048       0.05   3804   0 svchost
    218      12     2516       5476       0.30   3904   0 svchost
    213      12     2388       3252       0.45   4380   0 svchost
    387      24     3696       2396       0.38   4448   0 svchost
    526      15     2524       2664       0.53   4684   0 svchost
    216      11     2176       1108       0.11   4732   0 svchost
    452      25     5376      12052       0.78   5108   1 svchost
    194      15     6152       2576       0.03   5696   0 svchost
    215      12     2324       1456       0.13   5932   0 svchost
    215      11     2940       5480      11.31   6104   0 svchost
    444      20    10808      18800      12.28   6856   1 svchost
    490      23    10064      23408       2.33   6888   1 svchost
    390      21     4860       6708       0.27   7188   0 svchost
    345      20    37252      35164       9.31   7292   0 svchost
    113       7     1300        972       0.03   7324   0 svchost
    324      16     4180      15356       1.75   7832   1 svchost
    265      14     3804      11388       0.56   8176   0 svchost
    113       7     1232        836       0.02   8584   0 svchost
    381      20     5584       6356       0.42   8828   0 svchost
    413      19     6564      11684      31.19  10612   0 svchost
    196      12     1724       1956       0.03  10728   0 svchost
    322      17     6732       8336       1.56  10736   0 svchost
    223      13     3028       2844       0.19  10808   0 svchost
    567      77    20408      20288       2.20  11872   0 svchost
    181      10     2008       8452       0.23  14272   0 svchost
    125       8     1772       6528       0.08  14392   0 svchost
    141       9     1656       9712       0.05  16216   0 svchost
    231      13     2220       2448       0.16   3692   0 SysCleanProService
    450      22     6012       5216       0.75   3660   0 SysInfoCap
   4533       0      196         16     545.91      4   0 System
    316      31     6984      11356       1.78   6976   1 taskhostw
    782      29    22476      27608      35.14   7068   1 TextInputHost
    403      58    30784      41564      20.88    508   1 Thunder
    371      33    21592      28160      10.33   9448   1 Thunder
    546      31    12640      26268       9.05  11272   1 Thunder
    383      35    34664      41104       6.36  11636   1 Thunder
    441      41    44824      65468      15.55  11892   1 Thunder
    471      51    44896      88020      15.64  12316   1 Thunder
    471      40    36060      57212      13.22  12744   1 Thunder
    379      26     9644      19932       0.19  12948   1 Thunder
   1263      77    64640     120184     254.48  13368   1 Thunder
    433      43    36484      46256      10.89  13640   1 Thunder
    431      36    35868      47712       6.67  14012   1 Thunder
    806     101    90284     118796     381.94  14184   1 Thunder
    361      34    30456      38416       6.27  14764   1 Thunder
    380      39    38280      51416       0.98  16016   1 Thunder
    393      39    44760      61880      22.81  16356   1 Thunder
    831      27    11296      10152     855.94   8620   1 WCU
    164      11     1480          0       0.08    776   0 wininit
    263      13     2916       1380       0.39    968   1 winlogon
    166      11     3680       1480       0.52   9576   0 WmiPrvSE
   1250     102   111668      17668      44.91   8468   1 wpscloudsvr
    218       9     1396         60       0.02    744   0 WUDFHost
    339      10     2084       1064       0.11   1968   0 WUDFHost
    308      23   100188      14364       5.45   9584   1 xlbrowsershell
    731      40   105920      21184       7.41  14932   1 xlbrowsershell
    429      26    10268      21340       1.70  15692   1 xlbrowsershell
    363      23    29204      47036      38.38  11360   1 xllite
    333      18     4984        608       0.91   8500   1 yundetectservice
    505      42    15588       8560      14.47   2668   0 ZhuDongFangYu


(env) PS G:\FinanceAnalysis\DataWeb\Blog\MetaData-Material> Get-Command
```

PowerShell 包含 cmdlet，它们可帮助你探索 PowerShell。 通过使用下面三个 cmdlet，可以了解有哪些命令可用、这些命令执行什么操作，以及它们在什么类型上运行。

* `Get-Verb` 。 运行此命令时，将返回大多数命令遵循的谓词的列表。 响应包括有关
这些谓词的功能的说明。 由于大多数命令都遵循这种命名约定，因此它对命令的功
能设置了预期目标。 如果你要创建命令，这有助于选择适当的命令和命令名称。
* `Get-Command` 。 此命令会检索计算机上安装的所有命令的列表。
* `Get-Member` 。 它在基于对象的输出上运行，并且能够发现可用于命令的对象、属性
和方法。
* `Get-Help` 。 以命令名称为参数调用此命令，将显示一个帮助页面，其中说明了命令
的各个部分。

通过使用这些命令，可以了解几乎所有关于 PowerShell 的知识。

``` PowerShell
(env) PS G:\FinanceAnalysis\DataWeb\Blog\MetaData-Material> Get-Verb

Verb        Group
----        -----
Add         Common
Clear       Common
Close       Common
Copy        Common
Enter       Common
Exit        Common
Find        Common
Format      Common        
Get         Common
Hide        Common
Join        Common
Lock        Common
Move        Common
New         Common
Open        Common
Optimize    Common
Pop         Common
Push        Common
Redo        Common
Remove      Common
Rename      Common
Reset       Common
Resize      Common
Search      Common
Select      Common
Set         Common
Show        Common
Skip        Common
Split       Common
Step        Common
Switch      Common
Undo        Common
Unlock      Common
Watch       Common
Backup      Data
Checkpoint  Data
Compare     Data
Compress    Data
Convert     Data
ConvertFrom Data
ConvertTo   Data
Dismount    Data
Edit        Data
Expand      Data
Export      Data
Group       Data
Import      Data
Initialize  Data
Limit       Data
Merge       Data
Mount       Data
Out         Data
Publish     Data
Restore     Data
Save        Data
Sync        Data
Unpublish   Data
Update      Data
Approve     Lifecycle
Assert      Lifecycle
Complete    Lifecycle
Confirm     Lifecycle
Deny        Lifecycle
Disable     Lifecycle
Enable      Lifecycle
Install     Lifecycle
Invoke      Lifecycle
Register    Lifecycle
Request     Lifecycle     
Restart     Lifecycle
Resume      Lifecycle
Start       Lifecycle
Stop        Lifecycle
Submit      Lifecycle
Suspend     Lifecycle
Uninstall   Lifecycle
Unregister  Lifecycle
Wait        Lifecycle
Debug       Diagnostic
Measure     Diagnostic
Ping        Diagnostic
Repair      Diagnostic
Resolve     Diagnostic
Test        Diagnostic
Trace       Diagnostic
Connect     Communications
Disconnect  Communications
Read        Communications
Receive     Communications
Send        Communications
Write       Communications
Block       Security
Grant       Security
Protect     Security
Revoke      Security
Unblock     Security
Unprotect   Security
Use         Other


(env) PS G:\FinanceAnalysis\DataWeb\Blog\MetaData-Material> Get-Command -Name Get-Process

CommandType     Name                                               Version    Source
-----------     ----                                               -------    ------
Cmdlet          Get-Process                                        3.1.0.0    Microsoft.PowerShell.Management


(env) PS G:\FinanceAnalysis\DataWeb\Blog\MetaData-Material> Get-Command -Name *-Process

CommandType     Name                                               Version    Source
-----------     ----                                               -------    ------
Cmdlet          Debug-Process                                      3.1.0.0    Microsoft.PowerShell.Management
Cmdlet          Get-Process                                        3.1.0.0    Microsoft.PowerShell.Management
Cmdlet          Start-Process                                      3.1.0.0    Microsoft.PowerShell.Management
Cmdlet          Stop-Process                                       3.1.0.0    Microsoft.PowerShell.Management
Cmdlet          Wait-Process                                       3.1.0.0    Microsoft.PowerShell.Management


(env) PS G:\FinanceAnalysis\DataWeb\Blog\MetaData-Material> Get-help

主题
Windows PowerShell 帮助系统

简短说明
显示有关 Windows PowerShell 的 cmdlet 及概念的帮助。

详细说明
    “Windows PowerShell 帮助”介绍了 Windows PowerShell 的 cmdlet、
    函数、脚本及模块，并解释了
    Windows PowerShell 语言的元素等概念。

    Windows PowerShell 中不包含帮助文件，但你可以联机参阅
    帮助主题，或使用 Update-Help cmdlet 将帮助文件下载
    到你的计算机中，然后在命令行中使用 Get-Help cmdlet 来显示帮助
    主题。

    你也可以使用 Update-Help cmdlet 在该网站发布了更新的帮助文件时下载它们，
    这样，你的本地帮助内容便永远都不会过时。

    如果没有帮助文件，Get-Help 会显示自动生成的有关 cmdlet、
    函数及脚本的帮助。


联机帮助
    你可以在 TechNet 库中找到有关 Windows PowerShell 的联机帮助，
网址为 http://go.microsoft.com/fwlink/?LinkID=108518。

    若要打开有关任一 cmdlet 或函数的联机帮助，请键入：

Get-Help <cmdlet-name> -Online

  UPDATE-HELP
    若要下载帮助文件并将其安装在计算机上，请执行以下步骤：

1. 使用“以管理员身份运行”选项启动 Windows PowerShell。
2. 键入：

          Update-Help

    安装了帮助文件之后，你便可以使用 Get-Help cmdlet 来
显示帮助主题。 你也可以使用 Update-Help cmdlet 来
    下载更新的帮助文件，让本地帮助文件始终保持
    为最新。

有关 Update-Help cmdlet 的详细信息，请键入：

       Get-Help Update-Help -Online

    或转至：http://go.microsoft.com/fwlink/?LinkID=210614


  GET-HELP
    Get-Help cmdlet 会在命令行中显示计算机上帮助文件中的
    帮助内容。 如果没有帮助文件，Get-Help 会显示有关
     cmdlet 和函数的基本帮助。 你也可以使用 Get-Help 来显示
    有关 cmdlet 和函数的联机帮助。

若要获取某个 cmdlet 的帮助，请键入：

Get-Help <cmdlet-name>

若要获取联机帮助，请键入：

Get-Help <cmdlet-name> -Online

    概念性主题的标题会以“About_”开头。
    若要获取有关某个概念或语言元素的帮助，请键入：

        Get-Help About_<topic-name>

    要在所有帮助文件中搜索某个词或短语，请键入：

        Get-Help <search-term>

有关 Get-Help cmdlet 的详细信息，请键入：

        Get-Help Get-Help -Online

    或转至：http://go.microsoft.com/fwlink/?LinkID=113316


示例：
      Save-Help              ：从 Internet 下载帮助文件并将其保存在
                               文件共享中。
      Update-Help            ：从 Internet 或文件共享下载并安装
                               帮助文件。
Get-Help Get-Process   ：显示有关 Get-Process cmdlet 的帮助。
      Get-Help Get-Process -Online
                             : 打开有关 Get-Process cmdlet 的联机帮助。
      Help Get-Process       ：显示有关 Get-Process 的帮助，一次显示一页。
Get-Process -?         ：显示有关 Get-Process cmdlet 的帮助。
      Get-Help About_Modules ：显示有关 Windows PowerShell 模块的帮助。
Get-Help remoting      ： 在帮助主题中搜索“remoting”（远程处理）。

另请参阅：
      about_Updatable_Help
      Get-Help
      Save-Help
      Update-Help













(env) PS G:\FinanceAnalysis\DataWeb\Blog\MetaData-Material>


(env) PS G:\FinanceAnalysis\DataWeb\Blog\MetaData-Material> Get-Command -Verb 'Get'


(env) PS G:\FinanceAnalysis\DataWeb\Blog\MetaData-Material> Get-Command -Noun U*   

CommandType     Name                                               Version    Source
-----------     ----                                               -------    ------
Cmdlet          Clear-UevAppxPackage                               2.1.639.0  UEV
Cmdlet          Clear-UevConfiguration                             2.1.639.0  UEV
Cmdlet          Convert-UrnToPath                                  16.0       SQLPS
Cmdlet          Disable-Uev                                        2.1.639.0  UEV
Cmdlet          Disable-UevAppxPackage                             2.1.639.0  UEV
Cmdlet          Disable-UevTemplate                                2.1.639.0  UEV
Cmdlet          Enable-Uev                                         2.1.639.0  UEV
Cmdlet          Enable-UevAppxPackage                              2.1.639.0  UEV
Cmdlet          Enable-UevTemplate                                 2.1.639.0  UEV
Cmdlet          Export-UevConfiguration                            2.1.639.0  UEV
Cmdlet          Export-UevPackage                                  2.1.639.0  UEV
Cmdlet          Get-UevAppxPackage                                 2.1.639.0  UEV
Cmdlet          Get-UevConfiguration                               2.1.639.0  UEV
Cmdlet          Get-UevStatus                                      2.1.639.0  UEV
Cmdlet          Get-UevTemplate                                    2.1.639.0  UEV
Cmdlet          Get-UevTemplateProgram                             2.1.639.0  UEV
Cmdlet          Get-UICulture                                      3.1.0.0    Microsoft.PowerShell.Utility
Cmdlet          Get-Unique                                         3.1.0.0    Microsoft.PowerShell.Utility
Cmdlet          Get-UsageAggregates                                4.0.2      AzureRM.UsageAggregates
Cmdlet          Import-UevConfiguration                            2.1.639.0  UEV
Cmdlet          Register-UevTemplate                               2.1.639.0  UEV
Cmdlet          Repair-UevTemplateIndex                            2.1.639.0  UEV
Cmdlet          Restore-UevBackup                                  2.1.639.0  UEV
Cmdlet          Restore-UevUserSetting                             2.1.639.0  UEV
Cmdlet          Set-UevConfiguration                               2.1.639.0  UEV
Cmdlet          Set-UevTemplateProfile                             2.1.639.0  UEV
Cmdlet          Test-UevTemplate                                   2.1.639.0  UEV
Cmdlet          Unregister-UevTemplate                             2.1.639.0  UEV
Cmdlet          Update-UevTemplate                                 2.1.639.0  UEV


(env) PS G:\FinanceAnalysis\DataWeb\Blog\MetaData-Material> Get-Command -Verb Get -Noun U*

CommandType     Name                                               Version    Source
-----------     ----                                               -------    ------
Cmdlet          Get-UevAppxPackage                                 2.1.639.0  UEV
Cmdlet          Get-UevConfiguration                               2.1.639.0  UEV
Cmdlet          Get-UevStatus                                      2.1.639.0  UEV
Cmdlet          Get-UevTemplate                                    2.1.639.0  UEV
Cmdlet          Get-UevTemplateProgram                             2.1.639.0  UEV
Cmdlet          Get-UICulture                                      3.1.0.0    Microsoft.PowerShell.Utility
Cmdlet          Get-Unique                                         3.1.0.0    Microsoft.PowerShell.Utility
Cmdlet          Get-UsageAggregates                                4.0.2      AzureRM.UsageAggregates


(env) PS G:\FinanceAnalysis\DataWeb\Blog\MetaData-Material> Get-Command | Select-Object -First 5 -Property Name, Source

Name                          Source
----                          ------
Add-AdlAnalyticsDataSource    AzureRM.DataLakeAnalytics
Add-AdlAnalyticsFirewallRule  AzureRM.DataLakeAnalytics
Add-AdlStoreFirewallRule      AzureRM.DataLakeStore
Add-AdlStoreItemContent       AzureRM.DataLakeStore
Add-AdlStoreTrustedIdProvider AzureRM.DataLakeStore


(env) PS G:\FinanceAnalysis\DataWeb\Blog\MetaData-Material> Get-Process | Where-Object {$_.ProcessName -like "p*"}

Handles  NPM(K)    PM(K)      WS(K)     CPU(s)     Id  SI ProcessName
-------  ------    -----      -----     ------     --  -- -----------
   1169      92   172140     133648     115.73   8428   1 powershell
    412      29    13232      32188       1.75  14104   1 prevhost
    189      28    37712       1588       0.91   3944   1 python
     77       5      796         32       0.03   6272   1 python


(env) PS G:\FinanceAnalysis\DataWeb\Blog\MetaData-Material> Get-Process | Get-Member


   TypeName:System.Diagnostics.Process

Name                       MemberType     Definition
----                       ----------     ----------
Handles                    AliasProperty  Handles = Handlecount
Name                       AliasProperty  Name = ProcessName
NPM                        AliasProperty  NPM = NonpagedSystemMemorySize64
PM                         AliasProperty  PM = PagedMemorySize64
SI                         AliasProperty  SI = SessionId
VM                         AliasProperty  VM = VirtualMemorySize64
WS                         AliasProperty  WS = WorkingSet64
Disposed                   Event          System.EventHandler Disposed(System.Object, System.EventArgs)
ErrorDataReceived          Event          System.Diagnostics.DataReceivedEventHandler ErrorDataReceived(System.Object, System.Diagnostics.DataReceivedEventArgs)
Exited                     Event          System.EventHandler Exited(System.Object, System.EventArgs)
OutputDataReceived         Event          System.Diagnostics.DataReceivedEventHandler OutputDataReceived(System.Object, System.Diagnostics.DataReceivedEventArgs)
BeginErrorReadLine         Method         void BeginErrorReadLine()
BeginOutputReadLine        Method         void BeginOutputReadLine()
CancelErrorRead            Method         void CancelErrorRead()
CancelOutputRead           Method         void CancelOutputRead()
Close                      Method         void Close()
CloseMainWindow            Method         bool CloseMainWindow()
CreateObjRef               Method         System.Runtime.Remoting.ObjRef CreateObjRef(type requestedType)
Dispose                    Method         void Dispose(), void IDisposable.Dispose()
Equals                     Method         bool Equals(System.Object obj)
GetHashCode                Method         int GetHashCode()
GetLifetimeService         Method         System.Object GetLifetimeService()
GetType                    Method         type GetType()
InitializeLifetimeService  Method         System.Object InitializeLifetimeService()
Kill                       Method         void Kill()
Refresh                    Method         void Refresh()
Start                      Method         bool Start()
ToString                   Method         string ToString()
WaitForExit                Method         bool WaitForExit(int milliseconds), void WaitForExit()
WaitForInputIdle           Method         bool WaitForInputIdle(int milliseconds), bool WaitForInputIdle()
__NounName                 NoteProperty   string __NounName=Process
BasePriority               Property       int BasePriority {get;}
Container                  Property       System.ComponentModel.IContainer Container {get;}
EnableRaisingEvents        Property       bool EnableRaisingEvents {get;set;}
ExitCode                   Property       int ExitCode {get;}
ExitTime                   Property       datetime ExitTime {get;}
Handle                     Property       System.IntPtr Handle {get;}
HandleCount                Property       int HandleCount {get;}
HasExited                  Property       bool HasExited {get;}
Id                         Property       int Id {get;}
MachineName                Property       string MachineName {get;}
MainModule                 Property       System.Diagnostics.ProcessModule MainModule {get;}
MainWindowHandle           Property       System.IntPtr MainWindowHandle {get;}
MainWindowTitle            Property       string MainWindowTitle {get;}
MaxWorkingSet              Property       System.IntPtr MaxWorkingSet {get;set;}
MinWorkingSet              Property       System.IntPtr MinWorkingSet {get;set;}
Modules                    Property       System.Diagnostics.ProcessModuleCollection Modules {get;}
NonpagedSystemMemorySize   Property       int NonpagedSystemMemorySize {get;}
NonpagedSystemMemorySize64 Property       long NonpagedSystemMemorySize64 {get;}
PagedMemorySize            Property       int PagedMemorySize {get;}
PagedMemorySize64          Property       long PagedMemorySize64 {get;}
PagedSystemMemorySize      Property       int PagedSystemMemorySize {get;}
PagedSystemMemorySize64    Property       long PagedSystemMemorySize64 {get;}
PeakPagedMemorySize        Property       int PeakPagedMemorySize {get;}
PeakPagedMemorySize64      Property       long PeakPagedMemorySize64 {get;}
PeakVirtualMemorySize      Property       int PeakVirtualMemorySize {get;}
PeakVirtualMemorySize64    Property       long PeakVirtualMemorySize64 {get;}
PeakWorkingSet             Property       int PeakWorkingSet {get;}
PeakWorkingSet64           Property       long PeakWorkingSet64 {get;}
PriorityBoostEnabled       Property       bool PriorityBoostEnabled {get;set;}
PriorityClass              Property       System.Diagnostics.ProcessPriorityClass PriorityClass {get;set;}
PrivateMemorySize          Property       int PrivateMemorySize {get;}
PrivateMemorySize64        Property       long PrivateMemorySize64 {get;}
PrivilegedProcessorTime    Property       timespan PrivilegedProcessorTime {get;}
ProcessName                Property       string ProcessName {get;}
ProcessorAffinity          Property       System.IntPtr ProcessorAffinity {get;set;}
Responding                 Property       bool Responding {get;}
SafeHandle                 Property       Microsoft.Win32.SafeHandles.SafeProcessHandle SafeHandle {get;}
SessionId                  Property       int SessionId {get;}
Site                       Property       System.ComponentModel.ISite Site {get;set;}
StandardError              Property       System.IO.StreamReader StandardError {get;}
StandardInput              Property       System.IO.StreamWriter StandardInput {get;}
StandardOutput             Property       System.IO.StreamReader StandardOutput {get;}
StartInfo                  Property       System.Diagnostics.ProcessStartInfo StartInfo {get;set;}
StartTime                  Property       datetime StartTime {get;}
SynchronizingObject        Property       System.ComponentModel.ISynchronizeInvoke SynchronizingObject {get;set;}
Threads                    Property       System.Diagnostics.ProcessThreadCollection Threads {get;}
TotalProcessorTime         Property       timespan TotalProcessorTime {get;}
UserProcessorTime          Property       timespan UserProcessorTime {get;}
VirtualMemorySize          Property       int VirtualMemorySize {get;}
VirtualMemorySize64        Property       long VirtualMemorySize64 {get;}
WorkingSet                 Property       int WorkingSet {get;}
WorkingSet64               Property       long WorkingSet64 {get;}
PSConfiguration            PropertySet    PSConfiguration {Name, Id, PriorityClass, FileVersion}
PSResources                PropertySet    PSResources {Name, Id, Handlecount, WorkingSet, NonPagedMemorySize, PagedMemorySize, PrivateMemorySize, VirtualMemorySize, Threads.Count, TotalProcessorTime}
Company                    ScriptProperty System.Object Company {get=$this.Mainmodule.FileVersionInfo.CompanyName;}
CPU                        ScriptProperty System.Object CPU {get=$this.TotalProcessorTime.TotalSeconds;}
Description                ScriptProperty System.Object Description {get=$this.Mainmodule.FileVersionInfo.FileDescription;}
FileVersion                ScriptProperty System.Object FileVersion {get=$this.Mainmodule.FileVersionInfo.FileVersion;}
Path                       ScriptProperty System.Object Path {get=$this.Mainmodule.FileName;}
Product                    ScriptProperty System.Object Product {get=$this.Mainmodule.FileVersionInfo.ProductName;}
ProductVersion             ScriptProperty System.Object ProductVersion {get=$this.Mainmodule.FileVersionInfo.ProductVersion;}


(env) PS G:\FinanceAnalysis\DataWeb\Blog\MetaData-Material> Get-Process | Get-Member -MemberType Method


   TypeName:System.Diagnostics.Process

Name                      MemberType Definition
----                      ---------- ----------
BeginErrorReadLine        Method     void BeginErrorReadLine()
BeginOutputReadLine       Method     void BeginOutputReadLine()
CancelErrorRead           Method     void CancelErrorRead()
CancelOutputRead          Method     void CancelOutputRead()
Close                     Method     void Close()
CloseMainWindow           Method     bool CloseMainWindow()
CreateObjRef              Method     System.Runtime.Remoting.ObjRef CreateObjRef(type requestedType)
Dispose                   Method     void Dispose(), void IDisposable.Dispose()
Equals                    Method     bool Equals(System.Object obj)
GetHashCode               Method     int GetHashCode()
GetLifetimeService        Method     System.Object GetLifetimeService()
GetType                   Method     type GetType()
InitializeLifetimeService Method     System.Object InitializeLifetimeService()
Kill                      Method     void Kill()
Refresh                   Method     void Refresh()
Start                     Method     bool Start()
ToString                  Method     string ToString()
WaitForExit               Method     bool WaitForExit(int milliseconds), void WaitForExit()
WaitForInputIdle          Method     bool WaitForInputIdle(int milliseconds), bool WaitForInputIdle()


(env) PS G:\FinanceAnalysis\DataWeb\Blog\MetaData-Material> Get-Process | Get-Member | Select-Object Name, Definition

Name                       Definition
----                       ----------
Handles                    Handles = Handlecount
Name                       Name = ProcessName
NPM                        NPM = NonpagedSystemMemorySize64
PM                         PM = PagedMemorySize64
SI                         SI = SessionId
VM                         VM = VirtualMemorySize64
WS                         WS = WorkingSet64
Disposed                   System.EventHandler Disposed(System.Object, System.EventArgs)
ErrorDataReceived          System.Diagnostics.DataReceivedEventHandler ErrorDataReceived(System.Object, System.Diagnostics.DataReceivedEventArgs)
Exited                     System.EventHandler Exited(System.Object, System.EventArgs)
OutputDataReceived         System.Diagnostics.DataReceivedEventHandler OutputDataReceived(System.Object, System.Diagnostics.DataReceivedEventArgs)
BeginErrorReadLine         void BeginErrorReadLine()
BeginOutputReadLine        void BeginOutputReadLine()
CancelErrorRead            void CancelErrorRead()
CancelOutputRead           void CancelOutputRead()
Close                      void Close()
CloseMainWindow            bool CloseMainWindow()
CreateObjRef               System.Runtime.Remoting.ObjRef CreateObjRef(type requestedType)
Dispose                    void Dispose(), void IDisposable.Dispose()
Equals                     bool Equals(System.Object obj)
GetHashCode                int GetHashCode()
GetLifetimeService         System.Object GetLifetimeService()
GetType                    type GetType()
InitializeLifetimeService  System.Object InitializeLifetimeService()
Kill                       void Kill()
Refresh                    void Refresh()
Start                      bool Start()
ToString                   string ToString()
WaitForExit                bool WaitForExit(int milliseconds), void WaitForExit()
WaitForInputIdle           bool WaitForInputIdle(int milliseconds), bool WaitForInputIdle()
__NounName                 string __NounName=Process
BasePriority               int BasePriority {get;}
Container                  System.ComponentModel.IContainer Container {get;}
EnableRaisingEvents        bool EnableRaisingEvents {get;set;}
ExitCode                   int ExitCode {get;}
ExitTime                   datetime ExitTime {get;}
Handle                     System.IntPtr Handle {get;}
HandleCount                int HandleCount {get;}
HasExited                  bool HasExited {get;}
Id                         int Id {get;}
MachineName                string MachineName {get;}
MainModule                 System.Diagnostics.ProcessModule MainModule {get;}
MainWindowHandle           System.IntPtr MainWindowHandle {get;}
MainWindowTitle            string MainWindowTitle {get;}
MaxWorkingSet              System.IntPtr MaxWorkingSet {get;set;}
MinWorkingSet              System.IntPtr MinWorkingSet {get;set;}
Modules                    System.Diagnostics.ProcessModuleCollection Modules {get;}
NonpagedSystemMemorySize   int NonpagedSystemMemorySize {get;}
NonpagedSystemMemorySize64 long NonpagedSystemMemorySize64 {get;}
PagedMemorySize            int PagedMemorySize {get;}
PagedMemorySize64          long PagedMemorySize64 {get;}
PagedSystemMemorySize      int PagedSystemMemorySize {get;}
PagedSystemMemorySize64    long PagedSystemMemorySize64 {get;}
PeakPagedMemorySize        int PeakPagedMemorySize {get;}
PeakPagedMemorySize64      long PeakPagedMemorySize64 {get;}
PeakVirtualMemorySize      int PeakVirtualMemorySize {get;}
PeakVirtualMemorySize64    long PeakVirtualMemorySize64 {get;}
PeakWorkingSet             int PeakWorkingSet {get;}
PeakWorkingSet64           long PeakWorkingSet64 {get;}
PriorityBoostEnabled       bool PriorityBoostEnabled {get;set;}
PriorityClass              System.Diagnostics.ProcessPriorityClass PriorityClass {get;set;}
PrivateMemorySize          int PrivateMemorySize {get;}
PrivateMemorySize64        long PrivateMemorySize64 {get;}
PrivilegedProcessorTime    timespan PrivilegedProcessorTime {get;}
ProcessName                string ProcessName {get;}
ProcessorAffinity          System.IntPtr ProcessorAffinity {get;set;}
Responding                 bool Responding {get;}
SafeHandle                 Microsoft.Win32.SafeHandles.SafeProcessHandle SafeHandle {get;}
SessionId                  int SessionId {get;}
Site                       System.ComponentModel.ISite Site {get;set;}
StandardError              System.IO.StreamReader StandardError {get;}
StandardInput              System.IO.StreamWriter StandardInput {get;}
StandardOutput             System.IO.StreamReader StandardOutput {get;}
StartInfo                  System.Diagnostics.ProcessStartInfo StartInfo {get;set;}
StartTime                  datetime StartTime {get;}
SynchronizingObject        System.ComponentModel.ISynchronizeInvoke SynchronizingObject {get;set;}
Threads                    System.Diagnostics.ProcessThreadCollection Threads {get;}
TotalProcessorTime         timespan TotalProcessorTime {get;}
UserProcessorTime          timespan UserProcessorTime {get;}
VirtualMemorySize          int VirtualMemorySize {get;}
VirtualMemorySize64        long VirtualMemorySize64 {get;}
WorkingSet                 int WorkingSet {get;}
WorkingSet64               long WorkingSet64 {get;}
PSConfiguration            PSConfiguration {Name, Id, PriorityClass, FileVersion}
PSResources                PSResources {Name, Id, Handlecount, WorkingSet, NonPagedMemorySize, PagedMemorySize, PrivateMemorySize, VirtualMemorySize, Threads.Count, TotalProcessorTime}
Company                    System.Object Company {get=$this.Mainmodule.FileVersionInfo.CompanyName;}
CPU                        System.Object CPU {get=$this.TotalProcessorTime.TotalSeconds;}
Description                System.Object Description {get=$this.Mainmodule.FileVersionInfo.FileDescription;}
FileVersion                System.Object FileVersion {get=$this.Mainmodule.FileVersionInfo.FileVersion;}
Path                       System.Object Path {get=$this.Mainmodule.FileName;}
Product                    System.Object Product {get=$this.Mainmodule.FileVersionInfo.ProductName;}
ProductVersion             System.Object ProductVersion {get=$this.Mainmodule.FileVersionInfo.ProductVersion;}


(env) PS G:\FinanceAnalysis\DataWeb\Blog\MetaData-Material> Get-Command -ParameterType Process

CommandType     Name                                               Version    Source
-----------     ----                                               -------    ------
Cmdlet          Debug-Process                                      3.1.0.0    Microsoft.PowerShell.Management
Cmdlet          Enter-PSHostProcess                                3.0.0.0    Microsoft.PowerShell.Core
Cmdlet          Get-Process                                        3.1.0.0    Microsoft.PowerShell.Management
Cmdlet          Get-PSHostProcessInfo                              3.0.0.0    Microsoft.PowerShell.Core
Cmdlet          Stop-Process                                       3.1.0.0    Microsoft.PowerShell.Management
Cmdlet          Wait-Process                                       3.1.0.0    Microsoft.PowerShell.Management


(env) PS G:\FinanceAnalysis\DataWeb\Blog\MetaData-Material>
```


