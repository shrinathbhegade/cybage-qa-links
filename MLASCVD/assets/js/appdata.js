var data = {}
var glossary = [{
	"label": "Ankle - Brachial Index(ABI)",
	"definition": "The ratio of the blood pressure in the ankle compared to blood pressure in the arm,  which can predict peripheral artery disease(PAD). "
}, {
	"label": "ASCVD",
	"definition": "Heart attack and stroke are usually caused by atherosclerotic cardiovascular disease(ASCVD). ASCVD develops because of a build - up of sticky cholesterol - rich plaque. Over time, this plaque can harden and narrow the arteries. "
}, {
	"label": "C-reactive Protein",
	"definition": "C-reactive protein (CRP) measures general levels of inflammation in your body.  High levels of CRP are caused by infections and many long-term diseases.  A CRP test,  however,  cannot show where the inflammation is located or what is causing it.  "
}, {
	"label": "Cholesterol",
	"definition": "Cholesterol is a waxy fat - like substance that travels through the blood.  In and of itself,  cholesterol isn't bad.  It actually helps create the outer coating of our cells and aids the body in making vitamin D and certain hormones. "
}, {
	"label": "Coronary Artery Calcium (CAC) Score",
	"definition": "A test that shows the presence of plaque or fatty build - up in the heart artery walls. "
}, {
	"label": "Coronary Artery Disease",
	"definition": "It happens when your coronary arteries--which act like fuel lines to supply blood to the heart--become damaged or diseased.  There is a build-up of fat and cholesterol in the blood that sticks to the inner walls of the arteries (this is also called atherosclerosis).  As this happens,  the arteries can narrow or become blocked.  Keep in mind,  coronary artery disease typically develops over decades; so many people don't even know they have it until it starts causing problems. "
}, {
	"label": "Diabetes",
	"definition": "When you have type 2 diabetes,  your body does not use or make insulin the way it should.  As a result,  the amount of sugar (glucose) in your blood becomes too high.  Over time,  high blood glucose levels can start to damage the blood vessels in the heart,  eyes,  kidneys,  brain,  and other parts of your body. "
}, {
	"label": "HDL",
	"definition": "HDL (high-density lipoprotein) cholesterol is sometimes referred to as &quot;good&quot; cholesterol,  because it helps move cholesterol out of the body.  HDL does this by binding with cholesterol in the bloodstream and carrying it back to the liver for disposal.  Higher HDL levels help to lower the risk of cardiovascular disease. "
}, {
	"label": "Heart Attack",
	"definition": "Your heart muscle needs oxygen and nutrients to work as it should.  A heart attack (your care provider may call it a myocardial infarction) usually occurs when blood flow to the heart is suddenly cut off.  When this happens,  the heart muscle is starved of oxygen-rich blood.  In just a short period of time,  part of the heart can be damaged or die.  That's why immediate care is critical--it can spare your heart and save your life.  If you think you are having a heart attack,  dial 9-1-1 immediately. "
}, {
	"label": "High Blood Pressure",
	"definition": "Blood pressure is the force of blood moving against the walls of your arteries.  Over time,  elevated blood pressure can weaken your heart,  blood vessels,  kidneys and other parts of your body. "
}, {
	"label": "LDL",
	"definition": "LDL (low - density lipoprotein) cholesterol is sometimes referred to as &quot;bad &quot;cholesterol. LDL carries mostly fat and only a small amount of protein from the liver to other parts of the body. A higher LDL level is considered a risk factor for coronary artery disease(CAD) because, under certain conditions, it can cause hardening of the arteries(atherosclerosis). "
}, {
	"label": "Metabolic Syndrome",
	"definition": "Metabolic syndrome is the combination of high blood pressure, high blood sugar, excess fat around the waist, low HDL( &quot;good&quot;) cholesterol, and high triglycerides. Metabolic syndrome is closely linked to insulin resistance, in which the body cannot use insulin properly. Metabolic syndrome increases your risk for cardiovascular disease, diabetes, and stroke. Weight loss and increased physical activity can help to reduce the risk for metabolic syndrome. "
}, {
	"label": "Peripheral Artery Disease(PAD)",
	"definition": "Peripheral artery disease (PAD) is a narrowing or blockage of arteries that causes poor blood flow to your legs or arms.  When you walk or exercise,  your leg muscles don't get enough blood and you can get painful cramps. "
}, {
	"label": "Statin",
	"definition": "Statins are a type of medicine commonly used to treat high cholesterol.  Statins block an enzyme the body needs to produce cholesterol,  thereby lowering the total amount of it in the blood. "
}, {
	"label": "Stroke",
	"definition": "Your brain is the master control center for your body.  It directs most of what you do--speedily orchestrating your movements,  emotions and ability to think,  talk and learn.  To do this,  your brain needs a steady supply of oxygen and nutrient-rich blood.  That's why if you suffer a stroke--when blood flow to the brain is cut off--brain cells can die very quickly.  Stroke is a leading cause of death and disability in adults.  According to the American Stroke Association,  a stroke occurs every 40 seconds in the United States. "
}, {
	"label": "Triglycerides",
	"definition": "Triglycerides are a type of fat found in your blood.  Your body uses them for energy.  Some triglycerides are needed for good health. However, high triglycerides may raise your risk of cardiovascular disease and may be a sign of metabolic syndrome. "
}];

