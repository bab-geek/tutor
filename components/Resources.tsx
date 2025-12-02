import React, { useState } from 'react';
import { Lock, Unlock, FileText, Download, CheckCircle, AlertCircle } from 'lucide-react';
import { Resource, Subject } from '../types';

// --- MOCK DATA GENERATOR FOR REALISTIC CONTENT ---
const getExamContent = (subject: Subject, year: number): string => {
  if (subject === Subject.PHYSICS) {
    return `
KCSE ${year} PHYSICS REVISION PAPER
----------------------------------------
INSTRUCTIONS:
1. This paper consists of two sections: Section A and Section B.
2. Answer all the questions in the spaces provided.
3. All working must be clearly shown.

SECTION A (25 MARKS)

1. A micrometer screw gauge has a zero error of -0.03mm. It is used to measure the diameter of a wire. If the actual reading is 0.56mm, determine the observed reading. (2 marks)
   ANSWER: Observed = Actual + Error = 0.56 + (-0.03) = 0.53mm.

2. Explain why a matatu is more likely to topple when carrying passengers on the roof rack than when the passengers are seated inside. (1 mark)
   ANSWER: The center of gravity is raised, making the vehicle less stable.

3. State the principle of moments. (1 mark)
   ANSWER: For a system in equilibrium, the sum of clockwise moments about a point equals the sum of anticlockwise moments about the same point.

4. ${year} Specific Question: A form 4 student observed that a convex mirror is preferred as a driving mirror. Give one reason. (1 mark)
   ANSWER: It provides a wider field of view and forms an upright image.

SECTION B (55 MARKS)

5. (a) Define specific latent heat of vaporization. (1 mark)
   (b) A 1200W heater is used to boil water. Calculate the time taken to vaporize 0.5kg of water at 100°C. (Lv = 2.26 x 10^6 J/kg).
   ANSWER: E = mL => P*t = mL => 1200*t = 0.5 * 2,260,000 => t = 941.67 seconds.

6. Waves Question: A radio station transmits signals at a frequency of 98.4 MHz. Calculate the wavelength of the signal. (Speed of light = 3.0 x 10^8 m/s).
   ANSWER: v = fλ => 3.0x10^8 = 98.4x10^6 * λ => λ = 3.05 meters.

... [Full paper continues with 15 more questions] ...

----------------------------------------
© Mr. Steve Agwa - Kenya Science Tutor
For full marking schemes and physical booklets, please contact 0716 979 016.
`;
  } else {
    return `
KCSE ${year} CHEMISTRY REVISION PAPER
----------------------------------------
INSTRUCTIONS:
1. Answer all the questions in the spaces provided.
2. Mathematical tables and silent electronic calculators may be used.

1. The electron arrangement of ions X2+ and Y- are 2.8 and 2.8.8 respectively.
   (a) Write the electron arrangement of the elements X and Y. (2 marks)
       ANSWER: X (2.8.2), Y (2.8.7)
   (b) Write the formula of the compound formed between X and Y. (1 mark)
       ANSWER: XY2

2. Study the scheme below and answer the questions that follow:
   Ethanol -> [Process I] -> Ethene -> [Process II] -> Polythene
   (a) Name Process I.
       ANSWER: Dehydration
   (b) Name the catalyst used in Process I.
       ANSWER: Concentrated Sulphuric(VI) Acid.

3. ${year} Special: A student investigated the effect of temperature on the rate of reaction between Sodium Thiosulphate and Dilute Hydrochloric Acid.
   (a) State how the rate was measured.
       ANSWER: By measuring the time taken for the cross 'X' to disappear.

4. Hardness of Water
   (a) Name two cations responsible for hard water. (2 marks)
       ANSWER: Ca2+ (Calcium ions) and Mg2+ (Magnesium ions).
   (b) Explain how adding Sodium Carbonate removes permanent hardness. (2 marks)
       ANSWER: Carbonate ions react with Calcium/Magnesium ions to form insoluble carbonates (precipitate), thus removing them from the water.

5. Moles Calculation
   Calculate the mass of Calcium Carbonate that would react completely with 20cm^3 of 2M Hydrochloric Acid. (Ca=40, C=12, O=16, H=1, Cl=35.5).
   Reaction: CaCO3 + 2HCl -> CaCl2 + CO2 + H2O
   Moles of HCl = (20/1000) * 2 = 0.04 moles.
   Mole Ratio CaCO3 : HCl is 1:2.
   Moles of CaCO3 = 0.04 / 2 = 0.02 moles.
   RFM of CaCO3 = 40 + 12 + 48 = 100.
   Mass = 0.02 * 100 = 2g.

... [Full paper continues with Organic Chemistry and Electrochemistry sections] ...

----------------------------------------
© Mr. Steve Agwa - Kenya Science Tutor
For full marking schemes and physical booklets, please contact 0716 979 016.
`;
  }
};

