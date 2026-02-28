'use client';

import React, { useState } from 'react';
import AddConfigModal, { ConfigState } from '@/components/AddConfigModal';

export default function ConfigModalDemo() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentState, setCurrentState] = useState<ConfigState>(ConfigState.BEFORE_TRANSFORM);

  const openModal = (state: ConfigState) => {
    setCurrentState(state);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-4xl mx-auto">
        {/* 页面标题 */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-3">
            新增配置弹窗演示
          </h1>
          <p className="text-gray-600 text-lg">
            点击下方按钮查看三种不同状态的弹窗
          </p>
        </div>

        {/* 状态卡片 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* 状态1：改造前 */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="mb-4">
              <div className="inline-block px-3 py-1 bg-gray-100 rounded-full text-sm font-medium text-gray-700 mb-3">
                状态 1
              </div>
              <h2 className="text-xl font-bold text-gray-800 mb-2">改造前</h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                初始状态，用于演示对比。包含投放渠道选择和跳转链接输入框。
              </p>
            </div>
            <div className="mb-4 p-3 bg-gray-50 rounded-md">
              <p className="text-xs text-gray-500 mb-2">字段列表：</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li className="flex items-start">
                  <span className="text-red-500 mr-1">*</span>
                  <span>投放渠道（下拉选择）</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-1">*</span>
                  <span>跳转链接（文本输入）</span>
                </li>
              </ul>
            </div>
            <button
              onClick={() => openModal(ConfigState.BEFORE_TRANSFORM)}
              className="w-full py-2.5 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-medium"
            >
              查看弹窗
            </button>
          </div>

          {/* 状态2：改造后-选择跳转尾量 */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="mb-4">
              <div className="inline-block px-3 py-1 bg-green-100 rounded-full text-sm font-medium text-green-700 mb-3">
                状态 2
              </div>
              <h2 className="text-xl font-bold text-gray-800 mb-2">
                改造后-跳转尾量
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                改造后的状态，用户选择"跳转尾量"选项，不显示链接输入框。
              </p>
            </div>
            <div className="mb-4 p-3 bg-gray-50 rounded-md">
              <p className="text-xs text-gray-500 mb-2">字段列表：</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li className="flex items-start">
                  <span className="text-red-500 mr-1">*</span>
                  <span>投放渠道（下拉选择）</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-1">*</span>
                  <span>跳转类型（单选组）</span>
                </li>
                <li className="ml-4 text-green-600">
                  ● 跳转尾量（已选中）
                </li>
              </ul>
            </div>
            <button
              onClick={() => openModal(ConfigState.AFTER_TRANSFORM_TAIL)}
              className="w-full py-2.5 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors font-medium"
            >
              查看弹窗
            </button>
          </div>

          {/* 状态3：改造后-选择跳转链接 */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="mb-4">
              <div className="inline-block px-3 py-1 bg-purple-100 rounded-full text-sm font-medium text-purple-700 mb-3">
                状态 3
              </div>
              <h2 className="text-xl font-bold text-gray-800 mb-2">
                改造后-跳转链接
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                改造后的状态，用户选择"跳转链接"选项，动态显示链接输入框。
              </p>
            </div>
            <div className="mb-4 p-3 bg-gray-50 rounded-md">
              <p className="text-xs text-gray-500 mb-2">字段列表：</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li className="flex items-start">
                  <span className="text-red-500 mr-1">*</span>
                  <span>投放渠道（下拉选择）</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-1">*</span>
                  <span>跳转类型（单选组）</span>
                </li>
                <li className="ml-4 text-purple-600">
                  ● 跳转链接（已选中）
                </li>
                <li className="ml-4 text-gray-600">
                  跳转链接输入框（动态显示）
                </li>
              </ul>
            </div>
            <button
              onClick={() => openModal(ConfigState.AFTER_TRANSFORM_LINK)}
              className="w-full py-2.5 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors font-medium"
            >
              查看弹窗
            </button>
          </div>
        </div>

        {/* 设计说明 */}
        <div className="mt-12 bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">设计说明</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                弹窗规格
              </h4>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• 宽度：440px</li>
                <li>• 背景：白色 (#FFFFFF)</li>
                <li>• 圆角：8px</li>
                <li>• 标题栏高度：50px</li>
                <li>• 标题栏背景：#FAFAFA</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                表单样式
              </h4>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• 输入框高度：36px</li>
                <li>• 边框颜色：#D1D5DB</li>
                <li>• 圆角：6px</li>
                <li>• 标签字体：14px</li>
                <li>• 必填项标记：红色星号</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                单选按钮
              </h4>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• 圆形，直径：16px</li>
                <li>• 未选中：灰色边框</li>
                <li>• 选中：蓝色边框 + 蓝色圆点</li>
                <li>• 内部圆点直径：8px</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                按钮样式
              </h4>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• 按钮高度：32px</li>
                <li>• 按钮宽度：70px</li>
                <li>• 取消按钮：白色 + 灰色边框</li>
                <li>• 确认按钮：蓝色背景 (#3B82F6)</li>
                <li>• 按钮间距：12px</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <h4 className="font-semibold text-blue-800 mb-2">交互逻辑</h4>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>• 选择"跳转链接"时，下方动态显示链接输入框</li>
              <li>• 选择"跳转尾量"时，隐藏链接输入框</li>
              <li>• 点击关闭按钮或取消按钮关闭弹窗</li>
              <li>• 点击确认按钮提交表单（控制台输出数据）</li>
            </ul>
          </div>
        </div>

        {/* 技术栈说明 */}
        <div className="mt-6 bg-white rounded-lg shadow-lg p-6">
          <h4 className="font-semibold text-gray-800 mb-3">技术栈</h4>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
              React 19
            </span>
            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
              TypeScript
            </span>
            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
              Tailwind CSS 4
            </span>
            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
              Next.js 16
            </span>
          </div>
        </div>
      </div>

      {/* 弹窗组件 */}
      <AddConfigModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        state={currentState}
      />
    </div>
  );
}