var glossaryAr = [{
	"label": "مؤشر الضغط الكاحلي العضدي (ABI)",
	"definition": "هي نسبة ضغط الدم في الكاحل مقارنة بضغط الدم في الذراع، التي ستجعلنا نتنبأ بمرض الشرايين الطرفية (PAD). "
}, {
	"label": "الأمراض القلبية الوعائية الناتجة عن تصلب الشرايين",
	"definition": "تحدث النوبات القلبية والسكتات الدماغية بسبب الإصابة بالأمراض القلبية الوعائية الناتجة عن تصلب الشرايين (ASCVD). تنشأ الإصابة بالأمراض القلبية الوعائية الناتجة عن تصلب الشرايين من تراكم اللويحات اللزجة الغنية بالكوليسترول. ومع مرور الوقت، تتصلب هذه اللويحات وتتسبب في ضيق الشرايين. "
}, {
	"label": "البروتين المتفاعل-C",
	"definition": "يقيس البروتين المتفاعل-C (CRP) المستويات العامة للالتهابات في جسمك.  تنشأ المستويات العليا من البروتين المتفاعل-C (CRP) من الإصابات والأمراض طويلة الأجل.  ولكن  اختبار البروتين المتفاعل-C (CRP)  لا يوضح مكان حدوث الالتهابات أو سببها.  "
}, {
	"label": "الكوليسترول",
	"definition": "الكوليسترول هو مادة شمعية تشبه الدهون وتنتقل عبر الدم. الكوليسترول  ليس سيئًا في حد ذاته .  لأنه بالفعل يساعد في تكوين الطبقة الخارجية لخلايانا ويساعد الجسم في تكوين فيتامين د وبعض الهورمونات. "
}, {
	"label": "نسبة التكلس في الشريان التاجي (CAC)",
	"definition": "هو اختبار يوضح وجود تراكم للويحات أو الدهون على جدران شرايين القلب. "
}, {
	"label": "مرض الشريان التاجي",
	"definition": "يحدث عندما تصبح الشرايين التاجية - التي تعمل كخطوط لإمداد القلب بالدم - إما تالفة أو مريضة.  وهناك تتراكم الدهون والكوليسترول في الدم الذي يلتصق بالجدران الداخلية للشرايين (ويطلق عليه اسم تصلب الشرايين).  وأثناء ذلك  تضيق الشرايين أو تصبح مسدودة.  تذكر أن  مرض الشريان التاجي يتطور عادةً على مر عقود؛ ولذلك هناك العديد من الأشخاص الذين لا يدركون إصابتهم به إلا حينما يبدأ في التسبب بالمشكلات. "
}, {
	"label": "داء السكري",
	"definition": "عندما تصاب بالسكري من النوع الثاني،  فإن جسمك لا يستخدم الإنسولين أو يفرزه كما يجب.  ولذلك ، فإن كمية السكر (الجلوكوز) في جسمك تصبح مرتفعة للغاية.  وبمرور الوقت،  من الممكن أن تبدأ المستويات العالية للجلوكوز في الدم في تدمير الأوعية الدموية في القلب  والعينين  والكليتين  والعقل  والأجزاء الأخرى من جسمك. "
}, {
	"label": "البروتين الدهني عالي الكثافة",
	"definition": " يشار أحيانًا إلى كوليسترول البروتين الدهني عالي الكثافة (HDL) باسم الكوليسترول الجيد،  لأنه يساعد في إخراج الكوليسترول خارج الجسم.  يجري البروتين الدهني عالي الكثافة هذا الأمر بالاتحاد مع الكوليسترول في مجرى الدم وإعادته إلى الكبد للتخلص منه.  تساعد المستويات المرتفعة للبروتين الدهني عالي الكثافة في خفض مخاطر الإصابة بالأمراض القلبية الوعائية. "
}, {
	"label": "النوبة القلبية",
	"definition": "تحتاج عضلة القلب إلى الأكسجين والعناصر الغذائية للعمل كما ينبغي.  تحدث النوبة القلبية عادةً عندما يتوقف تدفق الدم إلى القلب فجأة (قد يسميها مقدم الرعاية الصحية الخاص بك باحتشاء عضلة القلب).  عند حدوث ذلك،  فإن عضلة القلب تعاني من نقص الدم الغني بالأكسجين.  وفي فترة وجيزة،  قد يحدث تلف لجزء من القلب أو الوفاة.  لذلك فإن تقديم الرعاية العاجلة أمر بالغة الأهمية، حيث يمكنها أن تحمي قلبك وتنقذ حياتك.  في حال ظننت إصابتك بنوبة قلبية،  إتصلبرقم الطوارئ المحلي في الحال. "
}, {
	"label": "ضغط الدم المرتفع",
	"definition": "ضغط الدم هو قوة دفع الدم على جدران الشرايين.  وبمرور الوقت،  من الممكن أن يتسبب ضغط الدم المرتفع في إضعاف قلبك  والأوعية الدموية  والكليتين وأجزاء أخرى من جسمك. "
}, {
	"label": "البروتين الدهني منخفض الكثافة (LDL)",
	"definition": "يشار أحيانًا إلى كوليسترول البروتين الدهني منخفض الكثافة (LDL) باسم الكوليسترول &quot;السيئ&quot;. يحمل البروتين الشحمي منخفض الكثافة (LDL) في الأغلب الدهون وكمية صغيرة فقط من البروتين من الكبد لأجزاء أخرى من الجسم. تعد المستويات الأعلى للبروتين الدهني منخفض الكثافة (LDL) أحد عوامل خطر الإصابة بمرض الشريان التاجي (CAD) لأنها في ظل ظروف معينة قد تتسبب في حدوث تصلب في الشرايين (تصلب الشرايين). "
}, {
	"label": "متلازمة التمثيل الغذائي",
	"definition": "تعد متلازمة التمثيل الغذائي مزيجًا بين ضغط الدم المرتفع وسكر الدم المرتفع والدهون الزائدة حول الخصر وانخفاض البروتين الدهني مرتفع الكثافة (HDL) والكوليسترول ( &quot;الجيد&quot;) وارتفاع الدهون الثلاثية. ترتبط متلازمة التمثيل الغذائي ارتباطًا وثيقًا بمقاومة الإنسولين، والتي لا يستطيع فيها الجسم استخدام الإنسولين على النحو الصحيح. تزيد متلازمة التمثيل الغذائي من مخاطر تعرضك للإصابة بالأمراض القلبية الوعائية والسكري والسكتة الدماغية. يمكن أن تساعد خسارة الوزن والنشاط البدني المتزايد في خفض مخاطر متلازمة التمثيل الغذائي. "
}, {
	"label": "مرض الشرايين الطرفية (PAD)",
	"definition": "مرض الشرايين الطرفية (PAD) هو ضيق الشرايين أو انسدادها متسببًا في ضعف تدفق الدم للساقين أو الذراعين.  عندما تمشي أو تمارس الرياضة  لا يصل إلى عضلات الساق الدم الكافي وتصاب بانقباضات مؤلمة. "
}, {
	"label": "الستاتين",
	"definition": "الستاتينات هو نوع من الأدوية الشائع استخدامها لعلاج ارتفاع الكوليسترول.  تمنع الستاتينات الإنزيم الذي يحتاج إليه الجسم لإنتاج الكوليسترول،  ومن ثم ينخفض إجمالي كميته في الدم. "
}, {
	"label": "السكتة الدماغية",
	"definition": "عقلك هو مركز التحكم الرئيسي لجسمك.  يوجه عقلك أغلب ما تفعله، وينسق حركاتك  وعواطفك بشكل سريع وقدرتك على التفكير  والتحدث والتعلم.  ليتمكن  عقلك من إجراء عمله فإنه يحتاج إلى إمداد مستمر بالأكسجين والدم الغني بالمواد الغذائية.  لهذا السبب إن كنت مصابًا بسكتة دماغية - وذلك عندما يتوقف تدفق الدم إلى المخ - فإن خلايا المخ قد تموت على نحو سريع جدًا.  تعد السكتة الدماغية أحد الأسباب المؤدية إلى الوفاة والإعاقة عند البالغين.  وفقًا لجمعية السكتة الدماغية الأمريكية،  تحدث السكتة الدماغية كل 40 ثانية في الولايات المتحدة. "
}, {
	"label": "الدهون الثلاثية",
	"definition": "الدهون الثلاثية هي نوع من الدهون الموجودة في دمك.  يستخدمها الجسم للحصول على الطاقة.  هناك بعض الدهون الثلاثية مطلوبة للتمتع بصحة جيدة. ولكن قد ترفع الدهون الثلاثية العالية مخاطر الإصابة بالأمراض القلبية الوعائية، وقد تكون علامة للإصابة بمتلازمة التمثيل الغذائي. "
}];

var glossaryPr = [{
	"label": "Índice Tornozelo - Braquial (ITB)",
	"definition": "A proporção da pressão arterial no tornozelo em comparação com a pressão arterial no braço,  que pode prever doença arterial periférica (DAP). "
}, {
	"label": "DCVA",
	"definition": "O ataque cardíaco e o derrame são geralmente causados por doença cardiovascular aterosclerótica (DCVA). A DCVA se desenvolve devido ao acúmulo de uma placa adesiva rica em colesterol. Com o tempo, essa placa pode endurecer e estreitar as artérias. "
}, {
	"label": "Proteína C Reativa",
	"definition": "Proteína C Reativa (PCR) mede os níveis gerais de inflamação em seu corpo.  Níveis altos de PCR são causados por infecções e muitas doenças crônicas.  Um teste de PCR,  entretanto,  não pode mostrar onde a inflamação está localizada ou o que a está causando.  "
}, {
	"label": "Colesterol",
	"definition": "O colesterol é uma substância semelhante à gordura cerosa que viaja pelo sangue.  Por si só,  o colesterol não é ruim.  Na verdade, ajuda a criar o revestimento externo de nossas células e ajuda o corpo a produzir vitamina D e certos hormônios. "
}, {
	"label": "Escore de Cálcio da Artéria Coronária (CAC)",
	"definition": "Teste que mostra a presença de placa ou acúmulo de gordura nas paredes das artérias do coração. "
}, {
	"label": "Doença Arterial Coronariana",
	"definition": "Acontece quando as artérias coronárias - que agem como linhas de combustível para fornecer sangue ao coração - ficam danificadas ou doentes.  Há uma acumulação de gordura e colesterol no sangue que adere às paredes internas das artérias (também chamada de aterosclerose).  Quando isso acontece,  as artérias podem se estreitar ou ficar bloqueadas.  Tenha em mente,  a doença arterial coronariana geralmente se desenvolve ao longo de décadas; tantas pessoas nem sabem que a têm até começar a causar problemas. "
}, {
	"label": "Diabetes",
	"definition": "Quando você tem diabetes tipo 2,  seu corpo não usa ou produz insulina da maneira que deveria.  Como resultado,  a quantidade de açúcar (glicose) em seu sangue fica muito alta.  Com o tempo,  os níveis elevados de glicose no sangue podem começar a danificar os vasos sanguíneos do coração,  olhos,  rins,  cérebro,  e outras partes do corpo. "
}, {
	"label": "HDL",
	"definition": "O colesterol HDL (lipoproteína de alta densidade) às vezes é referido como &quot;bom&quot; colesterol,  porque ajuda a remover o colesterol do corpo.  O HDL faz isso ligando-se ao colesterol na corrente sanguínea e levando-o de volta ao fígado para eliminação.  Níveis mais altos de HDL ajudam a diminuir o risco de doenças cardiovasculares. "
}, {
	"label": "Ataque Cardíaco",
	"definition": "O músculo cardíaco precisa de oxigênio e nutrientes para funcionar como deveria.  Um ataque cardíaco (seu médico pode chamá-lo de infarto do miocárdio) geralmente ocorre quando o fluxo sanguíneo para o coração é interrompido repentinamente.  Quando isso acontece,  o músculo cardíaco está sem sangue rico em oxigênio.  Em apenas um curto período de tempo,  parte do coração pode ser danificada ou morrer.  É por isso que o atendimento imediato é fundamental - pode poupar seu coração e salvar sua vida.  Se você acha que está tendo um ataque cardíaco,  disque o número de emergência local imediatamente. "
}, {
	"label": "Hipertensão Arterial",
	"definition": "A pressão arterial é a força do sangue movendo-se contra as paredes das artérias.  Com o tempo,  a pressão arterial elevada pode enfraquecer seu coração,  vasos sanguíneos,  rins e outras partes do corpo. "
}, {
	"label": "LDL",
	"definition": "O colesterol LDL (lipoproteína de baixa densidade) às vezes é chamado de colesterol &quot;ruim&quot;. O LDL transporta principalmente gordura e apenas uma pequena quantidade de proteína do fígado para outras partes do corpo. Um nível mais alto de LDL é considerado um fator de risco para doença arterial coronariana (DAC), pois, sob certas condições, pode causar endurecimento das artérias (aterosclerose). "
}, {
	"label": "Síndrome Metabólica",
	"definition": "A síndrome metabólica é a combinação de pressão alta, açúcar elevado no sangue, excesso de gordura na cintura, colesterol HDL baixo (&quot;bom&quot;) e triglicerídeos altos.. A síndrome metabólica está intimamente ligada à resistência à insulina, na qual o corpo não consegue usar a insulina adequadamente. A síndrome metabólica aumenta o risco de doenças cardiovasculares, diabetes e derrame. A perda de peso e o aumento da atividade física podem ajudar a reduzir o risco de síndrome metabólica. "
}, {
	"label": "Doença Arterial Periférica (DAP)",
	"definition": "A doença arterial periférica (DAP) é um estreitamento ou bloqueio das artérias que causa fluxo sanguíneo insuficiente para as pernas ou braços.  Quando você caminha ou se exercita,  seus músculos das pernas não recebem sangue suficiente e você pode ter cãibras dolorosas. "
}, {
	"label": "Estatina",
	"definition": "As estatinas são um tipo de medicamento comumente usado para tratar o colesterol alto.  As estatinas bloqueiam uma enzima de que o corpo precisa para produzir colesterol,  diminuindo assim a quantidade total dele no sangue. "
}, {
	"label": "Derrame",
	"definition": "Seu cérebro é o centro de controle mestre de seu corpo.  Ele direciona a maior parte do que você faz - orquestrando rapidamente seus movimentos,  emoções e capacidade de pensar,  falar e aprender.  Para fazer isso,  seu cérebro precisa de um suprimento constante de oxigênio e sangue rico em nutrientes.  É por isso que, se você sofrer um derrame - quando o fluxo sanguíneo para o cérebro é interrompido - as células cerebrais podem morrer muito rapidamente.  O derrame é a principal causa de morte e invalidez em adultos.  De acordo com a American Stroke Association [Associação Americana de Acidente Vascular Cerebral], um derrame ocorre a cada 40 segundos nos Estados Unidos. "
}, {
	"label": "Triglicerídeos",
	"definition": "Os triglicerídeos são um tipo de gordura encontrada no sangue.  Seu corpo os usa para obter energia.  Alguns triglicerídeos são necessários para uma boa saúde. No entanto, triglicerídeos altos podem aumentar o risco de doenças cardiovasculares e podem ser um sinal de síndrome metabólica. "
}];

