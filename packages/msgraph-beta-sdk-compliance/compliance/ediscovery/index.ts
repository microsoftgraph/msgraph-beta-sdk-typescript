/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createEdiscoveryrootFromDiscriminatorValue, serializeEdiscoveryroot, type Ediscoveryroot } from '@microsoft/msgraph-beta-sdk/models/ediscovery/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { CasesRequestBuilderNavigationMetadata, CasesRequestBuilderRequestsMetadata, CasesRequestBuilderUriTemplate, type CasesRequestBuilder } from './cases/';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the ediscovery property of the microsoft.graph.compliance entity.
 */
export interface EdiscoveryRequestBuilder extends BaseRequestBuilder<EdiscoveryRequestBuilder> {
    /**
     * Provides operations to manage the cases property of the microsoft.graph.ediscovery.ediscoveryroot entity.
     * @deprecated The ediscovery Apis are deprecated under /compliance and will stop returning data from February 01, 2023. Please use the new ediscovery Apis under /security. as of 2022-12/ediscoveryNamespace
     */
    get cases(): CasesRequestBuilder;
    /**
     * Delete navigation property ediscovery for compliance
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @deprecated The ediscovery Apis are deprecated under /compliance and will stop returning data from February 01, 2023. Please use the new ediscovery Apis under /security. as of 2022-12/ediscoveryNamespace
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Get ediscovery from compliance
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of Ediscoveryroot
     * @deprecated The ediscovery Apis are deprecated under /compliance and will stop returning data from February 01, 2023. Please use the new ediscovery Apis under /security. as of 2022-12/ediscoveryNamespace
     */
     get(requestConfiguration?: RequestConfiguration<EdiscoveryRequestBuilderGetQueryParameters> | undefined) : Promise<Ediscoveryroot | undefined>;
    /**
     * Update the navigation property ediscovery in compliance
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of Ediscoveryroot
     * @deprecated The ediscovery Apis are deprecated under /compliance and will stop returning data from February 01, 2023. Please use the new ediscovery Apis under /security. as of 2022-12/ediscoveryNamespace
     */
     patch(body: Ediscoveryroot, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<Ediscoveryroot | undefined>;
    /**
     * Delete navigation property ediscovery for compliance
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     * @deprecated The ediscovery Apis are deprecated under /compliance and will stop returning data from February 01, 2023. Please use the new ediscovery Apis under /security. as of 2022-12/ediscoveryNamespace
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * Get ediscovery from compliance
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     * @deprecated The ediscovery Apis are deprecated under /compliance and will stop returning data from February 01, 2023. Please use the new ediscovery Apis under /security. as of 2022-12/ediscoveryNamespace
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<EdiscoveryRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the navigation property ediscovery in compliance
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     * @deprecated The ediscovery Apis are deprecated under /compliance and will stop returning data from February 01, 2023. Please use the new ediscovery Apis under /security. as of 2022-12/ediscoveryNamespace
     */
     toPatchRequestInformation(body: Ediscoveryroot, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Get ediscovery from compliance
 */
export interface EdiscoveryRequestBuilderGetQueryParameters {
    /**
     * Expand related entities
     */
    expand?: string[];
    /**
     * Select properties to be returned
     */
    select?: string[];
}
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const EdiscoveryRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const EdiscoveryRequestBuilderNavigationMetadata: Record<Exclude<keyof EdiscoveryRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    cases: {
        uriTemplate: CasesRequestBuilderUriTemplate,
        requestsMetadata: CasesRequestBuilderRequestsMetadata,
        navigationMetadata: CasesRequestBuilderNavigationMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const EdiscoveryRequestBuilderRequestsMetadata: RequestsMetadata = {
    delete: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContentAsync",
    },
    get: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createEdiscoveryrootFromDiscriminatorValue,
        queryParametersMapper: EdiscoveryRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createEdiscoveryrootFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeEdiscoveryroot,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const EdiscoveryRequestBuilderUriTemplate = "{+baseurl}/compliance/ediscovery{?%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */