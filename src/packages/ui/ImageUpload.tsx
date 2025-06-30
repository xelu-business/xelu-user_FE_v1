import React, { useState, useRef } from "react";
import styled from "@emotion/styled";


export const ImageUpload = () => {
  const [preview, setPreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === "string") {
          setPreview(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleDelete = (e: React.MouseEvent) => {
    e.stopPropagation();
    setPreview(null);
    // 파일 입력 초기화
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <ImageWrapper onClick={handleClick}>
      {preview ? (
        <PreviewContainer>
          <PreviewImage src={preview} alt="선택된 이미지" />
          <DeleteButton onClick={handleDelete}>
            <DeleteIcon />
          </DeleteButton>
        </PreviewContainer>
      ) : (
        <PlaceholderContent>
          <IconPlus />
          <UploadText>파일 선택</UploadText>
        </PlaceholderContent>
      )}
      <HiddenInput
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
      />
    </ImageWrapper>
  );
};

const ImageWrapper = styled.div`
  width: 200px;
  height: 200px;
  border: 2px dashed #dddddd;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  overflow: hidden;
  transition: all 0.2s ease-in-out;
  position: relative;

  &:hover {
    border-color: #4dabf7;
    background-color: rgba(77, 171, 247, 0.04);
  }
`;

const HiddenInput = styled.input`
  display: none;
`;

const PreviewContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const PreviewImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const DeleteButton = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.8);
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease;
  z-index: 2;

  &:hover {
    background-color: rgba(255, 255, 255, 1);
    transform: scale(1.1);
  }
`;

const DeleteIcon = styled.div`
  width: 12px;
  height: 12px;
  position: relative;

  &:before,
  &:after {
    content: "";
    position: absolute;
    height: 100%;
    width: 2px;
    background-color: #f03e3e;
    top: 0;
    left: 50%;
  }

  &:before {
    transform: translateX(-50%) rotate(45deg);
  }

  &:after {
    transform: translateX(-50%) rotate(-45deg);
  }
`;

const PlaceholderContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #868e96;
`;

const IconPlus = styled.div`
  width: 40px;
  height: 40px;
  position: relative;
  margin-bottom: 8px;

  &:before,
  &:after {
    content: "";
    position: absolute;
    background-color: #868e96;
  }

  &:before {
    width: 2px;
    height: 100%;
    left: 50%;
    transform: translateX(-50%);
  }

  &:after {
    height: 2px;
    width: 100%;
    top: 50%;
    transform: translateY(-50%);
  }
`;

const UploadText = styled.p`
  margin: 0;
  font-size: 14px;
  font-weight: 500;
`;