var glossaryEs = [{
	"label": "Índice tobillo-brazo (ITB)",
	"definition": "Relación entre la tensión arterial del tobillo en comparación con la del brazo  con la que se puede predecir la arteriopatía periférica. "
}, {
	"label": "ASCVD",
	"definition": "La enfermedad cardiovascular aterosclerótica (ASCVD) suele provocar los infartos y los ictus. La ASCVD se desarrolla por el aumento de la placa pegajosa rica en colesterol. Con el tiempo, esta placa se puede endurecer y estrechar las arterias. "
}, {
	"label": "Proteína C-reactiva",
	"definition": "La proteína C-reactiva (PCR) mide los niveles generales de inflamación del cuerpo.  Las infecciones y muchas enfermedades crónicas dan lugar a niveles elevados de PCR. Sin embargo, en  una prueba de PCR  no indica  dónde se encuentra la inflamación ni qué la causa.  "
}, {
	"label": "Colesterol",
	"definition": "El colesterol es una sustancia cérea y parecida a la grasa que se mueve por la sangre. El colesterol  en sí  no es malo.  De hecho, ayuda a crear la capa externa de las células y a que el cuerpo cree vitamina D y ciertas hormonas. "
}, {
	"label": "Puntuación de calcio en las arterias coronarias (CAC)",
	"definition": "Prueba en la que se muestra la presencia de placas o el aumento de grasas en las paredes de las arterias del corazón. "
}, {
	"label": "Arteriopatía coronaria",
	"definition": "Se produce cuando las arterias coronarias, que actúan como conductos de combustible para suministrar sangre al corazón, sufren daños o enferman.  Existe un aumento de la grasa y el colesterol en la sangre que se pegan a las paredes internas de las arterias (lo que también se llama ateroesclerosis).  Cuando esto ocurre,  las arterias se estrechan o se bloquean.  Tenga en cuenta  que la arteriopatía coronaria suele desarrollarse durante décadas, por lo que muchas personas no saben que la padecen hasta que empieza a causarles problemas. "
}, {
	"label": "Diabetes",
	"definition": "Cuando se tiene diabetes de tipo 2,  el cuerpo no usa o crea insulina de la forma en que debería.  Como consecuencia,  la cantidad de azúcar (glucosa) de la sangre aumenta demasiado.  Con el tiempo,  la presencia de niveles elevados de glucosa puede empezar a dañar los vasos sanguíneos del corazón,  los ojos,  los riñones,  el cerebro  y otras partes del cuerpo. "
}, {
	"label": "HDL",
	"definition": "Al colesterol de las HDL (lipoproteínas de alta densidad) se le suele llamar colesterol &quot;bueno&quot;  porque ayuda a mover el colesterol por el cuerpo.  Para hacer esto, las HDL se unen al colesterol en la circulación sanguínea y lo transportan de nuevo al hígado para su eliminación.  Si los niveles de HDL son elevados, se reduce el riesgo de padecer enfermedades cardiovasculares. "
}, {
	"label": "Infarto",
	"definition": "Su miocardio necesita oxígeno y nutrientes para funcionar bien.  Los infartos (quizás su médico lo llame 'infarto de miocardio') se suelen producir cuando la circulación sanguínea que llega al corazón se interrumpe repentinamente.  Cuando esto ocurre,  el miocardio deja de recibir sangre rica en oxígeno.  En un breve periodo de tiempo,  parte del corazón puede sufrir daños o morir.  Por este motivo, es fundamental recibir asistencia inmediata, ya que esta le puede salvar el corazón y la vida.  Si cree que está sufriendo un infarto,  llame inmediatamente a urgencias. "
}, {
	"label": "Hipertensión arterial",
	"definition": "La tensión arterial es la fuerza de la sangre moviéndose contra las paredes de las arterias.  Con el tiempo,  la presencia de una tensión arterial elevada puede debilitar el corazón,  los vasos sanguíneos,  los riñones y otras partes del cuerpo. "
}, {
	"label": "LDL",
	"definition": "Al colesterol de las LDL (lipoproteínas de baja densidad) se le suele llamar colesterol &quot;malo&quot;. Las LDL transportan principalmente la grasa y tan solo una pequeña cantidad de proteínas del hígado a otras partes del cuerpo. Un nivel elevado de LDL se considera un factor de riesgo para padecer arteriopatía coronaria porque, en ciertas situaciones, puede provocar que las arterias se endurezcan (ateroesclerosis). "
}, {
	"label": "Síndrome metabólico",
	"definition": "El síndrome metabólico es una combinación de hipertensión, hiperglucemia, exceso de grasa en la cintura, colesterol de las HDL (&quot;bueno&quot;) bajo y triglicéridos altos. El síndrome metabólico está estrechamente relacionado con la resistencia a la insulina, es decir, cuando el cuerpo no usa la insulina correctamente. El síndrome metabólico aumenta su riesgo de padecer enfermedades cardiovasculares, diabetes e ictus. La pérdida de peso y el aumento de la actividad física puede ayudar a reducir el riesgo de síndrome metabólico. "
}, {
	"label": "Arteriopatía periférica (AP)",
	"definition": "La arteriopatía periférica (AP) es un estrechamiento o bloqueo de las arterias que provoca que llegue poca sangre a las piernas o los brazos.  Al andar o hacer ejercicio,  los músculos de las piernas no reciben una cantidad de sangre suficiente y se pueden producir dolorosos calambres. "
}, {
	"label": "Estatina",
	"definition": "Las estatinas son un tipo de medicamento que se suele usar para tratar el colesterol alto.  Las estatinas bloquean una enzima que el cuerpo necesita para producir colesterol,  por lo tanto, reduce la cantidad total de colesterol en el cuerpo. "
}, {
	"label": "Ictus",
	"definition": "El cerebro es el centro de control principal del cuerpo.  Dirige la mayoría de las cosas que hacemos, orquestando rápidamente los movimientos,  las emociones y la capacidad de pensar,  hablar y aprender.  Para lograr esto,  el cerebro necesita un aporte constante de oxígeno y sangre rica en nutrientes.  Por este motivo, si usted sufre un ictus, es decir, se interrumpe la circulación sanguínea que va al cerebro, las células cerebrales mueren muy rápido.  El ictus es una de las causas principales de muerte y discapacidad en personas adultas.  Según la American Stroke Association (Asociación Estadounidense del Ictus),  en Estados Unidos se produce un ictus cada 40 segundos. "
}, {
	"label": "Triglicéridos",
	"definition": "Los triglicéridos son un tipo de grasa que se encuentra en la sangre.  Su cuerpo los usa para tener energía.  Para estar sano, hay que tener triglicéridos. Sin embargo, un nivel elevado de este tipo de grasa puede aumentar su riesgo de padecer enfermedades cardiovasculares y ser un signo de síndrome metabólico. "
}];

var glossaryDe = [{
	"label": "Knöchel-Arm-Index (ABI)",
	"definition": "Das Verhältnis des Blutdrucks im Knöchel zum Blutdruck im Arm,  der eine Prognose der peripheren Arterienerkrankung (PAD) erlauben kann. "
}, {
	"label": "ASCVD",
	"definition": "Herzinfarkt und Schlaganfall werden in der Regel durch atherosklerotische Herz-Kreislauf-Erkrankungen (ASCVD) verursacht. ASCVD entwickelt sich aufgrund von Ablagerungen klebriger, Cholesterin-reicher Plaque. Mit der Zeit kann diese Plaque die Arterien verhärten und verengen. "
}, {
	"label": "C-reaktives Protein",
	"definition": "Das C-reaktive Protein (CRP) misst die allgemeinen Entzündungswerte im Körper.  Hohe CRP-Werte werden durch Infektionen und viele Langzeiterkrankungen verursacht.  Ein CRP-Test kann  jedoch  nicht auf den Ort oder die Ursache der Entzündung hinweisen.  "
}, {
	"label": "Cholesterin",
	"definition": "Cholesterin ist eine wachsartige, fettähnliche Substanz, die vom Blut transportiert wird.  An und für sich ist  Cholesterin nicht schlecht.  Es hilft in der Tat dabei, die äußere Beschichtung unserer Zellen zu schaffen und hilft dem Körper bei der Herstellung von Vitamin D und bestimmten Hormonen. "
}, {
	"label": "Koronarer Kalziumscore (CAC) ",
	"definition": "Eine Untersuchung, die das Vorhandensein von Plaque oder Fettablagerungen in den Wänden der Herzarterien zeigt. "
}, {
	"label": "Koronare Herzkrankheit",
	"definition": "Tritt auf, wenn Ihre Koronararterien, die wie Kraftstoffleitungen wirken, die Blut zum Herzen transportieren, beschädigt werden oder erkranken.  Es ist eine Ansammlung von Fett und Cholesterin im Blut vorhanden, die an den inneren Wänden der Arterien klebt (dies wird auch Atherosklerose genannt).  Dies führt dazu, dass  sich die Arterien verengen oder verstopfen.  Denken Sie daran, dass sich die koronare Herzkrankheit in der Regel über Jahrzehnte entwickelt; viele Menschen wissen nicht einmal, dass sie davon betroffen sind, bis die Erkrankung Probleme verursacht. "
}, {
	"label": "Diabetes",
	"definition": "Wenn Sie Typ-2-Diabetes haben, verwendet oder stellt Ihr Körper Insulin nicht auf die Weise her, wie es sein sollte.  Dadurch  wird die Menge an Zucker (Glukose) im Blut zu hoch.  Im Laufe der Zeit können hohe Blutzuckerwerte die Schädigung  der Blutgefäße im Herzen, in den  Augen, den  Nieren, im  Gehirn und in  anderen Teilen des Körpers bewirken. "
}, {
	"label": "HDL",
	"definition": "HDL-(Lipoprotein hoher Dichte)-Cholesterin wird manchmal als &quot;gutes Cholesterin&quot; bezeichnet,  weil es beim Ausscheiden des Cholesterins aus dem Körper hilft.  HDL tut dies, indem es Cholesterin im Blut bindet und es zur Entsorgung zurück in die Leber transportiert.  Höhere HDL-Werte tragen dazu bei, das Risiko für kardiovaskuläre Erkrankungen zu senken. "
}, {
	"label": "Herzinfarkt",
	"definition": "Ihr Herzmuskel benötigt Sauerstoff und Nährstoffe, um richtig zu arbeiten.  Ein Herzinfarkt (Ihr Arzt kann dazu auch Myokardinfarkt sagen) tritt in der Regel auf, wenn der Blutfluss zum Herzen plötzlich unterbrochen wird.  Wenn dies geschieht,  wird der Herzmuskel nicht mit genügend sauerstoffreichem Blut versorgt.  In nur kurzer Zeit kann ein Teil des Herzens beschädigt  werden oder absterben.  Deshalb ist eine sofortige Versorgung von entscheidender Bedeutung – sie kann das Herz schonen und Leben retten.  Wenn Sie glauben, dass Sie einen Herzinfarkt haben,  rufen Sie bitte umgehend einen Notarzt zu Hilfe. "
}, {
	"label": "Hoher Blutdruck",
	"definition": "Der Blutdruck ist die Kraft, die das Blut auf die Wände der Arterien ausübt.  Mit der Zeit kann ein  erhöhter Blutdruck Ihr Herz, Ihre  Blutgefäße, Ihre  Nieren und andere Körperteile schwächen. "
}, {
	"label": "LDL",
	"definition": "LDL-(Lipoprotein geringer Dichte)-Cholesterin wird manchmal als &quot;schlechtes Cholesterin&quot; bezeichnet. LDL transportiert hauptsächlich Fett und nur eine geringe Menge Protein aus der Leber in andere Körperteile. Ein höherer LDL-Wert wird als Risikofaktor für koronare Herzkrankheiten (KHK) angesehen, da er unter bestimmten Bedingungen zu einer Verhärtung der Arterien (Atherosklerose) führen kann. "
}, {
	"label": "Metabolisches Syndrom",
	"definition": "Metabolisches Syndrom ist die Kombination aus Bluthochdruck, hohem Blutzucker, übermäßigem Taillenumfang, niedrigem HDL-Spiegel ( &quot;gutes Cholesterin&quot;) und hohen Triglycerid-Werten. Das metabolische Syndrom ist eng mit einer Insulinresistenz verbunden, bei der der Körper Insulin nicht richtig einsetzen kann. Das metabolische Syndrom erhöht das Risiko für Herz-Kreislauf-Erkrankungen, Diabetes und Schlaganfall. Gewichtsverlust und vermehrte körperliche Aktivität können dazu beitragen, das Risiko für metabolisches Syndrom zu reduzieren. "
}, {
	"label": "Periphere Arterienerkrankung (PAD)",
	"definition": "Die periphere Arterienerkrankung (PAD) ist eine Verengung oder Blockierung der Arterien, die einen schlechten Blutfluss zu Ihren Beinen oder Armen verursacht.  Beim Gehen oder Trainieren bekommen Ihre  Beinmuskeln nicht genug Blut und Sie können schmerzhafte Krämpfe bekommen. "
}, {
	"label": "Statin",
	"definition": "Statine sind eine Klasse von Medikamenten, die häufig zur Behandlung eines hohen Cholesterinspiegels verwendet werden.  Statine blockieren ein Enzym, das der Körper benötigt, um Cholesterin zu produzieren,  wodurch die Gesamtmenge des Cholesterins im Blut gesenkt wird. "
}, {
	"label": "Schlaganfall",
	"definition": "Ihr Gehirn ist die Schaltzentrale des Körpers. Es steuert fast alles, was Sie tun und koordiniert blitzschnell Bewegungen, Emotionen und die Fähigkeit zu denken, zu sprechen und zu lernen.  Hierfür  benötigt Ihr Gehirn eine stetige Versorgung mit Sauerstoff und nährstoffreichem Blut.  Deshalb können Gehirnzellen sehr schnell absterben, wenn Sie einen Schlaganfall, wenn also der Blutfluss zum Gehirn unterbrochen wird, erleiden.  Schlaganfall ist eine der Hauptursachen für Tod und Behinderung bei Erwachsenen.  Nach Angaben der American Stroke Association (amerikanische Schlaganfall-Gesellschaft) tritt in den USA  alle 40 Sekunden ein Schlaganfall auf. "
}, {
	"label": "Triglyceride",
	"definition": "Triglyceride sind eine Art Fett in Ihrem Blut. Der Körper nutzt sie als Energie.  Einige Triglyceride werden für eine gute Gesundheit benötigt. Allerdings können hohe Triglycerid-Werte Ihr Risiko für Herz-Kreislauf-Erkrankungen erhöhen und ein Zeichen für metabolisches Syndrom sein. "
}];

