game.import("extension",function(lib,game,ui,get,ai,_status){
    return {
    name:"Love Live!",
    editable:false,
    content:function (config, pack) {
        if(config.lovelive){
            for(var i in lib.characterPack['lovelive']) {
                if(lib.character[i][4].indexOf("forbidai")<0)lib.character[i][4].push("forbidai");
            };
        };
    },
    precontent:function (ext) {
			if (ext.enable) {
                game.QTaddGroup = function(name, mapping, gradient) {
                var n, t;
                if (!name) return;
                if (typeof name == "string") {
                    n = name;
                    t = name
                } else if (Array.isArray(name) && name.length == 2 && typeof name[0] == "string") {
                    n = name[0];
                    t = name[1]
                } else return;
                if (!mapping || !Array.isArray(mapping) || mapping.length != 3) mapping = [199, 21, 133];
                var y = "(" + mapping[0] + "," + mapping[1] + "," + mapping[2];
                var y1 = y + ",1)",
                    y2 = y + ")";
                var s = document.createElement('style');
                s.innerHTML = ".player .identity[data-color='diy" + n + "'],";
                s.innerHTML += "div[data-nature='diy" + n + "'],";
                s.innerHTML += "span[data-nature='diy" + n + "'] {text-shadow: black 0 0 1px,rgba" + y1 + " 0 0 2px,rgba" + y1 + " 0 0 5px,rgba" + y1 + " 0 0 10px,rgba" + y1 + " 0 0 10px}";
                s.innerHTML += "div[data-nature='diy" + n + "m'],";
                s.innerHTML += "span[data-nature='diy" + n + "m'] {text-shadow: black 0 0 1px,rgba" + y1 + " 0 0 2px,rgba" + y1 + " 0 0 5px,rgba" + y1 + " 0 0 5px,rgba" + y1 + " 0 0 5px,black 0 0 1px;}";
                s.innerHTML += "div[data-nature='diy" + n + "mm'],";
                s.innerHTML += "span[data-nature='diy" + n + "mm'] {text-shadow: black 0 0 1px,rgba" + y1 + " 0 0 2px,rgba" + y1 + " 0 0 2px,rgba" + y1 + " 0 0 2px,rgba" + y1 + " 0 0 2px,black 0 0 1px;}";
                document.head.appendChild(s);
                if (gradient && Array.isArray(gradient) && Array.isArray(gradient[0]) && gradient[0].length == 3) {
                    var str = "",
                        st2 = [];
                    for (var i = 0; i < gradient.length; i++) {
                        str += ",rgb(" + gradient[i][0] + "," + gradient[i][1] + "," + gradient[i][2] + ")";
                        if (i < 2) st2[i] = "rgb(" + gradient[i][0] + "," + gradient[i][1] + "," + gradient[i][2] + ")";
                    }
                    var tenUi = document.createElement('style');
                    tenUi.innerHTML = ".player>.camp-wrap[data-camp='" + n + "']>.camp-back {background: linear-gradient(to bottom" + str + ");}";
                    tenUi.innerHTML += ".player>.camp-wrap[data-camp='" + n + "']>.camp-name {text-shadow: 0 0 5px " + st2[0] + ", 0 0 10px " + st2[1] + ";}";
                    document.head.appendChild(tenUi);
                }
                lib.group.add(n);
                lib.translate[n] = t;
                lib.translate[n + '2'] = t;
                lib.groupnature[n] = "diy" + n;
            };
                game.QTaddGroup(["μ", "缪"], [238, 0, 136], [
                [200, 0, 0],
                [0, 0, 200]
            ]);
                game.QTaddGroup(["shui", "水"], [0, 161, 233], [
                [200, 0, 0],
                [0, 0, 200]
            ]);
                game.QTaddGroup(["hong", "虹"], [243, 152, 1], [
                [200, 0, 0],
                [0, 0, 200]
            ]);
                
				game.import("character", function () {
                    var lovelive = {
                        name: "lovelive",
                        connect: true,
                        characterSort: {
                            lovelive: {
                                lovelive0: ["honoka", "umi", "nozomi", "rin0"],
                                llss: ["chika"],
                                hongxiao: ["yu", "ayumu"],
                                zzz: [],
                                wwc: ["nico", "kotori", "maki", "eli", "hanayo", "riko", "you", "mari", "dia", "kanan", "ruby", "hanamaru", "yohane", "ayumu", "setsuna", "ai", "shizuku", "ksm", "rina", "kanata", "karin", "ema"]
                            },
                        },
                        characterIntro: {
                            honoka: "μ\'s - 高坂穗乃果</br>国立音乃木坂学院二年级生。μ\'s的发起人。一向笑容满面，充满活力是她最大的优点。时常凭直觉或一时兴起的想法行动，一旦做出决定，就会不顾一切地朝目标笔直迈进。即使遭遇困难，也能凭借着天生的超乐观态度突破难关。是μ\'s的核心人物兼领导者。",
                            umi: "μ\'s - 园田海未</br>国立音乃木坂学院二年级生。出生于日本舞蹈世家，散发凛然氛围的大和抚子。她自幼学习弓道，是个礼仪举止也无可挑剔的女孩子。对自己和周围都要求严格的典型，最讨厌坏事与偷懒。与穗乃果和小鸟是儿时玩伴。",
                            nozomi: "μ\'s - 东条希</br>国立音乃木坂学院三年级生。和绘里截然不同，性格我行我素，以掺杂着关西话的独特语调说话。与冷酷气质的绘里是对好搭档。胸襟宽大，有让人觉得她心智年龄大于其他成员的一面。虽然行动温吞，但意外的是位策略家?",
                            rin0: "μ\'s - 星空凛</br>国立音乃木坂学院一年级生。开朗活泼的运动少女。比起苦思冥想，更喜爱活动身体。有着运动员个性的她很擅长照顾人，总是会照顾儿时的玩伴花阳。无论什么事都会大声回应，认真练习。",
                            nico: "μ\'s - 矢泽妮可</br>国立音乃木坂学院三年级生。以当上偶像为目标日夜不懈地努力，是名货真价实的偶像宅。作为立志成为偶像的前辈，时常对穗乃果等人摆出高高在上的态度。只不过个性意外地冒失，不时会在众人前出糗。招牌台词是「妮可妮可妮」。",
                            kotori: "μ\'s - 南琴梨</br>国立音乃木坂学院二年级生。穗乃果最要好的朋友。两人是从幼稚园开始就一直在一起的儿时玩伴。与穗乃果相反，性格文静柔和，是名成绩优秀的好学生。个性虽文静但内心坚强，不会胆小怕事。",
                            maki: "μ\'s - 西木野真姬</br>国立音乃木坂学院一年级生。父母经营着大医院的大小姐。歌喉十分出众，而且会弹钢琴，是位备受期待的一年级生。态度高傲且自尊心强，不擅长表露出真心。天生胆识过人，与高学年相处时也很强势。其实也有怕寂寞的一面。 ",
                            eli: "μ\'s - 绚濑绘里</br>国立音乃木坂学院三年级生。学生会长，拥有四分之一俄罗斯血统的混血儿。头脑聪明、运动神经优秀，任何事都能完美地达成。在学校人气出众，拥有强烈的责任感，任职学生会长。拥有芭蕾舞的经验， 是μ's的舞蹈担当。",
                            hanayo: "μ\'s - 小泉花阳​</br>国立音乃木坂学院一年级生。在班上也不怎么显眼的文静少女。对自己没自信，做什么事都很容易放弃。因为憧憬μ's，而与凛、真姬一同加入社团。与凛的关系很好，两人总是形影不离。最喜欢白米饭。学园偶像狂热粉，对学园偶像的知识和妮可并称双壁。",

                            chika: "Aqours - 高海千歌</br>浦之星女学院二年级生。Aqours的发起人兼队长。家中三姐妹中年纪最小的，家中经营日式旅馆。待人亲切，个性好强。以天生开朗与强硬的性格，将身边的人接连卷入自己的行动之中。",
                            you: "Aqours - 渡边曜</br>浦之星女学院二年级生。千歌的同班同学。拥有国家级实力的跳水选手。兴趣为锻炼肌肉，是行动快过思考的运动少女。父亲为渡轮船长，而本人也希望将来能够成为船长。喜欢名为制服的服装，经常在Aqours中负责服装工作。",
                            riko: "Aqours - 樱内梨子</br>从东京的秋叶原转校到千歌所在班级的二年级生。性格腼腆的居家派。看似成熟稳重，其实做事冒失，有时会因过早下结论而误判或对一些事产生误会。",
                            mari: "Aqours - 小原鞠莉</br>浦之星女学院三年级生，混血儿，父亲是经营连锁饭店的意大利裔美国人。个性开朗，时常单独行动。无论遭遇什么事都绝不气馁，是名不知恐惧为何物的挑战者。",
                            dia: "Aqours - 黑泽黛雅</br>浦之星女学院三年级生。家里曾经营过渔业，是当地名门望族的女儿，且担任学院的学生会会长。自尊心强的完美主义者，绝不允许半途而废与不正当的行为。",
                            kanan: "Aqours - 松浦果南</br>浦之星女学院三年级生。个性成熟不拘小节，对事物没有太多的坚持。沉着冷静，隐约中给人一种冰山美人的氛围。",
                            hanamaru: "Aqours - 国木田花丸</br>浦之星女学院一年级生，是当地历史悠久的寺庙家的女儿。喜爱阅读，尤其钟爱日本文学的文学少女。擅长唱歌，是圣歌队的一员。个性温柔，懂得照顾周围的人。",
                            ruby: "Aqours - 黑泽露比</br>浦之星女学院一年级生，与花丸很要好，总是形影不离。虽然是个爱哭的胆小鬼，作为出身名门的大小姐还是有相应的底蕴。一直很憧憬偶像。唯一擅长的是裁缝。",
                            yohane: "Aqours - 津岛善子</br>浦之星女学院一年级生。身穿小恶魔风格服饰，并自称「堕天使夜羽」。出身于都市沼津。个性开朗大胆，机灵聪明，但运气极差，总是会被卷入意外的麻烦之中。",

                            yu: "虹咲学园学园偶像同好会 - 高咲侑</br>虹咲学园二年级生，步梦的儿时玩伴，非常喜欢学园偶像。",
                            ayumu: "虹咲学园学园偶像同好会 - 上原步梦</br>虹咲学园二年级生，凡事都认真面对的努力型女孩。在儿时玩伴的邀约下成为了学园偶像。",
                            setsuna: "虹咲学园学园偶像同好会 - 优木雪菜</br>虹咲学园二年级生，是名别校都会瞩目的、备受期待的学园偶像。充满活力的笑容与表演是她的个人特色。喜欢动漫，一聊到相关话题就会滔滔不绝。因为忙于学园偶像的活动，有着「从没有人在校内见过她」这种类似都市传说的传闻。",
                            ai: "虹咲学园学园偶像同好会 - 宫下爱</br>虹咲学园二年级生，性格活泼、热情待人，所以有很多朋友。虽然张扬的外表很容易被人误会，其实非常重情义。很黏奶奶，喜欢的食物是腌菜。",
                            shizuku: "虹咲学园学园偶像同好会 - 樱坂雫</br>最近刚转到虹咲学园的一年级生，是位踏实的好学生，隶属于话剧社。虽然很有运动细胞，但不擅长球类运动。",
                            ksm: "虹咲学园学园偶像同好会 - 中须霞</br>虹咲学园一年级生，最喜欢可爱的东西。对学园偶像抱持的憧憬比常人强。个性好强，用「小屑屑」这个绰号叫她就会生气。",
                            rina: "虹咲学园学园偶像同好会 - 天王寺璃奈</br>虹咲学园一年级生，从初中直升入学。因为不擅长用表情来表达情感，所以经常被误会是冷淡的人，但她其实内心想法非常丰富，而且还很粘人。会通过在一块名为「璃奈板」的白板上手绘各种「颜」与周围进行沟通。",
                            kanata: "虹咲学园学园偶像同好会 - 近江彼方</br>最近刚转到虹咲学园的三年级生，虽然在做菜和疼爱妹妹遥时会表现出热情的一面，其他时候都一副睡眼惺忪的模样。似乎如果可以的话，她就想一辈子这么睡下去。",
                            karin: "虹咲学园学园偶像同好会 - 朝香果林</br>虹咲学园三年级生，有着不像高中生的容貌与傲人身材，也当过读者模特儿。外表看起来虽成熟，但其实意外地有着纯真的一面。",
                            ema: "虹咲学园学园偶像同好会 - 艾玛·维尔德</br>虹咲学园三年级生，来自瑞士的留学生，最近刚转到虹咲学园。是名温和随性、心地善良，热爱故乡的山水和大自然的女孩子。",
                        },
                        characterTitle: {
                            honoka: '<img src="' + lib.assetURL + 'extension/Love Live!/image/characterOthers/μ\'s.jpg" width="55" height="45">',
                            umi: '<img src="' + lib.assetURL + 'extension/Love Live!/image/characterOthers/μ\'s.jpg" width="55" height="45">',
                            nozomi: '<img src="' + lib.assetURL + 'extension/Love Live!/image/characterOthers/μ\'s.jpg" width="55" height="45">',
                            rin0: '<img src="' + lib.assetURL + 'extension/Love Live!/image/characterOthers/μ\'s.jpg" width="55" height="45">',
                            nico: '<img src="' + lib.assetURL + 'extension/Love Live!/image/characterOthers/μ\'s.jpg" width="55" height="45">',
                            kotori: '<img src="' + lib.assetURL + 'extension/Love Live!/image/characterOthers/μ\'s.jpg" width="55" height="45">',
                            maki: '<img src="' + lib.assetURL + 'extension/Love Live!/image/characterOthers/μ\'s.jpg" width="55" height="45">',
                            eli: '<img src="' + lib.assetURL + 'extension/Love Live!/image/characterOthers/μ\'s.jpg" width="55" height="45">',
                            hanayo: '<img src="' + lib.assetURL + 'extension/Love Live!/image/characterOthers/μ\'s.jpg" width="55" height="45">',

                            chika: '<img src="' + lib.assetURL + 'extension/Love Live!/image/characterOthers/Aqours.jpg" width="125.6" height="45">',
                            you: '<img src="' + lib.assetURL + 'extension/Love Live!/image/characterOthers/Aqours.jpg" width="125.6" height="45">',
                            riko: '<img src="' + lib.assetURL + 'extension/Love Live!/image/characterOthers/Aqours.jpg" width="125.6" height="45">',
                            mari: '<img src="' + lib.assetURL + 'extension/Love Live!/image/characterOthers/Aqours.jpg" width="125.6" height="45">',
                            dia: '<img src="' + lib.assetURL + 'extension/Love Live!/image/characterOthers/Aqours.jpg" width="125.6" height="45">',
                            kanan: '<img src="' + lib.assetURL + 'extension/Love Live!/image/characterOthers/Aqours.jpg" width="125.6" height="45">',
                            hanamaru: '<img src="' + lib.assetURL + 'extension/Love Live!/image/characterOthers/Aqours.jpg" width="125.6" height="45">',
                            ruby: '<img src="' + lib.assetURL + 'extension/Love Live!/image/characterOthers/Aqours.jpg" width="125.6" height="45">',
                            yohane: '<img src="' + lib.assetURL + 'extension/Love Live!/image/characterOthers/Aqours.jpg" width="125.6" height="45">',

                            yu: '<img src="' + lib.assetURL + 'extension/Love Live!/image/characterOthers/hx.png" width="150" height="45">',
                            ayumu: '<img src="' + lib.assetURL + 'extension/Love Live!/image/characterOthers/hx.png" width="150" height="45">',
                            setsuna: '<img src="' + lib.assetURL + 'extension/Love Live!/image/characterOthers/hx.png" width="150" height="45">',
                            ai: '<img src="' + lib.assetURL + 'extension/Love Live!/image/characterOthers/hx.png" width="150" height="45">',
                            shizuku: '<img src="' + lib.assetURL + 'extension/Love Live!/image/characterOthers/hx.png" width="150" height="45">',
                            ksm: '<img src="' + lib.assetURL + 'extension/Love Live!/image/characterOthers/hx.png" width="150" height="45">',
                            rina: '<img src="' + lib.assetURL + 'extension/Love Live!/image/characterOthers/hx.png" width="150" height="45">',
                            kanata: '<img src="' + lib.assetURL + 'extension/Love Live!/image/characterOthers/hx.png" width="150" height="45">',
                            karin: '<img src="' + lib.assetURL + 'extension/Love Live!/image/characterOthers/hx.png" width="150" height="45">',
                            ema: '<img src="' + lib.assetURL + 'extension/Love Live!/image/characterOthers/hx.png" width="150" height="45">',
                        },
                        character: {
                            "honoka": ["female", "μ", 3, ["ファ", "yeah", "guohuang"], ["zhu", "die_audio"]],
                            "umi": ["female", "μ", 4, ["love", "xiejin", "弓道"], ["die_audio"]],
                            "nozomi": ["female", "μ", 3, ["wunv", "zhanbu", "taluo"], ["die_audio"]],
                            "rin0": ["female", "μ", 3, ["rinmiao", "xingkong", "rin0_qk"], ["die_audio"]],
                            "nico": ["female", "μ", 3, [], ["die_audio"]],
                            "kotori": ["female", "μ", 3, [], ["die_audio"]],
                            "maki": ["female", "μ", 3, [], ["die_audio"]],
                            "eli": ["female", "μ", 4, [], ["die_audio"]],
                            "hanayo": ["female", "μ", 3, [], ["die_audio"]],

                            "chika": ["female", "shui", 3, ["kuang", "mikan", "kxq", "qiandi"], ["zhu", "die_audio"]],
                            "you": ["female", "shui", 4, [], ["die_audio"]],
                            "riko": ["female", "shui", 3, [], ["die_audio"]],
                            "mari": ["female", "shui", 4, [], ["die_audio"]],
                            "dia": ["female", "shui", 3, [], ["die_audio"]],
                            "kanan": ["female", "shui", 3, [], ["die_audio"]],
                            "ruby": ["female", "shui", 3, [], ["die_audio"]],
                            "hanamaru": ["female", "shui", 3, [], ["die_audio"]],
                            "yohane": ["female", "shui", 4, [], ["die_audio"]],

                            "yu": ["female", "hong", 3, ["dd", "houqin", "jidong", "fs", "yuge"], ["zhu", "die_audio"]],
                            "ayumu": ["female", "hong", 3, ["zhumeng", "tingyan", "bielei", "kaihua"], ["die_audio"]],
                            "setsuna": ["female", "hong", 3, [], ["die_audio"]],
                            "ai": ["female", "hong", 3, [], ["die_audio"]],
                            "shizuku": ["female", "hong", 3, [], ["die_audio"]],
                            "ksm": ["female", "hong", 3, [], ["die_audio"]],
                            "rina": ["female", "hong", 3, [], ["die_audio"]],
                            "kanata": ["female", "hong", 3, [], ["die_audio"]],
                            "karin": ["female", "hong", 4, [], ["die_audio"]],
                            "ema": ["female", "hong", 4, [], ["die_audio"]],
                        },
                        translate: {
                            "honoka": "高坂穗乃果",
                            "umi": "园田海未",
                            "nozomi": "东条希",
                            "rin0": "星空凛",
                            "nico": "矢泽妮可",
                            "kotori": "南琴梨",
                            "maki": "西木野真姬",
                            "eli": "绚濑绘里",
                            "hanayo": "小泉花阳",

                            "chika": "高海千歌",
                            "you": "渡边曜",
                            "riko": "樱内梨子",
                            "mari": "小原鞠莉",
                            "dia": "黑泽黛雅",
                            "kanan": "松浦果南",
                            "ruby": "黑泽露比",
                            "hanamaru": "国木田花丸",
                            "yohane": "津岛善子",

                            "yu": "高咲侑",
                            "ayumu": "上原步梦",
                            "setsuna": "优木雪菜",
                            "ai": "宫下爱",
                            "shizuku": "樱坂雫",
                            "ksm": "中须霞",
                            "rina": "天王寺璃奈",
                            "kanata": "近江彼方",
                            "karin": "朝香果林",
                            "ema": "艾玛•维尔德",

                            ファ: "ファイト だよ!",
                            ファ_info: "每回合限一次，出牌阶段，你可以弃置一张牌并摸三张牌，然后选择一项：①将至少一张、至多X张手牌交给任意名其他角色，若如此做，你获得Y个「ほ」标记，X为你的体力值，Y为获得你以此法给出牌的角色的数量；②弃置一张牌并回复一点体力，然后你获得一个「ほ」标记。",
                            yeah: "耶～",
                            yeah_info: "锁定技，你的手牌上限+X；回合结束阶段，若X不小于你的体力值，你须选择一项：①弃置Y个「ほ」标记，然后摸Y张牌；②弃置Y张牌，然后令至多Y名角色各回复一点体力；③弃置所有「ほ」标记，摸X张牌，然后你可以将至多Y张牌交给任意名其他角色。X为你拥有的「ほ」的数量，Y为「ほ」的数量与你的体力值的差值且至少为1。",
                            guohuang: "果皇",
                            guohuang_info: "主公技，当你受到伤害时，若你至少拥有一个「ほ」标记且场上μ's势力角色数不小于你的体力值，则你可以弃置一个「ほ」标记并防止此次伤害，然后你可以摸X张牌，X为剩余「ほ」的数量。",
                            love: "Love Arrow",
                            love_info: "每回合限一次，出牌阶段，你可以将一张♥️牌当做【万箭齐发】使用。当你使用或打出♥️牌时，你可以选择执行至多X项：①弃置一张手牌，然后对任意一名角色造成一点伤害；②回复一点体力；③摸两张牌然后弃置一张牌。X为你已失去的体力值且至少为1，至多为3。",
                            xiejin: "携进",
                            xiejin_info: "出牌阶段限一次，你可以弃置任意张牌并摸（X+Y）张牌，然后若Y不为零，则你可以选择一名其他角色，令其摸X张牌然后弃置（X-Y）张牌。X为你弃置的牌的数量，Y为其中的♥牌数量，且（X-Y）至少为1。",
                            弓道: "弓道",
                            弓道_info: "锁定技，你使用牌没有距离限制。",
                            wunv: "巫女",
                            wunv_info: "游戏开始时，你获得五个「希」标记。锁定技，当你受到伤害时，你须弃置与此次伤害等量的「希」标记，然后防止此伤害。当「希」的数量不足时，你须弃置所有「希」，失去一点体力，然后防止此伤害。回合结束时，若你没有「希」标记，你须失去一点体力。",
                            zhanbu: "占卜",//修改思路，无代价，但只能看
                            zhanbu_info: "任意角色的准备阶段开始时或即将进行判定时，你可以弃置至多三个「希」标记，然后观看牌堆顶2X张牌并将其以任意顺序置于牌堆顶或牌堆底，X为你弃置的「希」标记的数量。",
                            taluo: "塔罗",//配合占卜修改，可以自选第几张亮出（塔罗牌抽牌）
                            taluo_info: "任意角色的摸牌阶段开始时，你可以亮出牌堆顶的三张牌，进行释并选择是否发动对应效果。发动效果后，你获得一个「希」标记。若无法解释或选择不发动效果，你需弃置3张牌。",
                            taluo_jieshi: "可解释牌型",
                            taluo_jieshi_info: "</br>♠️♥️红色：愚者</br>♠️♥️黑色：魔术师</br>♥️♦️红色：女祭司</br>♥️♠️红色：女皇</br>♥️♠️黑色：皇帝</br>♥️♦️黑色：教皇</br>♥️♥️红色：恋人</br>♠️♠️黑色：战车</br>♥️♥️黑色：力量</br>♠️♠️红色：隐者</br>♦️♥️红色：命运之轮</br>♦️♥️黑色：正义</br>♣️♣️红色：倒吊者</br>♣️♣️黑色：死神</br>♣️♠️红色：节制</br>♣️♠️黑色：恶魔</br>♠️♣️黑色：塔</br>♠️♣️红色：星星</br>♦️♦️黑色：月亮</br>♦️♦️红色：太阳</br>♠️♦️红色：审判</br>♠️♦️黑色：世界</br>对其他角色进行解释时，♥️、♠️对应正位，♦️、♣️对应逆位</br>对自己进行解释时，♥️、♠️对应逆位，♦️♣️对应正位。",
                            taluo_xiaoguo: "效果",
                            taluo_xiaoguo_info: "</br>愚者：♠️♥️红色</br>正位：目标角色弃置所有手牌，然后摸等量的牌。弃置的牌中每有一张♥️牌，其回复一点体力。</br>逆位：目标角色弃置所有牌，当其下个回合开始时，摸等量的牌。</br>魔术师：♠️♥️黑色</br>正位：你获得两个「希」标记并摸一张牌，目标角色摸一张牌。</br>逆位：你弃置一张牌，目标角色弃置三张牌。</br>女祭司：♥️♦️红色</br>正位：目标角色摸四张牌，然后弃置四张手牌</br>逆位：目标角色摸一张牌，回合结束时须弃置两张牌。若牌不足，须失去一点体力。</br>女皇：♥️♠️红色</br>正位：目标角色摸一张牌并展示，本回合其使用或打出与该牌同颜色的牌时摸一张牌。</br>逆位：目标角色亮出牌堆顶的一张牌并获得之。本回合其不能使用或打出与亮出的牌同颜色的牌。</br>皇帝：♥️♠️黑色</br>正位：目标角色选择一名除其之外的角色，然后对该角色造成一点伤害并获得其一张手牌。</br>逆位：目标角色本回合造成伤害时，防止此伤害。</br>教皇：♥️♦️黑色</br>正位：目标角色摸两张牌并回复一点体力。</br>逆位：目标角色摸两张牌，然后展示其手牌，并选择其中一种颜色，弃置所有该颜色的牌。</br>恋人：♥️♥️红色</br>正位：目标角色选择一名除其之外的角色，两名角色各摸一张牌并回复一点体力。</br>逆位：目标角色弃置全部手牌然后摸等量的牌，本回合其计算与其他角色的距离时+1。</br>战车：♠️♠️黑色</br>正位：目标角色摸两张牌，弃置至少一张、至多三张牌并选择等量除其之外的角色，然后对他们各造成一点伤害。</br>逆位：目标角色选择一项：①弃置所有装备区内的牌，至少一张；②失去一点体力并弃置X张手牌。X为其装备区内牌的数量且至少为2。</br>力量：♥️♥️黑色</br>正位：目标角色本回合造成伤害时，令此伤害+1。</br>逆位：目标角色本回合造成伤害时，须弃置与此伤害等量的牌，否则防止此伤害。</br>隐者：♠️♠️红色</br>正位：目标角色摸两张牌，且本回合手牌上限+2。</br>逆位：目标角色本回合不能使用或打出除装备牌外的牌。</br>命运之轮：♦️♥️红色</br>正位：目标角色本回合结束后，额外进行一个回合。</br>逆位：目标角色跳过出牌阶段并失去一点体力。</br>正义：♦️♥️黑色</br>正位：目标角色本回合造成伤害时，你可令此伤害+1。目标角色回合结束时，你选择一名角色，令该角色摸X张牌，X为目标角色本回合造成的伤害。</br>逆位：目标角色本回合造成伤害时，失去与此伤害等量的体力。</br>倒吊者：♣️♣️红色</br>正位：目标角色选择失去一点体力或弃置两张手牌，然后其选择一名角色，令他回复一点体力并摸三张牌。</br>逆位：目标角色失去一点并弃置两张牌。</br>死神：♣️♣️黑色</br>正位：目标角色失去一点体力并摸三张牌，且其本回合可以额外使用一张【杀】。</br>逆位：目标角色失去两点体力，然后摸两张牌。</br>节制：♣️♠️红色</br>正位：目标角色摸牌阶段少摸一张牌，回合结束时摸三张牌。你获得一个「希」标记。</br>逆位：目标角色本回合每使用或打出一张牌，须弃置一张牌。</br>恶魔：♣️♠️黑色</br>正位：目标角色摸三张牌，出牌阶段结束时，弃置全部手牌并失去一点体力。</br>逆位：目标角色弃置一张牌，回复一点体力，且其本回合造成伤害后，摸一张牌。</br>塔：♠️♣️黑色</br>正位：目标角色受到两点无伤害来源的雷电伤害并弃置两张牌。</br>逆位：目标角色弃置所有手牌，并受到来自你的一点伤害。</br>星星：♠️♣️红色</br>正位：目标角色回合结束时摸三张牌。</br>逆位：目标角色摸至少一张、至多三张牌，本回合其计算与其他角色的距离时+X，其本回合手牌上限改为其本回合造成的伤害数量。X为其选择摸牌的数量。</br>月亮：♦️♦️黑色</br>正位：目标角色摸两张牌，其本回合使用、打出或弃置牌时，获得一个「月」标记。每当「月」达到两个，其须失去一点体力并弃置两个「月」，回合结束时，其弃置所有「月」标记。</br>逆位：目标角色弃置一张牌，其本回合使用、打出或弃置牌时，获得一枚「月」标记。每当「月」达到两个，其摸一张牌并弃置两个「月」。回合结束时，其弃置所有「月」标记。</br>太阳：♦️♦️红色</br>正位：目标角色摸两张牌，回复一点体力，且本回合使用或打出红色牌时摸一张牌。</br>逆位：目标角色本回合使用或打出红色牌时，弃置一张牌。其本回合计算与其他角色的距离时+1。</br>审判：♠️♦️红色</br>正位：目标角色回复一点体力，本回合造成伤害时获得受到伤害的角色一张牌。若亮出的牌的点数之和为21，目标角色增加一点体力上限。</br>逆位：目标角色失去一点体力，且其本回合使用牌时无法指定除其以外的角色为目标。若亮出的牌的点数之和为21，目标角色减少一点体力上限。</br>世界：♠️♦️黑色</br>正位：若目标角色拥有技能〖世界•逆〗，移除之；若没有，目标角色获得技能〖世界〗，若已拥有技能〖世界〗，目标角色摸两张牌。</br>逆位：若目标角色拥有技能〖世界〗，移除之；若没有，目标角色获得技能〖世界•逆〗，若已拥有技能〖世界•逆〗，目标角色弃置两张牌。",
                            taluo_shijie: "世界",
                            taluo_shijie_info: "锁定技，出牌阶段开始时，你摸X张牌，然后弃置（X-1）张牌，X为你的体力值。你的手牌上限始终为你的体力上限。",
                            taluo_shijieni: "世界·逆",
                            taluo_shijieni_info: "锁定技，摸牌阶段结束时，你须展示手牌并弃置一张牌。",
                            rinmiao: "凛喵",
                            rinmiao_info: "转换技，游戏开始时，你获得标记“凛”并获得技能〖凛酱〗。当你造成伤害或受到伤害后，若X不小于你的体力值，你须将你的标记翻面为“喵”，并将技能〖凛酱〗替换为〖猫娘〗。回合开始时，你可以弃置一张牌，然后将标记翻回，X为你拥有的「星」标记的数量且至少为1。",
                            rin: "凛酱",
                            rin_info: "锁定技，当你造成伤害后，你获得与此伤害等量的「星」标记，然后你可以令一名角色摸X张牌，X为你拥有的「星」标记的数量。",
                            miao: "猫娘",
                            miao_info: "锁定技，当你受到伤害后，你失去与此伤害等量的「星」标记，然后你可以令一名角色摸2X张牌。每名角色的回合限一次，若在此伤害结算完后X为0，则你可以选择一名角色，令其回复一点体力。X为你拥有的「星」标记的数量。",
                            xingkong: "星空",
                            xingkong_info: "锁定技，若你拥有至少一个「星」标记，出牌阶段你可以额外使用X张【杀】，X为你拥有的「星」标记的数量；若你没有「星」标记，回合结束阶段开始时，你摸（Y+1）张牌。Y为你已失去的体力值。",
                            kuang: "哐哐",
                            kuang_info: "出牌阶段限一次，你可以令所有角色选择是否应援，然后你获得X个「柑」标记，且所有未应援的角色弃置一张牌，所有应援的角色摸一张牌。若未应援的角色数大于一半，则你可以获得X个「柑」，然后失去一点体力；若应援的角色数不小于一半或所有角色均未应援，则你可以对所有未应援角色造成一点伤害，然后失去一点体力。X为应援的角色数。",
                            mikan: "蜜柑",
                            mikan_info: "你受到伤害后，若你拥有至少一个「柑」标记，则你可以弃置X个「柑」，然后依次发动对应效果：若X不小于1，你摸一张牌；不小于2，你回复一点体力；X不小于3，伤害来源弃置一张牌；X为4及以上，你获得伤害来源（X-3）张手牌。X为你拥有的「柑」的数量的一半（向上取整）且至多为6。",
                            kxq: "空心晴",
                            kxq_info: "锁定技，回合开始时，若你没有「柑」标记，你获得（2X+1）个「柑」，然后可以令至多（X+1）名角色各摸一张牌。否则，你须弃置所有「柑」，回合结束时，摸等量的牌。X为你已失去的体力值。",
                            qiandi: "千帝",
                            qiandi_info: "主公技，你的回合结束时，所有Aqours势力角色依次选择一项：①令你获得一个「柑」；②交给你一张手牌；③令你摸两张牌，然后弃置一张手牌。然后你可以令其摸一张牌。",
                            dd: "DD",
                            dd_info: "锁定技，游戏开始时，你选择两名其他角色并成为她们的粉丝。回合开始时，若你不是所有其他角色的粉丝，你须选择一名不是你的偶像的其他角色，成为她的粉丝。",
                            houqin: "后勤",
                            houqin_info: "转换技，游戏开始时，你获得标记“后”，并获得技能：你的偶像的回合开始时，你可以弃置一张牌，令其摸三张牌然后弃置两张牌。若如此做，其本回合造成伤害时，你可以选择一项：①摸一张牌；②失去一点体力使此伤害+1。然后若你已受伤，你可以将你的标记翻面为“勤”，并获得技能：你的偶像的回合结束时，你可以选择一项：①弃置一张牌，摸X张牌，然后弃置X张手牌。若此时你仍有手牌，你可以展示所有手牌，若颜色均相同，你摸两张牌；若花色均相同，你额外摸与亮出的牌等量的牌。X为场上是你的偶像的角色数。②将你的标记翻面为“后”并摸两张牌。",
                            jidong: "悸动",
                            jidong_info: "锁定技，你的偶像对你造成伤害时，防止此伤害改为摸等量的牌；你对你的偶像造成伤害时，防止此伤害改为摸等量的牌。当你失去此技能时，你可以选择一项：①对其中任意名角色各造成一点伤害；②令其中任意名角色回复一点体力。",
                            fs: "粉丝",
                            fs_info: "觉醒技，回合开始时，若当场上所有其他角色均为你的偶像，你获得一点体力上限并回复一点体力，然后失去技能〖悸动〗。",
                            yuge: "侑哥哥",
                            yuge_info: "主公技，游戏开始时，你成为所有虹咲势力角色的粉丝。回合结束时，你可以失去一点体力，然后选择一名你的偶像，若其为虹咲势力角色，你摸X张牌，目标角色摸两张牌；否则，你对其造成X/2点伤害并摸X/2张牌（向上取整），然后其不再是你的偶像。X为场上虹咲势力角色的数量。",
                            zhumeng: "逐梦",
                            zhumeng2: "逐梦",
                            zhumeng_info: "①游戏开始时，你亮出牌堆顶至少三张、至多五张牌，置于你的武将牌上，称为「梦」。②回合开始时，你可以用至多X张手牌替换相同数量的「梦」，并摸一张牌。当「梦」的数量为4时，改为摸两张牌并弃置一张牌；为5时，改为摸两张牌。③锁定技，当你受到伤害后，你可以用至多X张手牌替换相同数量的「梦」或获得一个「泪」标记。X为你拥有的「泪」的数量，你至多拥有Y个「泪」标记，Y为「梦」的数量。",
                            tingyan: "挺颜",
                            tingyan_info: "①锁定技，当你即将受到伤害时，若此伤害：无伤害来源，防止此伤害；有伤害来源，则其须弃置X张牌，否则防止此伤害。此伤害结算完成后，其摸X张牌。②锁定技，回合开始时，若X：不小于2，你须弃置（X/2）张牌（向下取整）；不小于4，你失去一点体力；不小于5，你选择跳过摸牌阶段或出牌阶段。③锁定技，回合结束时，你选择一项：（1）弃置一张牌并获得一个「泪」；（2）弃置一个「泪」并摸两张牌。X为「泪」的数量且至少为1。",
                            bielei: "别泪",
                            bielei_info: "觉醒技，当你受到伤害或造成伤害后，若你拥有的「泪」的数量与「梦」的数量相等，你须弃置所有「泪」，获得所有「梦」，失去技能〖逐梦〗、〖挺颜〗、〖开花〗，获得技能〖夹脚〗、〖Break The System〗。然后对至多X名角色造成一点伤害，X为你弃置的「泪」的数量。",
                            kaihua: "开花",
                            kaihua_info: "觉醒技，回合开始时，若你的「梦」花色均为♥️且点数连续，你须弃置所有「泪」，获得所有「梦」，增加一点体力上限并回复一点体力，然后失去技能〖逐梦〗、〖挺颜〗、〖别泪〗，获得技能〖Dream with You〗、〖Awakening Promise〗。",
                            jiajiao: "夹脚",
                            jiajiao_info: "出牌阶段，你可以弃置（X+1）张牌，并选择一名角色（X不小于3时改为两名角色），目标角色受到来自你的一点伤害并将武将牌翻面（向下取整）。当你本回合第二次发动〖夹脚〗时，你失去一点体力；第三次发动时，你将武将牌翻面；第四次发动时，你立即结束你的出牌阶段。X为你此前发动过〖夹脚〗的次数。",
                            bts: "Break The System",
                            bts_info: "锁定技，当其他角色死亡时，你获得其所有手牌，然后对场上所有其他角色造成一点伤害并重置技能〖夹脚〗。",
                            dwy: "Dream with You",
                            dwy_info: "锁定技，当你获得此技能时，你须选择一名其他角色。①其受到伤害后，你须失去一点体力，摸一张牌，然后你可以交给其三张牌，令其回复一点体力；②其回复体力或造成伤害后，你选择回复一点体力或摸一张牌。③当你即将对其造成伤害或其即将对你造成伤害时，防止此伤害，改为你与其各摸一张牌。",
                            awakening: "Awakening Promise",
                            awakening_info: "限定技，当你处于濒死状态时，你可以弃置你区域内的所有牌并复原你的武将牌，然后失去一点体力上限，摸三张牌并将体力回复至3点。然后你获得技能〖夹脚〗和〖Break The System〗。",

                            lovelive0: '<img src="' + lib.assetURL + 'extension/Love Live!/image/characterOthers/μ.jpg" width="144" height="36.9">',
                            llss: '<img src="' + lib.assetURL + 'extension/Love Live!/image/characterOthers/shui.jpg" width="144" height="40.6">',
                            hongxiao: '<img src="' + lib.assetURL + 'extension/Love Live!/image/characterOthers/hong.png" width="144" height="51.8">',
                            zzz: "制作中",
                            wwc: "未完成",
                        },
                        skill: {
                            "ファ": {
                                audio: "ext:Love Live!/audio:3",
                                mark: true,
                                marktext: "ほ",
                                intro: {
                                    content: "拥有#个「ほ」",
                                },
                                init: function (player) {
                                    player.storage.ファ = 0;
                                    player.unmarkSkill("ファ");
                                    player.syncStorage("ファ");
                                },
                                enable: "phaseUse",
                                usable: 1,
                                selectCard: 1,
                                filterCard: true,
                                position: "he",
                                content: function () {
                                    "step 0"
                                    player.draw(3);
                                    event.num = 0;//目标数，也即获得的标记数
                                    event.flag = 0;//判断选择了给牌还是弃牌
                                    event.n = 0;//给出的牌总数
                                    event.arr = [];//储存已选择过的目标
                                    "step 1"
                                    function pd(target) {        //判断目标是否被选择过
                                        for (value of event.arr) {
                                            if (value == target)
                                                return 0;
                                        }
                                        return 1;
                                    }
                                    if (event.flag && player.hp > event.n) {
                                        player.chooseTarget("请选择一名你要交给手牌的武将</br>或者点“取消”结束给牌", 1, function (card, player, target) { return player != target && pd(target); });
                                    }
                                    else if (event.flag == 0) {
                                        player.chooseTarget("请选择一名你要交给手牌的武将</br>或者点“取消”并弃置一张牌", 1, function (card, player, target) { return player != target; });
                                    }
                                    else event.goto(4);
                                    "step 2"
                                    if (result.bool) {
                                        event.target = result.targets[0];
                                        player.chooseCard("请选择交给目标武将的牌", [1, player.hp - event.n], "h");
                                    }
                                    else {
                                        if (event.flag < 1) {
                                            player.chooseToDiscard(1,true,"he");
                                            player.recover();
                                            player.storage.ファ++;
                                            player.syncStorage("ファ");
                                            game.log(player, "获得了1个「ほ」");
                                            event.finish();
                                        }
                                        else event.goto(4);
                                    }
                                    "step 3"
                                    if (result.bool) {
                                        player.$give(result.cards.length, event.target);
                                        event.target.gain(result.cards, player,);
                                        event.n += result.cards.length;
                                        event.arr.push(event.target);
                                        event.num++;
                                        event.flag = 1;
                                    }
                                    event.goto(1);
                                    "step 4"
                                    player.storage.ファ += event.num;
                                    player.syncStorage("ファ");
                                    game.log(player, "获得了", event.num, "个「ほ」");
                                    event.finish();
                                },
                                ai: {
                                    order: 10,
                                    result: {
                                        player: 2,
                                        target: 1,
                                    }
                                },
                            },
                            "yeah": {
                                forced: true,
                                subSkill: {
                                    a: {
                                        sub: true,
                                        forced: true,
                                        mod: {
                                            maxHandcard: function (player, num) {
                                                return num + player.storage.ファ;
                                            }
                                        }
                                    },
                                    b: {
                                        sub: true,
                                        forced: true,
                                        audio: "ext:Love Live!/audio:1",
                                        trigger: {
                                            player: "phaseJieshuBegin",
                                        },
                                        content: function () {
                                            if (player.storage.ファ >= player.hp) {
                                                player.useSkill("yeah_c");
                                            }
                                        }
                                    },
                                    c: {
                                        sub: true,
                                        audio: "ext:Love Live!/audio:1",
                                        content: function () {
                                            "step 0"
                                            event.x = player.storage.ファ;
                                            event.y = event.x - player.hp;
                                            if (!event.y)
                                                event.y = 1;
                                            if (player.countCards("he") - event.y >= 0)
                                                player.chooseControl("摸牌", "弃牌+回复", "摸牌+给牌").set("choiceList", ["①弃置" + event.y + "个「ほ」标记，然后摸" + event.y + "张牌", "②弃置" + event.y + "张牌，然后令至多" + event.y + "名角色各回复一点体力", "③弃置所有「ほ」标记，摸" + event.x + "张牌，然后你可以将至多" + event.y + "张牌交给任意名其他角色"]).ai = function (event, player) {
                                                    if (player.hp < player.maxHp && event.y < 4)
                                                        return "弃牌+回复";
                                                    else if (player.countCards('h') < 2)
                                                        return "摸牌+给牌";
                                                    else return "摸牌";
                                                }
                                            else player.chooseControl("摸牌", "摸牌+给牌").set("choiceList", ["①弃置" + event.y + "个「ほ」标记，然后摸" + event.y + "张牌", "②弃置所有「ほ」标记，摸" + event.x + "张牌，然后你可以将至多" + event.y + "张牌交给任意名其他角色"]).ai = function (event, player) {
                                                if (player.countCards('h') < 2)
                                                    return "摸牌+给牌";
                                                else return "摸牌";
                                            }
                                            "step 1"
                                            if (result.control == "摸牌")
                                                event.goto(6);
                                            else if (result.control == "弃牌+回复")
                                                event.goto(7);
                                            "step 2"
                                            event.n = 0;
                                            event.arr = [];
                                            function pd(target) {
                                                for (value of event.arr) {
                                                    if (value == target)
                                                        return 0;
                                                }
                                                return 1;
                                            }
                                            game.log(player, "弃置了", event.x, "个「ほ」");
                                            player.draw(event.x);
                                            player.storage.ファ = 0;
                                            player.syncStorage("ファ");
                                            "step 3"
                                            if (event.y > event.n) {
                                                player.chooseTarget("请选择一名你要交给手牌的武将</br>或者点“取消”结束给牌", 1, function (card, player, target) { return player != target && pd(target); });
                                            }
                                            else event.finish();
                                            "step 4"
                                            if (result.bool) {
                                                event.target = result.targets[0];
                                                player.chooseCard("请选择交给目标武将的牌", [1, event.y - event.n], "h");
                                            }
                                            else event.finish();
                                            "step 5"
                                            if (result.bool) {
                                                player.$give(result.cards.length, event.target);
                                                event.target.gain(result.cards, player,);
                                                event.n += result.cards.length;
                                                event.arr.push(event.target);
                                            }
                                            event.goto(3);
                                            "step 6"
                                            game.log(player, "弃置了", event.y, "个「ほ」");
                                            player.draw(event.y);
                                            player.storage.ファ -= event.y;
                                            player.syncStorage("ファ");
                                            event.finish();
                                            "step 7"
                                            player.chooseToDiscard(event.y, true, "he");
                                            "step 8"
                                            player.chooseTarget("请选择目标", [1, event.y]);
                                            "step 9"
                                            if (result.bool) {
                                                for (event.n = 0; event.n < result.targets.length; event.n++) {
                                                    event.target = result.targets[event.n];
                                                    event.target.recover();
                                                }
                                            }
                                            else event.finish();
                                        }
                                    },
                                },
                                forced: true,
                                group: ["yeah_a", "yeah_b"]
                            },
                            "guohuang": {
                                Zhuskill: true,
                                audio: "ext:Love Live!/audio:3",
                                filter: function (event, player) {
                                    if (game.countPlayer(function (current) { return current.group == 'μ' }) >= player.hp && player.storage.ファ > 0)
                                        return player.isZhu;
                                    else return 0;
                                },
                                trigger: { player: "damageBegin4" },
                                content: function () {
                                    "step 0"
                                    game.log(player, "弃置了1个「ほ」");
                                    player.draw(player.storage.ファ - 1);
                                    player.storage.ファ--;
                                    player.syncStorage("ファ");
                                    "step 1"
                                    trigger.cancel();
                                },
                            },
                            "love": {
                                subSkill: {
                                    a: {
                                        sub: true,
                                        audio: "ext:Love Live!/audio:1",
                                        enable: "phaseUse",
                                        usable: 1,
                                        selectCard: 1,
                                        prompt: "将一张红桃牌当做“万箭齐发”使用",
                                        filterCard: function (card, player) { return get.suit(card) == "heart" },
                                        position: "hes",
                                        viewAs: {
                                            name: "wanjian",
                                        },
                                        viewAsFilter: function (player) { return player.countCards("hes", { suit: "heart" }) },
                                    },
                                    b: {
                                        sub: true,
                                        audio: "ext:Love Live!/audio:1",
                                        frequent: true,
                                        filter: function (card, player) { return get.suit(card) == "heart" },
                                        trigger: {
                                            player: ["useCardAfter", "respondAfter"],
                                        },
                                        content: function () {
                                            "step 0"
                                            event.n = player.maxHp - player.hp;
                                            if (event.n == 0)
                                                event.n = 1;
                                            event.flag = 0;
                                            "step 1"
                                            switch (event.flag) {
                                                case 0:
                                                    player.chooseControl("伤害", "回复", "摸牌", "取消").set("choiceList", ["①弃置一张手牌，然后对任意一名角色造成一点伤害", "②回复一点体力", "③摸两张牌然后弃置一张牌"]).ai = function (event, player) {
                                                        if (player.hp > 2 && player.countCards('h') > 2)
                                                            return "伤害";
                                                        if (player.hp < 2)
                                                            return "回复";
                                                        return "摸牌";
                                                    }
                                                    break;
                                                case 1:
                                                    player.chooseControl("回复", "摸牌", "取消").set("choiceList", ["①回复一点体力", "②摸两张牌然后弃置一张牌"]).ai = function (event, player) {
                                                        if (player.hp < 2)
                                                            return "回复";
                                                        return "摸牌";
                                                    }
                                                    break;
                                                case 2:
                                                    player.chooseControl("伤害", "摸牌", "取消").set("choiceList", ["①弃置一张手牌，然后对任意一名角色造成一点伤害", "②摸两张牌然后弃置一张牌"]).ai = function (event, player) {
                                                        if (player.hp > 2 && player.countCards('h') > 2)
                                                            return "伤害";
                                                        return "摸牌";
                                                    }
                                                    break;
                                                case 4:
                                                    player.chooseControl("伤害", "回复", "取消").set("choiceList", ["①弃置一张手牌，然后对任意一名角色造成一点伤害", "②回复一点体力"]).ai = function (event, player) {
                                                        if (player.hp > 2 && player.countCards('h') > 0)
                                                            return "伤害";
                                                        return "回复";
                                                    }
                                                    break;
                                                case 3:
                                                    player.chooseControl("摸牌", "取消").set("choiceList", ["摸两张牌然后弃置一张牌"]).ai = function (event, player) {
                                                        return "摸牌";
                                                    }
                                                    break;
                                                case 5:
                                                    player.chooseControl("回复", "取消").set("choiceList", ["回复一点体力"]).ai = function (event, player) {
                                                        return "回复";
                                                    }
                                                    break;
                                                case 6:
                                                    player.chooseControl("伤害", "取消").set("choiceList", ["弃置一张手牌，然后对任意一名角色造成一点伤害"]).ai = function (event, player) {
                                                        if (player.countCards('h') > 0)
                                                            return "伤害";
                                                        return "取消";
                                                    }
                                                    break;
                                            }
                                            "step 2"
                                            if (result.control == "伤害") {
                                                player.chooseToDiscard(true, "he");
                                                event.flag += 1;
                                                event.goto(3);
                                            }
                                            else if (result.control == "回复") {
                                                player.recover();
                                                event.flag += 2;
                                                event.goto(5);
                                            }
                                            else if (result.control == "摸牌") {
                                                player.draw(2);
                                                player.chooseToDiscard(true, "he");
                                                event.flag += 4;
                                                event.goto(5);
                                            }
                                            else event.finish();
                                            "step 3"
                                            player.chooseTarget("请选择你要造成伤害的目标", 1, 1, true).ai = function (target) {
                                                return -1 * ai.get.attitude(player, target);
                                            }
                                            event.goto(4);
                                            "step 4"
                                            event.target = result.targets[0];
                                            event.target.damage();
                                            event.goto(5);
                                            "step 5"
                                            event.n--;
                                            if (event.n <= 0)
                                                event.finish();
                                            else event.goto(1);
                                        }
                                    },
                                },
                                ai: {
                                    effect: {
                                        player: function (card, player) {
                                            if (get.suit(card) == "heart")
                                                return 1;
                                        }
                                    }
                                },
                                group: ["love_a", "love_b"]
                            },
                            "xiejin": {
                                audio: "ext:Love Live!/audio:1",
                                enable: "phaseUse",
                                usable: 1,
                                position: "he",
                                filterCard: lib.filter.cardDiscardable,
                                selectCard: [1, Infinity],
                                check: function (card) {
                                    return 8 - get.value(card);
                                },
                                ai: {
                                    order: 1,
                                    result: { player: 2 },
                                    threaten: 3
                                },
                                content: function () {
                                    "step 0"
                                    function ht(arr) {           //清点数组中♥牌数量
                                        n = 0;
                                        for (card of arr) {
                                            if (get.suit(card) == "heart")
                                                n++;
                                        }
                                        return n;
                                    }
                                    event.ht = ht(cards);
                                    player.discard(cards);
                                    "step 1"
                                    event.mp = cards.length + event.ht;
                                    player.draw(event.mp);
                                    if (!event.ht)
                                        event.finish();
                                    "step 2"
                                    event.qp = cards.length - event.ht;
                                    if (event.qp < 1)
                                        event.qp = 1;
                                    player.chooseTarget("请选择你要令其摸" + cards.length + "弃" + event.qp + "的目标", 1, function (card, player, target) { return player != target; }).ai = function (target) {
                                        return ai.get.attitude(player, target);
                                    }
                                    "step 3"
                                    if (result.bool) {
                                        event.target = result.targets[0];
                                        event.target.draw(cards.length);
                                    }
                                    else event.finish();
                                    "step 5"
                                    if (result.bool)
                                        event.target.chooseToDiscard(event.qp, true, "he");
                                    event.finish();
                                },
                            },
                            "弓道": {
                                forced: true,
                                mod: {
                                    targetInRange: function (card) { return true },
                                },
                            },
                            "wunv": {
                                forced: true,
                                mark: true,
                                marktext: "希",
                                intro: {
                                    content: "拥有#个「希」",
                                },
                                init: function (player) {
                                    player.storage.wunv = 5;
                                    player.unmarkSkill("wunv");
                                    player.syncStorage("wunv");
                                    game.log(player, "获得了", 5, "个「希」");
                                },
                                subSkill: {
                                    a: {
                                        audio: "ext:Love Live!/audio:2",
                                        forced: true,
                                        trigger: { player: "damageBegin4" },
                                        content: function () {
                                            "step 0"
                                            var num = trigger.num;
                                            if (num <= player.storage.wunv) {
                                                game.log(player, "弃置了", num, "个「希」");
                                                player.storage.wunv -= num;
                                                player.syncStorage("wunv");
                                            }
                                            else if (player.storage.wunv) {
                                                game.log(player, "弃置了", player.storage.wunv, "个「希」");
                                                player.storage.wunv = 0;
                                                player.syncStorage("wunv");
                                                player.loseHp();
                                            }
                                            else player.loseHp();
                                            "step 1"
                                            trigger.cancel();
                                        },
                                    },
                                    b: {
                                        audio: "ext:Love Live!/audio:1",
                                        forced: true,
                                        filter: function (event, player) {
                                            return !player.storage.wunv;
                                        },
                                        trigger: { player: "phaseJieshuBegin" },
                                        content: function () {
                                            player.loseHp();
                                        },
                                    },
                                },
                                group: ["wunv_a", "wunv_b"]
                            },
                            "zhanbu": {
                                audio: "ext:Love Live!/audio:3",
                                preHidden: true,
                                trigger: { global: ["phaseZhunbeiBefore", "judgeBefore"] },
                                filter: function (event, player) { return player.storage.wunv; },
                                content: function () {
                                    "step 0"
                                    if (player.storage.wunv >= 3)
                                        player.chooseControl("弃置一个", "弃置两个", "弃置三个", "取消");
                                    else if (player.storage.wunv > 1)
                                        player.chooseControl("弃置一个", "弃置两个", "取消");
                                    else player.chooseControl("弃置一个", "取消");
                                    "step 1"
                                    switch (result.control) {
                                        case "弃置一个": event.num = 1; break;
                                        case "弃置两个": event.num = 2; break;
                                        case "弃置三个": event.num = 3; break;
                                        case "取消": event.num = 0;
                                    }
                                    game.log(player, "弃置了", event.num, "个「希」");
                                    player.storage.wunv -= event.num;
                                    player.syncStorage("wunv");

                                    var num = 2 * event.num;
                                    var cards = get.cards(num);
                                    game.cardsGotoOrdering(cards);
                                    var next = player.chooseToMove();
                                    next.set('list', [
                                        ['牌堆顶', cards],
                                        ['牌堆底'],
                                    ]);
                                    next.set('prompt', '占卜：点击将牌移动到牌堆顶或牌堆底');
                                    next.processAI = function (list) {
                                        var cards = list[0][1], player = _status.event.player;
                                        var top = [];
                                        var judges = player.getCards('j');
                                        var stopped = false;
                                        if (!player.hasWuxie()) {
                                            for (var i = 0; i < judges.length; i++) {
                                                var judge = get.judge(judges[i]);
                                                cards.sort(function (a, b) {
                                                    return judge(b) - judge(a);
                                                });
                                                if (judge(cards[0]) < 0) {
                                                    stopped = true; break;
                                                }
                                                else {
                                                    top.unshift(cards.shift());
                                                }
                                            }
                                        }
                                        var bottom;
                                        if (!stopped) {
                                            cards.sort(function (a, b) {
                                                return get.value(b, player) - get.value(a, player);
                                            });
                                            while (cards.length) {
                                                if (get.value(cards[0], player) <= 5) break;
                                                top.unshift(cards.shift());
                                            }
                                        }
                                        bottom = cards;
                                        return [top, bottom];
                                    }
                                    "step 2"
                                    var top = result.moved[0];
                                    var bottom = result.moved[1];
                                    top.reverse();
                                    for (var i = 0; i < top.length; i++) {
                                        ui.cardPile.insertBefore(top[i], ui.cardPile.firstChild);
                                    }
                                    for (i = 0; i < bottom.length; i++) {
                                        ui.cardPile.appendChild(bottom[i]);
                                    }
                                    player.popup(get.cnNumber(top.length) + '上' + get.cnNumber(bottom.length) + '下');
                                    game.log(player, '将' + get.cnNumber(top.length) + '张牌置于牌堆顶');
                                    game.updateRoundNumber();
                                    game.delayx();
                                },
                            },
                            "taluo": {
                                audio: "ext:Love Live!/audio:3",
                                trigger: { global: "phaseDrawBefore" },
                                derivation: ["taluo_jieshi", "taluo_xiaoguo", "taluo_shijie", "taluo_shijieni"],
                                content: function () {
                                    "step 0"
                                    event.cards = get.cards(3);
                                    player.showCards(event.cards);
                                    "step 1"
                                    event.n = 0;
                                    event.hs = [0, 0, 0];
                                    event.js = null;
                                    event.flag = 0;
                                    var i = 0;
                                    for (card of event.cards) {
                                        event.hs[i] = get.suit(card);
                                        event.n += get.number(card);
                                        if (i < 2)
                                            switch (event.hs[i]) {
                                                case "heart": event.flag = event.flag * 10 + 1; break;
                                                case "diamond": event.flag = event.flag * 10 + 2; break;
                                                case "spade": event.flag = event.flag * 10 + 3; break;
                                                case "club": event.flag = event.flag * 10 + 4;
                                            }
                                        else
                                            switch (event.hs[i]) {
                                                case "heart": event.flag = event.flag * 10; break;
                                                case "diamond": event.flag = event.flag * 10; break;
                                                case "spade": event.flag = event.flag * 10 + 1; break;
                                                case "club": event.flag = event.flag * 10 + 1;
                                            }
                                        i++;
                                    }
                                    switch (event.flag) {
                                        case 310: event.js = "愚者"; break;
                                        case 311: event.js = "魔术师"; break;
                                        case 120: event.js = "女祭司"; break;
                                        case 130: event.js = "女皇"; break;
                                        case 131: event.js = "皇帝"; break;
                                        case 121: event.js = "教皇"; break;
                                        case 110: event.js = "恋人"; break;
                                        case 331: event.js = "战车"; break;
                                        case 111: event.js = "力量"; break;
                                        case 330: event.js = "隐者"; break;
                                        case 210: event.js = "命运之轮"; break;
                                        case 211: event.js = "正义"; break;
                                        case 440: event.js = "倒吊者"; break;
                                        case 441: event.js = "死神"; break;
                                        case 430: event.js = "节制"; break;
                                        case 431: event.js = "恶魔"; break;
                                        case 341: event.js = "塔"; break;
                                        case 340: event.js = "星星"; break;
                                        case 221: event.js = "月亮"; break;
                                        case 220: event.js = "太阳"; break;
                                        case 320: event.js = "审判"; break;
                                        case 321: event.js = "世界";
                                    }
                                    if (event.js)
                                        if (trigger.player == player) {
                                            switch (event.hs[2]) {
                                                case "heart":
                                                case "spade":
                                                    event.js = event.js + "逆位";
                                                    break;
                                                case "diamond":
                                                case "club":
                                                    event.js = event.js + "正位";
                                            }
                                        }
                                        else {
                                            switch (event.hs[2]) {
                                                case "heart":
                                                case "spade":
                                                    event.js = event.js + "正位";
                                                    break;
                                                case "diamond":
                                                case "club":
                                                    event.js = event.js + "逆位";
                                            }
                                        }
                                    else {
                                        event.flag = 0;
                                        event.goto(4);
                                    }
                                    "step 2"
                                    player.chooseControl(event.js, "取消").set("prompt", "选择“" + event.js + "”以发动对应的效果</br>或者选“取消”并弃置三张牌");
                                    "step 3"
                                    event.flag = 1;
                                    event.num = 0;
                                    event.num1 = 0;
                                    if (result.control != "取消") {
                                        player.popup(event.js);
                                        game.log(player, "发动了“", event.js, "”的效果");
                                    }
                                    switch (result.control) {
                                        case "取消": event.flag = 0; break;
                                        case "愚者正位":
                                            event.num = trigger.player.countCards("h");//所有手牌数
                                            event.num1 = trigger.player.countCards("h", { suit: "heart" });//手牌中♥️数
                                            trigger.player.chooseToDiscard(event.num, true, "h");
                                            trigger.player.draw(event.num);
                                            trigger.player.recover(event.num1);
                                            break;
                                        case "愚者逆位":
                                            event.num = trigger.player.countCards("he");//所有牌数
                                            trigger.player.chooseToDiscard(event.num, true, "he");
                                            trigger.player.addSkill("taluo_mp");
                                            trigger.player.storage.ta = event.num;
                                            trigger.player.markSkillCharacter("taluo", player, "愚者逆位", "回合开始时，摸" + trigger.player.storage.ta + "张牌");
                                            break;
                                        case "魔术师正位":
                                            player.draw();
                                            game.log(player, "获得了2个「希」");
                                            player.storage.wunv += 2;
                                            player.syncStorage("wunv");
                                            trigger.player.draw();
                                            break;
                                        case "魔术师逆位":
                                            player.chooseToDiscard(1, true, "he");
                                            trigger.player.chooseToDiscard(3, true, "he");
                                            break;
                                        case "女祭司正位":
                                            trigger.player.draw(4);
                                            trigger.player.chooseToDiscard(4, true, "h");
                                            break;
                                        case "女祭司逆位":
                                            trigger.player.draw(1);
                                            trigger.player.markSkillCharacter("taluo", player, "女祭司逆位", "回合结束时，弃置两张牌。若牌不足，失去一点体力");
                                            trigger.player.addSkill("taluo_qp");
                                            break;
                                        case "女皇正位":
                                            trigger.player.draw("visible");
                                            trigger.player.addSkill("taluo_yichu");
                                            event.prompt = result.control;
                                            trigger.player.addTempSkill("taluo_nvhuang", { player: "phaseJieshu" });
                                            event.goto(5);
                                            break;
                                        case "女皇逆位":
                                            trigger.player.draw("visible");
                                            trigger.player.addSkill("taluo_yichu");
                                            event.prompt = result.control;
                                            trigger.player.addTempSkill("taluo_nvhuangni", { player: "phaseJieshu" });
                                            event.goto(5);
                                            break;
                                        case "皇帝正位":
                                            trigger.player.chooseTarget("请选择一名其他角色，你对其造成一点伤害并获得其一张手牌", 1, function (card, player, target) { return player != target; }).ai = function (target) {
                                                return -1 * ai.get.attitude(trigger.player, target);
                                            }
                                            event.goto(6);
                                            break;
                                        case "皇帝逆位":
                                            trigger.player.markSkillCharacter("taluo", player, "皇帝逆位", "造成伤害时，防止此伤害");
                                            trigger.player.addSkill("taluo_yichu");
                                            trigger.player.addTempSkill("taluo_huangdini", { player: "phaseJieshu" });
                                            break;
                                        case "教皇正位":
                                            trigger.player.draw(2);
                                            trigger.player.recover();
                                            break;
                                        case "教皇逆位":
                                            trigger.player.draw(2);
                                            r = trigger.player.countCards("h", { color: "red" });
                                            b = trigger.player.countCards("h", { color: "black" });//这里不是真正的ai手牌颜色数，但差不多就行了，懒得搞
                                            trigger.player.chooseControl("红色", "黑色").set("prompt", "请选择一种颜色，然后弃置全部该颜色的手牌").ai = function (r, b) {
                                                if (r > b)
                                                    return "黑色";
                                                return "红色";
                                            }
                                            event.goto(7);
                                            break;
                                        case "恋人正位":
                                            trigger.player.chooseTarget("请选择一名其他角色，你与其各摸一张牌并回复一点体力", 1, function (card, player, target) { return player != target; }).ai = function (target) {
                                                return ai.get.attitude(trigger.player, target);
                                            }
                                            event.goto(8);
                                            break;
                                        case "恋人逆位":
                                            event.num = trigger.player.countCards("h");
                                            trigger.player.chooseToDiscard(event.num, true, "h");
                                            trigger.player.draw(event.num);
                                            trigger.player.addSkill("taluo_yichu");
                                            trigger.player.markSkillCharacter("taluo", player, "恋人逆位", "计算与其他角色距离时+1");
                                            trigger.player.addTempSkill("taluo_lianrenni", { player: "phaseJieshu" });
                                            break;
                                        case "战车正位":
                                            trigger.player.draw(2);
                                            trigger.player.chooseControl("弃置一张", "弃置两张", "弃置三张").ai = function () {
                                                var n = game.countPlayer(function (current) {
                                                    if (ai.get.attitude(trigger.player, current) < 0)
                                                        return 1;
                                                });
                                                if (n < 2)
                                                    return "弃置一张";
                                                else if (n > 2)
                                                    return "弃置三张";
                                                else return "弃置两张";
                                            }
                                            event.goto(9);
                                            break;
                                        case "战车逆位":
                                            event.num = trigger.player.countCards("e");
                                            if (event.num >= 2)
                                                trigger.player.chooseControl("弃置装备区内所有牌", "失去一点体力并弃置" + event.num + "张手牌").ai = function (player) {
                                                    if (trigger.player.hp == 1)
                                                        return "弃置装备区内所有牌";
                                                }
                                            else if (event.num) {
                                                event.num = 2;
                                                trigger.player.chooseControl("弃置装备区内所有牌", "失去一点体力并弃置2张手牌").ai = function (player) {
                                                    if (trigger.player.hp == 1)
                                                        return "弃置装备区内所有牌";
                                                }
                                            }
                                            else event.num = 2;
                                            event.goto(11);
                                            break;
                                        case "力量正位":
                                            trigger.player.addSkill("taluo_yichu");
                                            trigger.player.markSkillCharacter("taluo", player, "力量正位", "造成伤害时，令此伤害+1");
                                            trigger.player.addTempSkill("taluo_liliang", { player: "phaseJieshu" });
                                            break;
                                        case "力量逆位":
                                            trigger.player.addSkill("taluo_yichu");
                                            trigger.player.markSkillCharacter("taluo", player, "力量逆位", "造成伤害时，须弃置与此伤害等量的牌，否则防止此伤害");
                                            trigger.player.addTempSkill("taluo_liliangni", { player: "phaseJieshu" });
                                            break;
                                        case "隐者正位":
                                            trigger.player.draw(2);
                                            trigger.player.addSkill("taluo_yichu");
                                            trigger.player.markSkillCharacter("taluo", player, "隐者正位", "手牌上限+2");
                                            trigger.player.addTempSkill("taluo_yinzhe", { player: "phaseJieshu" });
                                            break;
                                        case "隐者逆位":
                                            trigger.player.addSkill("taluo_yichu");
                                            trigger.player.markSkillCharacter("taluo", player, "隐者逆位", "不能使用或打出除装备牌外的牌");
                                            trigger.player.addTempSkill("taluo_yinzheni", { player: "phaseJieshu" });
                                            break;
                                        case "命运之轮正位":
                                            trigger.player.markSkillCharacter("taluo", player, "命运之轮正位", "进行一个额外回合");
                                            trigger.player.addSkill("taluo_mingyunzhilun");
                                            break;
                                        case "命运之轮逆位":
                                            trigger.player.skip("phaseUse");
                                            trigger.player.loseHp();
                                            break;
                                        case "正义正位":
                                            trigger.player.storage.zhu = player;
                                            trigger.player.storage.ta = 0;
                                            trigger.player.addSkill("taluo_yichu");
                                            trigger.player.markSkillCharacter("taluo", player, "正义正位", "造成伤害时，" + get.translation(player) + "可令此伤害+1");
                                            trigger.player.addTempSkill("taluo_zhengyi", { player: "phaseJieshu" });
                                            trigger.player.addTempSkill("taluo_zhengyi2", { player: "phaseJieshu" });
                                            break;
                                        case "正义逆位":
                                            trigger.player.addSkill("taluo_yichu");
                                            trigger.player.markSkillCharacter("taluo", player, "正义逆位", "造成伤害时，失去与此伤害等量的体力");
                                            trigger.player.addTempSkill("taluo_zhengyini", { player: "phaseJieshu" });
                                            break;
                                        case "倒吊者正位":
                                            if (trigger.player.countCards("h") > 1)
                                                trigger.player.chooseControl("失去一点体力", "弃置两张手牌").ai = function () {
                                                    return "弃置两张手牌";
                                                }
                                            else trigger.player.chooseControl("失去一点体力");
                                            event.goto(12);
                                            break;
                                        case "倒吊者逆位":
                                            trigger.player.loseHp();
                                            trigger.player.chooseToDiscard(2, true, "he");
                                            break;
                                        case "死神正位":
                                            trigger.player.loseHp();
                                            trigger.player.draw(3);
                                            trigger.player.addSkill("taluo_yichu");
                                            trigger.player.markSkillCharacter("taluo", player, "死神正位", "可以额外使用一张【杀】");
                                            trigger.player.addSkill("taluo_sishen");
                                            break;
                                        case "死神逆位":
                                            trigger.player.loseHp(2);
                                            trigger.player.draw(2);
                                            break;
                                        case "节制正位":
                                            trigger.player.addSkill("taluo_yichu");
                                            trigger.player.markSkillCharacter("taluo", player, "节制正位", "回合结束时摸三张牌");
                                            trigger.player.addTempSkill("taluo_jiezhi", { player: "phaseDrawEnd" });
                                            trigger.player.addTempSkill("taluo_jiezhi2", { player: "phaseJieshu" });
                                            game.log(player, "获得了1个「希」");
                                            player.storage.wunv++;
                                            player.syncStorage("wunv");
                                            break;
                                        case "节制逆位":
                                            trigger.player.addSkill("taluo_yichu");
                                            trigger.player.markSkillCharacter("taluo", player, "节制逆位", "每使用或打出一张牌，弃置一张牌");
                                            trigger.player.addTempSkill("taluo_jiezhini", { player: "phaseJieshu" });
                                            break;
                                        case "恶魔正位":
                                            trigger.player.draw(3);
                                            trigger.player.addSkill("taluo_yichu");
                                            trigger.player.markSkillCharacter("taluo", player, "恶魔正位", "出牌阶段结束时，弃置全部手牌并失去一点体力");
                                            trigger.player.addTempSkill("taluo_emo", { player: "phaseJieshu" });
                                            break;
                                        case "恶魔逆位":
                                            trigger.player.addSkill("taluo_yichu");
                                            trigger.player.markSkillCharacter("taluo", player, "恶魔逆位", "造成伤害后，摸一张牌");
                                            trigger.player.addTempSkill("taluo_emoni", { player: "phaseJieshu" });
                                            break;
                                        case "塔正位":
                                            trigger.player.damage(2, "thunder", "nosource", "nocard");
                                            trigger.player.chooseToDiscard(2, true, "he");
                                            break;
                                        case "塔逆位":
                                            var num = trigger.player.countCards("h");
                                            trigger.player.chooseToDiscard(num, true, "h");
                                            trigger.player.damage(1, player, "nocard");
                                            break;
                                        case "星星正位":
                                            trigger.player.addSkill("taluo_yichu");
                                            trigger.player.markSkillCharacter("taluo", player, "星星正位", "回合结束时摸三张牌");
                                            trigger.player.addTempSkill("taluo_star", { player: "phaseJieshu" });
                                            break;
                                        case "星星逆位":
                                            trigger.player.chooseControl("摸一张牌", "摸两张牌", "摸三张牌").ai = function () { return "摸一张牌"; }
                                            trigger.player.addSkill("taluo_yichu");
                                            trigger.player.addTempSkill("taluo_starni", { player: "phaseJieshu" });
                                            trigger.player.addTempSkill("taluo_starni4", { player: "phaseJieshu" });
                                            trigger.player.storage.ta_shanghai = 0;
                                            event.goto(14);
                                            break;
                                        case "月亮正位":
                                            trigger.player.draw(2);
                                            trigger.player.storage.ta = 0;
                                            trigger.player.addTempSkill("taluo_moon", { player: "phaseJieshu" });
                                            trigger.player.addTempSkill("taluo_moon0", { player: "phaseJieshu" });
                                            break;
                                        case "月亮逆位":
                                            trigger.player.chooseToDiscard(1, true, "he");
                                            trigger.player.storage.ta = 1;
                                            trigger.player.addTempSkill("taluo_moonni", { player: "phaseJieshu" });
                                            trigger.player.addTempSkill("taluo_moon0", { player: "phaseJieshu" });
                                            break;
                                        case "太阳正位":
                                            trigger.player.draw(2);
                                            trigger.player.recover();
                                            trigger.player.storage.ta = 1;
                                            trigger.player.addSkill("taluo_yichu");
                                            trigger.player.markSkillCharacter("taluo", player, "太阳正位", "使用或打出红色牌时摸一张牌");
                                            trigger.player.addTempSkill("taluo_sun", { player: "phaseJieshu" });
                                            break;
                                        case "太阳逆位":
                                            trigger.player.storage.ta = 0;
                                            trigger.player.addSkill("taluo_yichu");
                                            trigger.player.markSkillCharacter("taluo", player, "太阳逆位", "使用或打出红色牌时，弃置一张牌</br>计算与其他角色的距离时+1");
                                            trigger.player.addTempSkill("taluo_sun", { player: "phaseJieshu" });
                                            trigger.player.addTempSkill("taluo_lianrenni", { player: "phaseJieshu" });
                                            break;
                                        case "审判正位":
                                            trigger.player.recover();
                                            trigger.player.addSkill("taluo_yichu");
                                            trigger.player.markSkillCharacter("taluo", player, "审判正位", "造成伤害时，获得受到伤害的角色的一张牌");
                                            trigger.player.addTempSkill("taluo_shenpan", { player: "phaseJieshu" });
                                            if (event.n == 21)
                                                trigger.player.gainMaxHp();
                                            break;
                                        case "审判逆位":
                                            trigger.player.loseHp();
                                            trigger.player.markSkillCharacter("taluo", player, "审判逆位", "使用牌时无法指定其他角色为目标");
                                            trigger.player.addSkill("taluo_shenpanni");
                                            if (event.n == 21)
                                                trigger.player.loseMaxHp();
                                            break;
                                        case "世界正位":
                                            if (trigger.player.hasSkill("taluo_shijieni"))
                                                trigger.player.removeSkill("taluo_shijieni");
                                            else trigger.player.addSkill("taluo_shijie");
                                            break;
                                        case "世界逆位":
                                            if (trigger.player.hasSkill("taluo_shijie"))
                                                trigger.player.removeSkill("taluo_shijie");
                                            else trigger.player.addSkill("taluo_shijieni");
                                    }
                                    "step 4"
                                    game.cardsDiscard(event.cards);
                                    if (event.flag) {
                                        game.log(player, "获得了1个「希」");
                                        player.storage.wunv++;
                                        player.syncStorage("wunv");
                                    }
                                    else player.chooseToDiscard(3, true, "he");
                                    event.finish();
                                    "step 5"//女皇正、逆位的展示卡牌颜色判断
                                    if (get.color(result[0]) == "red") {
                                        trigger.player.storage.ta = 1;
                                        event.yanse = "红";
                                    }
                                    else {
                                        trigger.player.storage.ta = 0;
                                        event.yanse = "黑";
                                    }
                                    if (event.prompt == "女皇正位")
                                        trigger.player.markSkillCharacter("taluo", player, event.prompt, "使用或打出" + event.yanse + "色牌时，摸一张牌");
                                    else trigger.player.markSkillCharacter("taluo", player, event.prompt, "不能使用或打出" + event.yanse + "色牌");
                                    event.goto(4);
                                    "step 6"//皇帝正位的造成伤害及获得手牌
                                    event.target = result.targets[0];
                                    event.target.damage(1, trigger.player, "nocard");
                                    trigger.player.gainPlayerCard("h", event.target, true);
                                    event.goto(4);
                                    "step 7"//教皇逆位的展示手牌及弃牌
                                    event.cardarr = trigger.player.getCards("h");
                                    trigger.player.showCards(event.cardarr);
                                    if (result.control == "红色")
                                        event.cardarr = trigger.player.getCards("h", { color: "red" });
                                    else event.cardarr = trigger.player.getCards("h", { color: "black" });
                                    trigger.player.discard(event.cardarr);
                                    event.goto(4);
                                    "step 8"//恋人正位的摸牌及回复
                                    trigger.player.draw();
                                    result.targets[0].draw();
                                    trigger.player.recover();
                                    result.targets[0].recover();
                                    event.goto(4);
                                    "step 9"
                                    switch (result.control) {
                                        case "弃置一张": event.num = 1; break;
                                        case "弃置两张": event.num = 2; break;
                                        case "弃置三张": event.num = 3;
                                    }
                                    trigger.player.chooseToDiscard(event.num, true, "he");
                                    if (event.num > game.countPlayer() - 1)
                                        event.num = game.countPlayer() - 1;
                                    if (event.num - 1)
                                        x = "们各";
                                    else x = "";
                                    trigger.player.chooseTarget("请选择" + event.num + "名角色，你对他" + x + "造成一点伤害", event.num, function (card, player, target) { return player != target; }).ai = function (target) {
                                        return -1 * ai.get.attitude(trigger.player, target);
                                    }
                                    "step 10"
                                    for (x of result.targets) {
                                        x.damage(1, trigger.player, "nocard");
                                    }
                                    event.goto(4);
                                    "step 11"
                                    if (result.control == "弃置装备区内所有牌")
                                        trigger.player.chooseToDiscard(event.num, true, "e");
                                    else {
                                        trigger.player.chooseToDiscard(event.num, true, "h");
                                        trigger.player.loseHp();
                                    }
                                    event.goto(4);
                                    "step 12"
                                    if (result.control == "失去一点体力")
                                        trigger.player.loseHp();
                                    else trigger.player.chooseToDiscard(2, true, "h");
                                    trigger.player.chooseTarget("请选择一名角色，令他回复一点体力并摸三张牌", 1, true).ai = function (target) {
                                        return ai.get.attitude(trigger.player, target);
                                    }
                                    "step 13"
                                    result.targets[0].recover();
                                    result.targets[0].draw(3);
                                    event.goto(4);
                                    "step 14"
                                    var num;
                                    switch (result.control) {
                                        case "摸一张牌":
                                            num = 1;
                                            trigger.player.addTempSkill("taluo_starni1", { player: "phaseJieshu" });
                                            break;
                                        case "摸两张牌":
                                            num = 2;
                                            trigger.player.addTempSkill("taluo_starni2", { player: "phaseJieshu" });
                                            break;
                                        case "摸三张牌":
                                            num = 3;
                                            trigger.player.addTempSkill("taluo_starni3", { player: "phaseJieshu" });
                                    }
                                    trigger.player.markSkillCharacter("taluo", player, "星星逆位", "计算与其他角色的距离时+" + num + "</br>手牌上限改为本回合造成的伤害数");
                                    trigger.player.storage.ta = num;
                                    trigger.player.draw(num);
                                    event.goto(4);
                                },
                            },
                            "taluo_mp": {//实现愚者逆位回合开始摸牌效果
                                charlotte: true,
                                forced: true,
                                trigger: { player: "phaseBefore" },
                                content: function () {
                                    "step 0"
                                    player.draw(player.storage.ta);
                                    "step 1"
                                    player.unmarkSkill("taluo");
                                    player.removeSkill("taluo_mp");
                                },
                            },
                            "taluo_qp": {//实现女祭司逆位回合结束弃牌效果
                                charlotte: true,
                                forced: true,
                                trigger: { player: "phaseJieshu" },
                                content: function () {
                                    "step 0"
                                    event.n = player.countCards("he");
                                    player.chooseToDiscard(2, true, "he");
                                    "step 1"
                                    if (event.n < 2)
                                        player.loseHp();
                                    player.unmarkSkill("taluo");
                                    player.removeSkill("taluo_qp");
                                    event.finish();
                                }
                            },
                            "taluo_nvhuang": {//实现女皇正位使用或打出某颜色牌时摸牌效果
                                charlotte: true,
                                forced: true,
                                filter: function (card, player) {
                                    if (player.storage.ta)
                                        return get.color(card) == "red";
                                    return get.color(card) == "black";
                                },
                                trigger: {
                                    player: ["useCardAfter", "respondAfter"],
                                },
                                content: function () {
                                    player.draw();
                                }
                            },
                            "taluo_nvhuangni": {//实现女皇逆位不能使用或打出某颜色牌效果
                                charlotte: true,
                                forced: true,
                                mod: {
                                    "cardEnabled": function (card, player) {
                                        if (player.storage.ta)
                                            return get.color(card) == "black";
                                        return get.color(card) == "red";
                                    },
                                },
                            },
                            "taluo_huangdini": {//实现皇帝逆位无法造成伤害效果
                                charlotte: true,
                                forced: true,
                                trigger: { source: "damageBegin" },
                                content: function () {
                                    trigger.cancel();
                                }
                            },
                            "taluo_lianrenni": {//实现恋人逆位+距离效果
                                charlotte: true,
                                forced: true,
                                mod: {
                                    globalFrom: function (from, to, distance) {
                                        return distance + 1;
                                    },
                                }
                            },
                            "taluo_liliang": {//实现力量正位+伤害效果
                                charlotte: true,
                                forced: true,
                                trigger: { source: "damageBegin1" },
                                content: function () {
                                    trigger.num++;
                                }
                            },
                            "taluo_liliangni": {//实现力量逆位造成伤害时弃牌效果
                                charlotte: true,
                                forced: true,
                                trigger: { source: "damageBegin4" },
                                content: function () {
                                    "step 0"
                                    player.chooseToDiscard("弃置" + trigger.num + "张牌，或防止此次伤害", trigger.num, "he");
                                    "step 1"
                                    if (!result.bool)
                                        trigger.cancel();
                                    event.finish();
                                }
                            },
                            "taluo_yinzhe": {//实现隐者正位手牌上限+2效果
                                charlotte: true,
                                forced: true,
                                mod: {
                                    maxHandcard: function (player, num) { return num + 2; }
                                }
                            },
                            "taluo_yinzheni": {//实现隐者逆位只能用装备牌效果
                                charlotte: true,
                                forced: true,
                                mod: {
                                    "cardEnabled": function (card, player) { return get.type(card) == "equip"; }
                                }
                            },
                            "taluo_mingyunzhilun": {//实现命运之轮正位额外回合效果
                                charlotte: true,
                                forced: true,
                                trigger: { player: ["phaseAfter", "phaseCancelled"], },
                                popup: false,
                                audio: false,
                                content: function () {
                                    player.unmarkSkill("taluo");
                                    player.removeSkill("taluo_mingyunzhilun");
                                    player.insertPhase();
                                }
                            },
                            "taluo_zhengyi": {//实现正义正位选择是否+伤害效果
                                charlotte: true,
                                forced: true,
                                trigger: { source: "damageBegin1" },
                                content: function () {
                                    "step 0"
                                    event.player = player.storage.zhu;
                                    event.player.chooseControl("确定", "取消").set("prompt", "令此伤害+1");
                                    "step 1"
                                    if (result.control == "确定")
                                        trigger.num++;
                                    event.finish();
                                }
                            },
                            "taluo_zhengyi2": {//实现正义正位选人摸牌效果
                                charlotte: true,
                                forced: true,
                                trigger: { source: "damageAfter", player: "phaseJieshuBefore" },
                                content: function () {
                                    "step 0"
                                    if (trigger.num) {
                                        player.storage.ta += trigger.num;
                                        event.finish();
                                    }
                                    else if (player.storage.ta)
                                        player.storage.zhu.chooseTarget("请选择一名角色，令其摸" + player.storage.ta + "张牌", 1, true);
                                    else event.finish();
                                    "step 1"
                                    result.targets[0].draw(player.storage.ta);
                                }
                            },
                            "taluo_zhengyini": {//实现正义逆位造成伤害时失去体力效果
                                charlotte: true,
                                forced: true,
                                trigger: { source: "damageBegin4" },
                                content: function () {
                                    player.loseHp(trigger.num);
                                }
                            },
                            "taluo_sishen": {//实现死神正位多用一张【杀】效果
                                charlotte: true,
                                forced: true,
                                trigger: { player: "shaAfter" },
                                content: function () {
                                    player.getStat().card.sha--;
                                    player.removeSkill("taluo_sishen");
                                }
                            },
                            "taluo_jiezhi": {//实现节制正位少摸牌效果
                                charlotte: true,
                                forced: true,
                                trigger: { player: "phaseDrawBegin" },
                                content: function () {
                                    trigger.num--;
                                }
                            },
                            "taluo_jiezhi2": {//实现节制正位效果回合结束摸牌
                                charlotte: true,
                                forced: true,
                                trigger: { player: "phaseJieshuBegin" },
                                content: function () {
                                    player.draw(3);
                                }
                            },
                            "taluo_jiezhini": {//实现节制逆位使用或打出牌时弃牌效果
                                charlotte: true,
                                forced: true,
                                trigger: { player: ["useCardAfter", "respondAfter"], },
                                content: function () {
                                    player.chooseToDiscard(1, true, "he");
                                }
                            },
                            "taluo_emo": {//实现恶魔正位出牌阶段结束弃牌并失去体力效果
                                charlotte: true,
                                forced: true,
                                trigger: { player: "phaseUseAfter" },
                                content: function () {
                                    var num = player.countCards("h");
                                    player.chooseToDiscard(num, true, "h");
                                    player.loseHp();
                                }
                            },
                            "taluo_emoni": {//实现恶魔逆位造成伤害摸牌效果
                                charlotte: true,
                                forced: true,
                                trigger: { source: "damageAfter" },
                                content: function () {
                                    player.draw();
                                }
                            },
                            "taluo_star": {//实现星星正位回合结束摸牌效果
                                charlotte: true,
                                forced: true,
                                trigger: { player: "phaseJieshuBefore" },
                                content: function () {
                                    player.draw(3);
                                }
                            },
                            "taluo_starni": {//实现星星逆位手牌上限改变
                                charlotte: true,
                                forced: true,
                                mod: {
                                    maxHandcard: function (player, num) { return player.storage.ta_shanghai; }
                                }
                            },
                            "taluo_starni1": {//实现星星逆位+距离
                                charlotte: true,
                                forced: true,
                                mod: {
                                    globalFrom: function (from, to, distance) { return distance + 1; },
                                }
                            },
                            "taluo_starni2": {//实现星星逆位+距离
                                charlotte: true,
                                forced: true,
                                mod: {
                                    globalFrom: function (from, to, distance) { return distance + 2; },
                                }
                            },
                            "taluo_starni3": {//实现星星逆位+距离
                                charlotte: true,
                                forced: true,
                                mod: {
                                    globalFrom: function (from, to, distance) { return distance + 3; },
                                }
                            },
                            "taluo_starni4": {//星星逆位统计伤害
                                charlotte: true,
                                forced: true,
                                trigger: { source: "damageAfter" },
                                content: function () {
                                    player.storage.ta_shanghai += trigger.num;
                                }
                            },
                            "taluo_moon": {//月亮正位标记及描述
                                charlotte: true,
                                forced: true,
                                mark: true,
                                marktext: "月",
                                intro: {
                                    name: "月亮正位",
                                    content: "拥有#个「月」</br>每当「月」达到两个，失去一点体力并弃置两个「月」",
                                },
                                init: function (player) {
                                    player.storage.taluo_moon = 0;
                                    player.unmarkSkill("taluo_moon");
                                    player.syncStorage("taluo_moon");
                                },
                            },
                            "taluo_moonni": {//月亮逆位标记及描述
                                charlotte: true,
                                forced: true,
                                mark: true,
                                marktext: "月",
                                intro: {
                                    name: "月亮逆位",
                                    content: "拥有#个「月」</br>每当「月」达到两个，摸一张牌并弃置两个「月」",
                                },
                                init: function (player) {
                                    player.storage.taluo_moonni = 0;
                                    player.unmarkSkill("taluo_moonni");
                                    player.syncStorage("taluo_moonni");
                                },
                            },
                            "taluo_moon0": {//实现月亮正、逆位实际效果
                                charlotte: true,
                                forced: true,
                                trigger: { player: "loseAfter", },
                                content: function () {
                                    "step 0"
                                    game.log(player, "获得了", trigger.num, "个「月」标记");
                                    if (player.storage.ta)
                                        player.storage.taluo_moonni += trigger.num;
                                    else player.storage.taluo_moon += trigger.num;
                                    if (player.storage.ta)
                                        player.syncStorage("taluo_moonni");
                                    else player.syncStorage("taluo_moon");
                                    "step 1"
                                    if (player.storage.ta) {
                                        if (player.storage.taluo_moonni < 2)
                                            event.finish();
                                        else {
                                            game.log(player, "弃置了两个「月」标记");
                                            player.storage.taluo_moonni -= 2;
                                            player.syncStorage("taluo_moonni");
                                            player.draw();
                                        }
                                    }
                                    else {
                                        if (player.storage.taluo_moon < 2)
                                            event.finish();
                                        else {
                                            game.log(player, "弃置了两个「月」标记");
                                            player.storage.taluo_moon -= 2;
                                            player.syncStorage("taluo_moon");
                                            player.loseHp();
                                        }
                                    }
                                    event.redo();
                                }
                            },
                            "taluo_sun": {//实现太阳正、逆位的摸牌或弃牌效果
                                charlotte: true,
                                forced: true,
                                trigger: { player: ["useCardAfter", "respondAfter"], },
                                filter: function (card, player) { return get.color(card) == "red"; },
                                content: function () {
                                    if (player.storage.ta)
                                        player.draw();
                                    else player.chooseToDiscard(1, true, "he");
                                }
                            },
                            "taluo_shenpan": {//实现审判正位造成伤害获得目标的牌
                                charlotte: true,
                                forced: true,
                                trigger: { source: "damageAfter" },
                                content: function () {
                                    player.gainPlayerCard("he", trigger.player, true);
                                }
                            },
                            "taluo_shenpanni": {//实现审判逆位只能对自己用牌
                                charlotte: true,
                                forced: true,
                                group: ["taluo_shenpanni_a", "taluo_shenpanni_b"],
                                subSkill: {
                                    a: {
                                        charlotte: true,
                                        forced: true,
                                        mod: {
                                            playerEnabled: function (card, player, target) {
                                                if (player != target && (!get.info(card) || !get.info(card).singleCard || !ui.selected.targets.length)) return false;
                                            },
                                        },
                                    },
                                    b: {
                                        charlotte: true,
                                        forced: true,
                                        trigger: { player: "phaseJieshu" },
                                        content: function () {
                                            player.unmarkSkill("taluo");
                                            player.removeSkill("taluo_shenpanni");
                                        }
                                    }
                                },
                            },
                            "taluo_shijie": {
                                forced: true,
                                group: ["taluo_shijie_a", "taluo_shijie_b"],
                                subSkill: {
                                    a: {
                                        forced: true,
                                        trigger: { player: "phaseUseBegin" },
                                        content: function () {
                                            num = player.hp;
                                            if (num > 0)
                                                player.draw(num);
                                            if (num > 1)
                                                player.chooseToDiscard(num - 1, true, "he");
                                        }
                                    },
                                    b: {
                                        forced: true,
                                        mod: {
                                            maxHandcard: function (player, num) { return player.maxHp; }
                                        }
                                    }

                                },

                            },
                            "taluo_shijieni": {
                                forced: true,
                                trigger: { player: "phaseDrawAfter" },
                                content: function () {
                                    event.cards = player.getCards("h");
                                    player.showCards(event.cards);
                                    player.chooseToDiscard(1, true, "he");
                                }
                            },
                            "taluo_yichu": {
                                forced: true,
                                charlotte: true,
                                trigger: { player: "phaseJieshu" },
                                content: function () {
                                    player.unmarkSkill("taluo");
                                    player.removeSkill("taluo_yichu");
                                }
                            },
                            "taluo_jieshi": {},
                            "taluo_xiaoguo": {},
                            "rinmiao": {
                                derivation: ["rin", "miao"],
                                audio: "ext:Love Live!/audio:2",
                                init2: function (player) {
                                    game.broadcastAll(function (player) {
                                        player._rinmiao_mark = player.mark('凛', { content: "拥有技能〖凛酱〗" });
                                    }, player);
                                    player.addAdditionalSkill("rinmiao", "rin");
                                },
                                onremove: function (player) {
                                    game.broadcastAll(function (player) {
                                        if (player._rinmiao_mark) {
                                            player._rinmiao_mark.delete();
                                            delete player._rinmiao_mark;
                                        }
                                    }, player);
                                    player.removeAdditionalSkill('rinmiao');
                                },
                                trigger: { player: "damageAfter", source: "damageAfter" },
                                forced: true,
                                filter: function (event, player) {
                                    return player._rinmiao_mark && player._rinmiao_mark.name == "凛" && player.storage.xingkong >= player.hp;
                                },
                                content: function () {
                                    game.broadcastAll(function (player) {
                                        if (!player._rinmiao_mark) return;
                                        player._rinmiao_mark.name = "喵";
                                        player._rinmiao_mark.skill = "喵";
                                        player._rinmiao_mark.firstChild.innerHTML = "喵";
                                        player._rinmiao_mark.info.content = "拥有技能〖猫娘〗";
                                    }, player);
                                    player.addAdditionalSkill("rinmiao", "miao");
                                },
                                group: 'rinmiao2'
                            },
                            "rinmiao2": {
                                audio: "rinmiao",
                                trigger: { player: "phaseZhunbeiBefore" },
                                filter: function (event, player) {
                                    return player._rinmiao_mark && player._rinmiao_mark.name == "喵" && player.countCards("he");
                                },
                                direct: true,
                                content: function () {
                                    "step 0"
                                    player.chooseToDiscard("he", "凛喵：是否弃置一张牌将标记变为“凛”？").ai = function () { return player.hp > 1 && player.countCards("h") > 2; }
                                    "step 1"
                                    if (result.bool) {
                                        player.logSkill("rinmiao");
                                        game.broadcastAll(function (player) {
                                            if (!player._rinmiao_mark) return;
                                            player._rinmiao_mark.name = "凛";
                                            player._rinmiao_mark.skill = "凛";
                                            player._rinmiao_mark.firstChild.innerHTML = "凛";
                                            player._rinmiao_mark.info.content = "拥有技能〖凛酱〗";
                                        }, player);
                                        player.addAdditionalSkill("rinmiao", "rin");
                                    }
                                }
                            },
                            "rin": {
                                audio: "ext:Love Live!/audio:3",
                                forced: true,
                                trigger: { source: "damageAfter" },
                                content: function () {
                                    "step 0"
                                    game.log(player, "获得了", trigger.num, "个「星」");
                                    player.storage.xingkong += trigger.num;
                                    player.syncStorage("xingkong");
                                    player.chooseTarget("请选择一名角色，令其摸" + player.storage.xingkong + "张牌");
                                    "step 1"
                                    if (result.bool)
                                        result.targets[0].draw(player.storage.xingkong);
                                    event.finish();
                                }
                            },
                            "miao": {
                                forced: true,
                                audio: "ext:Love Live!/audio:2",
                                trigger: { player: "damageAfter" },
                                content: function () {
                                    "step 0"
                                    if (trigger.num > player.storage.xingkong) {
                                        game.log(player, "弃置了", player.storage.xingkong, "个「星」");
                                        player.storage.xingkong = 0;
                                        player.syncStorage("xingkong");
                                    }
                                    else {
                                        game.log(player, "弃置了", trigger.num, "个「星」");
                                        player.storage.xingkong -= trigger.num;
                                        player.syncStorage("xingkong");
                                    }
                                    if (player.storage.xingkong > 0)
                                        player.chooseTarget("请选择一名角色，令其摸" + 2 * player.storage.xingkong + "张牌");
                                    else if (!player.storage.xingkong_hp) {
                                        player.chooseTarget("请选择一名角色，令其回复一点体力", 1);
                                        event.goto(2);
                                    }
                                    else event.finish();
                                    "step 1"
                                    if (result.bool)
                                        result.targets[0].draw(2 * player.storage.xingkong);
                                    event.finish();
                                    "step 2"
                                    if (result.bool) {
                                        result.targets[0].recover();
                                        player.storage.xingkong_hp++;
                                    }
                                    event.finish();
                                }
                            },
                            "xingkong": {
                                forced: true,
                                mark: true,
                                marktext: "星",
                                intro: { content: "拥有#个「星」", },
                                init: function (player) {
                                    player.storage.xingkong = 0;
                                    player.storage.xingkong_sha = 0;
                                    player.storage.xingkong_hp = 0;
                                    player.unmarkSkill("xingkong");
                                    player.syncStorage("xingkong");
                                },
                                group: ["xingkong_a", "xingkong_b"],
                                subSkill: {
                                    a: {
                                        audio: "ext:Love Live!/audio:2",
                                        sub: true,
                                        forced: true,
                                        trigger: { player: ["damageAfter", "shaAfter"] },
                                        filter: function (event, player) { return player.storage.xingkong_sha < player.storage.xingkong && player.getStat().card.sha == 1 },
                                        content: function () {
                                            player.getStat().card.sha--;
                                            player.storage.xingkong_sha++;
                                        }
                                    },
                                    b: {
                                        audio: "ext:Love Live!/audio:2",
                                        sub: true,
                                        forced: true,
                                        trigger: { player: "phaseJieshuBegin" },
                                        filter: function (event, player) { return !player.storage.xingkong },
                                        content: function () {
                                            var Y = player.maxHp - player.hp;
                                            player.draw(Y + 1);
                                        }
                                    },
                                },
                            },
                            "rin0_qk": {
                                forced: true,
                                trigger: { global: "phaseJieshu" },
                                content: function () {
                                    player.storage.xingkong_hp = 0;
                                    player.storage.xingkong_sha = 0;
                                }
                            },
                            "kuang": {
                                audio: "ext:Love Live!/audio:1",
                                enable: "phaseUse",
                                usable: 1,
                                content: function () {
                                    "step 0"
                                    event.yy = [];
                                    event.wyy = [];
                                    event.players = game.players.filter(x => x != player);
                                    "step 1"
                                    event.target = event.players.shift();
                                    event.player0 = player;
                                    if (event.target.countCards("he"))
                                        event.target.chooseControl("蜜柑", "沉默").set("prompt", "选择“蜜柑”摸一张牌，选择“沉默”须弃置一张牌。").ai = function (event, player) {
                                            var a = ai.get.attitude(event.target, event.player0);
                                            var b = Math.random();
                                            if (a < -5) {
                                                if (b < 0.15)
                                                    return "蜜柑";
                                                else return "沉默";
                                            }
                                            else if (a < 0) {
                                                if (b < 0.35)
                                                    return "蜜柑";
                                                else return "沉默";
                                            }
                                            else if (a < 5) {
                                                if (b < 0.85)
                                                    return "蜜柑";
                                                else return "沉默";
                                            }
                                            else return "蜜柑";
                                        }
                                    else event.target.chooseControl("蜜柑").set("prompt", "选择“蜜柑”摸一张牌（你没有牌，故无法选择“沉默”）");
                                    "step 2"
                                    if (result.control == "蜜柑") {
                                        event.yy.push(event.target);
                                    }
                                    else event.wyy.push(event.target);
                                    if (event.players.length)
                                        event.goto(1);
                                    "step 3"
                                    if (event.yy.length)
                                        game.log(event.yy, "#g应援了", player);
                                    if (event.wyy.length)
                                        game.log(event.wyy, "#y未应援", player);
                                    for (var x of event.yy) {
                                        x.draw();
                                        x.popup("蜜柑", "wood");
                                    }
                                    for (x of event.wyy) {
                                        x.chooseToDiscard(1, true, "he");
                                        x.popup("沉默", "fire");
                                    }
                                    "step 4"
                                    var n = game.countPlayer() - 1;
                                    game.log(player, "获得了", event.yy.length, "个「柑」");
                                    player.storage.mikan += event.yy.length;
                                    player.syncStorage("mikan");
                                    if (event.wyy.length > n / 2 && event.yy.length)
                                        event.goto(6);
                                    else if (event.yy.length >= n / 2 && event.wyy.length || !event.yy.length)
                                        event.goto(5);
                                    else event.finish();
                                    "step 5"
                                    if (event.wyy.length)
                                        player.chooseControl("伤害", "取消").set("choiceList", ["对" + get.translation(event.wyy) + "各造成一点伤害并失去一点体力"]);
                                    event.goto(7);
                                    "step 6"
                                    player.chooseControl("获得" + event.yy.length + "个「柑」", "取消").set("choiceList", ["获得" + event.yy.length + "个「柑」并失去一点体力"]);
                                    "step 7"
                                    if (result.control == "伤害") {
                                        for (x of event.wyy) {
                                            x.damage(1, player, "nocard");
                                        }
                                        player.loseHp();
                                    }
                                    else if (result.control == "取消") { }
                                    else if (result.control) {
                                        game.log(player, "获得了", event.yy.length, "个「柑」");
                                        player.storage.mikan += event.yy.length;
                                        player.syncStorage("mikan");
                                        player.loseHp();
                                    }
                                    event.finish();
                                },
                                ai: {
                                    order: 12,
                                    result: {
                                        player: 3,
                                    },
                                }
                            },
                            "mikan": {
                                audio: "ext:Love Live!/audio:1",
                                mark: true,
                                marktext: "柑",
                                intro: { content: "拥有#个「柑」", },
                                init: function (player) {
                                    player.storage.mikan = 0;
                                    player.unmarkSkill("mikan");
                                    player.syncStorage("mikan");
                                },
                                trigger: { player: "damageAfter" },
                                filter: function (event, player) { return player.storage.mikan },
                                content: function () {
                                    event.num = Math.min(Math.ceil(player.storage.mikan / 2), 6);
                                    game.log(player, "弃置了", event.num, "个「柑」");
                                    player.storage.mikan -= event.num;
                                    player.syncStorage("mikan");
                                    if (event.num > 0)
                                        player.draw();
                                    if (event.num > 1)
                                        player.recover();
                                    if (event.num > 2)
                                        trigger.source.chooseToDiscard(1, true, "he");
                                    if (event.num > 3)
                                        player.gainPlayerCard("h", event.num - 3, trigger.source, true);
                                }
                            },
                            "kxq": {
                                forced: true,
                                trigger: { player: "phaseZhunbeiBegin" },
                                content: function () {
                                    "step 0"
                                    event.num = player.storage.mikan;
                                    var shiqu = player.maxHp - player.hp;
                                    if (event.num)
                                        event.goto(2);
                                    else {
                                        game.log(player, "获得了", 2 * shiqu + 1, "个「柑」");
                                        player.storage.mikan += 2 * shiqu + 1;
                                        player.syncStorage("mikan");
                                        player.chooseTarget("请选择至多" + (shiqu + 1) + "名角色，令其摸一张牌", [1, shiqu + 1]);
                                    }
                                    "step 1"
                                    var i;
                                    for (i of result.targets) {
                                        i.draw();
                                    }
                                    event.finish();
                                    "step 2"
                                    game.log(player, "弃置了", event.num, "个「柑」");
                                    player.storage.mikan -= event.num;
                                    player.syncStorage("mikan");
                                    player.storage.kxq = event.num;
                                    player.markSkillCharacter("kxq", player, "空心晴", "回合结束时，摸" + event.num + "张牌");
                                    player.addSkill("kxq_mp");
                                    event.finish();
                                }
                            },
                            "kxq_mp": {//实现空心晴回合结束摸牌效果
                                charlotte: true,
                                forced: true,
                                trigger: { player: "phaseJieshu" },
                                content: function () {
                                    player.draw(player.storage.kxq);
                                    player.unmarkSkill("kxq");
                                    player.removeSkill("kxq_mp");
                                },
                            },
                            "qiandi": {
                                audio: "ext:Love Live!/audio:1",
                                Zhuskill: true,
                                filter: function (event, player) { return player.isZhu && game.countPlayer(function (current) { return current.group == "shui" }) - 1; },
                                trigger: { player: "phaseJieshu" },
                                content: function () {
                                    "step 0"
                                    event.players = game.players.filter(x => x.group == "shui" && x != player);
                                    "step 1"
                                    event.target = event.players.shift();
                                    event.player0 = player;
                                    if (event.target.countCards("h")) {
                                        event.target.chooseControl("①", "②", "③").set("choiceList", ["令" + get.translation(event.player0) + "获得一个「柑」", "交给" + get.translation(event.player0) + "一张手牌", "令" + get.translation(event.player0) + "摸两张牌然后弃置一张牌"]).ai = function () {
                                            var a = Math.random();
                                            if (a < 1 / 3)
                                                return "①";
                                            else if (a < 2 / 3)
                                                return "②";
                                            else return "③";
                                        }
                                    }
                                    else {
                                        event.target.chooseControl("①", "③").set("choiceList", ["令" + get.translation(event.player0) + "获得一个「柑」", "令" + get.translation(event.player0) + "摸两张牌然后弃置一张牌"]).ai = function () {
                                            var a = Math.random();
                                            if (a < 0.5)
                                                return "①";
                                            else return "③";
                                        }
                                    }
                                    "step 2"
                                    switch (result.control) {
                                        case "①":
                                            game.log(event.player0, "获得了1个「柑」");
                                            event.player0.storage.mikan++;
                                            event.player0.syncStorage("mikan");
                                            break;
                                        case "②":
                                            event.target.chooseCard("请选择要交给" + get.translation(event.player0) + "的手牌", 1, "h");
                                            event.goto(5);
                                            break;
                                        case "③":
                                            event.player0.draw(2);
                                            event.player0.chooseToDiscard(1, true, "h");
                                    }
                                    "step 3"
                                    player.chooseControl("是", "否").set("prompt", "是否令" + get.translation(event.target) + "摸一张牌");
                                    "step 4"
                                    if (result.control == "是")
                                        event.target.draw();
                                    if (event.players.length)
                                        event.goto(1);
                                    else event.finish();
                                    "step 5"
                                    event.target.$give(result.cards.length, player);
                                    player.gain(result.cards, event.target,);
                                    event.goto(3);
                                }
                            },
                            "dd0": {
                                charlotte: true,
                                forced: true,
                                trigger: { global: "dieBegin" },
                                content: function () {
                                    if (player.storage.dd.includes(trigger.player))
                                        player.storage.dd = player.storage.dd.filter(i => i != trigger.player);
                                }
                            },
                            "dd": {
                                init: function (player) {
                                    player.storage.dd = [];
                                    player.addSkill("dd0");
                                },
                                forced: true,
                                group: "dd2",
                                trigger: { global: "gameDrawBegin" },
                                content: function () {
                                    "step 0"
                                    if (game.players.length - player.storage.dd.length > 2)
                                        player.chooseTarget("选择两名其他角色，然后你成为她们的粉丝", 2, true, function (event, player, target) { return player != target && !player.storage.dd.includes(target); });
                                    else if (game.players.length - player.storage.dd.length > 1)
                                        player.chooseTarget("选择一名其他角色，然后你成为她的粉丝", 1, true, function (event, player, target) { return player != target && !player.storage.dd.includes(target); });
                                    else event.finish();
                                    "step 1"
                                    player.storage.dd.push(result.targets[0]);
                                    result.targets[0].markSkillCharacter("dd", player, "DD", get.translation(result.targets[0]) + "是" + get.translation(player) + "的偶像");
                                    game.log(result.targets[0], "成为了", player, "的偶像");
                                    if (game.players.length > 2) {
                                        player.storage.dd.push(result.targets[1]);
                                        result.targets[1].markSkillCharacter("dd", player, "DD", get.translation(result.targets[1]) + "是" + get.translation(player) + "的偶像");
                                        game.log(result.targets[1], "成为了", player, "的偶像");
                                    }
                                }
                            },
                            "dd2": {
                                forced: true,
                                trigger: { player: "phaseBefore" },
                                filter: function (event, player) { return player.storage.dd.length < game.players.length - 1; },
                                content: function () {
                                    "step 0"
                                    player.logSkill("dd");
                                    player.chooseTarget("选择一名不为你偶像的其他角色，然后你成为她的粉丝", 1, true, function (event, player, target) { return player != target && !player.storage.dd.includes(target); });
                                    "step 1"
                                    player.storage.dd.push(result.targets[0]);
                                    result.targets[0].markSkillCharacter("dd", player, "DD", get.translation(result.targets[0]) + "是" + get.translation(player) + "的偶像");
                                    game.log(result.targets[0], "成为了", player, "的偶像");
                                }
                            },
                            "houqin0": {
                                forced: true,
                                trigger: { global: ["damageBegin", "phaseBefore", "phaseJieshuBefore"] },
                                content: function () {
                                    if (trigger.source)
                                        player.storage.source = trigger.source;
                                    else {
                                        player.storage.hq_flag = false;
                                    }
                                    player.storage.p = trigger.player;
                                }
                            },
                            "houqin00": {
                                trigger: { global: "phaseZhunbei" },
                                filter: function (event, player) { return player._houqin_mark && player._houqin_mark.name == "后" && player.storage.dd.includes(player.storage.p) && player.countCards("he"); },
                                prompt: '<i style="font-size:15px;">' + '<b>' + "你可以弃置一张牌，令其摸三张牌然后弃置两张牌。若如此做，其本回合造成伤害时，你可以选择一项：①摸一张牌；②失去一点体力使此伤害+1。然后若你已受伤，你可以将你的标记翻面为“勤”。",
                                content: function () {
                                    player.chooseToDiscard(1, true, "he");
                                    trigger.player.draw(3);
                                    trigger.player.chooseToDiscard(2, true, "he");
                                    player.storage.hq_flag = true;
                                }
                            },
                            "houqin": {
                                init2: function (player) {
                                    game.broadcastAll(function (player) {
                                        player._houqin_mark = player.mark('后', { content: "拥有技能：你的偶像的回合开始时，你可以弃置一张牌，令其摸三张牌然后弃置两张牌。若如此做，其本回合造成伤害时，你可以选择一项：①摸一张牌；②失去一点体力使此伤害+1。然后若你已受伤，你可以将你的标记翻面为“勤”。" });
                                    }, player);
                                    player.addSkill("houqin0");
                                    player.addSkill("houqin00");
                                    player.storage.hq_flag = false;
                                },
                                onremove: function (player) {
                                    game.broadcastAll(function (player) {
                                        if (player._houqin_mark) {
                                            player._houqin_mark.delete();
                                            delete player._houqin_mark;
                                        }
                                    }, player);
                                },
                                group: "houqin2",
                                audio: "ext:Love Live!/audio:2",
                                trigger: { global: "damageBegin1" },
                                filter: function (event, player) {
                                    return player.storage.hq_flag;
                                },
                                content: function () {
                                    "step 0"
                                    player.chooseControl("摸牌", "增伤").set("prompt", "请选择一项：①摸一张牌；②失去一点体力，令此伤害+1。").ai = function (event, player) {
                                        if (player.hp < 3 || player.countCards("h") < 1 || ai.get.attitude(player, trigger.player))
                                            return "摸牌";
                                        return "增伤";
                                    }
                                    "step 1"
                                    if (result.control == "摸牌")
                                        player.draw();
                                    else {
                                        player.loseHp();
                                        trigger.num++;
                                    }
                                    "step 2"
                                    if (player.hp < player.maxHp && player._houqin_mark.name == "后")
                                        player.chooseControl("是", "否").set("prompt", "是否将标记翻面为“勤”？");
                                    else event.finish();
                                    "step 3"
                                    if (result.control == "是") {
                                        game.broadcastAll(function (player) {
                                            if (!player._houqin_mark) return;
                                            player._houqin_mark.name = "勤";
                                            player._houqin_mark.skill = "勤";
                                            player._houqin_mark.firstChild.innerHTML = "勤";
                                            player._houqin_mark.info.content = "拥有技能：你的偶像的回合结束时，你可以选择一项：①弃置一张牌，摸X张牌，然后弃置X张手牌。若此时你仍有手牌，你可以展示所有手牌，若颜色均相同，你摸两张牌；若花色均相同，你额外摸与亮出的牌等量的牌。X为场上是你的偶像的角色数。②将你的标记翻面为“后”并摸两张牌";
                                        }, player);
                                    }
                                }
                            },
                            "houqin2": {
                                prompt: get.prompt("后勤"),
                                audio: "ext:Love Live!/audio:2",
                                trigger: { global: "phaseJieshu" },
                                filter: function (event, player) {
                                    return player._houqin_mark && player._houqin_mark.name == "勤" && player.storage.dd.includes(player.storage.p);
                                },
                                content: function () {
                                    "step 0"
                                    var num = player.storage.dd.length;
                                    player.logSkill("houqin");
                                    player.chooseControl("①", "②").set("choiceList", ["弃置一张牌，摸" + num + "张牌，然后弃置" + num + "张手牌。若此时你仍有手牌，你可以展示所有手牌，若颜色均相同，你摸两张牌；若花色均相同，你额外摸与亮出的牌等量的牌。", "将标记翻面为“后”并摸两张牌。"]);
                                    "step 1"
                                    if (result.control == "②")
                                        event.goto(4);
                                    else {
                                        var num = player.storage.dd.length;
                                        player.chooseToDiscard(1, true, "he");
                                        player.draw(num);
                                        player.chooseToDiscard(num, true, "h");
                                    }
                                    "step 2"
                                    event.hs = [];
                                    event.ys = [];
                                    if (player.countCards("h")) {
                                        event.cards = player.getCards("h");
                                        player.showCards(event.cards);
                                    }
                                    else event.finish();
                                    game.log(event.cards);
                                    "step 3"
                                    for (i of event.cards) {
                                        event.hs.push(get.suit(i));
                                        event.ys.push(get.color(i));
                                    }
                                    game.log(event.hs, event.ys);
                                    event.flag = event.hs[0];
                                    game.log(event.flag);
                                    for (i of event.hs) {
                                        if (i != event.flag) {
                                            event.flag = 0;
                                            break;
                                        }
                                    }
                                    game.log(event.flag);
                                    if (event.flag)
                                        event.flag = 2;
                                    else {
                                        event.flag = event.ys[0];
                                        for (i of event.ys) {
                                            if (i != event.flag) {
                                                event.flag = 0;
                                                break;
                                            }
                                        }
                                    }
                                    game.log(event.flag);
                                    if (event.flag)
                                        player.draw(2);
                                    if (event.flag == 2)
                                        player.draw(event.cards.length);
                                    event.finish();
                                    "step 4"
                                    game.broadcastAll(function (player) {
                                        if (!player._houqin_mark) return;
                                        player._houqin_mark.name = "后";
                                        player._houqin_mark.skill = "后";
                                        player._houqin_mark.firstChild.innerHTML = "后";
                                        player._houqin_mark.info.content = "拥有技能：你的偶像的回合开始时，你可以弃置一张牌，令其摸三张牌然后弃置两张牌。若如此做，其本回合造成伤害时，你可以选择一项：①摸一张牌；②失去一点体力使此伤害+1。然后若你已受伤，你可以将你的标记翻面为“勤”。";
                                    }, player);
                                    player.draw(2);
                                }
                            },
                            "jidong": {
                                forced: true,
                                trigger: { player: "damageBegin4", source: "damageBegin4" },
                                filter: function (event, player) { return player.storage.dd.includes(player.storage.source) || player.storage.dd.includes(player.storage.p); },
                                content: function () {
                                    trigger.cancel();
                                    if (player.storage.source)
                                        player.storage.source.draw(trigger.num);
                                    else player.draw(trigger.num);
                                }
                            },
                            "fs": {
                                unique: true,
                                juexibgji: true,
                                mark: true,
                                skillAnimation: true,
                                forced: true,
                                trigger: { player: "phaseBefore" },
                                filter: function (event, player) { return player.storage.dd.length == game.players.length - 1 },
                                content: function () {
                                    player.awakenSkill("fs");
                                    player.gainMaxHp();
                                    player.recover();
                                    player.removeSkill("jidong");
                                }
                            },
                            "yuge0": {
                                forced: true,
                                trigger: { global: "gameDrawBefore" },
                                filter: function (event, player) { return player.isZhu },
                                content: function () {
                                    player.logSkill("yuge");
                                    var players = game.players.filter(x => x.group == "hong" && x != player);
                                    game.log(players);
                                    for (i of players) {
                                        player.storage.dd.push(i);
                                        i.markSkillCharacter("dd", player, "DD", get.translation(i) + "是" + get.translation(player) + "的偶像");
                                    }
                                }
                            },
                            "yuge": {
                                init: function (player) {
                                    player.addSkill("yuge0");
                                },
                                Zhuskill: true,
                                prompt: '<i style="font-size:15px;">' + '<b>' + "你可以失去一点体力，然后选择一名你的偶像，若其为虹咲势力角色，你摸X张牌，目标角色摸两张牌；否则，你对其造成X/2点伤害并摸X/2张牌（向上取整），然后其不再是你的偶像。X为场上虹咲势力角色的数量。",
                                prompt2: "",
                                trigger: { player: "phaseJieshu" },
                                filter: function (event, player) { return player.isZhu },
                                content: function () {
                                    "step 0"
                                    player.loseHp();
                                    player.chooseTarget(1, true, function (event, player, target) { return player.storage.dd.includes(target); });
                                    "step 1"
                                    var num = game.countPlayer(function (current) { return current.group == "hong"; });
                                    var target = result.targets[0];
                                    if (target.group == "hong") {
                                        player.draw(num);
                                        target.draw(2);
                                    }
                                    else {
                                        target.damage(Math.ceil(num / 2), player, "nocard");
                                        player.storage.dd = player.storage.dd.filter(x => x != target);
                                        target.unmarkSkill("dd");
                                        game.log(target, "不再是", player, "的偶像");
                                        player.draw(Math.ceil(num / 2));
                                    }
                                    event.finish();
                                }
                            },
                            "zhumeng": {
                                forced: true,
                                mark: true,
                                marktext: "梦",
                                group: ["zhumeng2", "zhumeng3"],
                                intro: {
                                    markcount:"expansion",
                                    mark:function (dialog,content,player) {
                                        var content = player.getExpansions("zhumeng");
                                        if (content && content.length)
                                            dialog.addAuto(content);   
                                    },
                                    content: function (content, player) {
                                        var content = player.getExpansions("zhumeng");
                                        if (content && content.length)
                                            return get.translation(content);
                                    }
                                },
                                init: function (player){
                                    player.storage.meng = 0;
                                    player.syncStorage(player.storage.meng);
                                },
                                trigger:{global:"gameDrawBefore"},
                                content: function () {
                                    "step 0"
                                    player.chooseControl("亮出三张", "亮出四张", "亮出五张").set("prompt", "请选择〖逐梦〗要亮出的牌数");
                                    "step 1"
                                    var num;
                                    switch (result.control) {
                                        case "亮出三张": num = 3;player.storage.meng = 1; break;
                                        case "亮出四张": num = 4;player.storage.meng = 1.5; break;
                                        case "亮出五张": num = 5;player.storage.meng = 2;
                                    }
                                    var cards = get.cards(num);
                                    player.showCards(cards);                                  
                                    player.syncStorage(player.storage.meng);
                                    player.addToExpansion(cards, player, "give").gaintag.add("zhumeng");
                                }
                            },
                            "zhumeng2": {
                                unique: true,
                                frequent: true,
                                trigger: { player: "phaseZhunbei" },
                                filter: function(event,player){
                                    return player.countCards("h");
                                },
                                content:function(){
                                    "step 0"
                                    var n = Math.max(1, player.storage.tingyan);
                                    player.chooseCard("请选择要交换的手牌",[1,n],"h");
                                    "step 1"
                                    var next = player.chooseToMove("逐梦：是否交换「梦」和手牌？");
                                    var meng = player.getExpansions("zhumeng");
                                    event.sp = result.cards; 
                                    next.set("list",[
                                        [get.translation(player)+"（你）的「梦」",meng],
                						["你要交换的手牌",event.sp],
                					]);
                					next.set("filterMove",function(from,to){
                						return typeof to!="number";
                					});
                					"step 2"
                					if(result.bool){
                                        var pushs = result.moved[0], gains = result.moved[1];
                                        pushs.removeArray(player.getExpansions("zhumeng"));
                						gains.removeArray(player.getCards("h"));
                                        if(!pushs.length||pushs.length!=gains.length) return;
                                        player.addToExpansion(pushs,player,"giveAuto").gaintag.add("zhumeng");
                						game.log(player,"将",pushs,"作为「梦」置于武将牌上");
                						player.gain(gains,"gain2");
                                    }
                                    if(player.storage.meng == 1.5)
                                        player.draw(2);
                                    else{
                                        player.draw(player.storage.meng);
                                        event.finish();
                                    }
                                    "step 3"
                                    if(player.storage.meng == 1.5)
                                        player.chooseToDiscard(1, true, "h");
                                    event.finish();
                                }
                            },
                            "zhumeng3": {
                                forced:true,
                                trigger:{player:"damageAfter"},
                                content:function(){
                                    "step 0"
                                    var lei = Math.max(1, player.storage.tingyan);
                                    if (lei < player.getExpansions("zhumeng").length){
                                        if(player.storage.meng==1.5)
                                            player.chooseControl("交换", "标记").set("choiceList", ["用至多" + lei + "张手牌替换相同数量的「梦」，然后摸两张牌并弃置一张手牌", "获得一个「泪」标记"]);
                                        else player.chooseControl("交换", "标记").set("choiceList", ["用至多" + lei + "张手牌替换相同数量的「梦」并摸"+player.storage.meng+"张牌", "获得一个「泪」标记"]);
                                        }
                                    else event.goto(2);
                                    "step 1"
                                    if (result.control == "标记") {
                                        player.storage.tingyan++;
                                        game.log(player,"获得了一个「泪」");
                                        player.syncStorage(player.storage.tingyan);
                                        event.finish();
                                    } 
                                    "step 2"
                                    player.useSkill("zhumeng2");
                                }
                            },
                            "tingyan":{
                                forced:true,
                                mark:true,
                                marktext:"泪",
                                group:"tingyan2",
                                intro:{
                                    content: "拥有#个「泪」",
                                },
                                init:function(player){
                                    player.storage.tingyan=0;
                                    player.unmarkSkill("tingyan");
                                    player.syncStorage("tingyan");
                                },
                                trigger:{player:"damageBegin4"},
                                content:function(){
                                    "step 0"
                                    if(trigger.source)
                                        trigger.source.chooseToDiscard(player.storage.tingyan,"he").set("prompt","弃置"+player.storage.tingyan+"张牌，或防止此伤害。此伤害结算完成后你可以摸等量的牌。");
                                    "step 1"
                                    if(result.bool){
                                        trigger.source.storage.tingmp=player.storage.tingyan;
                                        trigger.source.addSkill("tingyan_mp");
                                    }
                                    else trigger.cancel();
                                }
                            },
                            "tingyan_mp": {//实现挺颜伤害来源摸牌效果
                                charlotte:true,
                                forced:true,
                                trigger:{source:"damageAfter"},
                                content:function(){
                                    player.draw(player.storage.tingmp);
                                    player.removeSkill("tingyan_mp");
                                },
                            },
                            "tingyan2":{
                                forced:true,
                            },
                            "bielei":{
                                derivation:["jiajiao","bts"],
                            },
                            "kaihua":{
                                derivation:["dwy","awakening"],
                            },
                            "jiajiao":{},
                            "bts":{},
                            "dwy":{},
                            "awakening":{
                                derivation:["jiajiao","bts"],
                            },
						}
					};
					if (lib.device || lib.node) {
						for (var i in lovelive.character) {
							lovelive.character[i][4].push("ext:Love Live!/image/character/" + i + ".jpg");
						}
					}
					else {
						for (var i in lovelive.character) {
							lovelive.character[i][4].push("db:extension-Love Live!/image/character:" + i + ".jpg");
						}
					}
					return lovelive;
				});
				lib.config.all.characters.push("lovelive");
				if (!lib.config.characters.contains("lovelive")) lib.config.characters.push("lovelive");
				lib.translate["lovelive_character_config"] = "Love Live!";
			}
		},help:{},config:{},package:{
    character:{
        character:{
        },
        translate:{
        },
    },
    card:{
        card:{
        },
        translate:{
        },
        list:[],
    },
    skill:{
        skill:{
        },
        translate:{
        },
    },
    intro:"v0.9.09</br>支持联机（具体方式请参考无名杀联机相关教程）</br>近期更新内容：</br>①增加了一名新武将：“高咲侑”；</br>②补全全部学园偶像的介绍；</br>③优化了〖弓道〗的ai逻辑</br>④修复了一些bug并进行了一些优化。",
    author:"仲村由理天下第一!",
    diskURL:"",
    forumURL:"",
    version:"0.9.09",
},files:{"character":[],"card":[],"skill":[]}}})