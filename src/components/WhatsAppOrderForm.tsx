import React, { useState, useRef } from 'react';
import { OrderFormData } from '../types';
import { BUSINESS_INFO } from '../data';
import { MessageSquare, Phone, FileText, Upload, Sparkles, AlertCircle, CheckCircle, Clock, Trash2 } from 'lucide-react';

export default function WhatsAppOrderForm() {
  const [formData, setFormData] = useState<OrderFormData>({
    customerName: '',
    mobileNumber: '',
    email: '',
    address: '',
    medicineName: '',
    requiresPrescription: false,
    uploadedPrescriptionName: '',
    message: '',
    preferredDeliveryTime: 'Morning (08:00 AM - 12:00 PM)'
  });

  const [prescriptionFile, setPrescriptionFile] = useState<File | null>(null);
  const [prescriptionPreview, setPrescriptionPreview] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleFileChange = (file: File) => {
    if (file.size > 5 * 1024 * 1024) {
      setError("Prescription file size exceeds 5MB limit.");
      return;
    }
    setError(null);
    setPrescriptionFile(file);
    setFormData(prev => ({ 
      ...prev, 
      uploadedPrescriptionName: file.name,
      requiresPrescription: true 
    }));

    // Generate local base64 preview if it is an image
    if (file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPrescriptionPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setPrescriptionPreview(null); // PDF/Doc
    }
  };

  const onDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const onDragLeave = () => {
    setIsDragging(false);
  };

  const onDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileChange(e.dataTransfer.files[0]);
    }
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFileChange(e.target.files[0]);
    }
  };

  const removePrescription = () => {
    setPrescriptionFile(null);
    setPrescriptionPreview(null);
    setFormData(prev => ({ 
      ...prev, 
      uploadedPrescriptionName: '',
      requiresPrescription: false 
    }));
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  // Compile formatted WhatsApp message
  const getFormattedMessage = () => {
    return `Hello Maa Tara Medical Hall,\n\nI would like to place an order/inquiry for medicines through your online portal:\n\n*Customer Name:* ${formData.customerName || '__________'}\n*Phone:* ${formData.mobileNumber || '__________'}\n*Email:* ${formData.email || 'N/A'}\n*Medicines Required:* ${formData.medicineName || '__________'}\n*Delivery Address:* ${formData.address || '__________'}\n*Prescription Attached:* ${formData.uploadedPrescriptionName ? `Yes (${formData.uploadedPrescriptionName})` : (formData.requiresPrescription ? 'Yes (Preparing to share)' : 'No')}\n*Preferred Delivery Time:* ${formData.preferredDeliveryTime}\n*Additional Message:* ${formData.message || 'None'}\n\nThank you!`;
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.customerName.trim()) {
      setError("Please provide your name.");
      return;
    }
    if (!formData.mobileNumber.trim()) {
      setError("Please provide your mobile number.");
      return;
    }
    if (!formData.medicineName.trim()) {
      setError("Please specify the required medicines or upload a prescription.");
      return;
    }
    if (!formData.address.trim()) {
      setError("Please provide your delivery address.");
      return;
    }

    setError(null);
    setSuccess(true);

    const formattedText = getFormattedMessage();
    const encoded = encodeURIComponent(formattedText);
    const whatsappUrl = `${BUSINESS_INFO.whatsappUrl}?text=${encoded}`;

    // Open WhatsApp after a tiny delay
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      setSuccess(false);
    }, 1200);
  };

  return (
    <div className="animate-fade-in space-y-12 py-8 sm:py-12">
      
      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex text-xs sm:text-sm font-sans text-slate-500 dark:text-slate-400 gap-2 items-center">
          <span className="hover:text-med-teal cursor-pointer">Home</span>
          <span>/</span>
          <span className="text-slate-900 dark:text-white font-semibold">Online WhatsApp Order</span>
        </nav>
      </div>

      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold text-med-teal tracking-widest uppercase">Digital Ordering</span>
          <h1 className="font-sans font-extrabold text-3xl sm:text-5xl text-slate-900 dark:text-white tracking-tight">
            WhatsApp <span className="text-med-teal">Order & Support</span>
          </h1>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            Fill out the digital slip, drag-and-drop your prescription, and click send. Your order details are compiled into a formatted message and shared directly with our pharmacist over WhatsApp.
          </p>
          <div className="w-16 h-1 bg-med-teal mx-auto rounded-full mt-4" />
        </div>
      </div>

      {/* Grid: Instructions (Left) & Form Slip (Right) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Instructions Column */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Live Message Preview Console */}
            <div className="glass-card bg-slate-900 text-slate-100 rounded-3xl p-5 sm:p-6 border border-slate-800 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-16 h-16 bg-emerald-500/10 rounded-bl-full pointer-events-none" />
              
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping shrink-0" />
                <h3 className="font-sans font-bold text-xs sm:text-sm text-slate-300 tracking-wider uppercase">
                  Live WhatsApp Preview
                </h3>
              </div>

              <div className="bg-slate-950/80 rounded-2xl p-4 border border-slate-800 font-mono text-[11px] sm:text-xs text-emerald-400 max-h-80 overflow-y-auto whitespace-pre-wrap leading-relaxed select-all">
                {getFormattedMessage()}
              </div>

              <p className="text-[10px] text-slate-500 mt-3 text-center italic">
                Note: Standard files or images will be shared inside the chat after redirection.
              </p>
            </div>

            {/* How it Works Card */}
            <div className="glass-card bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200/80 dark:border-slate-800/85 shadow-sm space-y-4">
              <h3 className="font-sans font-bold text-base text-slate-900 dark:text-white flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-med-teal" />
                How Online Orders Work
              </h3>

              <ol className="space-y-4 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                <li className="flex gap-3">
                  <span className="w-6 h-6 rounded-full bg-med-teal/10 dark:bg-med-teal/20 text-med-teal flex items-center justify-center font-bold text-xs shrink-0">1</span>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white">Complete Slip</h4>
                    <p className="text-xs text-slate-400 mt-0.5">Specify your medicine details, address, and name.</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="w-6 h-6 rounded-full bg-med-teal/10 dark:bg-med-teal/20 text-med-teal flex items-center justify-center font-bold text-xs shrink-0">2</span>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white">Upload Prescription</h4>
                    <p className="text-xs text-slate-400 mt-0.5">For Rx medications, drag-and-drop your prescription slip.</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="w-6 h-6 rounded-full bg-med-teal/10 dark:bg-med-teal/20 text-med-teal flex items-center justify-center font-bold text-xs shrink-0">3</span>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white">Redirect & Send</h4>
                    <p className="text-xs text-slate-400 mt-0.5">Click submit. Details are packaged and loaded in WhatsApp.</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="w-6 h-6 rounded-full bg-med-teal/10 dark:bg-med-teal/20 text-med-teal flex items-center justify-center font-bold text-xs shrink-0">4</span>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white">Verification & Home Delivery</h4>
                    <p className="text-xs text-slate-400 mt-0.5">Our pharmacist verifies and schedules nearby doorstep dispatch.</p>
                  </div>
                </li>
              </ol>
            </div>

          </div>

          {/* Form Slip Column */}
          <div className="lg:col-span-8">
            <div className="glass-card bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-10 border border-slate-200/80 dark:border-slate-800/85 shadow-lg relative">
              
              {/* Emergency Contact Bar */}
              <div className="mb-8 p-4 bg-amber-50 dark:bg-amber-950/20 border border-amber-100 dark:border-amber-900/35 rounded-2xl flex items-center gap-3 text-amber-800 dark:text-amber-400 text-xs sm:text-sm">
                <AlertCircle className="w-5 h-5 text-amber-600 shrink-0" />
                <div>
                  <span className="font-bold">Need assistance?</span> You can directly place orders via phone. Call us at <a href={`tel:${BUSINESS_INFO.phone}`} className="font-bold underline">{BUSINESS_INFO.phoneFormatted}</a>.
                </div>
              </div>

              {/* Error Box */}
              {error && (
                <div className="mb-6 p-4 bg-red-50 dark:bg-red-950/20 border border-red-100 dark:border-red-900/40 rounded-2xl flex items-center gap-3 text-red-700 dark:text-red-400 text-xs sm:text-sm">
                  <AlertCircle className="w-5 h-5 shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              {/* Success Overlay Trigger */}
              {success && (
                <div className="mb-6 p-4 bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-100 dark:border-emerald-900/40 rounded-2xl flex items-center gap-3 text-emerald-700 dark:text-emerald-400 text-xs sm:text-sm animate-pulse">
                  <CheckCircle className="w-5 h-5 shrink-0" />
                  <span>Preparing secure message packet... Redirecting to WhatsApp now!</span>
                </div>
              )}

              {/* Form Element */}
              <form onSubmit={handleFormSubmit} className="space-y-6">
                
                {/* Two-Column Personal Details */}
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                      Customer Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="customerName"
                      value={formData.customerName}
                      onChange={handleInputChange}
                      placeholder="e.g. Ramesh Prasad"
                      required
                      className="w-full bg-slate-50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white rounded-xl py-3 px-4 text-sm focus:outline-none focus:border-med-teal transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                      Mobile Number (WhatsApp) <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="mobileNumber"
                      value={formData.mobileNumber}
                      onChange={handleInputChange}
                      placeholder="e.g. 8804210306"
                      required
                      className="w-full bg-slate-50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white rounded-xl py-3 px-4 text-sm focus:outline-none focus:border-med-teal transition-all"
                    />
                  </div>
                </div>

                {/* Optional Email & Preferred Time */}
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="e.g. customer@gmail.com"
                      className="w-full bg-slate-50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white rounded-xl py-3 px-4 text-sm focus:outline-none focus:border-med-teal transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                      Preferred Delivery Time
                    </label>
                    <select
                      name="preferredDeliveryTime"
                      value={formData.preferredDeliveryTime}
                      onChange={handleInputChange}
                      className="w-full bg-slate-50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white rounded-xl py-3 px-4 text-sm focus:outline-none focus:border-med-teal transition-all cursor-pointer"
                    >
                      <option value="Morning (08:00 AM - 12:00 PM)">Morning (08:00 AM - 12:00 PM)</option>
                      <option value="Afternoon (12:00 PM - 04:00 PM)">Afternoon (12:00 PM - 04:00 PM)</option>
                      <option value="Evening (04:00 PM - 09:30 PM)">Evening (04:00 PM - 09:30 PM)</option>
                    </select>
                  </div>
                </div>

                {/* Medicines Required */}
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                    Medicine Names & Quantity <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="medicineName"
                    value={formData.medicineName}
                    onChange={handleInputChange}
                    placeholder="e.g. Paracetamol 650mg (Dolo) - 2 strips, Limcee Chewable - 1 strip..."
                    rows={3}
                    required
                    className="w-full bg-slate-50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white rounded-xl py-3 px-4 text-sm focus:outline-none focus:border-med-teal transition-all"
                  />
                </div>

                {/* Delivery Address */}
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                    Delivery Address (Tekari & Nearby Areas) <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder="e.g. Khachiya Road, Near Durga Mandir, Tekari, Bihar"
                    required
                    className="w-full bg-slate-50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white rounded-xl py-3 px-4 text-sm focus:outline-none focus:border-med-teal transition-all"
                  />
                </div>

                {/* Drag and Drop Prescription Upload Section */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <label className="block text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300">
                      Upload Doctor Prescription Slip (Optional)
                    </label>
                    <span className="text-[11px] text-slate-400">Max size 5MB</span>
                  </div>

                  <div
                    onDragOver={onDragOver}
                    onDragLeave={onDragLeave}
                    onDrop={onDrop}
                    onClick={() => fileInputRef.current?.click()}
                    className={`border-2 border-dashed rounded-2xl p-6 text-center cursor-pointer transition-all ${
                      isDragging 
                        ? 'border-med-teal bg-med-teal/5' 
                        : 'border-slate-200 dark:border-slate-800 hover:border-med-teal/60 dark:hover:border-med-teal/40'
                    }`}
                  >
                    <input
                      type="file"
                      ref={fileInputRef}
                      onChange={handleFileInputChange}
                      accept="image/*,application/pdf"
                      className="hidden"
                    />

                    <div className="flex flex-col items-center justify-center space-y-2">
                      <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500">
                        <Upload className="w-5 h-5 text-med-teal" />
                      </div>
                      <p className="text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-300">
                        Drag & drop file here or click to browse
                      </p>
                      <p className="text-[10px] sm:text-xs text-slate-400">
                        Supports JPEG, PNG, or PDF slips
                      </p>
                    </div>
                  </div>

                  {/* Uploaded File Previews */}
                  {prescriptionFile && (
                    <div className="p-3 bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800 rounded-xl flex items-center justify-between animate-fade-in">
                      <div className="flex items-center gap-3">
                        {prescriptionPreview ? (
                          <div className="w-10 h-10 rounded-lg overflow-hidden bg-slate-200">
                            <img src={prescriptionPreview} alt="Prescription Thumbnail" className="w-full h-full object-cover" />
                          </div>
                        ) : (
                          <div className="w-10 h-10 rounded-lg bg-med-teal/10 flex items-center justify-center text-med-teal">
                            <FileText className="w-5 h-5" />
                          </div>
                        )}
                        <div>
                          <p className="text-xs font-semibold text-slate-900 dark:text-white truncate max-w-[150px] sm:max-w-[240px]">
                            {prescriptionFile.name}
                          </p>
                          <p className="text-[10px] text-slate-400">
                            {(prescriptionFile.size / 1024).toFixed(1)} KB
                          </p>
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={removePrescription}
                        className="p-1.5 rounded-lg text-slate-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-950/20 transition-all cursor-pointer"
                        title="Remove uploaded file"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  )}
                </div>

                {/* Additional Instructions Message */}
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                    Additional Directions / Message (Optional)
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="e.g. Please send near-expiry dates or ring the doorbell upon arrival..."
                    rows={2}
                    className="w-full bg-slate-50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white rounded-xl py-3 px-4 text-sm focus:outline-none focus:border-med-teal transition-all"
                  />
                </div>

                {/* Action Form Footer Buttons */}
                <div className="pt-4 border-t border-slate-100 dark:border-slate-800/60 flex flex-col sm:flex-row gap-3 justify-end items-center">
                  <a
                    href={`tel:${BUSINESS_INFO.phone}`}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-med-teal dark:hover:border-med-teal text-slate-700 dark:text-slate-300 hover:text-med-teal dark:hover:text-med-teal text-xs font-bold uppercase tracking-wider"
                  >
                    <Phone className="w-4 h-4" />
                    Call Now instead
                  </a>

                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-med-teal hover:bg-med-teal-hover text-white text-xs font-bold uppercase tracking-wider shadow-md shadow-med-teal/20 transition-all cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4" />
                    Send via WhatsApp
                  </button>
                </div>

              </form>

            </div>
          </div>

        </div>
      </div>

    </div>
  );
}
