import sqlite3
import uuid

def get_db_connection():
    conn = sqlite3.connect('resumes.db')
    conn.row_factory = sqlite3.Row
    return conn

def init_db():
    conn = get_db_connection()
    conn.execute('CREATE TABLE IF NOT EXISTS resumes (id TEXT PRIMARY KEY, content TEXT)')
    conn.close()

def store_resume(content):
    conn = get_db_connection()
    resume_id = str(uuid.uuid4())
    conn.execute('INSERT INTO resumes (id, content) VALUES (?, ?)', (resume_id, content))
    conn.commit()
    conn.close()
    return resume_id

def get_resume(resume_id):
    conn = get_db_connection()
    resume = conn.execute('SELECT content FROM resumes WHERE id = ?', (resume_id,)).fetchone()
    conn.close()
    return resume['content'] if resume else None

init_db()