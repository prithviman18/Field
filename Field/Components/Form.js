import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Button, Text } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import CustomInput from './CustomInput';
import LargeInputField from './LargeInputField';
import CustomDropdown from './CustomDropdown';


const Form = () => {
//   const [dropdown1Value, setDropdown1Value] = useState('');
//   const [dropdown2Value, setDropdown2Value] = useState('');
//   const [dropdown3Value, setDropdown3Value ] = useState('')
//   const [input1Value, setInput1Value] = useState('');
//   const [input2Value, setInput2Value] = useState('');
//   const [input3Value, setInput3Value] = useState('');
//   const [input4Value, setInput4Value] = useState('');
//   const [input5Value, setInput5Value] = useState('');
//   const [input6Value, setInput6Value] = useState('');
//   const [input7Value, setInput7Value] = useState('');
//   const [input8Value, setInput8Value] = useState('');
  const [input9Value, setInput9Value] = useState('');
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const[formData,setFormData] = useState({
    dropdown1Value:"",
    dropdown2Value:"",
    dropdown3Value:"",
    input1Value:"",
    input2Value:"",
    input3Value:"",
    input4Value:"",
    input5Value:"",
    input6Value:"",
    input7Value:"",
    input8Value:"",
    input9Value:"",
    showDatePicker:"",
    selectedDate:""
  })
  const handleFieldChange = (field, value) => {
    setFormData({
        ...formdata, 
        [field]: value
    })
}


  const handleDateChange = (event, selectedDate) => {
    setShowDatePicker(Platform.OS === 'ios');
    if (selectedDate) {
      setSelectedDate(selectedDate);
      setInput9Value(selectedDate.toDateString());
    }
  };

  const showDatePickerModal = () => {
    setShowDatePicker(true);
  };

  const handleFormSubmit = () => {
    // Handle form submission logic here
    console.log('Dropdown 1:', dropdown1Value);
    console.log('Dropdown 2:', dropdown2Value);
    console.log('Input 1:', input1Value);
    console.log('Input 2:', input2Value);
    console.log('Input 3:', input3Value);
    console.log('Input 4:', input4Value);
    console.log('Input 5:', input5Value);
  };

  return (
    <View style={styles.container}>
     {/* <View style={styles.formRow}>
  <Text style={styles.label}>Source:</Text>
  <Dropdown
    placeholder='Select Source'
    placeholderStyle={styles.placeholderStyle}
    style={styles.input}
    iconColor='red'
    data={[
      { label: 'Option 1', value: 'option1' },
      { label: 'Option 2', value: 'option2' },
      { label: 'Option 3', value: 'option3' },
    ]}
    value={formData.dropdown1Value} // Use formData for the value
    onSelect={(value) => handleFieldChange('dropdown1Value', value)} // Call handleFieldChange with field name and value
  />
</View> */}
    
      <CustomDropdown placeholder='Select Source'
      label="Source:"  
      data={[
      { label: 'Option 1', value: 'option1' },
      { label: 'Option 2', value: 'option2' },
      { label: 'Option 3', value: 'option3' },
    ]}
    value={formData.dropdown1Value} // Use formData for the value
    onSelect={(value) => handleFieldChange('dropdown1Value', value)}/>
      <CustomDropdown placeholder='Select Sales Person'
      label="Sales Person:"  
      data={[
      { label: 'Option 1', value: 'option1' },
      { label: 'Option 2', value: 'option2' },
      { label: 'Option 3', value: 'option3' },
    ]}
    value={formData.dropdown2Value} 
    onSelect={(value) => handleFieldChange('dropdown2Value', value)}/>

      {/* <View style={styles.formRow}>
        <Text style={styles.label}>Sales Person:</Text>
        <Dropdown
          placeholderStyle = {styles.placeholderStyle}
          placeholder='Select Sales Person'
          iconColor='red'
          style={styles.input}
          data={[
            { label: 'Option A', value: 'optionA' },
            { label: 'Option B', value: 'optionB' },
            { label: 'Option C', value: 'optionC' },
          ]}
          value={formData.dropdown2Value}
          onSelect={(value) => handleFieldChange('dropdown2Value', value)}
        />
      </View> */}
      <CustomInput label="Contact Name:" 
        placeholder = "Enter Name"
        value={formData.input1Value}
        onChangeText={(text) => handleFieldChange('input1Value', text)}

      />
      <CustomInput label="Company Name:" 
        placeholder = "Enter Company"
        value={formData.input2Value}
        onChangeText={(text) => handleFieldChange('input2Value', text)}

      />
      <CustomInput label="Job Position:" 
        placeholder = "Enter Job Position"
        value={formData.input4Value}
        onChangeText={(text) => handleFieldChange('input4Value', text)}

      />
      <CustomInput label="Phone"
       placeholder = "Enter Phone Number"
       value={formData.input4Value}
          onChangeText={(text) => handleFieldChange('input4Value', text)}
            />
      <CustomInput label="WhatsApp Number:" 
        placeholder = "Enter WhatsApp Number"
        value={formData.input6Value}
        onChangeText={(text) => handleFieldChange('input6Value', text)}

      />
      <CustomInput label="Email:" 
        placeholder = "Enter Email"
        value={formData.input7Value}
        onChangeText={(text) => handleFieldChange('input7Value', text)}

      />
      <CustomInput label="Address:" 
        placeholder = "Enter Address"
        value={formData.input8Value}
        onChangeText={(text) => handleFieldChange('input8Value', text)}

      />
      <LargeInputField label="Remarks:"
        placeholder="Enter Remarks"
        value={formData.input9Value}
        onChangeText={(text) => handleFieldChange('input9Value', text)} />
      <LargeInputField label="Description:"
        placeholder="Enter Description"
        value={formData.input5Value}
        onChangeText={(text) => handleFieldChange('input5Value', text)} />
      {/* <View style={styles.formRow}>
        <Text style={styles.label}>Contact Name:</Text>
        <TextInput
          placeholder='Enter Name'
          style={styles.input}
          value={formData.input1Value}
          onChangeText={(text) => handleFieldChange('input1Value', text)}
        />
      </View> */}
      {/* <View style={styles.formRow}>
        <Text style={styles.label}>Company Name:</Text>
        <TextInput
          placeholder='Enter Company'
          style={styles.input}
          value={formData.input2Value}
          onChangeText={(text) => handleFieldChange('input2Value', text)}
        />
      </View> */}
      {/* <View style={styles.formRow}>
        <Text style={styles.label}>Job Position:</Text>
        <TextInput
          placeholder='Enter Job Position'
          style={styles.input}
          value={formData.input3Value}
          onChangeText={(text) => handleFieldChange('input3Value', text)}
        />
      </View> */}
      {/* <View style={styles.formRow}>
        <Text style={styles.label}>Phone:</Text>
        <TextInput
          placeholder='Enter Phone'
          style={styles.input}
          value={formData.input4Value}
          onChangeText={(text) => handleFieldChange('input4Value', text)}
        />
      </View> */}
      
      {/* <View style={styles.formRow}>
        <Text style={styles.label}>WhatsApp Number:</Text>
        <TextInput
          placeholder='Enter Whatsapp'
          style={styles.input}
          value={formData.input6Value}
          onChangeText={(text) => handleFieldChange('input6Value', text)}
        />
      </View>
      <View style={styles.formRow}>
        <Text style={styles.label}>Email:</Text>
        <TextInput
          placeholder='Enter Email'
          style={styles.input}
          value={formData.input7Value}
          onChangeText={(text) => handleFieldChange('input7Value', text)}
        />
      </View>
      <View style={styles.formRow}>
        <Text style={styles.label}>Address:</Text>
        <TextInput
          placeholder='Enter Address'
          style={styles.input}
          value={formData.input8Value}
          onChangeText={(text) => handleFieldChange('input8Value', text)}
        />
      </View>
      <View style={styles.formRow}>
        <Text style={styles.label}>Remarks:</Text>
        <TextInput
          placeholder='Enter Remarks'
          style={styles.bigInput}
          value={formData.input9Value}
          onChangeText={(text) => handleFieldChange('input9Value', text)}
        />
      </View>
      <View style={styles.formRow}>
        <Text style={styles.label}>Description:</Text>
        <TextInput
          placeholder='Enter Description'
          style={styles.bigInput}
          value={formData.input5Value}
          onChangeText={(text) => setInput9Value(text)}
        />
      </View> */}
      <View style={styles.formRow}>
        <Text style={styles.label}>Expected Completion Date:</Text>
        <View style={styles.dateInputContainer}>
          <Text style={styles.dateInputText}>{input9Value}</Text>
          <MaterialIcons
            name="calendar-month"
            size={24}
            color="gray"
            style={styles.calendarIcon}
            onPress={showDatePickerModal}
          />
        </View>
      </View>
      {/* <View style={styles.formRow}>
        <Text style={styles.label}>Priority:</Text>
        <Dropdown
          placeholder='Select Source'
          placeholderStyle = {styles.placeholderStyle}
          style={styles.input}
          iconColor='red'
          data={[
            { label: 'Option 1', value: 'option1' },
            { label: 'Option 2', value: 'option2' },
            { label: 'Option 3', value: 'option3' },
          ]}
          value={formData.dropdown3Value}
          onSelect={(value) => handleFieldChange('dropdown3Value', value)}
        />
      </View> */}
      <CustomDropdown placeholder='Select Priority'
      label="Priority:"  
      data={[
      { label: 'Option 1', value: 'option1' },
      { label: 'Option 2', value: 'option2' },
      { label: 'Option 3', value: 'option3' },
    ]}
    value={formData.dropdown3Value} 
    onSelect={(value) => handleFieldChange('dropdown3Value', value)}/>
      <View>
        <Button title="Submit" onPress={handleFormSubmit} color="red" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  formRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  label: {
    width: 120,
    marginRight: 10,
    fontSize: 14,
    color: "#111111",
    fontStyle: "italic",
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    fontSize: 11,
    height: 32,
    fontStyle:"italic"
  },
  bigInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    height: 60,
    fontStyle:"italic"
  },
  placeholderStyle:{
    fontSize:13,
    color:"grey",
    fontStyle: "italic"
  },
  dateInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  dateInputText: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
    height: 40,
  },
  calendarIcon: {
    marginLeft: 10,
  },
  buttonContainer: {
    marginTop: 20,
  },
});

export default Form;
