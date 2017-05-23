<template>
	<div class="span4">
        <ul class="home-channel-list clearfix">
            <li class="top left"><a href="//www.mi.com/compare/" data-stat-aid="AA13424" data-stat-pid="2_44_1_250" target="_blank" data-stat-id="AA13424+2_44_1_250" onclick="_msq.push(['trackEvent', '79fe2eae924d2a2e-AA13424+2_44_1_250', '//www.mi.com/compare/', 'pcpid', '']);"><i class="iconfont"></i>选购手机</a></li>
            <li class="top"><a href="http://qiye.mi.com/" data-stat-aid="AA10868" data-stat-pid="2_44_2_251" target="_blank" data-stat-id="AA10868+2_44_2_251" onclick="_msq.push(['trackEvent', '79fe2eae924d2a2e-AA10868+2_44_2_251', 'http://qiye.mi.com/', 'pcpid', '']);"><i class="iconfont"></i>企业团购</a></li>
            <li class="top"><a href="http://1.hd.mi.com" data-stat-aid="AA10869" data-stat-pid="2_44_3_252" target="_blank" data-stat-id="AA10869+2_44_3_252" onclick="_msq.push(['trackEvent', '79fe2eae924d2a2e-AA10869+2_44_3_252', 'http://1.hd.mi.com', 'pcpid', '']);"><i class="iconfont"></i>一元活动</a></li>
            <li class="left"><a href="//www.mi.com/mimobile/" data-stat-aid="AA11244" data-stat-pid="2_44_4_253" target="_blank" data-stat-id="AA11244+2_44_4_253" onclick="_msq.push(['trackEvent', '79fe2eae924d2a2e-AA11244+2_44_4_253', '//www.mi.com/mimobile/', 'pcpid', '']);"><i class="iconfont"></i>小米移动</a></li>
            <li class=""><a href="http://huanxin.mi.com" data-stat-aid="AA12084" data-stat-pid="2_44_5_254" target="_blank" data-stat-id="AA12084+2_44_5_254" onclick="_msq.push(['trackEvent', '79fe2eae924d2a2e-AA12084+2_44_5_254', 'http://huanxin.mi.com', 'pcpid', '']);"><i class="iconfont"></i>以旧换新</a></li>
            <li class=""><a href="http://recharge.10046.mi.com/" data-stat-aid="AA10871" data-stat-pid="2_44_6_255" target="_blank" data-stat-id="AA10871+2_44_6_255" onclick="_msq.push(['trackEvent', '79fe2eae924d2a2e-AA10871+2_44_6_255', 'http://recharge.10046.mi.com/', 'pcpid', '']);"><i class="iconfont"></i>话费充值</a></li>
        </ul>
    </div>
</template>

<style>
.clearfix:before, .clearfix:after {
    content: " ";
    display: table;
}
    .clearfix:after {
    clear: both;
}
	.span4 {
    width: 234px;
}
.home-channel-list {
    margin: 0;
    padding: 3px;
    list-style-type: none;
    font-size: 12px;
    text-align: center;
    background: #5f5750;
}

.home-channel-list li {
    position: relative;
    float: left;
    width: 70px;
    height: 82px;
    padding: 0 3px;
}
.home-channel-list a {
    display: block;
    padding-top: 18px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    _zoom: 1;
    color: #fff;
    color: rgba(255,255,255,0.7);
    -webkit-transition: color .2s;
    transition: color .2s;
}
.home-channel-list i {
    display: block;
    height: 24px;
    margin-bottom: 4px;
    font-size: 24px;
    line-height: 24px;
}

.home-channel-list li:before, .home-channel-list li:after {
    position: absolute;
    content: "";
    background: #665e57;
}
.home-channel-list li:after {
    top: 6px;
    left: 0;
    width: 1px;
    height: 70px;
}
.home-channel-list li:before {
    top: -1px;
    left: 6px;
    width: 64px;
    height: 1px;
}
</style>