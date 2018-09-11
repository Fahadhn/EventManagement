var mongoose = require("mongoose");
var Event = require("./models/event");

var data = [
    {
        name: "فعاليات ثقافية",
        description: "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى كثير من الأحيان أن يطلع على صورة حقيقية لتصميم الموقع ومن هنا وجب على المصمم أن يضع نصوصا مؤقتة على التصميم ليظهر للعميل الشكل كاملاً،دور مولد النص العربى أن يوفر على المصمم عناء البحث عن نص بديل لا علاقة له بالموضوع الذى يتحدث عنه التصميم فيظهر بشكل لا يليق.هذا النص يمكن أن يتم تركيبه على أي تصميم دون مشكلة فلن يبدو وكأنه نص منسوخ، غير منظم، غير منسق، أو حتى غير مفهوم. لأنه مازال نصاً بديلاً ومؤقتاً.",
        date: "18 July 2018",
        tickets:[
            {
                type: "Regular",
                price: 150
            },
            {   type: "VIP",
                price:  350
            }
        ],
        imagesUrl: "https://farm4.staticflickr.com/3795/10131087094_c1c0a1c859.jpg",
        organizer: "خبراء الفعاليات",
        location: "الرياض- مركز الرياض الدولي للمعارض والمؤتمرات",
        hidden: 0,
        category: ["عوائل", "عزاب", "موسيقى"]
    },

    {
        name: "الأيام ثقافية",
        description: "صفة المهرجان",
        //date: "18 July 2018",
        tickets:[
            {
                type: "Regular",
                price: 150
            },
            {   type: "VIP",
                price:  350
            }
        ],
        imagesUrl: "https://farm4.staticflickr.com/3795/10131087094_c1c0a1c859.jpg",
        organizer: "Event Organizers",
        location: "الرياض- مركز الرياض الدولي للمعارض والمؤتمرات",
        hidden: 0,
        category: ["عوائل", "عزاب", "موسيقى"]
    },
    {
        name: "يوم الطفل",
        description: "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى كثير من الأحيان أن يطلع على صورة حقيقية لتصميم الموقع ومن هنا وجب على المصمم أن يضع نصوصا مؤقتة على التصميم ليظهر للعميل الشكل كاملاً،دور مولد النص العربى أن يوفر على المصمم عناء البحث عن نص بديل لا علاقة له بالموضوع الذى يتحدث عنه التصميم فيظهر بشكل لا يليق.هذا النص يمكن أن يتم تركيبه على أي تصميم دون مشكلة فلن يبدو وكأنه نص منسوخ، غير منظم، غير منسق، أو حتى غير مفهوم. لأنه مازال نصاً بديلاً ومؤقتاً.",
        date: "25 July 2018",
        tickets:[
            {   type: "VIP",
                price:  350
            }
        ],
        imagesUrl: "https://farm4.staticflickr.com/3795/10131087094_c1c0a1c859.jpg",
        organizer: "روتانا",
        location: "الرياض- مركز الرياض الدولي للمعارض والمؤتمرات",
        hidden: 0,
        category: ["عوائل", "عزاب", "موسيقى"]
    },
    {
        name: "موسيقى الشرق",
        description: "صفة المهرجان",
        date: "5 Aug 2018",
        tickets:[
            {
                type: "Regular",
                price: 150
            },
            {   type: "VIP",
                price:  350
            }
        ],
        imagesUrl: "https://farm4.staticflickr.com/3795/10131087094_c1c0a1c859.jpg",
        organizer: "تنظيم المؤتمرات والمعارض",
        location: "الرياض- مركز الرياض الدولي للمعارض والمؤتمرات",
        hidden: 0,
        category: ["عوائل", "عزاب", "موسيقى"]
    },
    {
        name: "مهرجان الزهور",
        description: "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى كثير من الأحيان أن يطلع على صورة حقيقية لتصميم الموقع ومن هنا وجب على المصمم أن يضع نصوصا مؤقتة على التصميم ليظهر للعميل الشكل كاملاً،دور مولد النص العربى أن يوفر على المصمم عناء البحث عن نص بديل لا علاقة له بالموضوع الذى يتحدث عنه التصميم فيظهر بشكل لا يليق.هذا النص يمكن أن يتم تركيبه على أي تصميم دون مشكلة فلن يبدو وكأنه نص منسوخ، غير منظم، غير منسق، أو حتى غير مفهوم. لأنه مازال نصاً بديلاً ومؤقتاً.",
        date: "4 Sep 2018",
        tickets:[
            {
                type: "Regular",
                price: 150
            },
            {   type: "VIP",
                price:  350
            }
        ],
        imagesUrl: "https://farm4.staticflickr.com/3795/10131087094_c1c0a1c859.jpg",
        organizer: "الفعاليات العربية",
        location: "الرياض- مركز الرياض الدولي للمعارض والمؤتمرات",
        hidden: 0,
        category: ["عوائل", "عزاب", "موسيقى"]
    },


]
function seedDB(){

   //Remove all campgrounds
   Event.remove({}, function(err){
        if(err){
            console.log(err);
        }
        console.log("Events removed!");
    
    //add a new campgrounds
    Event.create(data, function(err, results){
            if(err){
                console.log(err)
            } else {
                console.log("record created " + results);
            }
        });
    
    });
}
    module.exports = seedDB;

