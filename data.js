
        var dataset = [
            ["3☆魔王 巴尔",     "领袖", "火属性", "魔族", "中体型",        "攻击者", "爆发力" ],
            ["3☆魔王 撒旦",     "领袖", "暗属性", "魔族", "中体型",        "守护者", "生存力", "回击" ],
            ["3☆精灵王 赛露西亚","领袖","风属性", "亚人", "中体型", "巨乳", "辅助者", "爆发力" ],
            ["3☆矮人王 兰儿",   "领袖", "水属性", "亚人", "小体型", "贫乳", "攻击者",  "爆发力" ],
            ["3☆法斯公主 露露",  "领袖", "风属性", "人类",                 "治疗者", "回复" ],
            ["3☆魔王 伊布力斯",  "领袖", "光属性", "魔族",                "攻击者", "生存力", "回复"],
            ["3☆KS-VIII 魔人偶","领袖"],
            ["3☆圣米勒 天使长",  "领袖"],
            
            ["2☆史莱姆女王 娜芙菈菈",    "精锐", "风属性", "魔族", "守护者","回复","中体型","巨乳","保护","防御","生存力" ],
            ["2☆魔管家 艾可",    "精锐", "暗属性", "魔族", "辅助者", "美乳",          "支援" ],
            ["2☆圣骑士长 雷欧娜", "精锐", "水属性", "人类", "守护者", "美乳", "中体型", "生存力", "保护", "防御" ],
            ["2☆神官长 菲欧菈",   "精锐", "光属性", "人类", "治疗者", "美乳", "中体型", "回复" ],
            ["2☆女忍者 凛月",    "精锐", "风属性", "人类", "攻击者", "美乳", "小体型", "输出", "群体攻击", "爆发力" ],
            ["2☆剑圣 神无雪",     "精锐", "火属性", "亚人", "攻击者", "美乳", "中体型", "越战越强", "削弱" ],
            ["2☆妖狐 静",        "精锐", "水属性", "美乳", "妨碍者", "亚人",  "小体型", "削弱" ],
            ["2☆大将军 朱诺安",   "精锐", "暗属性", "人类", "攻击者", "巨乳", "中体型", "输出",  ],
            ["2☆天才女军师 布兰妮","精锐", "光属性", "人类", "妨碍者", "美乳", "中体型", "群体攻击", "削弱", "爆发力", "支援" ],
            
            ["1☆流浪魔法师 尤依", "士兵", "火属性", "攻击者", "人类", "巨乳", "小体型", "越战越强", "输出"],
            ["1☆龙女 伊维斯",    "士兵", "火属性", "攻击者", "亚人", "贫乳", "小体型", "越战越强", "群体攻击", "输出"],
            ["1☆猫妖 娜娜", "士兵", "风属性", "攻击者", "魔族", "贫乳", "小体型", "输出"],
            ["1☆美人鱼 玛莲", "士兵", "水属性", "治疗者", "亚人", "美乳", "中体型", "回复"],
            ["1☆犬人族 朵拉", "士兵", "风属性", "守护者", "亚人", "美乳", "保护", "生存力", "中体型"],
            ["1☆双蛇军团护士长 艾琳", "士兵", "光属性", "治疗者", "人类", "巨乳", "中体型", "回复"],
            ["1☆魅魔 撒芭丝", "士兵", "暗属性", "妨碍者", "魔族", "美乳", "干扰", "削弱", "中体型"],
            ["1☆暗黑精灵 索拉卡", "士兵", "暗属性", "妨碍者", "亚人", "中体型", "削弱", "美乳"],
            
            ["0☆法斯精锐近卫 安娜", "火属性", "守护者", "人类","防御"],
            ["0☆法斯高阶法师 诺诺可", "水属性", "攻击者", "人类","中体型","美乳","输出"],
            ["0☆试左机三号", "光属性", "攻击者", "小体型"],
            ["0☆法斯帝国法师 佩托拉", "光属性", "攻击者", "人类", "贫乳", "中体型", "群体攻击", "输出", "士兵"],
            ["0☆矮人战士 可儿", "水属性", "攻击者", "亚人", "贫乳", "小体型", "输出", "爆发力", "士兵"],
            ["0☆精灵射手 奥菈", "风属性", "攻击者", "亚人", "美乳", "中体型", "输出", "士兵"],
            ["0☆魔族法师 玛努艾拉", "暗属性", "攻击者", "中体型", "魔族", "美乳", "输出", "士兵"],
            ["0☆烈日国武士 桔梗", "火属性", "妨碍者", "人类", "美乳", "中体型", "削弱", "输出", "士兵"],
            ["0☆蛇女 拉米亚", "火属性", "妨碍者", "美乳", "中体型", "削弱", "干扰", "士兵"],
            ["0☆史莱姆娘 萝尔", "水属性", "妨碍者", "魔族", "美乳", "小体型", "削弱", "生存力", "回复","士兵"],
            ["0☆鸟身女妖 哈比", "风属性", "妨碍者", "魔族", "美乳", "小体型", "干扰", "士兵"],
            ["0☆法斯帝国士兵 赛莲", "暗属性", "守护者", "人类", "美乳", "中体型", "保护", "防御", "士兵"],
            ["0☆牛女 米诺", "风属性", "守护者", "亚人", "巨乳", "中体型", "干扰", "保护", "防御", "士兵"],
            ["0☆魔族战士 芙蕾", "光属性", "守护者", "魔族", "美乳", "中体型", "保护", "士兵", "防御"],
            ["0☆圣光骑士 玛蒂娜", "光属性", "守护者", "人类", "美乳", "中体型", "保护", "生存力", "防御", "士兵"],
            ["0☆双蛇军团士兵 夏琳", "火属性", "守护者", "人类", "美乳", "中体型", "防御", "群体攻击", "保护", "士兵"],
            ["0☆烈日国巫女 枫", "风属性", "治疗者", "人类", "美乳", "中体型", "回复", "越战越强", "士兵"],
            ["0☆主神教团僧兵 克蕾雅", "光属性", "治疗者", "人类", "美乳", "中体型", "回复", "士兵"]
        ]
        