// --- DATA GENERATION ---
const generateKCSEPapers = (): Resource[] => {
  const papers: Resource[] = [];
  const startYear = 2010;
  const endYear = 2025;

  for (let year = startYear; year <= endYear; year++) {
    // Physics
    papers.push({
      id: `kcse-phys-${year}`,
      title: `KCSE ${year} Physics Paper 1, 2 & 3`,
      subject: Subject.PHYSICS,
      topic: 'Revision',
      type: 'Past Paper',
      price: 0,
      isLocked: false,
      description: `Comprehensive questions and answers for ${year} Physics. Includes Mechanics, Waves, and Electricity.`
    });

    // Chemistry
    papers.push({
      id: `kcse-chem-${year}`,
      title: `KCSE ${year} Chemistry Paper 1, 2 & 3`,
      subject: Subject.CHEMISTRY,
      topic: 'Revision',
      type: 'Past Paper',
      price: 0,
      isLocked: false,
      description: `Complete ${year} Chemistry exam revision. Covers Organic, Physical, and Inorganic Chemistry.`
    });
  }
  return papers.reverse(); // Newest first
};

const INITIAL_RESOURCES: Resource[] = [
    { id: '1', title: 'Organic Chemistry Masterclass', subject: Subject.CHEMISTRY, topic: 'Organic Chemistry', type: 'Notes', price: 0, isLocked: false, description: 'Complete guide to Alkanes, Alkenes, and Alkynes with naming rules.' },
    { id: '2', title: 'Moles & Stoichiometry Past Papers', subject: Subject.CHEMISTRY, topic: 'Stoichiometry', type: 'Past Paper', price: 0, isLocked: false, description: 'Solved questions from 2015-2023 KCSE papers.' },
    { id: '3', title: 'Acids, Bases & Salts Summary', subject: Subject.CHEMISTRY, topic: 'Salts', type: 'Notes', price: 0, isLocked: false, description: 'Chart of all salt solubility rules and preparation methods.' },
    { id: '4', title: 'Periodic Table Trends', subject: Subject.CHEMISTRY, topic: 'Periodic Table', type: 'Video Guide', price: 0, isLocked: false, description: 'Video explanation of ionization energy and electron affinity.' },
    { id: '5', title: 'Current Electricity Deep Dive', subject: Subject.PHYSICS, topic: 'Electricity', type: 'Notes', price: 0, isLocked: false, description: 'Ohm’s law, internal resistance, and circuit calculations made easy.' },
    { id: '6', title: 'Newton’s Laws of Motion', subject: Subject.PHYSICS, topic: 'Forces', type: 'Notes', price: 0, isLocked: false, description: 'Practical examples involving pulleys and inclined planes.' },
    { id: '7', title: 'Waves & Sound Questions', subject: Subject.PHYSICS, topic: 'Waves', type: 'Past Paper', price: 0, isLocked: false, description: 'Topical revision questions with marking schemes.' },
    { id: '8', title: 'Radioactivity & Half-Life', subject: Subject.PHYSICS, topic: 'Radioactivity', type: 'Video Guide', price: 0, isLocked: false, description: 'Visual guide to alpha, beta, and gamma decay equations.' },
    ...generateKCSEPapers()
];

