"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const adjectives = [
    'able',
    'above',
    'absent',
    'absolute',
    'abstract',
    'abundant',
    'academic',
    'acceptable',
    'accepted',
    'accessible',
    'accurate',
    'accused',
    'active',
    'actual',
    'acute',
    'added',
    'additional',
    'adequate',
    'adjacent',
    'administrative',
    'adorable',
    'advanced',
    'adverse',
    'advisory',
    'aesthetic',
    'afraid',
    'african',
    'aggregate',
    'aggressive',
    'agreeable',
    'agreed',
    'agricultural',
    'alert',
    'alive',
    'alleged',
    'allied',
    'alone',
    'alright',
    'alternative',
    'amateur',
    'amazing',
    'ambitious',
    'american',
    'amused',
    'ancient',
    'angry',
    'annoyed',
    'annual',
    'anonymous',
    'anxious',
    'appalling',
    'apparent',
    'applicable',
    'appropriate',
    'arab',
    'arbitrary',
    'architectural',
    'armed',
    'arrogant',
    'artificial',
    'artistic',
    'ashamed',
    'asian',
    'asleep',
    'assistant',
    'associated',
    'atomic',
    'attractive',
    'australian',
    'automatic',
    'autonomous',
    'available',
    'average',
    'awake',
    'aware',
    'awful',
    'awkward',
    'back',
    'bad',
    'balanced',
    'bare',
    'basic',
    'beautiful',
    'beneficial',
    'better',
    'bewildered',
    'big',
    'binding',
    'biological',
    'bitter',
    'bizarre',
    'black',
    'blank',
    'blind',
    'blonde',
    'bloody',
    'blue',
    'blushing',
    'boiling',
    'bold',
    'bored',
    'boring',
    'bottom',
    'brainy',
    'brave',
    'breakable',
    'breezy',
    'brief',
    'bright',
    'brilliant',
    'british',
    'broad',
    'broken',
    'brown',
    'bumpy',
    'burning',
    'busy',
    'calm',
    'canadian',
    'capable',
    'capitalist',
    'careful',
    'casual',
    'catholic',
    'causal',
    'cautious',
    'central',
    'certain',
    'changing',
    'characteristic',
    'charming',
    'cheap',
    'cheerful',
    'chemical',
    'chief',
    'chilly',
    'chinese',
    'chosen',
    'christian',
    'chronic',
    'chubby',
    'circular',
    'civic',
    'civil',
    'civilian',
    'classic',
    'classical',
    'clean',
    'clear',
    'clever',
    'clinical',
    'close',
    'closed',
    'cloudy',
    'clumsy',
    'coastal',
    'cognitive',
    'coherent',
    'cold',
    'collective',
    'colonial',
    'colorful',
    'colossal',
    'coloured',
    'colourful',
    'combative',
    'combined',
    'comfortable',
    'coming',
    'commercial',
    'common',
    'communist',
    'compact',
    'comparable',
    'comparative',
    'compatible',
    'competent',
    'competitive',
    'complete',
    'complex',
    'complicated',
    'comprehensive',
    'compulsory',
    'conceptual',
    'concerned',
    'concrete',
    'condemned',
    'confident',
    'confidential',
    'confused',
    'conscious',
    'conservation',
    'conservative',
    'considerable',
    'consistent',
    'constant',
    'constitutional',
    'contemporary',
    'content',
    'continental',
    'continued',
    'continuing',
    'continuous',
    'controlled',
    'controversial',
    'convenient',
    'conventional',
    'convinced',
    'convincing',
    'cooing',
    'cool',
    'cooperative',
    'corporate',
    'correct',
    'corresponding',
    'costly',
    'courageous',
    'crazy',
    'creative',
    'creepy',
    'criminal',
    'critical',
    'crooked',
    'crowded',
    'crucial',
    'crude',
    'cruel',
    'cuddly',
    'cultural',
    'curious',
    'curly',
    'current',
    'curved',
    'cute',
    'daily',
    'damaged',
    'damp',
    'dangerous',
    'dark',
    'dead',
    'deaf',
    'deafening',
    'dear',
    'decent',
    'decisive',
    'deep',
    'defeated',
    'defensive',
    'defiant',
    'definite',
    'deliberate',
    'delicate',
    'delicious',
    'delighted',
    'delightful',
    'democratic',
    'dependent',
    'depressed',
    'desirable',
    'desperate',
    'detailed',
    'determined',
    'developed',
    'developing',
    'devoted',
    'different',
    'difficult',
    'digital',
    'diplomatic',
    'direct',
    'dirty',
    'disabled',
    'disappointed',
    'disastrous',
    'disciplinary',
    'disgusted',
    'distant',
    'distinct',
    'distinctive',
    'distinguished',
    'disturbed',
    'disturbing',
    'diverse',
    'divine',
    'dizzy',
    'domestic',
    'dominant',
    'double',
    'doubtful',
    'drab',
    'dramatic',
    'dreadful',
    'driving',
    'drunk',
    'dry',
    'dual',
    'due',
    'dull',
    'dusty',
    'dutch',
    'dying',
    'dynamic',
    'eager',
    'early',
    'eastern',
    'easy',
    'economic',
    'educational',
    'eerie',
    'effective',
    'efficient',
    'elaborate',
    'elated',
    'elderly',
    'eldest',
    'electoral',
    'electric',
    'electrical',
    'electronic',
    'elegant',
    'eligible',
    'embarrassed',
    'embarrassing',
    'emotional',
    'empirical',
    'empty',
    'enchanting',
    'encouraging',
    'endless',
    'energetic',
    'english',
    'enormous',
    'enthusiastic',
    'entire',
    'entitled',
    'envious',
    'environmental',
    'equal',
    'equivalent',
    'essential',
    'established',
    'estimated',
    'ethical',
    'ethnic',
    'european',
    'eventual',
    'everyday',
    'evident',
    'evil',
    'evolutionary',
    'exact',
    'excellent',
    'exceptional',
    'excess',
    'excessive',
    'excited',
    'exciting',
    'exclusive',
    'existing',
    'exotic',
    'expected',
    'expensive',
    'experienced',
    'experimental',
    'explicit',
    'extended',
    'extensive',
    'external',
    'extra',
    'extraordinary',
    'extreme',
    'exuberant',
    'faint',
    'fair',
    'faithful',
    'familiar',
    'famous',
    'fancy',
    'fantastic',
    'far',
    'fascinating',
    'fashionable',
    'fast',
    'fat',
    'fatal',
    'favourable',
    'favourite',
    'federal',
    'fellow',
    'female',
    'feminist',
    'few',
    'fierce',
    'filthy',
    'final',
    'financial',
    'fine',
    'firm',
    'fiscal',
    'fit',
    'fixed',
    'flaky',
    'flat',
    'flexible',
    'fluffy',
    'fluttering',
    'flying',
    'following',
    'fond',
    'foolish',
    'foreign',
    'formal',
    'formidable',
    'forthcoming',
    'fortunate',
    'forward',
    'fragile',
    'frail',
    'frantic',
    'free',
    'french',
    'frequent',
    'fresh',
    'friendly',
    'frightened',
    'front',
    'frozen',
    'fucking',
    'full',
    'fun',
    'functional',
    'fundamental',
    'funny',
    'furious',
    'future',
    'fuzzy',
    'gastric',
    'gay',
    'general',
    'generous',
    'genetic',
    'gentle',
    'genuine',
    'geographical',
    'german',
    'giant',
    'gigantic',
    'given',
    'glad',
    'glamorous',
    'gleaming',
    'global',
    'glorious',
    'golden',
    'good',
    'gorgeous',
    'gothic',
    'governing',
    'graceful',
    'gradual',
    'grand',
    'grateful',
    'greasy',
    'great',
    'greek',
    'green',
    'grey',
    'grieving',
    'grim',
    'gross',
    'grotesque',
    'growing',
    'grubby',
    'grumpy',
    'guilty',
    'handicapped',
    'handsome',
    'happy',
    'hard',
    'harsh',
    'head',
    'healthy',
    'heavy',
    'helpful',
    'helpless',
    'hidden',
    'high',
    'hilarious',
    'hissing',
    'historic',
    'historical',
    'hollow',
    'holy',
    'homeless',
    'homely',
    'hon',
    'honest',
    'horizontal',
    'horrible',
    'hostile',
    'hot',
    'huge',
    'human',
    'hungry',
    'hurt',
    'hushed',
    'husky',
    'icy',
    'ideal',
    'identical',
    'ideological',
    'ill',
    'illegal',
    'imaginative',
    'immediate',
    'immense',
    'imperial',
    'implicit',
    'important',
    'impossible',
    'impressed',
    'impressive',
    'improved',
    'inadequate',
    'inappropriate',
    'inc',
    'inclined',
    'increased',
    'increasing',
    'incredible',
    'independent',
    'indian',
    'indirect',
    'individual',
    'industrial',
    'inevitable',
    'influential',
    'informal',
    'inherent',
    'initial',
    'injured',
    'inland',
    'inner',
    'innocent',
    'innovative',
    'inquisitive',
    'instant',
    'institutional',
    'insufficient',
    'intact',
    'integral',
    'integrated',
    'intellectual',
    'intelligent',
    'intense',
    'intensive',
    'interested',
    'interesting',
    'interim',
    'interior',
    'intermediate',
    'internal',
    'international',
    'intimate',
    'invisible',
    'involved',
    'iraqi',
    'irish',
    'irrelevant',
    'islamic',
    'isolated',
    'israeli',
    'italian',
    'itchy',
    'japanese',
    'jealous',
    'jewish',
    'jittery',
    'joint',
    'jolly',
    'joyous',
    'judicial',
    'juicy',
    'junior',
    'just',
    'keen',
    'key',
    'kind',
    'known',
    'korean',
    'labour',
    'large',
    'late',
    'latin',
    'lazy',
    'leading',
    'left',
    'legal',
    'legislative',
    'legitimate',
    'lengthy',
    'lesser',
    'level',
    'lexical',
    'liable',
    'liberal',
    'light',
    'like',
    'likely',
    'limited',
    'linear',
    'linguistic',
    'liquid',
    'literary',
    'little',
    'live',
    'lively',
    'living',
    'local',
    'logical',
    'lonely',
    'long',
    'loose',
    'lost',
    'loud',
    'lovely',
    'low',
    'loyal',
    'ltd',
    'lucky',
    'mad',
    'magenta',
    'magic',
    'magnetic',
    'magnificent',
    'main',
    'major',
    'male',
    'mammoth',
    'managerial',
    'managing',
    'manual',
    'many',
    'marginal',
    'marine',
    'marked',
    'married',
    'marvellous',
    'marxist',
    'mass',
    'massive',
    'mathematical',
    'mature',
    'maximum',
    'mean',
    'meaningful',
    'mechanical',
    'medical',
    'medieval',
    'melodic',
    'melted',
    'mental',
    'mere',
    'metropolitan',
    'mid',
    'middle',
    'mighty',
    'mild',
    'military',
    'miniature',
    'minimal',
    'minimum',
    'ministerial',
    'minor',
    'miserable',
    'misleading',
    'missing',
    'misty',
    'mixed',
    'moaning',
    'mobile',
    'moderate',
    'modern',
    'modest',
    'molecular',
    'monetary',
    'monthly',
    'moral',
    'motionless',
    'muddy',
    'multiple',
    'mushy',
    'musical',
    'mute',
    'mutual',
    'mysterious',
    'naked',
    'narrow',
    'nasty',
    'national',
    'native',
    'natural',
    'naughty',
    'naval',
    'near',
    'nearby',
    'neat',
    'necessary',
    'negative',
    'neighbouring',
    'nervous',
    'net',
    'neutral',
    'new',
    'nice',
    'noble',
    'noisy',
    'normal',
    'northern',
    'nosy',
    'notable',
    'novel',
    'nuclear',
    'numerous',
    'nursing',
    'nutritious',
    'nutty',
    'obedient',
    'objective',
    'obliged',
    'obnoxious',
    'obvious',
    'occasional',
    'occupational',
    'odd',
    'official',
    'ok',
    'okay',
    'old',
    'olympic',
    'only',
    'open',
    'operational',
    'opposite',
    'optimistic',
    'oral',
    'orange',
    'ordinary',
    'organic',
    'organisational',
    'original',
    'orthodox',
    'other',
    'outdoor',
    'outer',
    'outrageous',
    'outside',
    'outstanding',
    'overall',
    'overseas',
    'overwhelming',
    'painful',
    'pale',
    'palestinian',
    'panicky',
    'parallel',
    'parental',
    'parliamentary',
    'partial',
    'particular',
    'passing',
    'passive',
    'past',
    'patient',
    'payable',
    'peaceful',
    'peculiar',
    'perfect',
    'permanent',
    'persistent',
    'personal',
    'petite',
    'philosophical',
    'physical',
    'pink',
    'plain',
    'planned',
    'plastic',
    'pleasant',
    'pleased',
    'poised',
    'polish',
    'polite',
    'political',
    'poor',
    'popular',
    'positive',
    'possible',
    'potential',
    'powerful',
    'practical',
    'precious',
    'precise',
    'preferred',
    'pregnant',
    'preliminary',
    'premier',
    'prepared',
    'present',
    'presidential',
    'pretty',
    'previous',
    'prickly',
    'primary',
    'prime',
    'primitive',
    'principal',
    'printed',
    'prior',
    'private',
    'probable',
    'productive',
    'professional',
    'profitable',
    'profound',
    'progressive',
    'prominent',
    'promising',
    'proper',
    'proposed',
    'prospective',
    'protective',
    'protestant',
    'proud',
    'provincial',
    'psychiatric',
    'psychological',
    'public',
    'puny',
    'pure',
    'purple',
    'purring',
    'puzzled',
    'quaint',
    'qualified',
    'quick',
    'quickest',
    'quiet',
    'racial',
    'radical',
    'rainy',
    'random',
    'rapid',
    'rare',
    'raspy',
    'rational',
    'ratty',
    'raw',
    'ready',
    'real',
    'realistic',
    'rear',
    'reasonable',
    'recent',
    'red',
    'reduced',
    'redundant',
    'regional',
    'registered',
    'regular',
    'regulatory',
    'related',
    'relative',
    'relaxed',
    'relevant',
    'reliable',
    'relieved',
    'religious',
    'reluctant',
    'remaining',
    'remarkable',
    'remote',
    'renewed',
    'representative',
    'repulsive',
    'required',
    'resident',
    'residential',
    'resonant',
    'respectable',
    'respective',
    'responsible',
    'resulting',
    'retail',
    'retired',
    'revolutionary',
    'rich',
    'ridiculous',
    'right',
    'rigid',
    'ripe',
    'rising',
    'rival',
    'roasted',
    'robust',
    'rolling',
    'roman',
    'romantic',
    'rotten',
    'rough',
    'round',
    'royal',
    'rubber',
    'rude',
    'ruling',
    'running',
    'rural',
    'russian',
    'sacred',
    'sad',
    'safe',
    'salty',
    'satisfactory',
    'satisfied',
    'scared',
    'scary',
    'scattered',
    'scientific',
    'scornful',
    'scottish',
    'scrawny',
    'screeching',
    'secondary',
    'secret',
    'secure',
    'select',
    'selected',
    'selective',
    'selfish',
    'semantic',
    'senior',
    'sensible',
    'sensitive',
    'separate',
    'serious',
    'severe',
    'sexual',
    'shaggy',
    'shaky',
    'shallow',
    'shared',
    'sharp',
    'sheer',
    'shiny',
    'shivering',
    'shocked',
    'short',
    'shrill',
    'shy',
    'sick',
    'significant',
    'silent',
    'silky',
    'silly',
    'similar',
    'simple',
    'single',
    'skilled',
    'skinny',
    'sleepy',
    'slight',
    'slim',
    'slimy',
    'slippery',
    'slow',
    'small',
    'smart',
    'smiling',
    'smoggy',
    'smooth',
    'social',
    'socialist',
    'soft',
    'solar',
    'sole',
    'solid',
    'sophisticated',
    'sore',
    'sorry',
    'sound',
    'sour',
    'southern',
    'soviet',
    'spanish',
    'spare',
    'sparkling',
    'spatial',
    'special',
    'specific',
    'specified',
    'spectacular',
    'spicy',
    'spiritual',
    'splendid',
    'spontaneous',
    'sporting',
    'spotless',
    'spotty',
    'square',
    'squealing',
    'stable',
    'stale',
    'standard',
    'static',
    'statistical',
    'statutory',
    'steady',
    'steep',
    'sticky',
    'stiff',
    'still',
    'stingy',
    'stormy',
    'straight',
    'straightforward',
    'strange',
    'strategic',
    'strict',
    'striking',
    'striped',
    'strong',
    'structural',
    'stuck',
    'stupid',
    'subjective',
    'subsequent',
    'substantial',
    'subtle',
    'successful',
    'successive',
    'sudden',
    'sufficient',
    'suitable',
    'sunny',
    'super',
    'superb',
    'superior',
    'supporting',
    'supposed',
    'supreme',
    'sure',
    'surprised',
    'surprising',
    'surrounding',
    'surviving',
    'suspicious',
    'sweet',
    'swift',
    'swiss',
    'symbolic',
    'sympathetic',
    'systematic',
    'tall',
    'tame',
    'tan',
    'tart',
    'tasteless',
    'tasty',
    'technical',
    'technological',
    'teenage',
    'temporary',
    'tender',
    'tense',
    'terrible',
    'territorial',
    'testy',
    'then',
    'theoretical',
    'thick',
    'thin',
    'thirsty',
    'thorough',
    'thoughtful',
    'thoughtless',
    'thundering',
    'tight',
    'tiny',
    'tired',
    'top',
    'tory',
    'total',
    'tough',
    'toxic',
    'traditional',
    'tragic',
    'tremendous',
    'tricky',
    'tropical',
    'troubled',
    'turkish',
    'typical',
    'ugliest',
    'ugly',
    'ultimate',
    'unable',
    'unacceptable',
    'unaware',
    'uncertain',
    'unchanged',
    'uncomfortable',
    'unconscious',
    'underground',
    'underlying',
    'unemployed',
    'uneven',
    'unexpected',
    'unfair',
    'unfortunate',
    'unhappy',
    'uniform',
    'uninterested',
    'unique',
    'united',
    'universal',
    'unknown',
    'unlikely',
    'unnecessary',
    'unpleasant',
    'unsightly',
    'unusual',
    'unwilling',
    'upper',
    'upset',
    'uptight',
    'urban',
    'urgent',
    'uruguayan',
    'used',
    'useful',
    'useless',
    'usual',
    'vague',
    'valid',
    'valuable',
    'variable',
    'varied',
    'various',
    'varying',
    'vast',
    'verbal',
    'vertical',
    'very',
    'victorian',
    'victorious',
    'violent',
    'visible',
    'visiting',
    'visual',
    'vital',
    'vivacious',
    'vivid',
    'vocational',
    'voiceless',
    'voluntary',
    'vulnerable',
    'wandering',
    'warm',
    'wasteful',
    'watery',
    'weak',
    'wealthy',
    'weary',
    'wee',
    'weekly',
    'weird',
    'welcome',
    'well',
    'welsh',
    'western',
    'wet',
    'whispering',
    'white',
    'whole',
    'wicked',
    'wide',
    'widespread',
    'wild',
    'willing',
    'wise',
    'witty',
    'wonderful',
    'wooden',
    'working',
    'worldwide',
    'worried',
    'worrying',
    'worthwhile',
    'worthy',
    'written',
    'wrong',
    'yellow',
    'young',
    'yummy',
    'zany',
    'zealous',
];
exports.default = adjectives;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRqZWN0aXZlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy93b3Jkcy9hZGplY3RpdmVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsTUFBTSxVQUFVLEdBQUc7SUFDakIsTUFBTTtJQUNOLE9BQU87SUFDUCxRQUFRO0lBQ1IsVUFBVTtJQUNWLFVBQVU7SUFDVixVQUFVO0lBQ1YsVUFBVTtJQUNWLFlBQVk7SUFDWixVQUFVO0lBQ1YsWUFBWTtJQUNaLFVBQVU7SUFDVixTQUFTO0lBQ1QsUUFBUTtJQUNSLFFBQVE7SUFDUixPQUFPO0lBQ1AsT0FBTztJQUNQLFlBQVk7SUFDWixVQUFVO0lBQ1YsVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixVQUFVO0lBQ1YsVUFBVTtJQUNWLFNBQVM7SUFDVCxVQUFVO0lBQ1YsV0FBVztJQUNYLFFBQVE7SUFDUixTQUFTO0lBQ1QsV0FBVztJQUNYLFlBQVk7SUFDWixXQUFXO0lBQ1gsUUFBUTtJQUNSLGNBQWM7SUFDZCxPQUFPO0lBQ1AsT0FBTztJQUNQLFNBQVM7SUFDVCxRQUFRO0lBQ1IsT0FBTztJQUNQLFNBQVM7SUFDVCxhQUFhO0lBQ2IsU0FBUztJQUNULFNBQVM7SUFDVCxXQUFXO0lBQ1gsVUFBVTtJQUNWLFFBQVE7SUFDUixTQUFTO0lBQ1QsT0FBTztJQUNQLFNBQVM7SUFDVCxRQUFRO0lBQ1IsV0FBVztJQUNYLFNBQVM7SUFDVCxXQUFXO0lBQ1gsVUFBVTtJQUNWLFlBQVk7SUFDWixhQUFhO0lBQ2IsTUFBTTtJQUNOLFdBQVc7SUFDWCxlQUFlO0lBQ2YsT0FBTztJQUNQLFVBQVU7SUFDVixZQUFZO0lBQ1osVUFBVTtJQUNWLFNBQVM7SUFDVCxPQUFPO0lBQ1AsUUFBUTtJQUNSLFdBQVc7SUFDWCxZQUFZO0lBQ1osUUFBUTtJQUNSLFlBQVk7SUFDWixZQUFZO0lBQ1osV0FBVztJQUNYLFlBQVk7SUFDWixXQUFXO0lBQ1gsU0FBUztJQUNULE9BQU87SUFDUCxPQUFPO0lBQ1As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