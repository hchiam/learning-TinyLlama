# pip3 install -r requirements.txt

from transformers import AutoTokenizer, AutoModelForCausalLM

tokenizer = AutoTokenizer.from_pretrained('TinyLlama/TinyLlama-1.1B-Chat-v1.0')
model = AutoModelForCausalLM.from_pretrained('TinyLlama/TinyLlama-1.1B-Chat-v1.0')

input_text = '1+1='
input_ids = tokenizer.encode(input_text, return_tensors='pt')
output_ids = model.generate(input_ids=input_ids, max_length=50, temperature=0.7, num_return_sequences=1)

generated_text = tokenizer.decode(output_ids[0], skip_special_tokens=True)
print(generated_text)
