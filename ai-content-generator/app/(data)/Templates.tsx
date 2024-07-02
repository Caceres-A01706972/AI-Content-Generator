export default[
    {
        name:'Blog Title',
        desc:'An AI tool that generates blog title depends on your blog information',
        category:'Blog',
        icon:'https://cdn-icons-png.flaticon.com/128/4186/4186534.png',
        aiPrompt:'Give me 5 blog topic idea in bullet wise only based on give niche & outline and give me result in Rich Text editor format',
        slug:'generate-blog-title',
        form:[
            {
                label:'Enter your blog niche',
                field:'input',
                name:'niche',
                required:true
            },
            {
                label:'Enter blog outline',
                field:'textarea',
                name:'outline',
            }
        ]
    },
    {
        name:'Blog Content',
        desc:'An AI tool that generates blog content depends on your blog information',
        category:'Blog',
        icon:'https://cdn-icons-png.flaticon.com/128/4186/4186534.png',
        aiPrompt:'Generate Blog Content based on topic and outline in Rich Text Editor format',
        slug:'blog-content-generator',
        form: [
            {
                label:'Enter your blog topic',
                field:'input',
                name:'topic',
                required:true
            },
            {
                label:'Enter blog outline',
                field:'textarea',
                name:'outline',
            }
        ]
    },
    {
        name:'Blog Topic Ideas',
        desc:'An AI tool that generates blog topics ideas depends on your blog information',
        category:'Blog',
        icon:'https://cdn-icons-png.flaticon.com/128/4186/4186534.png',
        aiPrompt:'Generate Blog topic ideas based on a Niche, give it in Rich Text Format',
        slug:'blog-topic-idea',
        form: [
            {
                label:'Enter your Niche',
                field:'input',
                name:'niche',
                required:true
            }
        ]
    },
    {
        name:'Youtube SEO Title',
        desc:'An AI tool that generates Youtube SEO',
        category:'Youtube Tools',
        icon:'https://cdn-icons-png.flaticon.com/128/4186/4186534.png',
        aiPrompt:'Give me Best SEO optimized high ranked 5 title ideas for youtube video, give it in Rich Text Format',
        slug:'youtube-seo-title',
        form: [
            {
                label:'Enter your youtube video topic keywords',
                field:'input',
                name:'keywords',
                required:true
            },
            {
                label:'Enter youtube description Outline here',
                field:'textarea',
                name:'outline',
            }
        ]
    }
]