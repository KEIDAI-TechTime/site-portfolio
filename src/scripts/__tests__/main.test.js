import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { isValidEmail, isNotEmpty, debounce, validateFormData } from '../main.js';

describe('ユーティリティ関数', () => {
  describe('isValidEmail', () => {
    it('有効なメールアドレスでtrueを返す', () => {
      expect(isValidEmail('test@example.com')).toBe(true);
      expect(isValidEmail('user.name@domain.co.jp')).toBe(true);
      expect(isValidEmail('user+tag@example.org')).toBe(true);
    });

    it('無効なメールアドレスでfalseを返す', () => {
      expect(isValidEmail('')).toBe(false);
      expect(isValidEmail('invalid')).toBe(false);
      expect(isValidEmail('no@domain')).toBe(false);
      expect(isValidEmail('@nodomain.com')).toBe(false);
      expect(isValidEmail('spaces in@email.com')).toBe(false);
    });
  });

  describe('isNotEmpty', () => {
    it('空でない文字列でtrueを返す', () => {
      expect(isNotEmpty('hello')).toBe(true);
      expect(isNotEmpty('  text  ')).toBe(true);
      expect(isNotEmpty('0')).toBe(true);
    });

    it('空の文字列でfalseを返す', () => {
      expect(isNotEmpty('')).toBe(false);
      expect(isNotEmpty('   ')).toBe(false);
      expect(isNotEmpty('\t\n')).toBe(false);
    });

    it('null/undefinedでfalseを返す', () => {
      expect(isNotEmpty(null)).toBe(false);
      expect(isNotEmpty(undefined)).toBe(false);
    });
  });

  describe('debounce', () => {
    beforeEach(() => {
      vi.useFakeTimers();
    });

    afterEach(() => {
      vi.useRealTimers();
    });

    it('指定時間後に関数を実行する', () => {
      const mockFn = vi.fn();
      const debouncedFn = debounce(mockFn, 100);

      debouncedFn();
      expect(mockFn).not.toHaveBeenCalled();

      vi.advanceTimersByTime(100);
      expect(mockFn).toHaveBeenCalledTimes(1);
    });

    it('連続呼び出しを1回にまとめる', () => {
      const mockFn = vi.fn();
      const debouncedFn = debounce(mockFn, 100);

      debouncedFn();
      debouncedFn();
      debouncedFn();

      vi.advanceTimersByTime(100);
      expect(mockFn).toHaveBeenCalledTimes(1);
    });

    it('引数を正しく渡す', () => {
      const mockFn = vi.fn();
      const debouncedFn = debounce(mockFn, 100);

      debouncedFn('arg1', 'arg2');
      vi.advanceTimersByTime(100);

      expect(mockFn).toHaveBeenCalledWith('arg1', 'arg2');
    });
  });
});

describe('フォームバリデーション', () => {
  describe('validateFormData', () => {
    it('有効なデータでisValid: trueを返す', () => {
      const validData = {
        name: '山田太郎',
        email: 'yamada@example.com',
        subject: 'お問い合わせ',
        message: 'テストメッセージです'
      };

      const result = validateFormData(validData);
      expect(result.isValid).toBe(true);
      expect(result.errors).toEqual({});
    });

    it('名前が空の場合エラーを返す', () => {
      const data = {
        name: '',
        email: 'test@example.com',
        subject: '件名',
        message: 'メッセージ'
      };

      const result = validateFormData(data);
      expect(result.isValid).toBe(false);
      expect(result.errors.name).toBe('お名前を入力してください');
    });

    it('メールアドレスが空の場合エラーを返す', () => {
      const data = {
        name: '名前',
        email: '',
        subject: '件名',
        message: 'メッセージ'
      };

      const result = validateFormData(data);
      expect(result.isValid).toBe(false);
      expect(result.errors.email).toBe('メールアドレスを入力してください');
    });

    it('無効なメールアドレスの場合エラーを返す', () => {
      const data = {
        name: '名前',
        email: 'invalid-email',
        subject: '件名',
        message: 'メッセージ'
      };

      const result = validateFormData(data);
      expect(result.isValid).toBe(false);
      expect(result.errors.email).toBe('正しいメールアドレスを入力してください');
    });

    it('件名が空の場合エラーを返す', () => {
      const data = {
        name: '名前',
        email: 'test@example.com',
        subject: '',
        message: 'メッセージ'
      };

      const result = validateFormData(data);
      expect(result.isValid).toBe(false);
      expect(result.errors.subject).toBe('件名を入力してください');
    });

    it('メッセージが空の場合エラーを返す', () => {
      const data = {
        name: '名前',
        email: 'test@example.com',
        subject: '件名',
        message: ''
      };

      const result = validateFormData(data);
      expect(result.isValid).toBe(false);
      expect(result.errors.message).toBe('メッセージを入力してください');
    });

    it('複数のエラーを同時に返す', () => {
      const data = {
        name: '',
        email: 'invalid',
        subject: '',
        message: ''
      };

      const result = validateFormData(data);
      expect(result.isValid).toBe(false);
      expect(Object.keys(result.errors)).toHaveLength(4);
    });
  });
});