var glossaryIn = [
	{
		"label": "Indeks Pergelangan Kaki-Lengan (ABI)", 
		"definition": "Rasio tekanan darah di pergelangan kaki dibandingkan dengan tekanan darah di lengan,  yang dapat memprediksi penyakit arteri perifer (PAP). "
	}, {
    	"label" :"ASCVD", 
    	"definition": "Serangan jantung dan stroke biasanya disebabkan oleh penyakit kardiovaskular aterosklerosis (ASCVD). ASCVD berkembang karena penimbunan plak kaya kolesterol yang lengket. Seiring waktu, plak ini dapat mengeras dan mempersempit arteri. "
    }, {
         "label" :"Protein C-reaktif", 
    	"definition": "Protein C-reaktif (CRP) mengukur tingkat inflamasi umum dalam tubuh Anda.  Kadar tinggi CRP disebabkan oleh infeksi dan banyak penyakit jangka panjang lainnya.  Namun,  tes CRP  tidak dapat menunjukkan lokasi terjadinya inflamasi atau penyebabnya.  "
    }, {
         "label" :"Kolesterol", 
    	"definition": "Kolesterol adalah zat lemak seperti lilin yang mengalir dalam darah.  Pada dasarnya,  kolesterol tidaklah jahat.  Sebenarnya kolesterol berfungsi membantu menyusun lapisan luar sel serta membantu tubuh menghasilkan vitamin D dan hormon tertentu. "
    }, {
         "label" :"Skor Kalsium Arteri Koroner (CAC)", 
    	"definition": "Sebuah tes yang menunjukkan keberadaan plak atau timbunan lemak di dinding arteri jantung. "
    }, {
         "label" :"Penyakit Arteri Koroner", 
    	"definition": "Terjadi ketika arteri koroner, yang bertindak seperti jalur bahan bakar yang menyuplai darah ke jantung, mengalami kerusakan atau penyakit.  Terdapat timbunan lemak dan kolesterol di dalam darah yang menempel di sisi dalam dinding arteri (juga disebut sebagai aterosklerosis).  Ketika hal ini terjadi,  arteri akan menyempit dan aliran terhambat.  Ingatlah,  penyakit arteri koroner biasanya berkembang selama lebih dari satu dekade, jadi banyak yang bahkan tidak menyadarinya hingga penyakit tersebut mulai menimbulkan masalah. "
    }, {
         "label" :"Diabetes", 
    	"definition": "Jika Anda mengidap diabetes tipe 2,  tubuh Anda tidak menggunakan atau memproduksi insulin sebagaimana mestinya.  Akibatnya,  jumlah gula (glukosa) di dalam darah Anda menjadi terlalu tinggi.  Seiring waktu,  kadar gula darah yang tinggi dapat mulai merusak pembuluh darah di jantung,  mata,  ginjal,  otak,  dan bagian tubuh lainnya. "
    }, {
         "label" :"HDL", 
    	"definition": "Kolesterol HDL (lipoprotein densitas tinggi) kadang disebut kolesterol &quot;baik&quot;  karena membantu mengeluarkan kolesterol dari tubuh.  Kolesterol HDL mengikat kolesterol dalam aliran darah, lalu membawanya kembali ke hati untuk dibuang.  Kadar HDL yang lebih tinggi membantu menurunkan risiko penyakit kardiovaskular. "
    }, {
         "label" :"Serangan Jantung", 
    	"definition": "Otot jantung membutuhkan oksigen dan nutrisi agar dapat berfungsi sebagaimana mestinya.  Serangan jantung (penyedia layanan kesehatan Anda mungkin menyebutnya infark miokard) biasanya terjadi ketika aliran darah ke jantung tiba-tiba terputus.  Ketika hal ini terjadi,  otot jantung akan kekurangan darah yang kaya oksigen.  Tidak lama kemudian,  bagian jantung menjadi rusak atau mati.  Itulah mengapa perlu segera dilakukan perawatan, guna mempertahankan jantung dan menyelamatkan nyawa Anda.  Jika Anda merasa sedang mengalami serangan jantung,  segera hubungi 112. "
    }, {
         "label" :"Tekanan Darah Tinggi", 
    	"definition": "Tekanan darah adalah daya yang mendorong darah untuk mengalir sepanjang pembuluh arteri.  Seiring waktu,  tekanan darah yang tinggi dapat melemahkan jantung,  pembuluh darah,  ginjal, dan bagian tubuh Anda lainnya. "
    }, {
         "label" :"LDL", 
    	"definition": "Kolesterol LDL (lipoprotein densitas rendah) kadang disebut sebagai kolesterol &quot;jahat&quot;. LDL membawa sebagian besar lemak dan hanya sedikit protein dari hati ke bagian tubuh lainnya. Kadar LDL yang lebih tinggi dianggap sebagai faktor risiko untuk penyakit arteri koroner (PAK), karena dalam kondisi tertentu dapat menyebabkan pengerasan arteri (aterosklerosis). "
    }, {
         "label" :"Sindrom Metabolik", 
    	"definition": "Sindrom metabolik adalah kombinasi tekanan darah tinggi, gula darah tinggi, kelebihan lemak di sekitar pinggang, kolesterol HDL (&quot;baik&quot;) rendah, dan trigliserida tinggi. Sindrom metabolik sangat terkait dengan resistansi insulin, yaitu ketika tubuh tidak dapat menggunakan insulin dengan benar. Sindrom metabolik meningkatkan risiko penyakit kardiovaskular, diabetes, dan stroke. Penurunan berat badan dan peningkatan aktivitas fisik dapat membantu menurunkan risiko sindrom metabolik. "
    }, {
         "label" :"Penyakit Arteri Perifer (PAP)", 
    	"definition": "Penyakit arteri perifer (PAP) adalah penyempitan atau penyumbatan arteri yang menyebabkan lemahnya aliran darah ke kaki atau lengan Anda.  Ketika Anda berjalan atau berolahraga,  otot kaki Anda tidak mendapatkan aliran darah yang cukup, sehingga Anda dapat mengalami sakit kram. "
    }, {
         "label" :"Statin", 
    	"definition": "Statin adalah suatu jenis obat yang biasa digunakan untuk mengobati kolesterol tinggi.  Statin menghambat enzim yang dibutuhkan tubuh untuk memproduksi kolesterol,  sehingga menurunkan total kolesterol di dalam darah. "
    }, {
         "label" :"Stroke", 
    	"definition": "Otak adalah pusat kontrol utama bagi tubuh Anda.  Otak mengatur hampir semua yang Anda lakukan--secara cepat mengatur pergerakan Anda,  emosi, dan kemampuan berpikir,  berbicara, dan belajar.  Untuk melakukan hal tersebut,  otak memerlukan kestabilan pasokan oksigen dan darah yang kaya nutrisi.  Itulah mengapa jika Anda menderita stroke, yakni ketika aliran darah ke otak terputus, sel-sel otak dapat mati dengan sangat cepat.  Stroke adalah penyebab utama kematian dan disabilitas pada orang dewasa.  Menurut American Stroke Association,  satu serangan stroke terjadi setiap 40 detik di Amerika Serikat. "
    }, {
         "label" :"Trigliserida", 
		"definition": "Trigliserida adalah suatu jenis lemak yang ditemukan di dalam darah.  Tubuh menggunakan trigliserida sebagai energi.  Tubuh yang sehat membutuhkan sedikit trigliserida. Namun, trigliserida yang tinggi mungkin meningkatkan risiko penyakit kardiovaskular dan merupakan tanda adanya sindrom metabolik."
}];

