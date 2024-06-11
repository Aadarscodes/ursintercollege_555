import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const AnnouncementsAndDates = () => {
    return (
        <div className="col-md-6" >
            
                <div className="government-orders">
                    <h4><i className="glyphicon glyphicon-bell" aria-hidden="true"></i> Important Dates</h4>
                    <div className="news">
                        <div className="table-responsive">
                            <table className="table table-bordered" style={{ textAlign: 'left' }}>
                                <thead>
                                    <tr className="text-center info">
                                        <th>क्र.सं.</th>
                                        <th>कार्य का विवरण</th>
                                        <th>तिथियाँ</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1.</td>
                                        <td>स्नातक, परास्नातक (2024-25) एवं शोध पात्रता परीक्षा (RET) (2023-2024) ऑनलाइन आवेदन पंजीकरण करने की अंतिम तिथि </td>
                                        <td> 08 जून 2024 </td>
                                    </tr>
                                    <tr>
                                        <td>2.</td>
                                        <td>स्नातक, परास्नातक (2024-25) एवं शोध पात्रता परीक्षा (RET) (2023-2024) आवेदन पूरित कर ऑनलाइन जमा (Submit) करने की अंतिम तिथि </td>
                                        <td>10 जून 2024 </td>
                                    </tr>
                                    <tr>
                                        <td>3.</td>
                                        <td>स्नातक, परास्नातक (2024-25) एवं शोध पात्रता परीक्षा (RET) (2023-2024) प्रवेश पत्र जारी होने की संभावित तिथि</td>
                                        <td>15 जून 2024</td>
                                    </tr>
                                    <tr>
                                        <td>4.</td>
                                        <td>स्नातक, परास्नातक (2024-25) एवं शोध पात्रता परीक्षा (RET) (2023-2024) प्रवेश परीक्षा की संभावित तिथियाँ </td>
                                        <td> जून माह के तृतीय सप्ताह से</td>
                                    </tr>
                                    <tr>
                                        <td>5.</td>
                                        <td>स्नातक, परास्नातक (2024-25) एवं शोध पात्रता परीक्षा (RET) (2023-2024) प्रवेश परीक्षा परिणाम की संभावित तिथि </td>
                                        <td> जून माह के अंतिम सप्ताह में</td>
                                    </tr>
                                    {/* <tr>
                                        <td>6.</td>
                                        <td>स्नातक, परास्नातक (2024-25) एवं शोध पात्रता परीक्षा (RET) (2023-2024) ऑनलाइन काउंसलिंग प्रारंभ होने की तिथि </td>
                                        <td> जुलाई माह के प्रथम सप्ताह में</td>
                                    </tr> */}
                                    <tr>
                                        <td colSpan="3">
                                            <h5 className="danger red"><strong>नोट:-</strong></h5>
                                            <ul style={{ paddingLeft: '15px', textAlign: 'left', fontSize: '.85em' }}>
                                                <li>अपरिहार्य कारणोंवश उपरोक्त तिथियों में आवश्यकतानुसार परिर्वतन किया जा सकता है।  </li>
                                            </ul>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <br />
                        </div>
                    </div>
                </div>
                <div className="foot">&nbsp;</div>
            </div>

    );
};

export default AnnouncementsAndDates;
