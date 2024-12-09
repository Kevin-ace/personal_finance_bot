from flask import Blueprint, render_template, request, jsonify
from .models import UserFinance, Task
from . import db

main = Blueprint('main', __name__)

@main.route('/')
def index():
    return render_template('index.html')

@main.route('/add-finance', methods=['POST'])
def add_finance():
    data = request.json
    user = UserFinance(monthly_income=data['income'])
    db.session.add(user)
    db.session.commit()
    return jsonify({'message': 'Finance data added!', 'user_id': user.id})

@main.route('/add-task', methods=['POST'])
def add_task():
    data = request.json
    task = Task(name=data['name'], cost=data['cost'], user_id=data['user_id'])
    db.session.add(task)
    db.session.commit()
    return jsonify({'message': 'Task added!'})

@main.route('/generate-advice/<int:user_id>')
def generate_advice(user_id):
    user = UserFinance.query.get(user_id)
    tasks = Task.query.filter_by(user_id=user_id).all()
    advice = []

    remaining_income = user.monthly_income
    for task in tasks:
        if task.cost <= remaining_income:
            advice.append(f"Allocate {task.cost} for {task.name}")
            remaining_income -= task.cost
        else:
            advice.append(f"Insufficient funds for {task.name}")

    advice.append(f"Remaining income: {remaining_income}")
    return jsonify({'advice': advice})
