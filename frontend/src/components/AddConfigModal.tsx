'use client';

import React, { useState } from 'react';

// 跳转类型枚举
export enum JumpType {
  LINK = 'link',
  TAIL = 'tail',
}

// 配置状态枚举
export enum ConfigState {
  BEFORE_TRANSFORM = 'before', // 改造前
  AFTER_TRANSFORM_TAIL = 'after_tail', // 改造后-选择跳转尾量
  AFTER_TRANSFORM_LINK = 'after_link', // 改造后-选择跳转链接
}

interface AddConfigModalProps {
  isOpen: boolean;
  onClose: () => void;
  state: ConfigState;
}

const AddConfigModal: React.FC<AddConfigModalProps> = ({ isOpen, onClose, state }) => {
  const [channel, setChannel] = useState<string>('');
  const [jumpType, setJumpType] = useState<JumpType>(
    state === ConfigState.AFTER_TRANSFORM_TAIL ? JumpType.TAIL : JumpType.LINK
  );
  const [jumpLink, setJumpLink] = useState<string>('');

  if (!isOpen) return null;

  // 是否显示跳转类型选择（改造后状态）
  const showJumpTypeSelection = state !== ConfigState.BEFORE_TRANSFORM;

  // 是否显示跳转链接输入框
  const showJumpLinkInput =
    state === ConfigState.BEFORE_TRANSFORM || // 改造前总是显示
    (state === ConfigState.AFTER_TRANSFORM_LINK && jumpType === JumpType.LINK); // 改造后且选择了跳转链接

  const handleConfirm = () => {
    // 这里可以添加提交逻辑
    console.log('提交配置:', { channel, jumpType, jumpLink });
    onClose();
  };

  const handleCancel = () => {
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="w-[440px] bg-white rounded-lg shadow-lg">
        {/* 标题栏 */}
        <div className="h-[50px] bg-[#FAFAFA] border-b border-[#E5E7EB] rounded-t-lg flex items-center justify-center relative">
          <h2 className="text-[16px] font-bold text-[#1F2937]">新增配置</h2>
          <button
            onClick={onClose}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-[#6B7280] text-[24px] leading-none hover:text-[#374151] transition-colors"
          >
            ×
          </button>
        </div>

        {/* 表单内容 */}
        <div className="p-6 space-y-4">
          {/* 投放渠道 */}
          <div>
            <label className="block text-[14px] text-[#374151] mb-2">
              <span className="text-red-500">*</span> 投放渠道
            </label>
            <div className="relative">
              <select
                value={channel}
                onChange={(e) => setChannel(e.target.value)}
                className="w-full h-[36px] px-3 bg-white border border-[#D1D5DB] rounded-md text-[14px] appearance-none cursor-pointer focus:outline-none focus:border-[#3B82F6] transition-colors"
              >
                <option value="" className="text-[#9CA3AF]">
                  请选择投放渠道
                </option>
                <option value="channel1">渠道1</option>
                <option value="channel2">渠道2</option>
                <option value="channel3">渠道3</option>
              </select>
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6B7280] text-[12px] pointer-events-none">
                ▼
              </span>
            </div>
          </div>

          {/* 改造前：跳转链接输入框 */}
          {state === ConfigState.BEFORE_TRANSFORM && (
            <div>
              <label className="block text-[14px] text-[#374151] mb-2">
                <span className="text-red-500">*</span> 跳转链接
              </label>
              <input
                type="text"
                value={jumpLink}
                onChange={(e) => setJumpLink(e.target.value)}
                placeholder="请输入跳转链接"
                className="w-full h-[36px] px-3 bg-white border border-[#D1D5DB] rounded-md text-[14px] placeholder-[#9CA3AF] focus:outline-none focus:border-[#3B82F6] transition-colors"
              />
            </div>
          )}

          {/* 改造后：跳转类型选择 */}
          {showJumpTypeSelection && (
            <div>
              <label className="block text-[14px] text-[#374151] mb-2">
                <span className="text-red-500">*</span> 跳转类型
              </label>
              <div className="space-y-3">
                {/* 跳转链接 */}
                <label className="flex items-center cursor-pointer group">
                  <div className="relative">
                    <input
                      type="radio"
                      name="jumpType"
                      value={JumpType.LINK}
                      checked={jumpType === JumpType.LINK}
                      onChange={(e) => setJumpType(e.target.value as JumpType)}
                      className="sr-only"
                    />
                    <div
                      className={`w-4 h-4 rounded-full border transition-all ${
                        jumpType === JumpType.LINK
                          ? 'border-[#3B82F6]'
                          : 'border-[#D1D5DB] group-hover:border-[#9CA3AF]'
                      }`}
                    >
                      {jumpType === JumpType.LINK && (
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#3B82F6]"></div>
                      )}
                    </div>
                  </div>
                  <span
                    className={`ml-2 text-[14px] ${
                      jumpType === JumpType.LINK ? 'text-[#1F2937]' : 'text-[#6B7280]'
                    }`}
                  >
                    跳转链接
                  </span>
                </label>

                {/* 跳转尾量 */}
                <label className="flex items-center cursor-pointer group">
                  <div className="relative">
                    <input
                      type="radio"
                      name="jumpType"
                      value={JumpType.TAIL}
                      checked={jumpType === JumpType.TAIL}
                      onChange={(e) => setJumpType(e.target.value as JumpType)}
                      className="sr-only"
                    />
                    <div
                      className={`w-4 h-4 rounded-full border transition-all ${
                        jumpType === JumpType.TAIL
                          ? 'border-[#3B82F6]'
                          : 'border-[#D1D5DB] group-hover:border-[#9CA3AF]'
                      }`}
                    >
                      {jumpType === JumpType.TAIL && (
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#3B82F6]"></div>
                      )}
                    </div>
                  </div>
                  <span
                    className={`ml-2 text-[14px] ${
                      jumpType === JumpType.TAIL ? 'text-[#1F2937]' : 'text-[#6B7280]'
                    }`}
                  >
                    跳转尾量
                  </span>
                </label>
              </div>

              {/* 改造后-选择跳转链接时显示输入框 */}
              {jumpType === JumpType.LINK && (
                <div className="mt-3">
                  <input
                    type="text"
                    value={jumpLink}
                    onChange={(e) => setJumpLink(e.target.value)}
                    placeholder="请输入跳转链接"
                    className="w-full h-[36px] px-3 bg-white border border-[#D1D5DB] rounded-md text-[14px] placeholder-[#9CA3AF] focus:outline-none focus:border-[#3B82F6] transition-colors"
                  />
                </div>
              )}
            </div>
          )}
        </div>

        {/* 底部按钮 */}
        <div className="px-6 pb-6 flex justify-end space-x-3">
          <button
            onClick={handleCancel}
            className="w-[70px] h-[32px] bg-white border border-[#D1D5DB] rounded-md text-[14px] text-[#374151] hover:bg-[#F9FAFB] transition-colors"
          >
            取消
          </button>
          <button
            onClick={handleConfirm}
            className="w-[70px] h-[32px] bg-[#3B82F6] rounded-md text-[14px] text-white hover:bg-[#2563EB] transition-colors"
          >
            确认
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddConfigModal;
