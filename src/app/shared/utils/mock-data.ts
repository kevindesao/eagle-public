import { Project } from 'app/models/project';

export const AjaxData: Project[] = [
  {
    CEAAInvolvement: {
      _id: '5e2626dd6d1ada0f608181c7',
      _schemaName: 'List',
      type: 'ceaaInvolvements',
      legislation: 2002,
      name: 'Coordinated',
      listOrder: 30,
      read: ['public', 'staff', 'sysadmin'],
      write: ['staff', 'sysadmin']
    },
    CELead: 'Compliance & Enforcement Branch',
    CELeadEmail: 'eao.compliance@gov.bc.ca',
    CELeadPhone: '250-387-0131',
    centroid: [-120.4667, 50.6333],
    description:
      'KGHM Ajax Mining Inc.  proposes to develop a new open-pit copper and gold mine with a production capacity of up to 24 million tonnes of ore per year. The mine\'s life expectancy is 23 years.',
    eacDecision: {
      _id: '5e2626dd6d1ada0f608181da',
      _schemaName: 'List',
      type: 'eaDecisions',
      legislation: 2002,
      name: 'Certificate Refused',
      listOrder: 20,
      read: ['public', 'staff', 'sysadmin'],
      write: ['staff', 'sysadmin']
    },
    location: 'Southern Interior BC',
    projectLeadId: '5c33a481c99e4d002498eeee',
    projectLead: 'Nathan Braun',
    projectLeadEmail: 'Nathan.Braun@gov.bc.ca',
    projectLeadPhone: '778-698-9280',
    phaseHistory: [],
    proponent: {
      _id: '58850f69aaecd9001b8085cd',
      _schemaName: 'Organization',
      description: '',
      name: 'KGHM Ajax Mining Incorporated',
      updatedBy: '58850f2faaecd9001b8083b6',
      addedBy: '58850f2faaecd9001b8083b6',
      dateUpdated: '2017-01-22T20:00:41.558Z',
      dateAdded: '2017-01-22T20:00:41.558Z',
      country: '',
      postal: '',
      province: '',
      city: '',
      address2: '',
      address1: '',
      companyType: 'Proponent/Certificate Holder',
      parentCompany: '',
      companyLegal: '',
      company: 'KGHM Ajax Mining Incorporated',
      __v: 0
    },
    region: 'Thompson-Nicola',
    responsibleEPDId: '5c33a481c99e4d002498eeee',
    responsibleEPD: 'Nathan Braun',
    responsibleEPDEmail: 'Nathan.Braun@gov.bc.ca',
    responsibleEPDPhone: '778-698-9280',
    type: 'Mines',
    legislation: '2002 Environmental Assessment Act',
    addedBy: '58850f2faaecd9001b8083b6',
    build: 'new',
    CEAALink: 'http://www.ceaa-acee.gc.ca/050/details-eng.cfm?evaluation=62225',
    code: 'ajax-mine',
    commodity: '',
    currentPhaseName: 'Decision',
    dateAdded: 'Sun Jan 22 2017 12:10:00 GMT-0800 (Pacific Standard Time)',
    dateCommentsClosed: null,
    dateUpdated: '2019-01-10T21:03:15.945Z',
    decisionDate: '2017-12-13T08:00:00.000Z',
    duration: '90',
    eaoMember: 'project-eao-staff',
    fedElecDist: '',
    isTermsAgreed: false,
    primaryContact: null,
    proMember: 'proponent-team',
    provElecDist: 'FRN; KAS',
    sector: 'Mineral Mines',
    shortName: 'ajax-mine',
    status: 'In Progress',
    substitution: false,
    name: 'Ajax Mine',
    overallProgress: 0,
    _id: '58851197aaecd9001b8227cc',
    read: [
      'project-proponent',
      'project-admin',
      'system-eao',
      'project-intake',
      'project-team',
      'project-system-admin',
      'public'
    ],
    commentPeriodForBanner: [],
    nature: 'Unknown nature value'
  }
];

export const regionsData = [
  'Cariboo',
  'Kootenay',
  'Okanagan',
  'Lower Mainland',
  'Omineca',
  'Peace',
  'Skeena',
  'Vancouver Island',
  'Thompson-Nicola'
];