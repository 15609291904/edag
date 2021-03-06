module.exports = {
    index:{
        'home' : '首页',
        'systems':'系统概览',
        'advantage':'优势',
        'characteristics':'技术特点',
        'code':'项目代码',
        'news':'新闻资讯',
        'weekly':'项目周报',
        'overview':'EDAG（以达格）是一款主链产品，提供了一种与当前的区块链解决方案相比，完全不同的分布式共识方法。其采用不同于线性区块的“哈希图( Hashgraph )”结构和共识机制，实现了分布式一致性的目标，但并没有受到当前区块链技术的限制。EDAG在保证一致性的同时还兼顾了去中心化、快速、可证明、拜占庭、ACID兼容、廉价、抗DoS攻击等。能够实现大规模低成本达成共识，更高效（实测30000+TPS），更加公平（无需竞争出块）的互联网信任层,以及拓展性更好的安全共识协议。EDAG也是一个注重应用场景落地的技术开放平台,我们将会优先在游戏领域应用，并不断开发更多应用场景模型，方便更多的开发者接入EDAG系统，并建立完善的交流社区让更多人参与EDAG生态中来，并且从中获益。EDAG有潜力成为一个真正的可大规模普及和应用的可信网络，这也将是可信互联网探索上的一个重要里程碑。',
        'Scalability':'每笔处理速度达到30000+TPS 效率快',
        'Scalability_tl':'效率快',
        'Expansibility':'交易写入和确认的强耦合束缚这系统的扩展性，网络应该具有一定的灵活性',
        'Expansibility_tl':'扩展性',
        'Interoperability':'各个区块链项目的孤岛限制着价值的流通',
        'Interoperability_tl':'互通性',
        'P2P_Network_tl':'P2P网络',
        'P2P_Network':'Peer-to-Peer网络主要采用了Kad算法实现，Kad是一种分布式哈希表(DHT)技术，DHT算法在资源编号和节点编号上就是使用了分布式哈希表，使得资源空间和节点空间的编号有唯一性、均匀分布式等较好的特性，能够适合结构化分布式网络的要求。使用该技术，可以实现在分布式环境下快速而又准确地路由、定位数据。节点通常采用TCP协议与相邻节点建立连接, 建立连接时也会有认证“握手”的通信过程，用来确定协议版本，软件版本，节点IP，区块高度等。',
        'Node_tl':'节点',
        'Node':'网络中的节点分两种，普通节点和见证人节点。普通节点负责按协议维护自己的账户交易链。见证人节点通过选举代理产生，负责收集网络的交易单元并向见证人节点网络广播验证的交易集合维护全网的最终一致性共识。',
        'Account_DAG_tl':'账本',
        'Account_DAG':'世界状态即是由全网的采用设计时协议取代运行时协议由账户链通过解耦交易的写入和验证，并异步由见证人节点达成最终共识够成全局DAG。账户链上交易单元的变动意味着世界状态的变动，通过账户状态对应的merkle树和hash来转化。',
        'Account_tl':'账户',
        'Account':'每个普通节点账户在本地维护自己的账户交易链，这是一种基于区块点阵的链条。其中包含账户的余额和每笔交易历史记录',
        'Transaction_tl':'交易',
        'Transaction':'将普通的交易和合约交易抽象为事务。一个完整的普通交易对应一个交易对，由一个发送方账户链发出的交易单元和接收方账户链上的收到交易单元组成。发送方交易单元包含帐户链中前一个交易单元的哈希值、要发送到的帐户地址、发送方账户签名、单元hash值。接收方交易单元包含，发送方的交易单元hash值、接收方签名、单元hash值。发送方发送出交易后，金额被锁定无法撤销，当接收方成功创建接收交易单元并广播后，交易确认并收到资产',
        'Witness_tl':'见证人',
        'Witness':'见证人节点负责验证交易并维护全局账本的最终一致性。由于为了高性能而设计的区块点阵的账户链模型由账户节点负责维护，带来了没有大多数节点的验证的安全隐患，恶意节点的双花攻击问题必须解决。RAIBLOCKS采用的基于余额权重投票机制来解决这个问题，该机制在满足交易确认需要的置信度阈值下无法量化恶意攻击者通过分叉推翻历史账本需要的成本，收敛速度和达成共识的露棒性也不易估量。我们需要更严格的安全性，通过最长链的思路设计见证人节点的打包交易集合机制在见证人网络中同步，并通过分层共识机制的最长链的确认足够的安全的确认置信度来达成世界状态的最终一致。',
        'white':' 白皮书',
        'Wallet':'  钱包下载',
        'lang':'English',
        "bannerText":'注重场景落地应用技术平台',
        "copy":"新加坡EDAG技术开发团队",
        "startAccess":"开始接入",
        "chinese":"简体中文",
        "English":"English",
        "startAccessMessageBox":"正在开发中，请持续关注",
        "infoTetx":"提示",
        "comifm":"确定",
        "nodata":"暂无数据"
    },
        
    
}