var statins = [{
		id: "1",
		name: "Atorvastatin (Lipitor&reg;)",
		dose: [{
				name: "Low Intensity Dose",
				type: "doselow",
				value: "--",
				htmlText: "--"
			},
			{
				name: "Moderate Intensity Dose",
				type: "dosemedium",
				value: "10 (20) mg",
				htmlText: "<b>10</b> <i>(20)</i> <b>mg</b>"
			},
			{
				name: "High Intensity Dose",
				type: "dosehigh",
				value: "(40*)&ndash;80 mg",
				htmlText: "<b>(40<strong>*</strong>)&ndash;80 mg</b>"
			},
			{
				name: "Other",
				type: "other",
				value: "other",
				htmlText: "Only the doses above are covered in Cholesterol Guideline"
			}
		],
		characteristics: [{
				name: "Half-life (h)",
				type: "halflife",
				value: "14 (Mean plasma elimination) 20-30 (inhibitory activity for HMG-CoA reductase is 20 to 30 hours due to the contribution of active metabolites)"
			},
			{
				name: "Lipophilic?",
				type: 'lipophilic',
				value: "Yes"
			},
			{
				name: "Optimal Frequency",
				type: "timeofday",
				value: "Any time of day/evening - Food not required"
			},
			{
				name: "P-glycoprotein substrate?",
				type: "pglycoprotein",
				value: "Yes"
			},
			{
				name: "Pregnancy Category X",
				type: 'pregnancy',
				value: "Yes"
			},
			{
				name: "Primary Metabolism",
				type: 'metabolism',
				value: "CYP3A4"
			},
		],
	},
	{
		id: "2",
		name: "Fluvastatin (Lescol&reg;)",
		dose: [{
				name: 'Low Intensity Dose',
				type: 'doselow',
				value: "20&ndash;40 mg",
				htmlText: "<i>20&ndash;40 mg</i>"
			},
			{
				name: 'Moderate Intensity Dose',
				type: 'dosemedium',
				value: "40 mg BID",
				htmlText: "<b>40 mg</b> BID"
			},
			{
				name: 'High Intensity Dose',
				type: 'dosehigh',
				value: "--",
				htmlText: "--"
			},
			{
				name: 'Other',
				type: 'other',
				value: "other",
				htmlText: "Only the doses above are covered in Cholesterol Guideline"
			}
		],
		characteristics: [{
				name: "Half-life (h)",
				type: "halflife",
				value: "3"
			},
			{
				name: "Lipophilic?",
				type: 'lipophilic',
				value: "Yes"
			},
			{
				name: "Optimal Frequency",
				type: "timeofday",
				value: "Evening/bedtime - Food not required"
			},
			{
				name: "P-glycoprotein substrate?",
				type: "pglycoprotein",
				value: "No"
			},
			{
				name: "Pregnancy Category X",
				type: 'pregnancy',
				value: "Yes"
			},
			{
				name: "Primary Metabolism",
				type: 'metabolism',
				value: "(75%) CYP2C9; (5%) CYP2C8; and 20% CYP3A4"
			},
		],
	},
	{
		id: "3",
		name: "Fluvastatin XL (Lescol XL&reg;)",
		dose: [{
				name: 'Low Intensity Dose',
				type: 'doselow',
				value: "--",
				htmlText: "--"
			},
			{
				name: 'Moderate Intensity Dose',
				type: 'dosemedium',
				value: "80 mg ",
				htmlText: "<i>80 mg</i>"
			},
			{
				name: 'High Intensity Dose',
				type: 'dosehigh',
				value: "--",
				htmlText: "--"
			},
			{
				name: 'Other',
				type: 'other',
				value: "other",
				htmlText: "Only the doses above are covered in Cholesterol Guideline"
			}
		],
		characteristics: [{
				name: "Half-life (h)",
				type: "halflife",
				value: "9"
			},
			{
				name: "Lipophilic?",
				type: 'lipophilic',
				value: "Yes"
			},
			{
				name: "Optimal Frequency",
				type: "timeofday",
				value: "Any time of day/evening-food not required"
			},
			{
				name: "P-glycoprotein substrate?",
				type: "pglycoprotein",
				value: "No"
			},
			{
				name: "Pregnancy Category X",
				type: 'pregnancy',
				value: "Yes"
			},
			{
				name: "Primary Metabolism",
				type: 'metabolism',
				value: "(75%) CYP2C9; (5%) CYP2C8; and 20% CYP3A4"
			},
		]
	},
	{
		id: "4",
		name: "Lovastatin (Mevacor&reg;)",
		dose: [{
				name: 'Low Intensity Dose',
				type: 'doselow',
				value: "20 mg",
				htmlText: "<b>20 mg</b>"
			},
			{
				name: 'Moderate Intensity Dose',
				type: 'dosemedium',
				value: "40 mg",
				htmlText: "<b>40 mg</b>"
			},
			{
				name: 'High Intensity Dose',
				type: 'dosehigh',
				value: "--",
				htmlText: "--"
			},
			{
				name: 'Other',
				type: 'other',
				value: "Other",
				htmlText: "Only the doses above are covered in Cholesterol Guideline"
			},
		],
		characteristics: [{
				name: "Half-life (h)",
				type: "halflife",
				value: "1. 1-1. 7"
			},
			{
				name: "Lipophilic?",
				type: 'lipophilic',
				value: "Yes"
			},
			{
				name: "Optimal Frequency",
				type: "timeofday",
				value: "Evening/bedtime - Food required except for Altoprev extended-release formulation"
			},
			{
				name: "P-glycoprotein substrate?",
				type: "pglycoprotein",
				value: "Yes"
			},
			{
				name: "Pregnancy Category X",
				type: 'pregnancy',
				value: "Yes"
			},
			{
				name: "Primary Metabolism",
				type: 'metabolism',
				value: "CYP3A4"
			},
		]
	},
	{
		id: "5",
		name: "Pitavastatin (Livalo&reg;)",
		dose: [{
				name: 'Low Intensity Dose',
				type: 'doselow',
				value: "1 mg",
				htmlText: "<i>1 mg</i>"
			},
			{
				name: 'Moderate Intensity Dose',
				type: 'dosemedium',
				value: "2-4 mg",
				htmlText: "<i>2-4 mg</i>"
			},
			{
				name: 'High Intensity Dose',
				type: 'dosehigh',
				value: "--",
				htmlText: "--"
			},
			{
				name: 'Other',
				type: 'other',
				value: "Other",
				htmlText: "Only the doses above are covered in Cholesterol Guideline"
			},
		],
		characteristics: [{
				name: "Half-life (h)",
				type: "halflife",
				value: "12"
			},
			{
				name: "Lipophilic?",
				type: 'lipophilic',
				value: "Yes"
			},
			{
				name: "Optimal Frequency",
				type: "timeofday",
				value: "Any time of day/evening - Food not required"
			},
			{
				name: "P-glycoprotein substrate?",
				type: "pglycoprotein",
				value: "No"
			},
			{
				name: "Pregnancy Category X",
				type: 'pregnancy',
				value: "Yes"
			},
			{
				name: "Primary Metabolism",
				type: 'metabolism',
				value: "Minimal CYP2C9 and CYP2C8"
			},
		]
	},
	{
		id: "6",
		name: "Pravastatin (Pravachol&reg;)",
		dose: [{
				name: 'Low Intensity Dose',
				type: 'doselow',
				value: "10&ndash;20 mg",
				htmlText: "<b>10&ndash;20 mg</b>"
			},
			{
				name: 'Moderate Intensity Dose',
				type: 'dosemedium',
				value: "40 (80) mg",
				htmlText: "<b>40 (80)</b> mg"
			},
			{
				name: 'High Intensity Dose',
				type: 'dosehigh',
				value: "--",
				htmlText: "--"
			},
			{
				name: 'Other',
				type: 'other',
				value: "Other",
				htmlText: "Only the doses above are covered in Cholesterol Guideline"
			},
		],
		characteristics: [{
				name: "Half-life (h)",
				type: "halflife",
				value: "1. 8"
			},
			{
				name: "Lipophilic?",
				type: 'lipophilic',
				value: "No"
			},
			{
				name: "Optimal way to take Time of day Food required?",
				type: "timeofday",
				value: "Any time of day/evening - Food not required"
			},
			{
				name: "P-glycoprotein substrate?",
				type: "pglycoprotein",
				value: "No"
			},
			{
				name: "Pregnancy Category X",
				type: 'pregnancy',
				value: "Yes"
			},
			{
				name: "Primary Metabolism",
				type: 'metabolism',
				value: "Minimal CYP450 metabolism"
			},
		]
	},
	{
		id: "7",
		name: "Rosuvastatin (Crestor&reg;)",
		dose: [{
				name: 'Low Intensity Dose',
				type: 'doselow',
				value: "--",
				htmlText: "--"
			},
			{
				name: 'Moderate Intensity Dose',
				type: 'dosemedium',
				value: "(5) 10mg",
				htmlText: "<i>(5)</i> <b>10 mg</b>"
			},
			{
				name: 'High Intensity Dose',
				type: 'dosehigh',
				value: "20 (40)mg",
				htmlText: "<b>20</b> <i>(40)</i> <b>mg</b>"
			},
			{
				name: 'Other',
				type: 'other',
				value: "other",
				htmlText: "Only the doses above are covered in Cholesterol Guideline"
			}
		],
		characteristics: [{
				name: "Half-life (h)",
				type: "halflife",
				value: "19"
			},
			{
				name: "Lipophilic?",
				type: 'lipophilic',
				value: "No"
			},
			{
				name: "Optimal Frequency",
				type: "timeofday",
				value: "Any time of day/evening - Food not required"
			},
			{
				name: "P-glycoprotein substrate?",
				type: "pglycoprotein",
				value: "No"
			},
			{
				name: "Pregnancy Category X",
				type: 'pregnancy',
				value: "Yes"
			},
			{
				name: "Primary Metabolism",
				type: 'metabolism',
				value: "Minimal CYP2C9"
			},
		]
	},
	{
		id: "8",
		name: "Simvastatin (Zocor&reg;)",
		alert: [{
			dose: '80',
			warning: 'Simvastatin &ndash; Initiation at 80mg daily or increase of up to 80mg daily may cause harm (III,  A). '
		}, ],
		dose: [{
				name: 'Low Intensity Dose',
				type: 'doselow',
				value: "10 mg",
				htmlText: "<i>10 mg</i>"
			},
			{
				name: 'Moderate Intensity Dose',
				type: 'dosemedium',
				value: "20-40** mg",
				htmlText: "<b>20-40<strong>**</strong> mg</b>"

			},
			{
				name: 'Other',
				type: 'other',
				value: "other",
				htmlText: "Only the doses above are covered in Cholesterol Guideline"
			}
		],
		characteristics: [{
				name: "Half-life (h)",
				type: "halflife",
				value: "1. 9"
			},
			{
				name: "Lipophilic?",
				type: 'lipophilic',
				value: "Yes"
			},
			{
				name: "Optimal Frequency",
				type: "timeofday",
				value: "Evening/bedtime - Food not required"
			},
			{
				name: "P-glycoprotein substrate?",
				type: "pglycoprotein",
				value: "Yes"
			},
			{
				name: "Pregnancy Category X",
				type: 'pregnancy',
				value: "Yes"
			},
			{
				name: "Primary Metabolism",
				type: 'metabolism',
				value: "CYP3A4"
			},
		]
	}
]