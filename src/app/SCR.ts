export const SCRData = {
  resourceType: 'Bundle',
  id: '739DD42E-83CB-4F3E-B966-F02C43309939',
  identifier: {
    system: 'https://tools.ietf.org/html/rfc4122',
    value: 'D2A87C77-6A9E-11EB-A8AC-F40343488B15',
  },
  type: 'searchset',
  timestamp: '2021-02-09T06:19:54+00:00',
  total: 48,
  entry: [
    {
      fullUrl:
        'https://sandbox.api.service.nhs.uk/summary-care-record/FHIR/R4/Composition/FA60BE64-1F34-11EB-A2A8-000C29A364EB',
      resource: {
        resourceType: 'Composition',
        id: 'FA60BE64-1F34-11EB-A2A8-000C29A364EB',
        meta: {
          lastUpdated: '2020-11-17T02:00:00+00:00',
        },
        identifier: {
          system: 'https://tools.ietf.org/html/rfc4122',
          value: 'BF4180FD-C403-4EF7-A4AB-E07303AF5477',
        },
        status: 'final',
        type: {
          coding: [
            {
              system: 'http://snomed.info/sct',
              code: '196981000000101',
              display: 'General Practice Summary',
            },
          ],
        },
        category: [
          {
            coding: [
              {
                system: 'http://snomed.info/sct',
                code: '163171000000105',
                display: 'Care Professional Documentation',
              },
            ],
          },
        ],
        subject: {
          reference: 'Patient/8B4F78CB-014F-44D5-90A2-3C0590B3325F',
        },
        date: '2020-11-17T02:00:00+00:00',
        author: [
          {
            reference: 'PractitionerRole/AF504087-BF5D-4910-B4E5-518C709D4E59',
          },
        ],
        relatesTo: [
          {
            code: 'replaces',
            targetIdentifier: {
              value: 'D18B57ED-992E-45A2-A6AF-55200D20F48E',
            },
          },
        ],
        section: [
          {
            title: 'General Practice Summary',
            code: {
              coding: [
                {
                  code: 'Title',
                },
              ],
            },
            text: {
              status: 'generated',
              div: '<div xmlns="http://www.w3.org/1999/xhtml"><h3 id="Disclaimer">Sourced from the patient\'s General Practice record. This summary may not include all the information pertinent to this patient.</h3><p id="CreateTime">Summary Created: 14-May-2020 14:31</p><p id="RegistrationStartedStatement" class="HighlightedStatement">At the time this record was created, this patient had recently registered with the GP Practice. GP Summary information may not be complete.</p><p id="Author">Created by: SMITH, Sean (Mr)</p><p id="Practice">EMISWebCR1 50004, Fulford Grange, Rawdon, Leeds, West Yorkshire, LS19 7BY.</p></div>',
            },
          },
          {
            title: 'Allergies and Adverse Reactions',
            code: {
              coding: [
                {
                  code: 'AllergiesHeader',
                },
              ],
            },
            text: {
              status: 'generated',
              div: '<div xmlns="http://www.w3.org/1999/xhtml"><table summary="This table includes information about this patient\'s allergies and adverse reactions." id="Allergies"><thead><tr><th>Date</th><th>Description</th><th>Certainty</th><th>Severity</th><th>Supporting Information</th></tr></thead><tbody><tr class="oddRow"><td>12-May-2020</td><td>Toxic reaction to wasp sting</td><td/><td/><td>Problem; First</td></tr></tbody></table></div>',
            },
          },
          {
            title:
              'Acute Medications (For the 12 month period 14-May-2019 to 14-May-2020)',
            code: {
              coding: [
                {
                  code: 'AcuteMedsHeader',
                },
              ],
            },
            text: {
              status: 'generated',
              div: '<div xmlns="http://www.w3.org/1999/xhtml"><table summary="This table includes information about this patient\'s acute medications." id="AcuteMeds"><thead><tr><th>Type</th><th>Date</th><th>Medication Item</th><th>Dosage Instructions</th><th>Quantity</th></tr></thead><tbody><tr class="oddRow"><td>Acute Medication</td><td>Prescribed: 12-May-2020</td><td>Co-codamol 8mg/500mg effervescent tablets</td><td>One To Be Taken Four Times A Day</td><td>112 tablet</td></tr></tbody></table></div>',
            },
          },
          {
            title: 'Current Repeat Medications',
            code: {
              coding: [
                {
                  code: 'RepeatMedsHeader',
                },
              ],
            },
            text: {
              status: 'generated',
              div: '<div xmlns="http://www.w3.org/1999/xhtml"><table summary="This table includes information about this patient\'s current repeat medications." id="RepeatMeds"><thead><tr><th>Type</th><th>Date</th><th>Medication Item</th><th>Dosage Instructions</th><th>Quantity</th></tr></thead><tbody><tr class="oddRow"><td>Repeat Medication</td><td>Last Issued: 12-May-2020</td><td>Paracetamol 250mg/5ml oral suspension</td><td>One 5ml Spoonful Every 4 To 6 Hours When Necessary. No More Than 4 doses in 24 Hours</td><td>40 ml</td></tr></tbody></table></div>',
            },
          },
          {
            title:
              'Discontinued Repeat Medications (For the 6 month period 14-Nov-2019 to 14-May-2020)',
            code: {
              coding: [
                {
                  code: 'DiscRepeatMedsHeader',
                },
              ],
            },
            text: {
              status: 'generated',
              div: '<div xmlns="http://www.w3.org/1999/xhtml"><table summary="This table includes information about this patient\'s discontinued repeat medications." id="DiscRepeatMeds"><thead><tr><th>Type</th><th>Date</th><th>Medication Item</th><th>Dosage Instructions</th><th>Quantity</th></tr></thead><tbody><tr><td colspan="5">No relevant information available for this category.</td></tr></tbody></table></div>',
            },
          },
          {
            title: 'Risks to Patient',
            code: {
              coding: [
                {
                  code: 'RisksToPatientHeader',
                },
              ],
            },
            text: {
              status: 'generated',
              div: '<div xmlns="http://www.w3.org/1999/xhtml"><table id="RisksToPatient"><thead><tr><th>Date</th><th>Description</th><th>Additional information</th></tr></thead><tbody><tr class="oddRow"><td>14-May-2020</td><td>Low risk category for developing complication from COVID-19 infection</td><td>Problem; Review</td></tr></tbody></table></div>',
            },
          },
          {
            title: 'Diagnoses',
            code: {
              coding: [
                {
                  code: 'DiagnosesHeader',
                },
              ],
            },
            text: {
              status: 'generated',
              div: '<div xmlns="http://www.w3.org/1999/xhtml"><table id="Diagnoses"><thead><tr><th>Date</th><th>Description</th><th>Additional information</th></tr></thead><tbody><tr class="oddRow"><td>13-May-2020</td><td>COVID-19 confirmed by laboratory test</td><td>Problem; First, test</td></tr></tbody></table></div>',
            },
            entry: [
              {
                reference: 'Condition/FCB84E15-02E5-495C-B334-D0685DCB0687',
              },
              {
                reference: 'Condition/0F582D97-8F89-11EA-8B2D-B741F13EFC47',
              },
              {
                reference: 'Condition/958E584C-25B8-4BD7-A71D-7625FDC1ACD6',
              },
              {
                reference: 'Condition/8CEB2867-551B-43D0-88B5-3278DA20A6B0',
              },
              {
                reference: 'Condition/6ECDAE6D-32AB-421C-AA8F-0B1ABA454C70',
              },
            ],
          },
          {
            title: 'Problems and Issues',
            code: {
              coding: [
                {
                  code: 'ProblemsHeader',
                },
              ],
            },
            text: {
              status: 'generated',
              div: '<div xmlns="http://www.w3.org/1999/xhtml"><table id="Problems"><thead><tr><th>Date</th><th>Description</th><th>Additional information</th></tr></thead><tbody><tr class="oddRow"><td>14-May-2020</td><td>2019-nCoV (novel coronavirus) detected</td><td>Significant Active</td></tr></tbody></table></div>',
            },
          },
          {
            title: 'Clinical Observations and Findings',
            code: {
              coding: [
                {
                  code: 'ObservationsHeader',
                },
              ],
            },
            text: {
              status: 'generated',
              div: '<div xmlns="http://www.w3.org/1999/xhtml"><table id="Observations"><thead><tr><th>Date</th><th>Description</th><th>Additional information</th></tr></thead><tbody><tr class="oddRow"><td>14-May-2020</td><td>2019-nCoV (novel coronavirus) detected</td><td>Problem; New</td></tr></tbody></table></div>',
            },
          },
          {
            title: 'Treatments',
            code: {
              coding: [
                {
                  code: 'TreatmentsHeader',
                },
              ],
            },
            text: {
              status: 'generated',
              div: '<div xmlns="http://www.w3.org/1999/xhtml"><table id="Treatments"><thead><tr><th>Date</th><th>Description</th><th>Additional information</th></tr></thead><tbody><tr class="oddRow"><td>13-May-2020</td><td>2019-nCoV (novel coronavirus) vaccination</td><td>Problem; First, Manufacturer: jh, Expiry Date: 29-May-2020, Batch Number: 2, GMS: GMS, Injection site: Left arm, test</td></tr></tbody></table></div>',
            },
          },
          {
            title: 'Investigation Results',
            code: {
              coding: [
                {
                  code: 'ResultsHeader',
                },
              ],
            },
            text: {
              status: 'generated',
              div: '<div xmlns="http://www.w3.org/1999/xhtml"><table id="Results"><thead><tr><th>Date</th><th>Description</th><th>Additional information</th></tr></thead><tbody><tr class="oddRow"><td>13-May-2020</td><td>Assessment using COVID-19 severity scale</td><td>Problem; First, test</td></tr></tbody></table></div>',
            },
            entry: [
              {
                reference: 'Observation/F17999D2-FFE7-4CA4-8CE8-52CB45FF6F49',
              },
              {
                reference: 'Observation/EE608FAA-2433-4BAD-A0D5-4A10E45AB2B0',
              },
              {
                reference: 'Observation/0F582D97-8F89-11CA-8B2D-B741F13EFC47',
              },
            ],
          },
          {
            title: 'Care Events',
            code: {
              coding: [
                {
                  code: 'EventsHeader',
                },
              ],
            },
            text: {
              status: 'generated',
              div: '<div xmlns="http://www.w3.org/1999/xhtml"><table id="Events"><thead><tr><th>Date</th><th>Description</th><th>Additional information</th></tr></thead><tbody><tr class="oddRow"><td>13-May-2020</td><td>Did not attend 2019-nCoV (novel coronavirus) vaccination</td><td>Problem; First, test</td></tr></tbody></table></div>',
            },
          },
          {
            title: 'Administrative Procedures',
            code: {
              coding: [
                {
                  code: 'ProceduresHeader',
                },
              ],
            },
            text: {
              status: 'generated',
              div: '<div xmlns="http://www.w3.org/1999/xhtml"><table id="Procedures"><thead><tr><th>Date</th><th>Description</th><th>Additional information</th></tr></thead><tbody><tr class="oddRow"><td>14-May-2020</td><td>Household isolation note issued to patient</td><td>Test</td></tr></tbody></table></div>',
            },
          },
          {
            title: 'Provision of Advice and Information to Patients and Carers',
            code: {
              coding: [
                {
                  code: 'AdviceHeader',
                },
              ],
            },
            text: {
              status: 'generated',
              div: '<div xmlns="http://www.w3.org/1999/xhtml"><table id="Advice"><thead><tr><th>Date</th><th>Description</th><th>Additional information</th></tr></thead><tbody><tr class="oddRow"><td>13-May-2020</td><td>Advice given about SARS-CoV-2 (severe acute respiratory syndrome coronavirus 2) by telephone</td><td>Problem; First, test</td></tr></tbody></table></div>',
            },
          },
          {
            title: 'Personal Preferences',
            code: {
              coding: [
                {
                  code: 'PreferencesHeader',
                },
              ],
            },
            text: {
              status: 'generated',
              div: '<div xmlns="http://www.w3.org/1999/xhtml"><table id="Preferences"><thead><tr><th>Date</th><th>Description</th><th>Additional information</th></tr></thead><tbody><tr class="oddRow"><td>13-May-2020</td><td>2019-nCoV (novel coronavirus) vaccination declined</td><td>Problem; First, test</td></tr></tbody></table><p id="SendTime">Summary Sent: 14-May-2020 14:31</p></div>',
            },
          },
        ],
      },
    },
    {
      fullUrl:
        'https://sandbox.api.service.nhs.uk/summary-care-record/FHIR/R4/PractitionerRole/AF504087-BF5D-4910-B4E5-518C709D4E59',
      resource: {
        resourceType: 'PractitionerRole',
        id: 'AF504087-BF5D-4910-B4E5-518C709D4E59',
        identifier: [
          {
            system: 'http://fhir.nhs.net/Id/sds-role-profile-id',
            value: '673836492727',
          },
        ],
        practitioner: {
          reference: 'Practitioner/0900F94C-5273-4FCA-8C86-EA16BFC9637E',
        },
      },
    },
    {
      fullUrl:
        'https://sandbox.api.service.nhs.uk/summary-care-record/FHIR/R4/Practitioner/0900F94C-5273-4FCA-8C86-EA16BFC9637E',
      resource: {
        resourceType: 'Practitioner',
        id: '0900F94C-5273-4FCA-8C86-EA16BFC9637E',
        identifier: [
          {
            system: 'https://fhir.nhs.uk/Id/sds-user-id',
            value: '676789689789',
          },
        ],
        name: [
          {
            text: 'Dr Steve Jones',
          },
        ],
      },
    },
    {
      fullUrl:
        'https://sandbox.api.service.nhs.uk/summary-care-record/FHIR/R4/Condition/FCB84E15-02E5-495C-B334-D0685DCB0687',
      resource: {
        resourceType: 'Condition',
        id: 'FCB84E15-02E5-495C-B334-D0685DCB0687',
        identifier: [
          {
            value: 'FCB84E15-02E5-495C-B334-D0685DCB0687',
          },
        ],
        verificationStatus: {
          coding: [
            {
              system: 'http://hl7.org/fhir/ValueSet/condition-ver-status',
              code: 'entered-in-error',
              display: 'Entered-in-error',
            },
          ],
        },
        category: [
          {
            coding: [
              {
                system: 'http://snomed.info/sct',
                code: '163001000000103',
                display: 'Diagnoses',
              },
            ],
          },
        ],
        code: {
          coding: [
            {
              system: 'http://snomed.info/sct',
              code: '1240751000000100',
              display: 'COVID-19',
            },
          ],
        },
        encounter: {
          reference: 'Encounter/5D170836-B4AB-4B17-80C1-06E00A89EF64',
        },
        onsetDateTime: '2020-05-06T14:48:19+00:00',
      },
    },
    {
      fullUrl:
        'https://sandbox.api.service.nhs.uk/summary-care-record/FHIR/R4/PractitionerRole/41509488-BA29-42FF-B6E5-D4DE16FA6744',
      resource: {
        resourceType: 'PractitionerRole',
        id: '41509488-BA29-42FF-B6E5-D4DE16FA6744',
        identifier: [
          {
            system: 'http://fhir.nhs.net/Id/sds-role-profile-id',
            value: '673836492727',
          },
        ],
        practitioner: {
          reference: 'Practitioner/287ACBB2-4FFB-4218-848C-218CE382C473',
        },
      },
    },
    {
      fullUrl:
        'https://sandbox.api.service.nhs.uk/summary-care-record/FHIR/R4/Practitioner/287ACBB2-4FFB-4218-848C-218CE382C473',
      resource: {
        resourceType: 'Practitioner',
        id: '287ACBB2-4FFB-4218-848C-218CE382C473',
        identifier: [
          {
            system: 'https://fhir.nhs.uk/Id/sds-user-id',
            value: '676789689789',
          },
        ],
        name: [
          {
            text: 'Dr Steve Jones',
          },
        ],
      },
    },
    {
      fullUrl:
        'https://sandbox.api.service.nhs.uk/summary-care-record/FHIR/R4/Encounter/5D170836-B4AB-4B17-80C1-06E00A89EF64',
      resource: {
        resourceType: 'Encounter',
        id: '5D170836-B4AB-4B17-80C1-06E00A89EF64',
        status: 'finished',
        class: {
          system: 'http://terminology.hl7.org/CodeSystem/v3-NullFlavor',
          code: 'UNK',
          display: 'Unknown',
        },
        participant: [
          {
            type: [
              {
                coding: [
                  {
                    system:
                      'http://terminology.hl7.org/CodeSystem/v3-ParticipationType',
                    code: 'AUT',
                    display: 'author',
                  },
                ],
              },
            ],
            period: {
              start: '2020-11-17T02:00:00+00:00',
            },
            individual: {
              reference:
                'PractitionerRole/41509488-BA29-42FF-B6E5-D4DE16FA6744',
            },
          },
        ],
      },
    },
    {
      fullUrl:
        'https://sandbox.api.service.nhs.uk/summary-care-record/FHIR/R4/Condition/0F582D97-8F89-11EA-8B2D-B741F13EFC47',
      resource: {
        resourceType: 'Condition',
        id: '0F582D97-8F89-11EA-8B2D-B741F13EFC47',
        identifier: [
          {
            value: '0F582D97-8F89-11EA-8B2D-B741F13EFC47',
          },
        ],
        verificationStatus: {
          coding: [
            {
              system: 'http://hl7.org/fhir/ValueSet/condition-ver-status',
              code: 'entered-in-error',
              display: 'Entered-in-error',
            },
          ],
        },
        category: [
          {
            coding: [
              {
                system: 'http://snomed.info/sct',
                code: '163001000000103',
                display: 'Diagnoses',
              },
            ],
          },
        ],
        code: {
          coding: [
            {
              system: 'http://snomed.info/sct',
              code: '1300721000000109',
              display: 'COVID-19 confirmed by laboratory test',
            },
          ],
        },
        encounter: {
          reference: 'Encounter/9509D5CE-CEF1-4E69-B03F-AAA0DAF7E895',
        },
        onsetDateTime: '2020-05-06T14:48:19+00:00',
        evidence: [
          {
            detail: [
              {
                reference: 'Observation/F17999D2-FFE7-4CA4-8CE8-52CB45FF6F49',
              },
            ],
          },
        ],
        note: [
          {
            text: 'Problem; First, test',
          },
        ],
      },
    },
    {
      fullUrl:
        'https://sandbox.api.service.nhs.uk/summary-care-record/FHIR/R4/Practitioner/8A743194-5AC6-4FE8-A51B-8C825331C5C9',
      resource: {
        resourceType: 'Practitioner',
        id: '8A743194-5AC6-4FE8-A51B-8C825331C5C9',
        name: [
          {
            text: 'BLOGGS Fred',
          },
        ],
      },
    },
    {
      fullUrl:
        'https://sandbox.api.service.nhs.uk/summary-care-record/FHIR/R4/PractitionerRole/39E5C691-14BD-4990-857A-D55549022819',
      resource: {
        resourceType: 'PractitionerRole',
        id: '39E5C691-14BD-4990-857A-D55549022819',
        practitioner: {
          reference: 'Practitioner/8A743194-5AC6-4FE8-A51B-8C825331C5C9',
        },
        organization: {
          reference: 'Organization/AAACB666-26F6-487A-B005-105166C3B09C',
        },
        code: [
          {
            coding: [
              {
                system: 'https://fhir.nhs.uk/CodeSystem/HL7v3-SDSJobRoleName',
                code: 'R0050',
                display: 'Consultant',
              },
            ],
          },
        ],
      },
    },
    {
      fullUrl:
        'https://sandbox.api.service.nhs.uk/summary-care-record/FHIR/R4/Organization/AAACB666-26F6-487A-B005-105166C3B09C',
      resource: {
        resourceType: 'Organization',
        id: 'AAACB666-26F6-487A-B005-105166C3B09C',
        telecom: [
          {
            system: 'phone',
            value: '0177865579',
          },
          {
            system: 'phone',
            value: '0189834144',
          },
        ],
        address: [
          {
            text: 'ORG ADDRESS',
          },
        ],
      },
    },
    {
      fullUrl:
        'https://sandbox.api.service.nhs.uk/summary-care-record/FHIR/R4/Encounter/9509D5CE-CEF1-4E69-B03F-AAA0DAF7E895',
      resource: {
        resourceType: 'Encounter',
        id: '9509D5CE-CEF1-4E69-B03F-AAA0DAF7E895',
        status: 'finished',
        class: {
          system: 'http://terminology.hl7.org/CodeSystem/v3-NullFlavor',
          code: 'UNK',
          display: 'Unknown',
        },
        participant: [
          {
            type: [
              {
                coding: [
                  {
                    system:
                      'http://terminology.hl7.org/CodeSystem/v3-ParticipationType',
                    code: 'AUT',
                    display: 'author',
                  },
                ],
              },
            ],
            period: {
              start: '2020-11-18T02:00:00+00:00',
            },
            individual: {
              reference:
                'PractitionerRole/39E5C691-14BD-4990-857A-D55549022819',
            },
          },
        ],
      },
    },
    {
      fullUrl:
        'https://sandbox.api.service.nhs.uk/summary-care-record/FHIR/R4/Condition/958E584C-25B8-4BD7-A71D-7625FDC1ACD6',
      resource: {
        resourceType: 'Condition',
        id: '958E584C-25B8-4BD7-A71D-7625FDC1ACD6',
        identifier: [
          {
            value: '958E584C-25B8-4BD7-A71D-7625FDC1ACD6',
          },
        ],
        verificationStatus: {
          coding: [
            {
              system: 'http://hl7.org/fhir/ValueSet/condition-ver-status',
              code: 'entered-in-error',
              display: 'Entered-in-error',
            },
          ],
        },
        category: [
          {
            coding: [
              {
                system: 'http://snomed.info/sct',
                code: '163001000000103',
                display: 'Diagnoses',
              },
            ],
          },
        ],
        code: {
          coding: [
            {
              system: 'http://snomed.info/sct',
              code: '1300731000000106',
              display: 'COVID-19 confirmed using clinical diagnostic criteria',
            },
          ],
        },
        encounter: {
          reference: 'Encounter/0B82553D-2A1F-4216-A124-2C3E77C36088',
        },
        onsetDateTime: '2020-05-06T14:48:19+00:00',
      },
    },
    {
      fullUrl:
        'https://sandbox.api.service.nhs.uk/summary-care-record/FHIR/R4/Practitioner/39DBBA66-CDA4-4DCC-B8A7-868B834EF40B',
      resource: {
        resourceType: 'Practitioner',
        id: '39DBBA66-CDA4-4DCC-B8A7-868B834EF40B',
        name: [
          {
            text: 'William Jones',
          },
        ],
      },
    },
    {
      fullUrl:
        'https://sandbox.api.service.nhs.uk/summary-care-record/FHIR/R4/PractitionerRole/B3E1AD39-A2C2-45FD-ADBA-CD0D3EEC73BB',
      resource: {
        resourceType: 'PractitionerRole',
        id: 'B3E1AD39-A2C2-45FD-ADBA-CD0D3EEC73BB',
        practitioner: {
          reference: 'Practitioner/39DBBA66-CDA4-4DCC-B8A7-868B834EF40B',
        },
        organization: {
          reference: 'Organization/C3474BD7-B364-47DA-B462-64C8806049E9',
        },
        code: [
          {
            coding: [
              {
                system: 'https://fhir.nhs.uk/CodeSystem/HL7v3-SDSJobRoleName',
                code: 'R0010',
                display: 'Medical Director',
              },
            ],
          },
        ],
      },
    },
    {
      fullUrl:
        'https://sandbox.api.service.nhs.uk/summary-care-record/FHIR/R4/Organization/C3474BD7-B364-47DA-B462-64C8806049E9',
      resource: {
        resourceType: 'Organization',
        id: 'C3474BD7-B364-47DA-B462-64C8806049E9',
        type: [
          {
            coding: [
              {
                code: '021',
              },
            ],
          },
        ],
        name: 'Good Health Hospital',
        telecom: [
          {
            system: 'phone',
            value: '0122865579',
          },
          {
            system: 'phone',
            value: '0189664144',
          },
        ],
        address: [
          {
            text: 'ORG ADDRESS_2',
          },
        ],
      },
    },
    {
      fullUrl:
        'https://sandbox.api.service.nhs.uk/summary-care-record/FHIR/R4/PractitionerRole/B85EFE96-644F-4BA3-9B7F-EC12FFCC7030',
      resource: {
        resourceType: 'PractitionerRole',
        id: 'B85EFE96-644F-4BA3-9B7F-EC12FFCC7030',
        identifier: [
          {
            system: 'http://fhir.nhs.net/Id/sds-role-profile-id',
            value: '578934433',
          },
        ],
        practitioner: {
          reference: 'Practitioner/C8F58BEC-4D2F-4A86-8BFD-92965EABCCAA',
        },
      },
    },
    {
      fullUrl:
        'https://sandbox.api.service.nhs.uk/summary-care-record/FHIR/R4/Practitioner/C8F58BEC-4D2F-4A86-8BFD-92965EABCCAA',
      resource: {
        resourceType: 'Practitioner',
        id: 'C8F58BEC-4D2F-4A86-8BFD-92965EABCCAA',
        identifier: [
          {
            system: 'https://fhir.nhs.uk/Id/sds-user-id',
            value: '9054354543',
          },
        ],
        name: [
          {
            text: 'Anna Maria',
          },
        ],
      },
    },
    {
      fullUrl:
        'https://sandbox.api.service.nhs.uk/summary-care-record/FHIR/R4/Encounter/0B82553D-2A1F-4216-A124-2C3E77C36088',
      resource: {
        resourceType: 'Encounter',
        id: '0B82553D-2A1F-4216-A124-2C3E77C36088',
        status: 'finished',
        class: {
          system: 'http://terminology.hl7.org/CodeSystem/v3-NullFlavor',
          code: 'UNK',
          display: 'Unknown',
        },
        participant: [
          {
            type: [
              {
                coding: [
                  {
                    system:
                      'http://terminology.hl7.org/CodeSystem/v3-ParticipationType',
                    code: 'AUT',
                    display: 'author',
                  },
                ],
              },
            ],
            period: {
              start: '2020-12-18T02:00:00+00:00',
            },
            individual: {
              reference:
                'PractitionerRole/B3E1AD39-A2C2-45FD-ADBA-CD0D3EEC73BB',
            },
          },
          {
            type: [
              {
                coding: [
                  {
                    system:
                      'http://terminology.hl7.org/CodeSystem/v3-ParticipationType',
                    code: 'INF',
                    display: 'informant',
                  },
                ],
              },
            ],
            period: {
              start: '2016-06-30T12:33:58+00:00',
            },
            individual: {
              reference:
                'PractitionerRole/B85EFE96-644F-4BA3-9B7F-EC12FFCC7030',
            },
          },
        ],
      },
    },
    {
      fullUrl:
        'https://sandbox.api.service.nhs.uk/summary-care-record/FHIR/R4/Condition/8CEB2867-551B-43D0-88B5-3278DA20A6B0',
      resource: {
        resourceType: 'Condition',
        id: '8CEB2867-551B-43D0-88B5-3278DA20A6B0',
        identifier: [
          {
            value: '8CEB2867-551B-43D0-88B5-3278DA20A6B0',
          },
        ],
        verificationStatus: {
          coding: [
            {
              system: 'http://hl7.org/fhir/ValueSet/condition-ver-status',
              code: 'entered-in-error',
              display: 'Entered-in-error',
            },
          ],
        },
        category: [
          {
            coding: [
              {
                system: 'http://snomed.info/sct',
                code: '163001000000103',
                display: 'Diagnoses',
              },
            ],
          },
        ],
        code: {
          coding: [
            {
              system: 'http://snomed.info/sct',
              code: '1240761000000102',
              display: 'Suspected COVID-19',
            },
          ],
        },
        encounter: {
          reference: 'Encounter/85051728-CAB8-4484-B328-99BEA9B13CE5',
        },
        onsetDateTime: '2020-05-06T14:48:19+00:00',
      },
    },
    {
      fullUrl:
        'https://sandbox.api.service.nhs.uk/summary-care-record/FHIR/R4/Practitioner/A8FA3A92-B44B-493B-980B-13236F1BA0AC',
      resource: {
        resourceType: 'Practitioner',
        id: 'A8FA3A92-B44B-493B-980B-13236F1BA0AC',
        name: [
          {
            text: 'Stephan Spence',
          },
        ],
      },
    },
    {
      fullUrl:
        'https://sandbox.api.service.nhs.uk/summary-care-record/FHIR/R4/PractitionerRole/90F9C3F8-AFFD-45FA-B49E-4C15E91218EB',
      resource: {
        resourceType: 'PractitionerRole',
        id: '90F9C3F8-AFFD-45FA-B49E-4C15E91218EB',
        practitioner: {
          reference: 'Practitioner/A8FA3A92-B44B-493B-980B-13236F1BA0AC',
        },
        organization: {
          reference: 'Organization/CE4F4A02-AB2F-4D99-AC20-4E345C4407D0',
        },
        code: [
          {
            coding: [
              {
                system: 'https://fhir.nhs.uk/CodeSystem/HL7v3-SDSJobRoleName',
                code: 'R0020',
                display: 'Clinical Director - Medical',
              },
            ],
          },
        ],
      },
    },
    {
      fullUrl:
        'https://sandbox.api.service.nhs.uk/summary-care-record/FHIR/R4/Organization/CE4F4A02-AB2F-4D99-AC20-4E345C4407D0',
      resource: {
        resourceType: 'Organization',
        id: 'CE4F4A02-AB2F-4D99-AC20-4E345C4407D0',
        identifier: [
          {
            system: 'https://fhir.nhs.uk/Id/ods-organization-code',
            value: '57435939053',
          },
        ],
        name: 'Good Health Hospital 2',
        telecom: [
          {
            system: 'phone',
            value: '0122865579',
          },
          {
            system: 'phone',
            value: '0189664144',
          },
        ],
        address: [
          {
            text: 'ORG ADDRESS_2',
          },
        ],
      },
    },
    {
      fullUrl:
        'https://sandbox.api.service.nhs.uk/summary-care-record/FHIR/R4/RelatedPerson/F7E5A116-DBD4-445C-A644-215B0BC31AE3',
      resource: {
        resourceType: 'RelatedPerson',
        id: 'F7E5A116-DBD4-445C-A644-215B0BC31AE3',
        patient: {
          reference: 'Patient/8B4F78CB-014F-44D5-90A2-3C0590B3325F',
        },
        relationship: [
          {
            coding: [
              {
                system:
                  'https://fhir.nhs.uk/STU3/ValueSet/PersonRelationshipType-1',
                code: '01',
                display: 'Brother',
              },
            ],
          },
        ],
        name: [
          {
            text: 'JONES Bob',
          },
        ],
      },
    },
    {
      fullUrl:
        'https://sandbox.api.service.nhs.uk/summary-care-record/FHIR/R4/Encounter/85051728-CAB8-4484-B328-99BEA9B13CE5',
      resource: {
        resourceType: 'Encounter',
        id: '85051728-CAB8-4484-B328-99BEA9B13CE5',
        status: 'finished',
        class: {
          system: 'http://terminology.hl7.org/CodeSystem/v3-NullFlavor',
          code: 'UNK',
          display: 'Unknown',
        },
        participant: [
          {
            type: [
              {
                coding: [
                  {
                    system:
                      'http://terminology.hl7.org/CodeSystem/v3-ParticipationType',
                    code: 'AUT',
                    display: 'author',
                  },
                ],
              },
            ],
            period: {
              start: '2020-12-18T02:00:00+00:00',
            },
            individual: {
              reference:
                'PractitionerRole/90F9C3F8-AFFD-45FA-B49E-4C15E91218EB',
            },
          },
          {
            type: [
              {
                coding: [
                  {
                    system:
                      'http://terminology.hl7.org/CodeSystem/v3-ParticipationType',
                    code: 'INF',
                    display: 'informant',
                  },
                ],
              },
            ],
            period: {
              start: '2016-06-30T12:33:58+00:00',
            },
            individual: {
              reference: 'RelatedPerson/F7E5A116-DBD4-445C-A644-215B0BC31AE3',
            },
          },
        ],
      },
    },
    {
      fullUrl:
        'https://sandbox.api.service.nhs.uk/summary-care-record/FHIR/R4/Condition/6ECDAE6D-32AB-421C-AA8F-0B1ABA454C70',
      resource: {
        resourceType: 'Condition',
        id: '6ECDAE6D-32AB-421C-AA8F-0B1ABA454C70',
        identifier: [
          {
            value: '6ECDAE6D-32AB-421C-AA8F-0B1ABA454C70',
          },
        ],
        verificationStatus: {
          coding: [
            {
              system: 'http://hl7.org/fhir/ValueSet/condition-ver-status',
              code: 'entered-in-error',
              display: 'Entered-in-error',
            },
          ],
        },
        category: [
          {
            coding: [
              {
                system: 'http://snomed.info/sct',
                code: '163001000000103',
                display: 'Diagnoses',
              },
            ],
          },
        ],
        code: {
          coding: [
            {
              system: 'http://snomed.info/sct',
              code: '1240761000000102',
              display: 'Suspected COVID-19',
            },
          ],
        },
        encounter: {
          reference: 'Encounter/427E1F15-02BE-4C09-A2D6-3F61FD358209',
        },
        onsetDateTime: '2020-05-06T14:48:19+00:00',
      },
    },
    {
      fullUrl:
        'https://sandbox.api.service.nhs.uk/summary-care-record/FHIR/R4/Practitioner/9FCCFCBB-2BF1-48ED-86F5-6CAB505117AB',
      resource: {
        resourceType: 'Practitioner',
        id: '9FCCFCBB-2BF1-48ED-86F5-6CAB505117AB',
        name: [
          {
            text: 'Gregory House',
          },
        ],
      },
    },
    {
      fullUrl:
        'https://sandbox.api.service.nhs.uk/summary-care-record/FHIR/R4/PractitionerRole/E1313DB1-29FB-4F1D-A21C-DCC847D8904B',
      resource: {
        resourceType: 'PractitionerRole',
        id: 'E1313DB1-29FB-4F1D-A21C-DCC847D8904B',
        practitioner: {
          reference: 'Practitioner/9FCCFCBB-2BF1-48ED-86F5-6CAB505117AB',
        },
        organization: {
          reference: 'Organization/FD0F1D0B-7CC2-41DD-9653-387212E13A9E',
        },
        code: [
          {
            coding: [
              {
                system: 'https://fhir.nhs.uk/CodeSystem/HL7v3-SDSJobRoleName',
                code: 'R0080',
                display: 'Staff Grade',
              },
            ],
          },
        ],
      },
    },
    {
      fullUrl:
        'https://sandbox.api.service.nhs.uk/summary-care-record/FHIR/R4/Organization/FD0F1D0B-7CC2-41DD-9653-387212E13A9E',
      resource: {
        resourceType: 'Organization',
        id: 'FD0F1D0B-7CC2-41DD-9653-387212E13A9E',
        telecom: [
          {
            system: 'phone',
            value: '0332865579',
          },
        ],
        address: [
          {
            text: 'ORG ADDRESS_4',
          },
        ],
      },
    },
    {
      fullUrl:
        'https://sandbox.api.service.nhs.uk/summary-care-record/FHIR/R4/Practitioner/281518AE-CEBA-42F8-B92C-579E4051B560',
      resource: {
        resourceType: 'Practitioner',
        id: '281518AE-CEBA-42F8-B92C-579E4051B560',
        name: [
          {
            text: 'Thomas Moore',
          },
        ],
      },
    },
    {
      fullUrl:
        'https://sandbox.api.service.nhs.uk/summary-care-record/FHIR/R4/PractitionerRole/0655430E-D56C-4E9B-AD1D-7041D46DD6EB',
      resource: {
        resourceType: 'PractitionerRole',
        id: '0655430E-D56C-4E9B-AD1D-7041D46DD6EB',
        practitioner: {
          reference: 'Practitioner/281518AE-CEBA-42F8-B92C-579E4051B560',
        },
        organization: {
          reference: 'Organization/A0D95ABD-48BF-492C-A919-41692748E980',
        },
        code: [
          {
            coding: [
              {
                system: 'https://fhir.nhs.uk/CodeSystem/HL7v3-SDSJobRoleName',
                code: 'R0100',
                display: 'Clinical Assistant',
              },
            ],
          },
        ],
      },
    },
    {
      fullUrl:
        'https://sandbox.api.service.nhs.uk/summary-care-record/FHIR/R4/Organization/A0D95ABD-48BF-492C-A919-41692748E980',
      resource: {
        resourceType: 'Organization',
        id: 'A0D95ABD-48BF-492C-A919-41692748E980',
        telecom: [
          {
            system: 'phone',
            value: '573459834',
          },
        ],
        address: [
          {
            text: 'ORG ADDRESS_4',
          },
        ],
      },
    },
    {
      fullUrl:
        'https://sandbox.api.service.nhs.uk/summary-care-record/FHIR/R4/Encounter/427E1F15-02BE-4C09-A2D6-3F61FD358209',
      resource: {
        resourceType: 'Encounter',
        id: '427E1F15-02BE-4C09-A2D6-3F61FD358209',
        status: 'finished',
        class: {
          system: 'http://terminology.hl7.org/CodeSystem/v3-NullFlavor',
          code: 'UNK',
          display: 'Unknown',
        },
        participant: [
          {
            type: [
              {
                coding: [
                  {
                    system:
                      'http://terminology.hl7.org/CodeSystem/v3-ParticipationType',
                    code: 'AUT',
                    display: 'author',
                  },
                ],
              },
            ],
            period: {
              start: '2020-12-18T02:00:00+00:00',
            },
            individual: {
              reference:
                'PractitionerRole/E1313DB1-29FB-4F1D-A21C-DCC847D8904B',
            },
          },
          {
            type: [
              {
                coding: [
                  {
                    system:
                      'http://terminology.hl7.org/CodeSystem/v3-ParticipationType',
                    code: 'INF',
                    display: 'informant',
                  },
                ],
              },
            ],
            period: {
              start: '2016-06-30T12:33:58+00:00',
            },
            individual: {
              reference:
                'PractitionerRole/0655430E-D56C-4E9B-AD1D-7041D46DD6EB',
            },
          },
        ],
      },
    },
    {
      fullUrl:
        'https://sandbox.api.service.nhs.uk/summary-care-record/FHIR/R4/PractitionerRole/82446542-A696-47BF-82DC-4EC4CF6B9C3C',
      resource: {
        resourceType: 'PractitionerRole',
        id: '82446542-A696-47BF-82DC-4EC4CF6B9C3C',
        identifier: [
          {
            system: 'http://fhir.nhs.net/Id/sds-role-profile-id',
            value: '89823498234',
          },
        ],
        practitioner: {
          reference: 'Practitioner/579EA638-DEC8-49E5-ACD9-CBE14646E601',
        },
      },
    },
    {
      fullUrl:
        'https://sandbox.api.service.nhs.uk/summary-care-record/FHIR/R4/Practitioner/579EA638-DEC8-49E5-ACD9-CBE14646E601',
      resource: {
        resourceType: 'Practitioner',
        id: '579EA638-DEC8-49E5-ACD9-CBE14646E601',
        identifier: [
          {
            system: 'https://fhir.nhs.uk/Id/sds-user-id',
            value: '9699575667',
          },
        ],
        name: [
          {
            text: 'Maria Smith',
          },
        ],
      },
    },
    {
      fullUrl:
        'https://sandbox.api.service.nhs.uk/summary-care-record/FHIR/R4/Encounter/90661AA8-26F4-4377-A2F8-496D5B5863C0',
      resource: {
        resourceType: 'Encounter',
        id: '90661AA8-26F4-4377-A2F8-496D5B5863C0',
        status: 'finished',
        class: {
          system: 'http://terminology.hl7.org/CodeSystem/v3-NullFlavor',
          code: 'UNK',
          display: 'Unknown',
        },
        participant: [
          {
            extension: [
              {
                url: 'https://fhir.nhs.uk/StructureDefinition/Extension-SCR-ModeCode',
                valueCodeableConcept: {
                  coding: [
                    {
                      system:
                        'http://terminology.hl7.org/CodeSystem/v3-ParticipationMode',
                      code: 'PHYSICAL',
                      display: 'physical presence',
                    },
                  ],
                },
              },
            ],
            type: [
              {
                coding: [
                  {
                    system:
                      'http://terminology.hl7.org/CodeSystem/v3-ParticipationType',
                    code: 'PRF',
                    display: 'performer',
                  },
                ],
              },
            ],
            period: {
              start: '2016-06-30T12:33:58+00:00',
            },
            individual: {
              reference:
                'PractitionerRole/82446542-A696-47BF-82DC-4EC4CF6B9C3C',
            },
          },
        ],
      },
    },
    {
      fullUrl:
        'https://sandbox.api.service.nhs.uk/summary-care-record/FHIR/R4/Observation/F17999D2-FFE7-4CA4-8CE8-52CB45FF6F49',
      resource: {
        resourceType: 'Observation',
        id: 'F17999D2-FFE7-4CA4-8CE8-52CB45FF6F49',
        meta: {
          profile: [
            'https://fhir.hl7.org.uk/StructureDefinition/UKCore-Observation',
          ],
        },
        identifier: [
          {
            value: 'F17999D2-FFE7-4CA4-8CE8-52CB45FF6F49',
          },
        ],
        status: 'final',
        category: [
          {
            coding: [
              {
                system: 'http://snomed.info/sct',
                code: '163141000000104',
                display: 'Investigation Results',
              },
            ],
          },
        ],
        code: {
          coding: [
            {
              system: 'http://snomed.info/sct',
              code: '1240581000000104',
              display:
                'SARS-CoV-2 (severe acute respiratory syndrome coronavirus 2) RNA (ribonucleic acid) detection result positive',
            },
          ],
        },
        encounter: {
          reference: 'Encounter/90661AA8-26F4-4377-A2F8-496D5B5863C0',
        },
        effectivePeriod: {
          start: '2020-05-06T14:48:19+00:00',
        },
      },
    },
    {
      fullUrl:
        'https://sandbox.api.service.nhs.uk/summary-care-record/FHIR/R4/Device/1C45DC67-7EE7-456C-BD46-D186EE255356',
      resource: {
        resourceType: 'Device',
        id: '1C45DC67-7EE7-456C-BD46-D186EE255356',
        identifier: [
          {
            system: 'https://fhir.nhs.uk/Id/SDSDevice',
            value: '930484003023',
          },
          {
            value: '930484003023',
          },
        ],
        owner: {
          reference: 'Organization/6DC32AD1-4F65-4DE9-9C20-E23D57D9A95A',
        },
      },
    },
    {
      fullUrl:
        'https://sandbox.api.service.nhs.uk/summary-care-record/FHIR/R4/Organization/6DC32AD1-4F65-4DE9-9C20-E23D57D9A95A',
      resource: {
        resourceType: 'Organization',
        id: '6DC32AD1-4F65-4DE9-9C20-E23D57D9A95A',
        identifier: [
          {
            system: 'https://fhir.nhs.uk/Id/ods-organization-code',
            value: '7635043534',
          },
        ],
      },
    },
    {
      fullUrl:
        'https://sandbox.api.service.nhs.uk/summary-care-record/FHIR/R4/PractitionerRole/F7790C08-F1A4-4884-B176-5761D5E5071E',
      resource: {
        resourceType: 'PractitionerRole',
        id: 'F7790C08-F1A4-4884-B176-5761D5E5071E',
        organization: {
          reference: 'Organization/6DC32AD1-4F65-4DE9-9C20-E23D57D9A95A',
        },
      },
    },
    {
      fullUrl:
        'https://sandbox.api.service.nhs.uk/summary-care-record/FHIR/R4/Encounter/7A4618BB-8246-45F5-9C6F-08D011FB6C96',
      resource: {
        resourceType: 'Encounter',
        id: '7A4618BB-8246-45F5-9C6F-08D011FB6C96',
        status: 'finished',
        class: {
          system: 'http://terminology.hl7.org/CodeSystem/v3-NullFlavor',
          code: 'UNK',
          display: 'Unknown',
        },
        participant: [
          {
            type: [
              {
                coding: [
                  {
                    system:
                      'http://terminology.hl7.org/CodeSystem/v3-ParticipationType',
                    code: 'AUT',
                    display: 'author',
                  },
                ],
              },
            ],
            period: {
              start: '2016-06-30T12:33:58+00:00',
            },
            individual: {
              reference:
                'PractitionerRole/F7790C08-F1A4-4884-B176-5761D5E5071E',
            },
          },
        ],
      },
    },
    {
      fullUrl:
        'https://sandbox.api.service.nhs.uk/summary-care-record/FHIR/R4/Observation/EE608FAA-2433-4BAD-A0D5-4A10E45AB2B0',
      resource: {
        resourceType: 'Observation',
        id: 'EE608FAA-2433-4BAD-A0D5-4A10E45AB2B0',
        meta: {
          profile: [
            'https://fhir.hl7.org.uk/StructureDefinition/UKCore-Observation',
          ],
        },
        identifier: [
          {
            value: 'EE608FAA-2433-4BAD-A0D5-4A10E45AB2B0',
          },
        ],
        status: 'final',
        category: [
          {
            coding: [
              {
                system: 'http://snomed.info/sct',
                code: '163141000000104',
                display: 'Investigation Results',
              },
            ],
          },
        ],
        code: {
          coding: [
            {
              system: 'http://snomed.info/sct',
              code: '1240581000000104',
              display:
                'SARS-CoV-2 (severe acute respiratory syndrome coronavirus 2) RNA (ribonucleic acid) detection result positive',
            },
          ],
        },
        encounter: {
          reference: 'Encounter/7A4618BB-8246-45F5-9C6F-08D011FB6C96',
        },
        effectivePeriod: {
          start: '2020-05-06T14:48:19+00:00',
        },
      },
    },
    {
      fullUrl:
        'https://sandbox.api.service.nhs.uk/summary-care-record/FHIR/R4/Device/4E2DEA88-843A-4D94-806A-D29B5B097A85',
      resource: {
        resourceType: 'Device',
        id: '4E2DEA88-843A-4D94-806A-D29B5B097A85',
        identifier: [
          {
            value: '7867868687687',
          },
          {
            value: '7867868687687',
          },
        ],
        deviceName: [
          {
            name: 'Some device name',
            type: 'other',
          },
          {
            name: 'Mfc model name',
            type: 'manufacturer-name',
          },
        ],
        type: {
          coding: [
            {
              code: '01',
              display: 'Some device',
            },
          ],
        },
        owner: {
          reference: 'Organization/BEB90A6D-F963-496C-A24A-A1B63B33D4ED',
        },
        note: [
          {
            text: 'Device description',
          },
        ],
      },
    },
    {
      fullUrl:
        'https://sandbox.api.service.nhs.uk/summary-care-record/FHIR/R4/Organization/BEB90A6D-F963-496C-A24A-A1B63B33D4ED',
      resource: {
        resourceType: 'Organization',
        id: 'BEB90A6D-F963-496C-A24A-A1B63B33D4ED',
        type: [
          {
            coding: [
              {
                code: '214',
              },
            ],
          },
        ],
        name: 'Device owner org',
        telecom: [
          {
            system: 'phone',
            value: 'fax:01392251689',
          },
        ],
        address: [
          {
            text: 'ADDRESS LINE 1',
          },
        ],
      },
    },
    {
      fullUrl:
        'https://sandbox.api.service.nhs.uk/summary-care-record/FHIR/R4/PractitionerRole/2B235A74-2F3D-4574-9EF7-DB66A74ACC2B',
      resource: {
        resourceType: 'PractitionerRole',
        id: '2B235A74-2F3D-4574-9EF7-DB66A74ACC2B',
        organization: {
          reference: 'Organization/BEB90A6D-F963-496C-A24A-A1B63B33D4ED',
        },
      },
    },
    {
      fullUrl:
        'https://sandbox.api.service.nhs.uk/summary-care-record/FHIR/R4/Encounter/795B2A54-306D-4FCF-B7FB-AF80172E485E',
      resource: {
        resourceType: 'Encounter',
        id: '795B2A54-306D-4FCF-B7FB-AF80172E485E',
        status: 'finished',
        class: {
          system: 'http://terminology.hl7.org/CodeSystem/v3-NullFlavor',
          code: 'UNK',
          display: 'Unknown',
        },
        participant: [
          {
            type: [
              {
                coding: [
                  {
                    system:
                      'http://terminology.hl7.org/CodeSystem/v3-ParticipationType',
                    code: 'AUT',
                    display: 'author',
                  },
                ],
              },
            ],
            period: {
              start: '2016-06-30T12:33:58+00:00',
            },
            individual: {
              reference:
                'PractitionerRole/2B235A74-2F3D-4574-9EF7-DB66A74ACC2B',
            },
          },
        ],
      },
    },
    {
      fullUrl:
        'https://sandbox.api.service.nhs.uk/summary-care-record/FHIR/R4/Observation/0F582D97-8F89-11CA-8B2D-B741F13EFC47',
      resource: {
        resourceType: 'Observation',
        id: '0F582D97-8F89-11CA-8B2D-B741F13EFC47',
        meta: {
          profile: [
            'https://fhir.hl7.org.uk/StructureDefinition/UKCore-Observation',
          ],
        },
        identifier: [
          {
            value: '0F582D97-8F89-11CA-8B2D-B741F13EFC47',
          },
        ],
        status: 'final',
        category: [
          {
            coding: [
              {
                system: 'http://snomed.info/sct',
                code: '163141000000104',
                display: 'Investigation Results',
              },
            ],
          },
        ],
        code: {
          coding: [
            {
              system: 'http://snomed.info/sct',
              code: '1240581000000104',
              display:
                'SARS-CoV-2 (severe acute respiratory syndrome coronavirus 2) RNA (ribonucleic acid) detection result positive',
            },
          ],
        },
        encounter: {
          reference: 'Encounter/795B2A54-306D-4FCF-B7FB-AF80172E485E',
        },
        effectivePeriod: {
          start: '2020-05-06T14:48:19+00:00',
        },
      },
    },
    {
      fullUrl:
        'https://sandbox.api.service.nhs.uk/summary-care-record/FHIR/R4/Patient/8B4F78CB-014F-44D5-90A2-3C0590B3325F',
      resource: {
        resourceType: 'Patient',
        id: '8B4F78CB-014F-44D5-90A2-3C0590B3325F',
        identifier: [
          {
            system: 'https://fhir.nhs.uk/Id/nhs-number',
            value: '9995000180',
          },
        ],
      },
    },
  ],
};
