"use client";
import styled, { css } from "styled-components";
import { BannerVariant, LetterStatus } from "../../types/bosdle";

export const PageTitle = styled.h1`
  flex: 1;
  font-size: 2rem;
  line-height: var(--header-height);
  text-align: center;
  margin-bottom: 2rem;

  @media (max-width: 25rem) {
    font-size: 1.25rem;
  }
`;

export const BosdleButton = styled.button`
  margin: 0;
  padding: 0;
  border: none;
  background: transparent;
  cursor: pointer;
  text-align: left;
  color: inherit;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
`;

export const HeaderWrapper = styled.header`
  display: flex;
  height: var(--header-height);
  border-bottom: 1px solid var(--color-gray-700);
  color: var(--color-gray-300);

  .side {
    width: var(--header-height);
    display: grid;
    place-content: center;
  }
`;

export const GameWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: var(--game-spacing);
  padding: var(--game-spacing) 32px;
  margin: 0 auto;
  min-width: 250px;
  max-width: min(500px, 58vh, 100%);
`;

export const GuessResults = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const GuessWrapper = styled.p`
  display: flex;
  gap: 4px;
  margin-bottom: 4px;

  &:first-of-type span:first-of-type {
    --radius: 4px 0px 0px 0px;
  }
  &:first-of-type span:last-of-type {
    --radius: 0px 4px 0px 0px;
  }
  &:last-of-type span:last-of-type {
    --radius: 0px 0px 4px 0px;
  }
  &:last-of-type span:first-of-type {
    --radius: 0px 0px 0px 4px;
  }
`;

const statusStyles = (status: LetterStatus) => {
  return {
    correct: css`
      background: var(--color-success);
      border-color: var(--color-success);
      color: white;
    `,
    incorrect: css`
      background: var(--color-gray-300);
      border-color: var(--color-gray-300);
      color: white;
    `,
    misplaced: css`
      background: var(--color-warning);
      border-color: var(--color-warning);
      color: white;
    `,
  }[status];
};

export const Cell = styled.span<{ status: LetterStatus }>`
  position: relative;
  width: 20%;
  display: grid;
  place-content: center;
  aspect-ratio: 1 / 1;
  border: 2px solid var(--color-gray-700);
  border-radius: var(--radius);
  font-size: 2rem;

  ${({ status }) => statusStyles(status)};
`;

export const GuessInputWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 8px;
  height: 6.75rem;
`;

export const GuessInputLabel = styled.label`
  font-size: 1.25rem;
`;

export const GuessInputInput = styled.input`
  display: block;
  width: 100%;
  font-size: 2rem;
  border: 2px solid var(--color-gray-300);
  border-radius: 4px;
  padding: 8px 16px;
  outline-offset: 4px;
`;

const bannerVariantStyles = (variant: BannerVariant) => {
  return {
    happy: css`
      background: var(--color-success);
      color: white;
    `,
    sad: css`
      background: var(--color-error);
      color: white;
    `,
  }[variant];
};

export const Banner = styled.div<{ variant: BannerVariant }>`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 32px;
  text-align: center;
  animation: slideUp 750ms cubic-bezier(0, 0.72, 0.24, 1.02);
  border-radius: 4px 4px 0px 0px;
  will-change: transform;

  ${({ variant }) => bannerVariantStyles(variant)};
`;
