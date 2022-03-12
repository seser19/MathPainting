var slider = new Vue({
    el:"#slider",
    data:{
        imgArr:[
            "./img/slider/bg-1.jpg",
            "./img/slider/bg-2.jpg",
            "./img/slider/bg-3.jpg"
        ],
        index:0,
        text1:"数 字 国 画",
        text2:"MathPainting",
        text3:"国画风格迁移及动画化",
        text4:"Traditional Chinese Painting style transfer and animation.",
        text5:"TRY IT",
        text6:"Learn More"
    },
    methods:{
        prev:function () {
            this.index--;
            if(this.index<0){
                this.index=2;
            }
            if(this.index==0){
                this.text1="数 字 国 画";
                this.text2="MathPainting";
                this.text3="国画风格迁移及动画化";
                this.text4="Traditional Chinese Painting style transfer and animation.";
                this.text5="TRY IT";
                this.text6="Learn More";
            }
            if(this.index==1){
                this.text1="国画风格迁移";
                this.text2="Traditonal Chinese Painting style transfer";
                this.text3="基于用户上传的一张图片或一段视频，";
                this.text4="进行风格迁移，生成对应的国画风格的图片或视频。";
                this.text5="Try It Now";
            }
            if(this.index==2){
                this.text1="国画动画化";
                this.text2="MathPainting";
                this.text3="基于文字，使国画人物的面部、甚至躯体动画化，";
                this.text4="将画中世界以情景短剧的方式呈现在用户面前。";
                this.text5="TRY IT";
                this.text6="Download";
            }
        },
        next:function () {
            this.index++;
            if (this.index > 2) {
                this.index = 0;
            }
            if(this.index==0){
                this.text1="数 字 国 画";
                this.text2="MathPainting";
                this.text3="国画风格迁移及动画化";
                this.text4="Traditional Chinese Painting style transfer and animation.";
                this.text5="TRY IT";
                this.text6="Learn More";
            }
            if(this.index==1){
                this.text1="国画风格迁移";
                this.text2="Traditonal Chinese Painting style transfer";
                this.text3="基于用户上传的一张图片或一段视频，";
                this.text4="进行风格迁移，生成对应的国画风格的图片或视频。";
                this.text5="Try It Now";
            }
            if(this.index==2){
                this.text1="国画动画化";
                this.text2="MathPainting";
                this.text3="基于文字，使国画人物的面部、甚至躯体动画化，";
                this.text4="将画中世界以情景短剧的方式呈现在用户面前。";
                this.text5="TRY IT";
                this.text6="Download";
            }
        }
    }
})