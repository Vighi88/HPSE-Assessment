package com.hpse.assessment.server.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hpse.assessment.server.model.Requests;

public interface RequestRepository extends JpaRepository<Requests, String> {


}
