import React, { useState } from 'react';
import AdminHeader from '../components/AdminHeader';
import AdminFooter from '../components/AdminFooter';
import AdminSidebar from '../components/AdminSidebar';
import { Modal } from "react-bootstrap";
import Cards from '../../view/components/Cards';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';

const steps = ['Product Information', 'Pricing', 'Seller Details'];

function AdminProduct() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [show, setShow] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set());
  const [formData, setFormData] = useState({
    productName: '',
    productDetails: '',
    amount: '',
    discountAmount: '',
    isOldSeller: false,
    isNewSeller: false,
    selectedSeller: '',
    newSellerName: '',
    productImage: null, // Added for file upload
    terms: false
  });

  // Sample list of existing sellers
  const existingSellers = [
    { id: 1, name: 'ABC Supplier' },
    { id: 2, name: 'XYZ Distributors' },
    { id: 3, name: 'Best Products Inc.' },
    { id: 4, name: 'Global Merchants' }
  ];

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const handleClose = () => {
    setShow(false);
    setActiveStep(0);
    setFormData({
      productName: '',
      productDetails: '',
      amount: '',
      discountAmount: '',
      isOldSeller: false,
      isNewSeller: false,
      selectedSeller: '',
      newSellerName: '',
      productImage: null,
      terms: false
    });
  };
  const handleShow = () => setShow(true);

  const isStepOptional = (step) => step === 1;
  const isStepSkipped = (step) => skipped.has(step);

  const handleInputChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : 
              type === 'file' ? files[0] : 
              value
    }));
  };

  const handleNext = () => {
    // Basic validation before proceeding
    if (activeStep === 0) {
      if (!formData.productName || !formData.productDetails) {
        alert('Please fill all product information');
        return;
      }
      if (!formData.productImage) {
        alert('Please upload a product image');
        return;
      }
    }
    if (activeStep === 1 && (!formData.amount || !formData.discountAmount)) {
      alert('Please fill all pricing information');
      return;
    }
    if (activeStep === 2) {
      if (formData.isOldSeller && !formData.selectedSeller) {
        alert('Please select a seller');
        return;
      }
      if (formData.isNewSeller && !formData.newSellerName) {
        alert('Please enter new seller name');
        return;
      }
      if (!formData.isOldSeller && !formData.isNewSeller) {
        alert('Please select seller type');
        return;
      }
      if (!formData.terms) {
        alert('Please accept the terms and conditions');
        return;
      }
    }

    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }
    setActiveStep((prev) => prev + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => setActiveStep((prev) => prev - 1);

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      throw new Error("You can't skip a step that isn't optional.");
    }
    setActiveStep((prev) => prev + 1);
    setSkipped((prev) => new Set([...prev, activeStep]));
  };

  const handleReset = () => {
    setActiveStep(0);
    setFormData({
      productName: '',
      productDetails: '',
      amount: '',
      discountAmount: '',
      isOldSeller: false,
      isNewSeller: false,
      selectedSeller: '',
      newSellerName: '',
      productImage: null,
      terms: false
    });
  };

  const getStepContent = (step) => {
    switch (step) {
      case 0: // Product Information
        return (
          <div className="mt-3">
            <Form.Group className="mb-3">
              <Form.Label>Product Name</Form.Label>
              <Form.Control 
                type="text" 
                name="productName"
                value={formData.productName}
                onChange={handleInputChange}
                placeholder="Enter product name" 
              />
            </Form.Group>
            <FloatingLabel controlId="floatingTextarea" label="Product Details" className="mb-3">
              <Form.Control 
                as="textarea" 
                name="productDetails"
                value={formData.productDetails}
                onChange={handleInputChange}
                placeholder="Enter product details" 
                style={{ height: '100px' }}
              />
            </FloatingLabel>
            <Form.Group className="mb-3">
              <Form.Label>Product Image</Form.Label>
              <Form.Control 
                type="file" 
                name="productImage"
                onChange={handleInputChange}
                accept="image/*"
              />
              {formData.productImage && (
                <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                  Selected file: {formData.productImage.name}
                </Typography>
              )}
            </Form.Group>
          </div>
        );
      case 1: // Pricing
        return (
          <div className="mt-3">
            <Row className="mb-3">
              <Col>
                <Form.Label>Amount</Form.Label>
                <Form.Control 
                  type="number" 
                  name="amount"
                  value={formData.amount}
                  onChange={handleInputChange}
                  placeholder="Enter amount" 
                />
              </Col>
              <Col>
                <Form.Label>Discount Amount</Form.Label>
                <Form.Control 
                  type="number" 
                  name="discountAmount"
                  value={formData.discountAmount}
                  onChange={handleInputChange}
                  placeholder="Enter discount amount" 
                />
              </Col>
            </Row>
          </div>
        );
      case 2: // Seller Details
        return (
          <div className="mt-3">
            <FormControlLabel
              control={
                <Checkbox
                  checked={formData.isOldSeller}
                  onChange={(e) => {
                    handleInputChange(e);
                    setFormData(prev => ({
                      ...prev,
                      isNewSeller: e.target.checked ? false : prev.isNewSeller,
                      newSellerName: e.target.checked ? '' : prev.newSellerName
                    }));
                  }}
                  name="isOldSeller"
                />
              }
              label="Existing Seller"
            />
            
            {formData.isOldSeller && (
              <FormControl fullWidth sx={{ mt: 2 }}>
                <InputLabel id="seller-select-label">Select Seller</InputLabel>
                <Select
                  labelId="seller-select-label"
                  id="seller-select"
                  value={formData.selectedSeller}
                  label="Select Seller"
                  onChange={(e) => setFormData(prev => ({
                    ...prev,
                    selectedSeller: e.target.value
                  }))}
                >
                  {existingSellers.map(seller => (
                    <MenuItem key={seller.id} value={seller.id}>
                      {seller.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            )}

            <FormControlLabel
              control={
                <Checkbox
                  checked={formData.isNewSeller}
                  onChange={(e) => {
                    handleInputChange(e);
                    setFormData(prev => ({
                      ...prev,
                      isOldSeller: e.target.checked ? false : prev.isOldSeller,
                      selectedSeller: e.target.checked ? '' : prev.selectedSeller
                    }));
                  }}
                  name="isNewSeller"
                  sx={{ mt: 2 }}
                />
              }
              label="New Seller"
            />
            
            {formData.isNewSeller && (
              <TextField
                fullWidth
                label="New Seller Name"
                name="newSellerName"
                value={formData.newSellerName}
                onChange={handleInputChange}
                margin="normal"
                variant="outlined"
              />
            )}


          </div>
        );
      default:
        return 'Unknown step';
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#A38560]">
      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 shadow-sm h-16 bg-[#16302B] text-[#A38560]">
        <div className="flex items-center justify-between p-4 h-full">
          <button 
            onClick={toggleSidebar}
            className="p-2 rounded-md hover:bg-emerald-500"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <AdminHeader mobileView />
        </div>
      </div>

      {/* Desktop Header */}
      <div className="hidden lg:block sticky top-0 z-50">
        <AdminHeader />
      </div>

      {/* Main Content */}
      <div className="flex flex-1 pt-5 lg:pt-0">
        {/* Sidebar */}
        <div className={`fixed inset-y-0 left-0 z-40 w-64 shadow-lg transform ${sidebarOpen ? 'translate-x-0 mt-5'  : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static`}>
          <AdminSidebar />
        </div>

        {/* Overlay */}
        {sidebarOpen && (
          <div 
            className="fixed inset-0 z-30   bg-black bg-opacity-50 lg:hidden" 
            onClick={toggleSidebar}
          />
        )}

        {/* Content Area */}
        <main className={`flex-1 lg:ml-64 ${sidebarOpen ? "mt-0" : "mt-0"}`}>
          <div className="p-4 lg:p-6">
            {/* Add Product Button */}
            <div className="mb-4">
              <Button 
                variant="contained"
                onClick={handleShow}
                sx={{
                  backgroundColor: '#16302B',
                  '&:hover': { backgroundColor: '#A38567' },
                  padding: '8px 16px',
                  margin: '16px',
                  borderRadius: '24px'
                }}
              >
                Add Product
              </Button>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[...Array(12)].map((_, index) => (
                <Cards key={index} />
              ))}
            </div>
          </div>
        </main>
      </div>

      {/* Footer */}
      <div className="text-white lg:ml-64">
        <AdminFooter />
      </div>

      {/* Add Product Modal */}
      <Modal show={show} onHide={handleClose} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>Add New Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Box sx={{ width: '100%' }}>
            <Stepper activeStep={activeStep}>
              {steps.map((label, index) => {
                const stepProps = {};
                const labelProps = {};
                if (isStepOptional(index)) {
                  labelProps.optional = (
                    <Typography variant="caption">Optional</Typography>
                  );
                }
                if (isStepSkipped(index)) {
                  stepProps.completed = false;
                }
                return (
                  <Step key={label} {...stepProps}>
                    <StepLabel {...labelProps}>{label}</StepLabel>
                  </Step>
                );
              })}
            </Stepper>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography sx={{ mt: 2, mb: 1 }}>
                  All steps completed - you're finished
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                  <Box sx={{ flex: '1 1 auto' }} />
                  <Button onClick={handleReset}>Reset</Button>
                </Box>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep)}
                <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                  <Button
                    color="inherit"
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    sx={{ mr: 1 }}
                  >
                    Back
                  </Button>
                  <Box sx={{ flex: '1 1 auto' }} />
                  {isStepOptional(activeStep) && (
                    <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                      Skip
                    </Button>
                  )}
                  <Button onClick={handleNext}>
                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                  </Button>
                </Box>
              </React.Fragment>
            )}
          </Box>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default AdminProduct;