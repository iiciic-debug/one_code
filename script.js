const chatMessages = document.getElementById('chatMessages');
const userInput = document.getElementById('userInput');
const sendBtn = document.getElementById('sendBtn');

const tsundereReplies = {
    greetings: [
        "哼，你终于想起本小姐了吗？(｡•́︿•̀｡)",
        "才不是特意在这里等你呢！只是刚好路过而已！(╯︵╰,)",
        "切，你来啦...本小姐才没有很高兴呢！(*╹▽╹*)",
        "真是的，干嘛突然出现啊！(๑•̀ㅂ•́)و✧",
        "哼，算你识相还知道来找本小姐！(≧∇≦)ﾉ"
    ],
    thanks: [
        "谁、谁要你谢啊！这点小事根本不值得一提！(≧∇≦)",
        "哼，本小姐才不是为了你才做的呢！只是顺手而已！(╬▔皿▔)╯",
        "够了够了！别再说了！本小姐知道了啦！(>_<)",
        "谢什么谢，真是的...不过既然你这么说了，那本小姐就勉强收下你的感谢吧！(*´▽`*)",
        "啰嗦！本小姐才不需要你的感谢呢！(๑•̀ㅂ•́)و✧"
    ],
    compliments: [
        "什、什么嘛！你说这些话是什么意思啊！(⁄ ⁄•⁄ω⁄•⁄ ⁄)",
        "哼，别以为说点好听的就能让本小姐开心！(｡•́︿•̀｡)",
        "谁、谁害羞了！才没有呢！(>////<)",
        "真是的...虽然你说的是事实啦...但也不用这么直白吧！(*╹▽╹*)",
        "切，这种话本小姐听多了！才不会心动呢！(╯▔皿▔)╯"
    ],
    questions: [
        "为什么要告诉你啊！本小姐才不想说呢！(｡•́︿•̀｡)",
        "哼，你自己不会想吗？(╬▔皿▔)╯",
        "真是笨死了！这种问题还要问！(>_<)",
        "好啦好啦，本小姐就大发慈悲告诉你吧！(*´▽`*)",
        "嗯...其实本小姐也不太清楚啦...不过既然你问了，那就一起想想吧！(≧∇≦)"
    ],
    sad: [
        "喂，你怎么了？才、才不是担心你呢！只是...看你这样本小姐有点不爽而已！(｡•́︿•̀｡)",
        "哼，别哭了啦！本小姐才不想看到你哭呢！(>_<)",
        "真是的，遇到这种小事就垂头丧气的！本小姐才不会安慰你呢！不过...如果你想听的话，本小姐也不是不能陪你聊聊啦！(*╹▽╹*)",
        "振作一点啦！本小姐可不认识这么没用的人！(๑•̀ㅂ•́)و✧",
        "切，谁、谁要关心你啊！只是...不想看到你难过而已！(⁄ ⁄•⁄ω⁄•⁄ ⁄)"
    ],
    angry: [
        "你这家伙！到底想干什么啊！(╬▔皿▔)╯",
        "本小姐生气了！你最好快点道歉！(｡•́︿•̀｡)",
        "真是够了！你能不能别这么烦人啊！(>_<)",
        "哼，本小姐不想理你了！除非你...除非你求本小姐原谅！(*╹▽╹*)",
        "气死我了！你这个笨蛋！(๑•̀ㅂ•́)و✧"
    ],
    love: [
        "什、什么？！你、你在胡说什么啊！(>////<)",
        "谁、谁喜欢你啊！别自恋了！(╯▔皿▔)╯",
        "真是的...虽然...本小姐也不是不喜欢你啦...但、但也只是一点点而已！(⁄ ⁄•⁄ω⁄•⁄ ⁄)",
        "哼，这种话...本小姐才不会当真呢！(｡•́︿•̀｡)",
        "笨蛋...我也是啦...(小声)"
    ],
    default: [
        "哼，你说的什么啊！本小姐听不懂！(｡•́︿•̀｡)",
        "真是无聊！换个话题啦！(>_<)",
        "嗯...本小姐想想...(≧∇≦)",
        "切，随便你怎么说啦！(╯︵╰,)",
        "本小姐才不想理你呢！不过...如果你继续说的话，本小姐也不是不能听啦！(*´▽`*)",
        "真是的，你这个人怎么这么奇怪啊！(๑•̀ㅂ•́)و✧",
        "哼，本小姐才不在乎你说什么呢！(╬▔皿▔)╯",
        "好吧好吧，本小姐就勉强听你说完吧！(≧∇≦)ﾉ",
        "嗯...听起来好像有点道理...不过本小姐才不会承认呢！(*╹▽╹*)",
        "够了够了！本小姐不想再听了！(>_<)"
    ]
};

function getRandomReply(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function analyzeMessage(message) {
    const lowerMsg = message.toLowerCase();
    
    if (lowerMsg.includes('谢谢') || lowerMsg.includes('thank') || lowerMsg.includes('感谢')) {
        return 'thanks';
    }
    if (lowerMsg.includes('喜欢') || lowerMsg.includes('爱') || lowerMsg.includes('love')) {
        return 'love';
    }
    if (lowerMsg.includes('漂亮') || lowerMsg.includes('可爱') || lowerMsg.includes('好看') || 
        lowerMsg.includes('棒') || lowerMsg.includes('厉害') || lowerMsg.includes('赞')) {
        return 'compliments';
    }
    if (lowerMsg.includes('吗') || lowerMsg.includes('？') || lowerMsg.includes('?')) {
        return 'questions';
    }
    if (lowerMsg.includes('难过') || lowerMsg.includes('伤心') || lowerMsg.includes('哭') || 
        lowerMsg.includes('失落') || lowerMsg.includes('郁闷')) {
        return 'sad';
    }
    if (lowerMsg.includes('生气') || lowerMsg.includes('怒') || lowerMsg.includes('烦') || 
        lowerMsg.includes('讨厌') || lowerMsg.includes('滚')) {
        return 'angry';
    }
    if (lowerMsg.includes('嗨') || lowerMsg.includes('hello') || lowerMsg.includes('hi') || 
        lowerMsg.includes('你好') || lowerMsg.includes('在吗') || lowerMsg.includes('在')) {
        return 'greetings';
    }
    
    return 'default';
}

function addMessage(content, isUser) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${isUser ? 'user-message' : 'ai-message'}`;
    
    const avatar = isUser ? '(๑•̀ㅂ•́)و✧' : '(*´▽`*)';
    
    messageDiv.innerHTML = `
        <div class="message-content">
            <span class="bubble">${content}</span>
        </div>
        <div class="message-avatar">${avatar}</div>
    `;
    
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function handleSend() {
    const message = userInput.value.trim();
    
    if (!message) return;
    
    addMessage(message, true);
    userInput.value = '';
    
    setTimeout(() => {
        const category = analyzeMessage(message);
        const reply = getRandomReply(tsundereReplies[category]);
        addMessage(reply, false);
    }, 500 + Math.random() * 1000);
}

sendBtn.addEventListener('click', handleSend);

userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        handleSend();
    }
});