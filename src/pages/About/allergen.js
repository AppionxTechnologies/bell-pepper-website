
// import './allergen.css';
// import "bootstrap/dist/css/bootstrap.css";
// import jsPDF from 'jspdf';


// export default function Allergen() {


//     return ( 
//         <div>
//             <div className='body'>
//                 <div className='col-lg-12 text-center'>
//                     <div className='row '>
//                         <div>
//                             <h1 className='cont-h1'>Allergen information</h1>
//                             <p className='cont-p1 mt-3 '>Download our allergen information below.</p>
//                             <button className='but-1 mt-2'>DOWNLOAD OUR GUIDE</button>
//                             <p className='cont-p2 mt-3'>our health and safety is important to us and we take dietary preferences very seriously. If you have a
//                                 food allergy or any special dietary needs, please alert a member of team. Unfortunately, cross-contact
//                                 with other ingredients may occur. Regrettably, we cannot guarantee the complete absence of
//                                 allergens.</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }



import React from 'react';
import './allergen.css';
import 'bootstrap/dist/css/bootstrap.css';
import jsPDF from 'jspdf';

export default function Allergen() {

    const handleDownload = () => {
        // Create a new jsPDF instance
        const pdf = new jsPDF();
        
        // Add content to the PDF
        pdf.text("Allergen Information", 20, 20);
        pdf.text("This is your allergen guide content.", 20, 30);

        // Save the PDF
        pdf.save("allergen_guide.pdf");
    };

    return (
        <div>
            <div className='body'>
                <div className='col-lg-12 text-center'>
                    <div className='row '>
                        <div>
                            <h1 className='cont-h1'>Allergen information</h1>
                            <p className='cont-p1 mt-3 '>Download our allergen information below.</p>
                            <button className='but-1 mt-2' onClick={handleDownload}>DOWNLOAD OUR GUIDE</button>
                            <p className='cont-p2 mt-3'>Our health and safety is important to us, and we take dietary preferences very seriously. If you have a
                                food allergy or any special dietary needs, please alert a member of the team. Unfortunately, cross-contact
                                with other ingredients may occur. Regrettably, we cannot guarantee the complete absence of
                                allergens.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