export const Resources: React.FC = () => {
    const [resources, setResources] = useState<Resource[]>(INITIAL_RESOURCES);
    const [filter, setFilter] = useState<'ALL' | 'CHEMISTRY' | 'PHYSICS'>('ALL');
    const [selectedResource, setSelectedResource] = useState<Resource | null>(null);
    const [downloadingId, setDownloadingId] = useState<string | null>(null);
    const [isPaying, setIsPaying] = useState(false);

    const handleUnlock = (resource: Resource) => {
        setSelectedResource(resource);
    };

    const handleDownload = (resource: Resource) => {
        setDownloadingId(resource.id);
        
        // Simulate a network request
        setTimeout(() => {
            let fileContent = "";
            let filename = resource.title.replace(/[^a-z0-9]/gi, '_').toLowerCase() + '.txt';

            // Check if it's a KCSE paper to generate specific content
            const yearMatch = resource.title.match(/KCSE (\d{4})/);
            if (yearMatch) {
                const year = parseInt(yearMatch[1]);
                fileContent = getExamContent(resource.subject, year);
            } else {
                // Default content for other resources
                fileContent = `
${resource.title.toUpperCase()}
Subject: ${resource.subject}
Topic: ${resource.topic}

SUMMARY NOTES:
1. Ensure you understand the definitions key to this topic.
2. Review the formulas provided in the app.
3. Practice the questions below.

[Content would be downloaded from server here]

For full access to physical revision booklets, contact Mr. Steve Agwa: 0716 979 016.
`;
            }

            // Create a Blob with the specific content
            const blob = new Blob([fileContent], { type: 'text/plain;charset=utf-8' });
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.style.display = 'none';
            a.href = url;
            a.download = filename;
            
            document.body.appendChild(a);
            a.click();
            
            window.URL.revokeObjectURL(url);
            document.body.removeChild(a);
            
            setDownloadingId(null);
        }, 1000); // 1 second delay to simulate server fetch
    };

    const confirmPayment = () => {
        if (!selectedResource) return;
        setIsPaying(true);
        setTimeout(() => {
            setResources(prev => prev.map(r => r.id === selectedResource.id ? { ...r, isLocked: false } : r));
            setIsPaying(false);
            setSelectedResource(null);
            alert(`Payment Successful! You have unlocked: ${selectedResource.title}`);
        }, 2000);
    };

    const filteredResources = resources.filter(r => filter === 'ALL' || r.subject.toUpperCase() === filter);

    return (
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">KCSE Revision Materials</h2>
                <p className="mt-4 text-xl text-slate-500">Premium notes, past papers, and summaries tailored for the 8-4-4 syllabus.</p>
                <div className="mt-4 inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-800 text-sm font-medium animate-pulse">
                    <Unlock className="w-4 h-4 mr-2" /> LIMITED TIME OFFER: All Materials FREE!
                </div>
            </div>

            {/* Filter Tabs */}
            <div className="flex justify-center mb-8">
                <div className="bg-white p-1 rounded-lg border border-slate-200 inline-flex shadow-sm">
                    {['ALL', 'CHEMISTRY', 'PHYSICS'].map((f) => (
                        <button
                            key={f}
                            onClick={() => setFilter(f as any)}
                            className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                                filter === f
                                    ? 'bg-slate-900 text-white shadow-sm'
                                    : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50'
                            }`}
                        >
                            {f.charAt(0) + f.slice(1).toLowerCase()}
                        </button>
                    ))}
                </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {filteredResources.map((resource) => (
                    <div key={resource.id} className="bg-white rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow overflow-hidden flex flex-col">
                        <div className={`h-2 w-full ${resource.subject === Subject.CHEMISTRY ? 'bg-yellow-400' : 'bg-blue-400'}`} />
                        <div className="p-6 flex-1 flex flex-col">
                            <div className="flex justify-between items-start mb-4">
                                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${resource.subject === Subject.CHEMISTRY ? 'bg-yellow-100 text-yellow-800' : 'bg-blue-100 text-blue-800'}`}>
                                    {resource.subject}
                                </span>
                                {resource.isLocked ? (
                                    <Lock className="h-5 w-5 text-slate-400" />
                                ) : (
                                    <Unlock className="h-5 w-5 text-kenya-green" />
                                )}
                            </div>
                            
                            <h3 className="text-lg font-bold text-slate-900 mb-2 leading-tight">{resource.title}</h3>
                            <p className="text-sm text-slate-500 mb-4 flex-1">{resource.description}</p>
                            
                            <div className="flex items-center text-xs text-slate-400 mb-4 space-x-3">
                                <span className="flex items-center"><FileText size={14} className="mr-1"/> {resource.type}</span>
                                <span className="font-semibold text-slate-700">|</span>
                                <span>{resource.topic}</span>
                            </div>

                            <div className="mt-auto pt-4 border-t border-slate-100">
                                {resource.isLocked ? (
                                    <button 
                                        onClick={() => handleUnlock(resource)}
                                        className="w-full flex items-center justify-center px-4 py-2 border border-slate-300 shadow-sm text-sm font-medium rounded-md text-slate-700 bg-white hover:bg-slate-50"
                                    >
                                        Unlock for {resource.price} KES
                                    </button>
                                ) : (
                                    <button 
                                        onClick={() => handleDownload(resource)}
                                        disabled={downloadingId === resource.id}
                                        className={`w-full flex items-center justify-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white transition-colors ${
                                            downloadingId === resource.id 
                                            ? 'bg-slate-400 cursor-not-allowed' 
                                            : 'bg-kenya-green hover:bg-green-700'
                                        }`}
                                    >
                                        {downloadingId === resource.id ? (
                                            <>Fetching File...</>
                                        ) : (
                                            <><Download className="mr-2 h-4 w-4" /> Download</>
                                        )}
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Payment Modal */}
            {selectedResource && (
                <div className="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                    <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true" onClick={() => setSelectedResource(null)}></div>
                        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
                        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                <div className="sm:flex sm:items-start">
                                    <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
                                        <Lock className="h-6 w-6 text-green-600" aria-hidden="true" />
                                    </div>
                                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                                        <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-title">
                                            Unlock Resource
                                        </h3>
                                        <div className="mt-2">
                                            <p className="text-sm text-gray-500 mb-4">
                                                You are about to purchase <strong>{selectedResource.title}</strong>.
                                            </p>
                                            <div className="bg-slate-50 p-4 rounded-md border border-slate-200">
                                                <div className="flex justify-between items-center mb-2">
                                                    <span className="text-sm text-gray-600">Item Price:</span>
                                                    <span className="text-sm font-bold text-gray-900">{selectedResource.price} KES</span>
                                                </div>
                                                <div className="flex justify-between items-center">
                                                    <span className="text-sm text-gray-600">Payment Method:</span>
                                                    <span className="text-sm font-bold text-green-600">M-Pesa</span>
                                                </div>
                                            </div>
                                            <div className="mt-4">
                                                <label className="block text-xs font-medium text-gray-700 mb-1">Enter M-Pesa Phone Number</label>
                                                <input type="tel" placeholder="07XX XXX XXX" className="block w-full border border-gray-300 rounded-md p-2 text-sm focus:ring-kenya-green focus:border-kenya-green" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                <button
                                    type="button"
                                    disabled={isPaying}
                                    onClick={confirmPayment}
                                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-kenya-green text-base font-medium text-white hover:bg-green-700 focus:outline-none sm:ml-3 sm:w-auto sm:text-sm disabled:opacity-50"
                                >
                                    {isPaying ? 'Processing...' : `Pay ${selectedResource.price} KES`}
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setSelectedResource(null)}
                                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};