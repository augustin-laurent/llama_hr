from transformers import AutoModelForCausalLM, AutoTokenizer

model_path = "../models/your_local_llm_model"
model = AutoModelForCausalLM.from_pretrained(model_path)
tokenizer = AutoTokenizer.from_pretrained(model_path)

def query_llm(context, query):
    prompt = f"Context: {context}\n\nQuestion: {query}\n\nAnswer:"
    inputs = tokenizer(prompt, return_tensors="pt")
    outputs = model.generate(**inputs, max_length=100)
    response = tokenizer.decode(outputs[0], skip_special_tokens=True)
    return response